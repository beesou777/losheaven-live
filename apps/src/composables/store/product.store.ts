import { defineStore } from 'pinia';

const axios = useApi();
export const useProductStore = defineStore('product', {
  state: () => ({
    product: null,
    isLoading: false,
    singleProduct: null,
  }),
  actions: {
    async createProduct(data: any) {
      try {
        const cookies = useCookie('access').value;
        await axios.post(
          'product/create-product',
          {
            name: data.product_name,
            description: data.product_desc,
            discounted_price: data.discount,
            price: data.actual_price,
            stock: data.quantity,
            manufacturer: data.manufacturer,
            category: data.product_category,
            images: data.product_image,
            materials: data.materials,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies}`,
            },
          },
        );
      } catch (error) {
        console.log(error);
      }
    },
    async getProducts() {
      try {
        this.isLoading = true;
        const response = await axios.get('/product/get-product');
        this.product = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    async deleteProduct(id: number) {
      try {
        this.isLoading = true;
        await axios.delete(`/product/delete-product/${id}`, {
          headers: {
            Authorization: `Bearer ${useCookie('access').value}`,
          },
        });
        this.getProducts();
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    async updateProduct(data: any, id: number) {
      try {
        const cookies = useCookie('access').value;
        await axios.put(
          `product/update-product/${id}`,
          {
            name: data.product_name,
            description: data.product_desc,
            discounted_price: data.discount,
            price: data.actual_price,
            stock: data.quantity,
            manufacturer: data.manufacturer,
            category: data.product_category,
            images: data.product_image,
            materials: data.materials,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies}`,
            },
          },
        );
      } catch (error) {
        console.log(error);
      }
    },
    async getSingleProduct(id: number) {
      try {
        this.isLoading = true;
        const response = await axios.get(`/product/get-product/${id}`);
        this.singleProduct = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
