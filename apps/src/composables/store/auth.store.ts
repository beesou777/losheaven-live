import { defineStore } from 'pinia';

const axios = useApi();
export const useAuthStore = defineStore('auth', {
  state: () => ({
    uuid: null,
    SingleCustomerData: null,
    isLogined: false,
    accessToken: null,
  }),
  actions: {
    async Login(data: any) {
      try {
        const cookie = useCookie('access');
        const response = await axios.post('/user/login', {
          email: data.email,
          password: data.password,
        });
        if (cookie && (cookie.value === undefined || cookie.value === null)) {
          cookie.value = response.data.access;
        }
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async CustomerLogin(data: any) {
      try {
        const cookie = useCookie('customer-access');
        const response = await axios.post('/customer/login', {
          email: data.email,
          password: data.password,
        });
        if (cookie && (cookie.value === undefined || cookie.value === null)) {
          cookie.value = response.data.access;
        }
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async CustomerRegister(data: any) {
      try {
        const response = await axios.post('/customer/register', {
          email: data.email,
          password: data.password,
          phone: data.phone,
          address: data.address,
          city: data.city,
          name: data.name,
        });
        if (response.status === 200) {
          const customer = {
            email: data.email,
            password: data.password,
          };
          const res = this.CustomerLogin(customer);
          return res;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getCustomerData() {},
    async getSingleCustomerData() {
      try {
        const response = await axios.get(`/customer/getCustomerDetails/`, {
          headers: {
            Authorization: `Bearer ${useCookie('customer-access').value}`,
          },
        });
        this.SingleCustomerData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateCustomerData(data: any) {
      const response = await axios.put(
        `/customer/getCustomerDetails`,
        {
          address: data.address,
          city: data.city,
          name: data.name,
          phone: data.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${useCookie('customer-access').value}`,
          },
        },
      );
      this.getSingleCustomerData();
    },

    Logout() {
      try {
        const access = useCookie('access');
        access.value = null;
        const refresh = useCookie('refresh');
        refresh.value = null;
      } catch (error: any) {
        if (error) {
          throw new Error('Error while logging out user');
        }
      }
    },
  },
});
