<template>
  <div class="font-[sans-serif] max-w-[1400px] mx-auto">
    <nav class="flex pt-10 px-[30px]" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center">
          <NuxtLink
            to=""
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              class="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
              />
            </svg>
            Home
          </NuxtLink>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <NuxtLink
              to="/product"
              class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >Product</NuxtLink
            >
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg
              class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Checkout</span>
          </div>
        </li>
      </ol>
    </nav>
    <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
      <div class="">
        <div class="relative h-full">
          <div class="p-8 lg:overflow-auto lg:h-[calc(100vh-110px)]">
            <h2 class="text-2xl font-bold">Order Summary</h2>
            <div class="space-y-6 mt-10">
              <div class="grid sm:grid-cols-3 items-start" v-for="(item, index) in cartData" :key="index">
                <div class="w-full max-w-[150px] col-span-1 md:max-w-[126px]">
                  <img :src="item?.product?.images[0]" alt="perfume bottle image" class="w-full" />
                </div>
                <div class="text-left w-full col-span-2">
                  <h3 class="text-base">{{ item?.product?.name.split(' ').slice(0, 10).join(' ') + '...' }}</h3>
                  <ul class="text-xs space-y-3 mt-4">
                    <li class="flex flex-wrap gap-4">
                      Quantity <span class="ml-auto">{{ item.quantity }}</span>
                    </li>
                    <li class="flex flex-wrap gap-4">
                      Size <span class="ml-auto">{{ item.size }}</span>
                    </li>
                    <li class="flex flex-wrap gap-4">
                      Total Price <span class="ml-auto">NRS {{ item?.product?.price }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="sticky bottom-[0]">
            <div class="flex items-end">
              <div class="w-full">
                <input
                  type="text"
                  id="promo_code"
                  :disabled="!cartStore.cartData?.isCodeRedeemed"
                  :class="{
                    '!bg-gray-300 border border-gray-300 cursor-not-allowed': !cartStore.cartData?.isCodeRedeemed,
                  }"
                  v-model="promo_code"
                  placeholder="Enter promo code"
                  class="px-4 py-[12px] text-[16px] bg-white text-[#333] w-full border-t-[1px] border-l-[1px] outline-none"
                />
              </div>
              <div>
                <button
                  @click="redeemCode"
                  :class="{ 'bg-red-600 hover:bg-red-500': !cartStore.cartData?.isCodeRedeemed }"
                  class="bg-gray-200 hover:bg-gray-300 w-full px-4 py-3.5 rounded-[4px]"
                >
                  {{ cartStore.cartData?.isCodeRedeemed ? 'Redeem' : 'Remove' }}
                </button>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="lh-primary w-full p-4">
                <p class="text-sm text-white">Subtotal</p>
                <p class="text-sm text-white">Discount</p>
                <p class="text-sm text-white">Shipping</p>
                <p class="text-lg font-bold text-white">Total</p>
              </div>
              <div class="lh-primary w-full p-4">
                <p class="text-sm text-white">NRS {{ total }}</p>
                <p class="text-sm text-white">NRS {{ cartStore?.cartData?.redeem_code_price }}</p>
                <p class="text-sm text-white">NRS 90</p>
                <p class="text-lg font-bold text-white">
                  NRS {{ (total + 90 - cartStore?.cartData?.redeem_code_price).toFixed(0) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-span-2 h-max rounded-md p-8">
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
              <div class="flex items-center">
                <input
                  checked
                  id="checked-checkbox"
                  type="checkbox"
                  v-model="method_of_payment"
                  value="COD"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900">Cash On Delivery</label>
              </div>
              <div class="flex items-center">
                <input
                  checked
                  id="terms-condition"
                  type="checkbox"
                  v-model="terms"
                  value="COD"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label for="terms-condition" class="ms-2 text-sm font-medium text-gray-900"
                  >By completing this checkout, I hereby accept and agree to abide by all
                  <NuxtLink to="/term-and-condition" class="underline"> <strong>terms and conditions</strong></NuxtLink
                  >.</label
                >
              </div>
            </div>
            <div class="flex gap-6 max-sm:flex-col mt-10">
              <button
                @click="checkout"
                type="button"
                class="rounded-md px-6 py-3 w-full text-sm font-semibold lh-primary text-white hover:bg-amber-600"
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
import { computed, onMounted, ref, watchEffect } from 'vue';
import { toast } from 'vue3-toastify';
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
const promo_code = ref('');
const terms = ref(false);
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

  if (cartStore.cartData?.usedCoupon?.length > 0) {
    promo_code.value = cartStore.cartData?.usedCoupon;
  }
});

const cartData = computed(() => {
  return cartStore?.cartData?.cartData;
});

// :disabled="!cartStore.cartData?.isCodeRedeemed"

const deleteCartData = async (item: number) => {
  if (item) {
    await cartStore.deleteCart(item);
    cartData.value.splice(item, 1);
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
  if (!email.value || !name.value || !address.value || !phone.value || !city.value) {
    toast.error('Please fill all the required fields');
    return;
  }

  if (!terms.value) {
    toast.error('Please accept our terms and condition');
    return;
  }

  if (phone.value.length < 10) {
    toast.error('A phone number must contain at least 10 digits');
    return;
  }

  if (!method_of_payment.value) {
    toast.error('Please select a method of payment');
    return;
  }

  const data = {
    email: email.value,
    name: name.value,
    address: address.value,
    phone: phone.value,
    city: city.value,
    mop: method_of_payment.value, // mop
    product: cartData.value, // order items ko data
    redeem_code_price: cartStore.cartData?.redeem_code_price,
    orderTotalPrice: total.value - cartStore.cartData?.redeem_code_price + 90,
    discount_amount: cartStore.cartData?.discount_amount,
    usedCoupon: promo_code.value,
  };
  const response = await orderStore.createCustomerOrder(data);
  if (response?.status === 200) {
    const response = await cartStore.deleteAllCart();
    if (response.status === 200) {
      cartStore.cartData = null;
      router.push('/');
      setTimeout(() => {
        toast.success('Your Order has been placed successfully!!');
      }, 10);
    }
  } else {
    toast.error('Something went wrong');
  }
};

const redeemCode = async () => {
  if (cartStore.cartData?.isCodeRedeemed) {
    const data = {
      coupon_name: promo_code.value.toUpperCase(),
      cart_id: cartStore.cartData._id,
    };
    const response = await cartStore.redeemCoupon(data);
    if (response?.status === 200) {
      toast.success('Code redeemed successfully');
    } else {
      toast.error('Enter a valid coupon');
    }
  } else {
    const data = {
      coupon_name: promo_code.value.toUpperCase(),
      cart_id: cartStore.cartData._id,
    };
    const response = await cartStore.removeCounpon(data);
    if (response.status === 200) {
      toast.success('Code removed successfully');
      promo_code.value = '';
    } else {
      toast.error('Something went wrong');
    }
  }
};
</script>
