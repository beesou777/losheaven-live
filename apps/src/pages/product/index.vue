<template>
  <div class="font-[sans-serif]">
    <div class="p-4 mx-auto max-w-[1480px]">
      <h2 class="text-4xl font-extrabold text-gray-800">Premium Oversized T-shirt Samples</h2>
      <h1 class="text-xl font-bold py-3 leading-tight tracking-tight text-gray-900 md:text-2xl">Product Coming soon</h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 loading-skeleton"
        v-if="!getProducts"
      >
        <div
          v-for="(items, index) in [1, 2, 3]"
          :key="index"
          class="relative bg-white max-h-[400px] h-[400px] rounded-2xl p-2 cursor-pointer group transition-all loader"
        ></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
        <div
          v-for="(items, index) in getProducts"
          :key="index"
          class="relative bg-white rounded-2xl p-2 cursor-pointer group transition-all"
        >
          <NuxtLink
            :to="`/product/${items._id}`"
            class="pb-4 text-decoration-none flex items-center flex-col hover:bg-gray-100 rounded"
          >
            <div class="w-full max-h max-h-[400px] h-full bg-gray-200 lg:aspect-none overflow-hidden">
              <img
                :src="items?.images[0]"
                :alt="items?.name"
                class="h-full w-full object-cover max-h-[400px] lg:h-full lg:w-full hover:scale-[1.1] duration-300 ease-in"
              />
            </div>
            <div class="px-3 pt-3 pb-4">
              <p class="text-sm pt-3 text-gray-700">{{ items?.category }}</p>
              <h3 class="text-lg font-medium text-gray-800 group-hover:underline">{{ items?.name }}</h3>
              <h4 class="text-lg text-gray-700 font-bold mt-4">NRS {{ items.price }}</h4>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

const productStore = useProductStore();

onMounted(async () => {
  await productStore.getProducts();
});

const getProducts = computed(() => {
  return productStore?.product;
});

watch(getProducts, (newProducts) => {
  newProducts.forEach((product) => {
    useHead({
      title: product?.name,
      meta: [
        { name: 'description', content: product?.description },
        { property: 'og:title', content: product?.name },
        { property: 'og:description', content: product?.description },
        { property: 'og:image', content: product?.image },
        { name: 'twitter:title', content: product?.name },
        { name: 'twitter:description', content: product?.description },
        { name: 'twitter:image', content: product?.image },
        {
          name: 'keywords',
          content: 'premium, oversized, t-shirt, samples,oversize t shirt nepal, nepal t shirt samples',
        },
        { name: 'author', content: 'losheaven' },
      ],
    });
  });
});
</script>
