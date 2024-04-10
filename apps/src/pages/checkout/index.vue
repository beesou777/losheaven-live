<template>
  <div class="font-[sans-serif] bg-gray-50 max-w-[1400px] mx-auto">
    <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
      <div class="bg-[#f6f6f6] lg:h-screen lg:sticky lg:top-0">
        <div class="relative h-full">
          <div class="p-8 lg:overflow-auto lg:h-[calc(100vh-60px)]">
            <h2 class="text-2xl font-bold">Order Summary</h2>
            <div class="space-y-6 mt-10">
              <div class="grid sm:grid-cols-2 items-start" v-for="(item, index) in cartData" :key="index">
                <div class="w-full max-w-[150px] md:max-w-[126px]">
                  <img :src="item?.product?.images[0]" alt="perfume bottle image" class="w-full" />
                </div>
                <div class="text-left w-full">
                  <h3 class="text-base">{{ item?.product?.name.split(' ').slice(0, 10).join(' ') + '...' }}</h3>
                  <ul class="text-xs space-y-3 mt-4">
                    <li class="flex flex-wrap gap-4">
                      Quantity <span class="ml-auto">{{ item.quantity }}</span>
                    </li>
                    <li class="flex flex-wrap gap-4">
                      Total Price <span class="ml-auto">NRS {{ item?.product?.price }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="sticky left-0 top-0 bg-[#444] w-full p-4">
            <h4 class="flex flex-wrap gap-4 text-base text-white">Total <span class="ml-auto">$84.00</span></h4>
          </div>
        </div>
      </div>
      <div class="xl:col-span-2 h-max rounded-md p-8 sticky top-0">
        <h2 class="text-2xl font-bold text-[#333]">Complete your order</h2>
        <form class="mt-10">
          <div>
            <h3 class="text-lg font-bold text-[#333] mb-6">Personal Details</h3>
            <div class="grid sm:grid-cols-2 gap-6">
              <div class="relative flex items-center">
                <input
                  type="text"
                  placeholder="Name"
                  v-model="name"
                  class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  class="w-[18px] h-[18px] absolute right-4"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div class="relative flex items-center">
                <input
                  type="email"
                  placeholder="email"
                  v-model="email"
                  class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  class="w-[18px] h-[18px] absolute right-4"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path
                      fill="none"
                      stroke-miterlimit="10"
                      stroke-width="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="relative flex items-center">
                <input
                  type="number"
                  placeholder="Phone No."
                  v-model="phone"
                  class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                />
                <svg fill="#bbb" class="w-[18px] h-[18px] absolute right-4" viewBox="0 0 64 64">
                  <path
                    d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-bold text-[#333] mb-6">Shipping Address</h3>
            <div class="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Address Line"
                v-model="address"
                class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />
              <input
                type="text"
                placeholder="City"
                v-model="city"
                class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />
            </div>
            <div class="mt-3">
              <h3 class="text-lg font-bold text-[#333] mb-6">Method of Payment</h3>
              <div class="flex gap-2">
                <input type="radio" v-model="method_of_payment" value="COD" name="payment" id="cod" checked />
                <label for="cod">Cash on Delivery</label>
              </div>
            </div>
            <div class="flex gap-6 max-sm:flex-col mt-10">
              <button
                @click="checkout"
                type="button"
                class="rounded-md px-6 py-3 w-full text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'nuxt/app';
import { computed, onMounted, ref } from 'vue';
import { useAuthStore } from '../../composables/store/auth.store';
import { useOrderStore } from '../../composables/store/order.store';

const cartStore = useCartStore();
const authStore = useAuthStore();
const orderStore = useOrderStore();
const router = useRouter();
const email = ref('');
const name = ref('');
const address = ref('');
const phone = ref('');
const city = ref('');
const method_of_payment = ref('');
const emit = defineEmits(['show-cart']);

onMounted(async () => {
  await cartStore.getCart();
  if (authStore.SingleCustomerData) {
    email.value = authStore.SingleCustomerData.email;
    name.value = authStore.SingleCustomerData.name;
    address.value = authStore.SingleCustomerData.address;
    phone.value = authStore.SingleCustomerData.phone;
    city.value = authStore.SingleCustomerData.city;
  }
});

const cartData = computed(() => {
  return cartStore?.cartData;
});

const deleteCartData = async (item: number) => {
  if (item) {
    await cartStore.deleteCart(item);
    cartData.value.splice(item, 1);
  }
};

const increment = async (quantity: number, id: number) => {
  quantity++;
  const response = await cartStore.updateCart(quantity, id);
  if (response.status === 200) {
    await cartStore.getCart();
  }
};

const decrement = async (quantity: number, id: number) => {
  if (quantity > 1) {
    quantity--;
    const response = await cartStore.updateCart(quantity, id);
    if (response.status === 200) {
      await cartStore.getCart();
    }
  }
};

const total = computed(() => {
  if (!cartData.value || cartData.value.length === 0) {
    return 0; // Return 0 if cartData is empty or undefined
  }

  return cartData.value.reduce((acc, item) => {
    return acc + item.product.price * item.quantity; // Calculate total amount
  }, 0);
});

const checkout = async () => {
  const data = {
    email: email.value,
    name: name.value,
    address: address.value,
    phone: phone.value,
    city: city.value,
    mop: method_of_payment.value,
    product: cartData.value,
  };
  const response = await orderStore.createCustomerOrder(data);
  if (response.status === 200) {
    const response = await cartStore.deleteAllCart();
    if (response.status === 200) {
      cartStore.cartData = null;
      router.push('/');
    }
  }
};
</script>
