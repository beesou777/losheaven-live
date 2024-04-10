import { defineStore } from 'pinia';

const axios = useApi();
export const useOrderStore = defineStore('order', {
  state: () => ({
    order: null,
    isLoading: false,
    singleOrder: null,
    customerDetails: null,
    orderFeature: null,
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
        this.orderFeature = {
          total_order: response.data?.total_order,
          cancelled_order: response.data?.cancelled_order,
          delivered_order: response.data?.delivered_order,
          pending_order: response.data?.pending_order,
        };
        return (this.order = response.data.orders);
      }
    },
    async updateOrderStatus(id: number, data: any) {
      try {
        const response = await axios.patch(
          `/order/update-order-status/${id}`,
          {
            order_status: data.order_status,
            payment_status: data.payment_status,
          },
          {
            headers: {
              Authorization: `Bearer ${useCookie('access').value}`,
            },
          },
        );
        if (response.status === 200) {
          this.getOrders();
          return response;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
