import { defineStore } from 'pinia';

const axios = useApi();
export const useCartStore = defineStore('cart', {
  state: () => ({
    cartData: null,
    isLoading: false,
    showCart: false,
  }),
  actions: {
    async addToCart(data: any) {
      try {
        this.isLoading = true;
        const response = await axios.post(
          'cart/create-cart',
          {
            quantity: data.quantity,
            product: data.product,
            size: data.size,
          },
          {
            headers: {
              Authorization: `Bearer ${useCookie('customer-access').value}`,
            },
          },
        );
        return response;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    async getCart() {
      try {
        this.isLoading = true;
        const response = await axios.get('cart/get-cart', {
          headers: {
            Authorization: `Bearer ${useCookie('customer-access').value}`,
          },
        });
        this.cartData = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    async deleteCart(id: number) {
      try {
        this.isLoading = true;
        await axios.delete(`cart/delete-cart/${id}`, {
          headers: {
            Authorization: `Bearer ${useCookie('customer-access').value}`,
          },
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    async updateCart(data: any, id: number) {
      try {
        this.isLoading = true;
        const cookies = useCookie('customer-access').value;
        const response = await axios.patch(
          `cart/update-cart/${id}`,
          {
            quantity: data,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies}`,
            },
          },
        );
        return response;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    async deleteAllCart() {
      try {
        this.isLoading = true;
        const response = await axios.delete('cart/delete-all-cart', {
          headers: {
            Authorization: `Bearer ${useCookie('customer-access').value}`,
          },
        });
        return response;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
