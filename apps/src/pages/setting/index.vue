<template>
  <div class="w-full flex justify-center py-1 bg-white">
    <div class="p-2 md:p-4">
      <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
        <h2 class="pl-6 text-2xl font-bold sm:text-xl">Hello {{ authStore.SingleCustomerData?.name }}</h2>

        <div class="grid max-w-2xl mx-auto mt-8">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up to your account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div class="flex items-center gap-[10px]">
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input
                    type="text"
                    name="name"
                    v-model="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="losheaven"
                    required=""
                  />
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Address</label
                  >
                  <input
                    type="text"
                    name="address"
                    v-model="address"
                    id="address"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="address"
                    required=""
                  />
                </div>
              </div>
              <div class="flex items-center gap-[10px]">
                <div>
                  <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">phone</label>
                  <input
                    type="number"
                    v-model="phone"
                    name="phone"
                    id="phone"
                    placeholder="your number"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                  <input
                    type="text"
                    v-model="city"
                    name="city"
                    id="city"
                    placeholder="your city"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
              </div>
              <div class="flex">
                <div class="w-full">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Your email</label
                  >
                  <input
                    type="email"
                    name="email"
                    v-model="email"
                    disabled
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    required=""
                  />
                </div>
              </div>
              <button
                type="submit"
                @click="Login"
                class="w-full text-gray-900 text-[18px] bg-amber-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-yellow-600 dark:focus:ring-primary-800"
              >
                Update details
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'nuxt/app';
import { ref, onMounted, watchEffect } from 'vue';
import { useAuthStore } from '../../composables/store/auth.store';

const router = useRouter();
const authStore = useAuthStore();
// page title
useHead({
  title: 'user page',
  meta: [{ name: 'description', content: 'Login page' }],
});

// variables
const email = ref<string>('');
const password = ref<string>('');
const name = ref<string>('');
const address = ref<string>('');
const phone = ref<string>('');
const city = ref<string>('');

onMounted(async () => {
  if (authStore.SingleCustomerData) {
    email.value = authStore.SingleCustomerData.email;
    name.value = authStore.SingleCustomerData.name;
    address.value = authStore.SingleCustomerData.address;
    phone.value = authStore.SingleCustomerData.phone;
    city.value = authStore.SingleCustomerData.city;
  } else {
    authStore.getSingleCustomerData();
  }
});

const Login = async (event) => {
  event.preventDefault();
  const data = {
    name: name.value,
    address: address.value,
    phone: phone.value,
    city: city.value,
  };
  await authStore.updateCustomerData(data);
};

watchEffect(() => {
  const cookie = useCookie('customer-access').value;
  if (!cookie) {
    authStore.isLogined = true;
  }
});
</script>
