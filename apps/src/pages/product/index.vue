<template>
  <div class="font-[sans-serif]">
    <div class="text-center bg-gray-50 px-4 py-10">
      <h1 class="text-xl py-3 leading-tight tracking-tight text-gray-900 md:text-2xl">Premium Oversize Tees Samples</h1>
      <p class="text-[15px] md:text-[16px] max-w-[700px] mx-auto">
        To simplify your every day. A collection of better basics, built to last from the finest Thai cotton terry
        fabric. Made in the Nepal.
      </p>
    </div>
    <div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 loading-skeleton"
        v-if="!getProducts"
      >
        <div
          v-for="(items, index) in [1, 2, 3]"
          :key="index"
          class="relative bg-white max-h-[400px] h-[400px] rounded-2xl p-2 cursor-pointer group transition-all loader"
        ></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div
          v-for="(items, index) in getProducts"
          :key="index"
          class="relative bg-white rounded-2xl cursor-pointer group transition-all"
          style="width: 100%; height: 100%"
          @mouseover="showFirstImage[index] = true"
          @mouseleave="showFirstImage[index] = false"
        >
          <NuxtLink
            :to="`/product/${items.name.toLowerCase().split(' ').join('-')}/${items._id}`"
            class="pb-4 text-decoration-none flex items-start flex-col hover:bg-gray-100 rounded"
            style="width: 100%; height: 100%"
          >
            <div class="w-full h-[300px] lg:h-[400px] bg-gray-200 overflow-hidden">
              <nuxt-img
                loading="lazy"
                :src="showFirstImage[index] ? items?.images[0] : items?.images[1]"
                :alt="items?.name"
                height="300"
                width="300"
                class="object-cover object-top w-full h-full hover:scale-[1.02] duration-300 ease-in"
              />
            </div>

            <div class="px-3 py-1">
              <p class="text-[13px] text-gray-700">{{ items?.category }}</p>
              <h2 class="text-[14px] md:text-[16px] font-medium text-gray-800 group-hover:underline">
                {{ items?.name }}
              </h2>
              <h3 class="text-lg text-gray-700 font-bold py-1">NRS {{ items.price }}</h3>
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
const showFirstImage = ref([]);

onMounted(async () => {
  await productStore.getProducts();
});

const getProducts = computed(() => {
  return productStore?.product;
});

watch(getProducts, (newProducts) => {
  newProducts.forEach((product) => {
    useHead({
      title: 'oversized clothing in Nepal',
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
      link: [{ rel: 'canonical', href: 'https://www.losheaven.com/product' }],
    });
  });
});
</script>
