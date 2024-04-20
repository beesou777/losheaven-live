<template>
  <!-- component -->
  <nav class="flex pt-10 px-[30px]" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li class="inline-flex items-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px]">
        <NuxtLink
          to="/"
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
      <li class="whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px]">
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
      <li aria-current="page whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px]">
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
          <span class="ms-1 whitespace-nowrap text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{{
            getProduct?.name
          }}</span>
        </div>
      </li>
    </ol>
  </nav>
  <div class="grid grid-cols-12 py-8 2xl:px-20 md:px-6 px-4">
    <div class="col-span-12 lg:col-span-7 pr-0 md:pr-8">
      <div class="grid grid-cols-4 aspect-1">
        <div
          class="col-span-2 flex items-center flex-col sm:flex-row"
          v-for="(item, index) in getProduct?.images"
          :key="index"
        >
          <img class="h-full w-full object-cover lg:h-full lg:w-full" alt="losheaven" :src="item" />
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-5 md:mt-0 mt-6 sticky top-[100px] overflow-auto h-fit">
      <h2 class="text-sm title-font text-gray-500 tracking-widest">{{ getProduct?.category }}</h2>
      <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ getProduct?.name }}</h1>
      <div class="flex mb-4 items-center">
        <span class="title-font font-medium text-2xl text-gray-900">NRS{{ getProduct?.price }}</span>
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
      <div class="mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
        <div>
          <h3 class="text-lg font-bold text-gray-800">Select a Size</h3>
          <div class="flex flex-wrap gap-4 mt-4 mb-4">
            <button
              @click="updateSize('FREE SIZE')"
              type="button"
              class="w-[100px] border-gray-800 h-12 border-2 hover:border-gray-800 font-bold text-sm rounded-[8px] flex items-center justify-center shrink-0"
            >
              FREE SIZE
            </button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-bold text-gray-800">Color</h3>
          <div class="flex flex-wrap gap-4 mt-4">
            <button
              type="button"
              class="w-12 h-12 border-2 hover:border-gray-800 border-gray-800 rounded-full shrink-0"
              :style="{ backgroundColor: getProduct && getProduct.color ? '#' + getProduct.color.color_code : '#fff' }"
            ></button>
          </div>
        </div>
        <div class="mt-6">
          <p>
            visit our
            <strong>
              <a class="underline" href="https://www.instagram.com/losheaven17/" target="_blank">Instagram profile</a>
            </strong>
            for a <strong>10%</strong> coupon code promoted by our influencers!
          </p>
        </div>
      </div>
      <div class="flex gap-3 max-[512px]:flex-col">
        <button
          @click="checkout"
          class="w-full text-center cursor-pointer text-white lh-primary border-0 py-4 px-6 focus:outline-none rounded"
        >
          View Cart
        </button>
        <button
          @click="addToCart"
          class="w-full text-[#333] border border-1 py-4 px-6 focus:outline-none hover:bg-[#f6f6f6] ease-in duration-300 rounded"
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
import { toast } from 'vue3-toastify';

const quantity = ref<number>(1);
const size = ref<string>('FREE SIZE');
const color = ref<string>('');
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

const addToCart = async () => {
  const cookie = useCookie('customer-access').value;
  if (!cookie) {
    toast.error('Please Login to add product to cart');
    authStore.isLogined = true;
    return;
  }
  const data = {
    product: getProduct.value._id,
    quantity: quantity.value,
    size: size.value,
    color: {
      color_code: getProduct.value.color.color_code,
      color_name: getProduct.value.color.color_name,
    },
  };
  const response = await cartStore.addToCart(data);
  if (response.status === 200) {
    toast.success('Product added to cart');
    cartStore.showCart = true;
  }
};

const handleLoginSuccess = () => {
  authStore.isLogined = false;
};

const checkout = async () => {
  try {
    const isLoggedIn = !!useCookie('customer-access').value;
    if (!isLoggedIn) {
      toast.error('Please Login to view cart');
      authStore.isLogined = true;
      return;
    }

    // Check if cart data is available and has products
    const hasProductsInCart =
      cartStore.cartData && cartStore.cartData.cartData && cartStore.cartData.cartData.length > 0;

    if (!hasProductsInCart) {
      toast.error('You need to have products in your cart to view your cart');
      return;
    }

    cartStore.showCart = true;
  } catch (error) {
    // Handle error fetching cart data
    console.error('Error fetching cart data:', error);
    toast.error('Error fetching cart data. Please try again later.');
  }
};

const updateSize = (color: any) => {
  size.value = color;
};

useHead({
  title: getProduct.value?.name,
  meta: [
    { name: 'description', content: getProduct.value?.description },
    { property: 'og:title', content: getProduct.value?.name },
    { property: 'og:description', content: getProduct.value?.description },
    { property: 'og:image', content: getProduct.value?.image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: getProduct.value?.name },
    { name: 'twitter:description', content: getProduct.value?.description },
    { name: 'twitter:image', content: getProduct.value?.image },
  ],
});
</script>
