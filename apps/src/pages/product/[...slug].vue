<template>
  <!-- component -->
  <div class="grid grid-cols-12 py-12 2xl:px-20 md:px-6 px-4">
    <div class="col-span-12 lg:col-span-7 pr-0 md:pr-8">
      <div class="grid grid-cols-8">
        <div
          class="max-w-[500px] w-full max-h-[500px] h-full bg-gray-300 col-span-4 [&:nth-child(5)]:col-span-8"
          v-for="(item, index) in getProduct?.images"
          :key="index"
        >
          <img
            class="max-w-[500px] w-full max-h-[500px] h-full bg-gray-300 object-cover"
            alt="image of a girl posing"
            :src="item"
            :class="{ 'mt-4': index === 1 }"
          />
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-5 md:mt-0 mt-6 sticky top-[100px] overflow-auto h-fit">
      <h2 class="text-sm title-font text-gray-500 tracking-widest">{{ getProduct?.category }}</h2>
      <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ getProduct?.name }}</h1>
      <div class="flex mb-4 items-center">
        <span class="title-font font-medium text-2xl text-gray-900"
          >NRS{{ getProduct?.price - getProduct?.discounted_price }}</span
        >
        <span class="title-font font-medium text-2xl line-through text-yellow-500">NRS{{ getProduct?.price }}</span>
        <span class="flex py-2 ml-3 pl-3 border-l border-gray-500">
          <a class="text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-2 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a class="ml-2 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
              ></path>
            </svg>
          </a>
        </span>
      </div>
      <p class="leading-relaxed">
        {{ getProduct?.description }}
      </p>
      <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
        <div class="flex items-center">
          <span class="mr-4">Size</span>
          <div class="relative">
            <select
              v-model="size"
              class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
            >
              <option>L</option>
              <option>XL</option>
            </select>
            <span
              class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="flex gap-3 flex-col">
        <div class="flex items-center">
          <button
            @click="increaseQuantity"
            class="border border-black h-12 text-gray-500 focus:outline-none focus:text-gray-600 w-full"
          >
            <div class="flex justify-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
            </div></button
          ><span class="text-2xl mx-2">{{ quantity }}</span
          ><button
            @click="decreaseQuantity"
            class="border border-black w-full h-12 text-gray-500 focus:outline-none focus:text-gray-600"
          >
            <div class="flex justify-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
        <button
          @click="addTOCart"
          class="w-full text-white bg-amber-500 border-0 py-4 px-6 focus:outline-none hover:bg-amber-600 rounded"
        >
          Add To Cart
        </button>
      </div>
    </div>
    <ui-login v-if="authStore?.isLogined" :isLoginShown="authStore?.isLogined" @login-success="handleLoginSuccess" />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'nuxt/app';
import { computed, onMounted, ref } from 'vue';
import { useAuthStore } from '../../composables/store/auth.store';

const quantity = ref<number>(1);
const size = ref<string>('L');
const productStore = useProductStore();
const authStore = useAuthStore();
const cartStore = useCartStore();
const router = useRouter();

onMounted(async () => {
  await productStore.getSingleProduct(router.currentRoute.value.params.slug);
});

const getProduct = computed(() => {
  return productStore.singleProduct;
});

const increaseQuantity = () => {
  quantity.value += 1;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value -= 1;
  }
};

const addTOCart = async () => {
  const cookie = useCookie('customer-access').value;
  if (!cookie) {
    authStore.isLogined = true;
    return;
  }
  const data = {
    product: getProduct.value._id,
    quantity: quantity.value,
    size: size.value,
  };
  const response = await cartStore.addToCart(data);
  if (response.status === 200) {
    cartStore.showCart = true;
  }
};

const handleLoginSuccess = () => {
  authStore.isLogined = false;
};
</script>
