<template>
  <div
    @click="emit('show-cart')"
    class="fixed inset-0 w-full h-full overflow-y-auto z-[10] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] font-[sans-serif]"
  ></div>
  <div class="w-full max-w-xl bg-white shadow-lg fixed top-0 right-0 z-[999999] ml-auto h-screen">
    <div class="overflow-auto p-6 h-[calc(100vh-135px)]">
      <div class="flex items-center gap-4 text-gray-800">
        <h3 class="text-2xl font-bold flex-1">Shopping cart({{ cartData?.length ? cartData?.length : 0 }})</h3>
        <svg
          @click="emit('show-cart')"
          xmlns="http://www.w3.org/2000/svg"
          class="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500"
          viewBox="0 0 320.591 320.591"
        >
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"
          ></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"
          ></path>
        </svg>
      </div>
      <div class="mt-4" v-for="(item, index) in cartData" :key="index">
        <div class="flex items-start justify-between gap-4 py-8">
          <div class="flex gap-6">
            <div class="w-full md:max-w-[126px]">
              <img :src="item?.product?.images[0]" :alt="item?.product?.name" class="mx-auto w-full" />
            </div>
            <div>
              <p class="text-md text-[15px] md:text-[18px] font-bold text-[#333]">
                {{ item?.product?.name.split(' ').slice(0, 6).join(' ') + '...' }}
              </p>
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-400 text-xs mt-1">Quantity: {{ item.quantity }}</p>
                  <p class="text-gray-400 text-xs mt-1">Size: {{ item.size }}</p>
                </div>
                <svg
                  @click="deleteCartData(item._id)"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 fill-red-500 inline cursor-pointer"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <h4 class="md:text-xl font-bold text-[#333] mt-4">NRS {{ item?.product?.price }}</h4>
              <div class="mt-6">
                <button type="button" class="flex items-center flex-wrap gap-2 text-lg text-[#333]">
                  <button
                    :class="{ 'cursor-not-allowed': cartStore.isLoading }"
                    :disabled="cartStore.isLoading"
                    @click="decrement(item.quantity, item._id)"
                    class="flex items-center w-8 h-8 bg-gray-100 p-2 rounded"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 fill-current" viewBox="0 0 124 124">
                      <path
                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                  <span class="mx-3">{{ item.quantity }}</span>
                  <button
                    :disabled="cartStore.isLoading"
                    :class="{ 'cursor-not-allowed': cartStore.isLoading }"
                    @click="increment(item.quantity, item._id)"
                    class="flex items-center w-8 h-8 bg-gray-100 p-2 rounded"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-current" viewBox="0 0 42 42">
                      <path
                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="cartData?.length === 0" class="mt-10 flex items-center justify-center font-bold">
        <p class="md:text-[23px] text-[18px]">No Data Available</p>
      </div>
    </div>
    <div class="p-6 absolute bottom-0 w-full border-t bg-white">
      <ul class="text-[#333] divide-y">
        <li class="flex flex-wrap gap-4 text-md font-bold">
          Subtotal <span class="ml-auto">NRS {{ total }}</span>
        </li>
      </ul>
      <button
        :class="{ 'cursor-not-allowed': cartData?.length === 0 }"
        @click="checkoutRoute"
        :disabled="cartData?.length === 0"
        type="button"
        class="mt-6 text-md px-6 py-2.5 w-full lh-primary hover:bg-amber-600 text-white rounded"
      >
        Check out
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'nuxt/app';
import { computed, onMounted, ref } from 'vue';
import { toast } from 'vue3-toastify';

const cartStore = useCartStore();
const router = useRouter();

const emit = defineEmits(['show-cart']);

onMounted(async () => {
  await cartStore.getCart();
});

const cartData = computed(() => {
  return cartStore?.cartData?.cartData;
});

const deleteCartData = async (item: number) => {
  if (item) {
    await cartStore.deleteCart(item);
    cartData.value.splice(item, 1);
    toast.success('Item deleted successfully');
  } else {
    toast.error('Something went wrong');
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
  if (!cartData.value || cartData.value?.length === 0) {
    return 0; // Return 0 if cartData is empty or undefined
  }

  return cartData.value?.reduce((acc, item) => {
    return acc + item.product?.price * item.quantity; // Calculate total amount
  }, 0);
});

const checkoutRoute = () => {
  router.push('/checkout');
  emit('show-cart');
};
</script>
