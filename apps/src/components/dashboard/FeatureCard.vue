<template>
  <div
    v-if="isLoading || props.loading"
    class="grid grid-rows-1 max-[1130px]:grid-rows-2 max-[780px]:grid-rows-3 grid-flow-col pt-[27px] gap-[30px]"
  >
    <div class="loading-skeleton px-[24px] min-h-[130px] py-[31px] w-full bg-white rounded-[12px]">
      <div class="flex justify-between items-center">
        <div class="loader py-[10px] px-[80px] rounded-[32px]"></div>
        <div class="loader py-[10px] px-[40px] rounded-[32px]"></div>
      </div>
      <div class="mt-[30px]">
        <span class="loader px-[80px] py-[10px]"></span>
      </div>
    </div>

    <div class="loading-skeleton px-[24px] min-h-[130px] py-[31px] w-full bg-white rounded-[12px]">
      <div class="flex justify-between items-center">
        <div class="loader py-[10px] px-[80px] rounded-[32px]"></div>
        <div class="loader py-[10px] px-[40px] rounded-[32px]"></div>
      </div>
      <div class="mt-[30px]">
        <span class="loader px-[80px] py-[10px]"></span>
      </div>
    </div>

    <div class="loading-skeleton px-[24px] min-h-[130px] py-[31px] w-full bg-white rounded-[12px]">
      <div class="flex justify-between items-center">
        <div class="loader py-[10px] px-[80px] rounded-[32px]"></div>
        <div class="loader py-[10px] px-[40px] rounded-[32px]"></div>
      </div>
      <div class="mt-[30px]">
        <span class="loader px-[80px] py-[10px]"></span>
      </div>
    </div>

    <div v-if="$props.title4" class="loading-skeleton px-[24px] min-h-[130px] py-[31px] w-full bg-white rounded-[12px]">
      <div class="flex justify-between items-center">
        <div class="loader py-[10px] px-[80px] rounded-[32px]"></div>
        <div class="loader py-[10px] px-[40px] rounded-[32px]"></div>
      </div>
      <div class="mt-[30px]">
        <span class="loader px-[80px] py-[10px]"></span>
      </div>
    </div>
  </div>

  <div
    v-else
    class="grid grid-rows-1 max-[1130px]:grid-rows-2 max-[780px]:grid-rows-3 grid-flow-col pt-[27px] gap-[30px]"
  >
    <div class="px-[24px] py-[28px] w-full bg-white rounded-[12px]">
      <div class="flex justify-between items-center">
        <p>{{ $props.title }}</p>
      </div>
      <p class="text-[32px] max-[1300px]:text-[28px] max-[1024px]:text-24px">{{ $props.price }}</p>
    </div>
    <div class="px-[24px] py-[28px] w-full bg-white rounded-[12px]">
      <div class="flex justify-between items-center">
        <p>{{ $props.title2 }}</p>
      </div>
      <p class="text-[32px] max-[1300px]:text-[28px] max-[1024px]:text-24px">{{ $props.price2 }}</p>
    </div>

    <div class="px-[24px] py-[28px] w-full bg-white rounded-[12px]">
      <div class="flex justify-between items-center">
        <p>{{ $props.title3 }}</p>
      </div>
      <p class="text-[32px] max-[1300px]:text-[28px] max-[1024px]:text-[24px]">
        {{ $props.price3 }}
      </p>
    </div>

    <div v-if="$props.title4" class="px-[24px] py-[28px] w-full bg-white rounded-[12px]">
      <div class="flex justify-between items-center">
        <p>{{ $props.title4 }}</p>
      </div>
      <p class="text-[32px] max-[1300px]:text-[28px] max-[1024px]:text-[24px]">
        {{ $props.price4 }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

// props data
const props = defineProps(['title', 'title2', 'title3', 'title4', 'price', 'price2', 'price3', 'price4', 'loading']);

const isLoading = ref<boolean>(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 400);
});
</script>
