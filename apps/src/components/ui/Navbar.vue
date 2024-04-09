<template>
  <nav class="flex items-center px-5 md:px-0 justify-between max-w-[1400px] mx-auto py-4 relative h-auto" id="navbar">
    <div class="flex items-center gap-10">
      <ui-logo />
      <div class="items">
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
        <ul class="hidden md:flex">
          <li
            class="text-[#282828] p-[8px_12px] font-bold"
            :class="{ 'text-yellow-500': router.currentRoute.value.name === 'index___en' }"
          >
            <NuxtLink to="/" class="text-[18px]">Home</NuxtLink>
          </li>
          <!-- <li class="text-[#282828] p-[8px_12px]"><NuxtLink to="/product">Product</NuxtLink></li> -->
          <li class="text-[#282828] p-[8px_12px]">
            <NuxtLink
              to="/about-us"
              class="text-[18px] font-bold"
              :class="{ 'text-yellow-500': router.currentRoute.value.name === 'about-us___en' }"
              >About us</NuxtLink
            >
          </li>
          <!-- <li class="text-[#282828] p-[8px_12px]"><NuxtLink to="/contact-us">Contact us</NuxtLink></li> -->
        </ul>

        <div class="fixed right-0 top-0 bg-white z-[999] min-h-[100vh] w-[250px]" v-if="isToggle">
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
          <ul class="flex flex-col p-10">
            <li @click="isToggle = !isToggle" class="p-[8px_12px] text-yellow-500"><NuxtLink to="/">Home</NuxtLink></li>
            <!-- <li @click="isToggle = !isToggle" class="text-[#282828] p-[8px_12px]"><NuxtLink to="/product">Product</NuxtLink></li> -->
            <li @click="isToggle = !isToggle" class="text-[#282828] p-[8px_12px]">
              <NuxtLink to="/about-us">About us</NuxtLink>
            </li>
            <!-- <li @click="isToggle = !isToggle" class="text-[#282828] p-[8px_12px]"><NuxtLink to="/contact-us">Contact us</NuxtLink></li> -->
          </ul>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-5">
      <div class="cursor-pointer relative" @click="showCart">
        <span
          class="absolute top-[-15px] right-[10px] bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center"
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
      <button
        v-if="userStatus === 'Login'"
        class="px-6 py-2 font-semibold rounded text-sm outline-none border-2 border-[#333] hover:bg-[#333] hover:text-white transition-all duration-300"
        @click="Login"
      >
        Login
      </button>
      <div
        v-if="userStatus === 'Logout'"
        class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative"
        id="user-button"
      >
        <button
          type="button"
          class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <img
            class="w-8 h-8 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            alt="user photo"
          />
        </button>
        <!-- Dropdown menu -->
        <div
          class="z-50 absolute hidden user-dropdown top-[33px] left-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
            <span class="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <button
                @click="router.push('/setting')"
                class="block px-4 py-2 text-sm w-full text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Settings
              </button>
            </li>
            <li>
              <button
                @click="Logout"
                class="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ui-shopping-cart v-if="cartStore.showCart" @show-cart="showCart" />
  </nav>
</template>
<script setup>
import { onMounted, ref, watch, computed } from 'vue';
import { useCookie, useRouter } from 'nuxt/app';
import { useAuthStore } from '../../composables/store/auth.store';

const cartStore = useCartStore();
const authStore = useAuthStore();

const router = useRouter();
const isToggle = ref(false);
const userStatus = ref('');
onMounted(() => {
  authStore.getSingleCustomerData();
  if (!useCookie('customer-access').value) return;
  cartStore.getCart();
});

const Login = () => {
  router.push('/login');
};

const cartLength = computed(() => {
  return cartStore.cartData?.length;
});

const Logout = () => {
  useCookie('customer-access').value = null;
  router.push('/login');
};

watchEffect(() => {
  const cookie = useCookie('customer-access').value;
  if (cookie && cookie !== undefined && authStore.SingleCustomerData?._id) {
    userStatus.value = 'Logout';
  } else {
    userStatus.value = 'Login';
  }
});

const showCart = () => {
  cartStore.showCart = !cartStore.showCart;
};
</script>
