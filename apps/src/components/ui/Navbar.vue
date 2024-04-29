<template>
  <div class="!sticky top-[0] w-full z-[20] h-full">
    <div class="py-3 text-center text-gray-100 bg-gray-800">
      <p class="md:text-[18px]">GET FREE SHIPPING ALL OVER KATHMANDU VALLEY</p>
    </div>
    <nav class="bg-gray-100 flex flex-wrap items-center justify-between px-2 md:p-10 py-4 lg:py-4">
      <ui-logo />
      <div class="flex items-center gap-10">
        <div class="items uppercase">
          <ul class="hidden md:flex">
            <li class="text-gray-900 p-[8px_12px]">
              <NuxtLink
                to="/"
                aria-current="page"
                class="text-[14px] nav_hover"
                :class="{ 'font-semibold nav_active': router.currentRoute.value.name === 'index' }"
                >Home</NuxtLink
              >
            </li>
            <li class="text-gray-190 p-[8px_12px]">
              <NuxtLink
                to="/product"
                class="text-[14px] nav_hover"
                :class="{
                  'font-semibold nav_active':
                    router.currentRoute.value.name === 'product' || router.currentRoute.value.name === 'product-slug',
                }"
                >Product</NuxtLink
              >
            </li>
            <!-- <li class="text-gray-800 p-[8px_12px]"><NuxtLink to="/product">Product</NuxtLink></li> -->
            <li class="text-gray-800 p-[8px_12px]">
              <NuxtLink
                :class="{ 'font-semibold nav_active': router.currentRoute.value.name === 'about-us' }"
                to="/about-us"
                class="text-[14px] nav_hover"
                >About us</NuxtLink
              >
            </li>
            <li class="text-gray-800 p-[8px_12px]">
              <NuxtLink
                :class="{ 'font-semibold nav_active': router.currentRoute.value.name === 'contact' }"
                to="/contact"
                class="text-[14px] nav_hover"
                >Contact us</NuxtLink
              >
            </li>
          </ul>
          <div
            @click="isToggle = false"
            v-if="isToggle"
            class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[10] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
          ></div>
          <div class="fixed right-0 top-0 bg-white z-[999] min-h-[100vh] w-[350px]" v-if="isToggle">
            <div
              class="flex justify-end p-2 relative top-[30px] right-[10px] rounded-[50%] bg-gray-100 w-fit float-end"
              @click="isToggle = !isToggle"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1222_37032)">
                  <path d="M13.5 0.5L0.5 13.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M0.5 0.5L13.5 13.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1222_37032">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <ul class="flex flex-col p-10 uppercase">
              <li
                @click="isToggle = !isToggle"
                class="p-[8px_12px]"
                :class="{ 'font-semibold': router.currentRoute.value.name === 'index' }"
              >
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <!-- <li @click="isToggle = !isToggle" class="text-gray-800 p-[8px_12px]"><NuxtLink to="/product">Product</NuxtLink></li> -->
              <li
                @click="isToggle = !isToggle"
                class="text-gray-800 p-[8px_12px]"
                :class="{
                  'font-semibold':
                    router.currentRoute.value.name === 'product' || router.currentRoute.value.name === 'product-slug',
                }"
              >
                <NuxtLink to="/product">Product</NuxtLink>
              </li>
              <li
                @click="isToggle = !isToggle"
                class="text-gray-800 p-[8px_12px]"
                :class="{ 'font-semibold': router.currentRoute.value.name === 'about-us' }"
              >
                <NuxtLink to="/about-us">About us</NuxtLink>
              </li>
              <li
                @click="isToggle = !isToggle"
                class="text-gray-800 p-[8px_12px]"
                :class="{ 'font-semibold': router.currentRoute.value.name === 'contact' }"
              >
                <NuxtLink to="/contact">Contact us</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-5">
        <div
          class="cursor-pointer relative hover:bg-gray-200 p-2 rounded-full"
          @click="showCart"
          v-if="isAccessTokenAvailable"
        >
          <span
            class="absolute top-[-4px] right-[20px] lh-primary text-white rounded-full w-5 h-5 flex justify-center items-center"
            >{{ cartLength || 0 }}</span
          >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
            data-original-title="Einkaufskorb"
          >
            <path
              d="M5.00014 14H18.1359C19.1487 14 19.6551 14 20.0582 13.8112C20.4134 13.6448 20.7118 13.3777 20.9163 13.0432C21.1485 12.6633 21.2044 12.16 21.3163 11.1534L21.9013 5.88835C21.9355 5.58088 21.9525 5.42715 21.9031 5.30816C21.8597 5.20366 21.7821 5.11697 21.683 5.06228C21.5702 5 21.4155 5 21.1062 5H4.50014M2 2H3.24844C3.51306 2 3.64537 2 3.74889 2.05032C3.84002 2.09463 3.91554 2.16557 3.96544 2.25376C4.02212 2.35394 4.03037 2.48599 4.04688 2.7501L4.95312 17.2499C4.96963 17.514 4.97788 17.6461 5.03456 17.7462C5.08446 17.8344 5.15998 17.9054 5.25111 17.9497C5.35463 18 5.48694 18 5.75156 18H19M7.5 21.5H7.51M16.5 21.5H16.51M8 21.5C8 21.7761 7.77614 22 7.5 22C7.22386 22 7 21.7761 7 21.5C7 21.2239 7.22386 21 7.5 21C7.77614 21 8 21.2239 8 21.5ZM17 21.5C17 21.7761 16.7761 22 16.5 22C16.2239 22 16 21.7761 16 21.5C16 21.2239 16.2239 21 16.5 21C16.7761 21 17 21.2239 17 21.5Z"
              stroke="#121926"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div
          v-if="!isAccessTokenAvailable"
          @click="Login"
          class="cursor-pointer relative hover:bg-gray-200 p-2 rounded-full"
        >
          <svg
            class="cursor-pointe"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div
          v-if="isAccessTokenAvailable"
          class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative group"
          id="user-button"
        >
          <button aria-label="User Menu" type="button" class="flex text-sm rounded-full md:me-0 focus:ring-gray-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <div
            class="z-50 absolute hidden user-dropdown top-[25px] right-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow group-hover:block"
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900">{{ authStore.SingleCustomerData?.name }}</span>
              <span class="block text-sm text-gray-500 truncate">{{ authStore.SingleCustomerData?.email }}</span>
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <button
                  aria-label="setting"
                  @click="router.push('/setting')"
                  class="block px-4 py-2 text-sm w-full hover:bg-gray-100"
                >
                  Settings
                </button>
              </li>
              <li>
                <button
                  aria-label="logout"
                  @click="Logout"
                  class="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex md:hidden" @click="isToggle = !isToggle">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1222_36505)">
              <path d="M13.5 1H0.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.5 4H3.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.5 7H6.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.5 13H0.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.5 10H3.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1222_36505">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <ui-shopping-cart v-if="cartStore.showCart" @show-cart="showCart" />
      <ui-login v-if="authStore.isLogined" :isLoginShown="authStore.isLogined" @login-success="handleLoginSuccess" />
    </nav>
  </div>
</template>
<script setup>
import { onMounted, ref, watch, computed } from 'vue';
import { useCookie, useRouter } from 'nuxt/app';
import { useAuthStore } from '../../composables/store/auth.store';
import { toast } from 'vue3-toastify';

const cartStore = useCartStore();
const authStore = useAuthStore();

const router = useRouter();
const isToggle = ref(false);

const userStatus = ref('');
onMounted(() => {
  if (!useCookie('customer-access').value) return;
  authStore.accessToken = useCookie('customer-access').value;
  authStore.getSingleCustomerData();
  cartStore.getCart();
});

const Login = () => {
  authStore.isLogined = true;
};

const cartLength = computed(() => {
  return cartStore.cartData?.cartData?.length;
});

const isAccessTokenAvailable = computed(() => {
  return authStore?.accessToken ? true : false;
});

const Logout = () => {
  useCookie('customer-access').value = null;
  authStore.accessToken = null;
  router.push('/');
  setTimeout(() => {
    toast.success('Logout successfully!!');
  }, 10);
};

const showCart = () => {
  cartStore.showCart = !cartStore.showCart;
};

const handleLoginSuccess = () => {
  authStore.isLogined = false;
};
</script>
