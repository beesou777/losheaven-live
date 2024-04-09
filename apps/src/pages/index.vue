<template>
  <section class="text-center lg:text-left">
    <div class="container mx-auto text-center lg:text-left xl:px-32">
      <div
        class="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] text-[#333] max-w-[1450px] max-md:max-w-md mx-auto"
      >
        <div class="max-md:order-1 max-md:text-center">
          <h1 class="md:text-3xl text-2xl md:leading-10">Dressing is the canvas where joy and art merge seamlessly.</h1>
          <p class="mt-4 text-sm">
            Secure your spot now! Pre-order to be the first in line for exclusive access and early delivery.
          </p>
          <NuxtLink to="/66129e982f55c360c94bd724">
            <button
              type="button"
              class="px-6 py-2 mt-8 font-semibold rounded text-sm outline-none border-2 border-[#333] hover:bg-[#333] hover:text-white transition-all duration-300"
            >
              Explore
            </button>
          </NuxtLink>
        </div>
        <div class="md:h-[450px]">
          <img
            src="https://img.fantaskycdn.com/4be0935ceda5a8576cab3163bba6f042_1080x.jpeg"
            class="w-full h-full md:object-contain"
          />
        </div>
      </div>
    </div>
    <div id="order">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Our Top Selling Product</h2>
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <NuxtLink to="/66129e932f55c360c94bd721">
            <div class="group relative bg-white p-4 hover:bg-gray-50 duration-300">
              <div
                class="aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none hover:scale-[1.03] duration-300 overflow-hidden lg:h-80"
              >
                <img
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  src="https://img.fantaskycdn.com/4be0935ceda5a8576cab3163bba6f042_1080x.jpeg"
                  alt="Trainers"
                />
              </div>
              <div class="mt-4 flex flex-col">
                <div>
                  <p class="text-[14px] md:text-[16px] font-bold text-gray-700">
                    Brownm Summer Oversized Waffle Letter Mens T-shirts Short...
                  </p>
                </div>
                <p class="text-[14px] md:text-[18px] font-medium text-gray-900">NRS 1100</p>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/66129e982f55c360c94bd724">
            <div class="group relative bg-white p-4 hover:bg-gray-50 duration-300">
              <div
                class="aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none hover:scale-[1.03] duration-300 overflow-hidden lg:h-80"
              >
                <img
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  src="https://img.ltwebstatic.com/images3_pi/2023/06/02/168569643833cb0ba9b3e415efd2dfa1b0776fe6eb_thumbnail_720x.webp"
                  alt="Trainers"
                />
              </div>
              <div class="mt-4 flex flex-col">
                <div>
                  <p class="text-[14px] md:text-[16px] font-bold text-gray-700">
                    Manfinity Homme Homens Gráfico De Slogan Camiseta
                  </p>
                </div>
                <p class="text-[14px] md:text-[18px] font-medium text-gray-900">NRS 1100</p>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/66129e9a2f55c360c94bd727">
            <div class="group relative bg-white p-4 hover:bg-gray-50 duration-300">
              <div
                class="aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none hover:scale-[1.03] duration-300 overflow-hidden lg:h-80"
              >
                <img
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  src="https://i.pinimg.com/736x/d8/fe/19/d8fe19282f306c026565410469072769.jpg"
                  alt="Trainers"
                />
              </div>
              <div class="mt-4 flex flex-col">
                <div>
                  <p class="text-[14px] md:text-[16px] font-bold text-gray-700">
                    Contra Oversized Short Sleeve Tee Shirt
                  </p>
                </div>
                <p class="text-[14px] md:text-[18px] font-medium text-gray-900">NRS 1100</p>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/66129e9b2f55c360c94bd72a">
            <div class="group relative bg-white p-4 hover:bg-gray-50 duration-300">
              <div
                class="aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none hover:scale-[1.03] duration-300 overflow-hidden lg:h-80"
              >
                <img
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  src="https://img.ltwebstatic.com/images3_pi/2023/07/13/1689216389f25d7a1cc2e4180e9bf880ef48f5d876.webp"
                  alt="Trainers"
                />
              </div>
              <div class="mt-4 flex flex-col">
                <div>
                  <p class="text-[14px] md:text-[16px] font-bold text-gray-700">
                    Manfinity Homme Loose Fit Men's Slogan Graphic T-Shirt
                  </p>
                </div>
                <p class="text-[14px] md:text-[18px] font-medium text-gray-900">NRS 1100</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

const productStore = useProductStore();

useHead({
  title: 'Home',
  meta: [{ name: 'description', content: 'losheaven a Nepali Startup owned by Bishwa Jung Shah And Nayendra Sunuwar' }],
});

onMounted(async () => {
  await productStore.getProducts();
});

const preOrder = () => {
  productStore.createProduct();
};
</script>

<style scoped lang="scss">
@media (min-width: 992px) {
  .rotate-lg-6 {
    transform: rotate(6deg);
  }
}
.fancy-border-radius {
  border-radius: 53% 47% 52% 48% / 36% 41% 59% 64%;
}
</style>
