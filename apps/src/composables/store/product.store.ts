import { defineStore } from 'pinia';

const axios = useApi();
export const useProductStore = defineStore('product', {
  state: () => ({
    product: null,
    isLoading: false,
    singleProduct: null,
  }),
  actions: {
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
