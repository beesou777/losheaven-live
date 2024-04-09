import { defineStore } from 'pinia';

const axios = useApi();
export const useOrderStore = defineStore('order', {
  state: () => ({
    order: null,
    isLoading: false,
    singleOrder: null,
    customerDetails: null,
  }),
  actions: {
    async createOrder(data: any) {
      try {
        const response = await axios.post(
          'order/create-order',
          {
            shipping_details: {
              name: data.name,
              email: data.email,
              phone: data.phone,
              address: data.address,
              city: data.city,
              mop: data.mop,
            },
            orderItems: data.product,
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
      }
    },
    async createCustomerOrder(data: any) {
      try {
        const response = await axios.post(
          'order/create-customer-order',
          {
            shipping_details: {
              name: data.name,
              email: data.email,
              phone: data.phone,
              address: data.address,
              city: data.city,
              mop: data.mop,
            },
            orderItems: data.product,
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
      }
    },
    async getOrders() {
      const response = await axios.get('/order/get-orders', {
        headers: {
          Authorization: `Bearer ${useCookie('access').value}`,
        },
      });
      if (response.status == 200) {
        return (this.order = response.data.orders);
      }
    },
  },
});
