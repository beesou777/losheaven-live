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
            redeem_code_price: data.redeem_code_price,
            orderTotalPrice: data.orderTotalPrice,
            discount_amount: data.discount_amount,
            usedCoupon: data.usedCoupon,
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
    async contactUs(data: any) {
      try {
        const response = await axios.post('/contact/contact-us', {
          email: data.email,
          subject: data.subject,
          html: data.message,
        });
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
