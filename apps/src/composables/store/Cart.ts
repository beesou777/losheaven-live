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
            productId: data.product,
            size: data.size,
            color: data.color,
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
        this.cartData = response.data[0];
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
    async redeemCoupon(data: any) {
      try {
        const response = await axios.post(
          `/coupon/redeem-coupon?coupon_name=${data.coupon_name}&cart_id=${data.cart_id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${useCookie('customer-cookie').value}`,
            },
          },
        );
        this.getCart();
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async removeCounpon(data: any) {
      try {
        const response = await axios.post(
          `/coupon/remove-coupon-code?coupon_name=${data.coupon_name}&cart_id=${data.cart_id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${useCookie('customer-access').value}`,
            },
          },
        );
        this.getCart();
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
