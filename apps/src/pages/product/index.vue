<template>
  <div class="font-[sans-serif] bg-gray-100">
    <div class="p-4 mx-auto max-w-[1480px]">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-12">Premium Oversized T-shirt(Samples)</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="(items, index) in getProducts"
          :key="index"
          class="relative bg-white rounded-2xl p-2 cursor-pointer group transition-all"
        >
          <NuxtLink :to="`/product/${items._id}`" class="text-decoration-none">
            <div class="w-11/12 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img
                :src="items?.images[0]"
                :alt="items?.name"
                class="h-full w-full object-cover group-hover:scale-[1.1] duration-300"
              />
            </div>
            <div class="p-3">
              <p class="text-sm pt-3 text-gray-700 group-hover:underline">{{ items?.category }}</p>
              <h3 class="text-lg font-medium text-gray-800 group-hover:underline">{{ items?.name }}</h3>
              <h4 class="text-lg text-gray-700 font-bold mt-4">NRS {{ items.price }}</h4>
            </div>
          </NuxtLink>
        </div>
      </div>
      <h1 class="text-xl font-bold py-10 leading-tight tracking-tight text-gray-900 md:text-2xl">
        Note : This is only for testing we do not encourage visitor to purchase this as of now
      </h1>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const productStore = useProductStore();

onMounted(async () => {
  await productStore.getProducts();
});

const getProducts = computed(() => {
  return productStore?.product;
});
</script>
