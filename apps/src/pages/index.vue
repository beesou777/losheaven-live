<template>
  <section class="text-center lg:text-left overflow-hidden">
    <div class="text-center lg:text-left md:px-10 px-5 py-16 lg:px-8">
      <div class="grid md:grid-cols-6 items-center md:gap-4 gap-8 font-[sans-serif] text-[#333]">
        <div class="col-span-3 max-md:order-1 max-md:text-center">
          <h1 class="md:text-4xl text-2xl font-bold">Dressing is the canvas where joy and art merge seamlessly.</h1>
          <p class="mt-4 text-sm">
            Secure your spot now! Pre-order to be the first in line for exclusive access and early delivery.
          </p>
          <NuxtLink to="#order">
            <button
              type="button"
              class="px-6 py-2 mt-8 font-semibold rounded text-sm outline-none border-2 border-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300"
            >
              Explore
            </button>
          </NuxtLink>
        </div>
        <div class="h-full w-full max-w-[600px] col-span-3 ml-auto">
          <img
            src="https://img.fantaskycdn.com/4be0935ceda5a8576cab3163bba6f042_1080x.jpeg"
            class="w-full h-full md:object-contain object-cover"
          />
        </div>
      </div>
    </div>
    <div id="order">
      <div class="md:px-10 px-5 py-16 sm:py-24 lg:px-8">
        <h2 class="text-[18px] md:text-[28px] font-bold text-center text-gray-600">Our Products</h2>
        <div class="mt-6 grid grid-cols-12 sm:grid-cols-2 lg:grid-cols-4">
          <div class="col-span-12 md:col-span-6 flex items-center flex-col sm:flex-row">
            <NuxtLink
              class="w-full h-full max-h-[600px] max-[1225px]:max-h-[440px] max-[992px]:max-h-[380px] max-[772px]:max-h-[330px] group relative bg-white md:m-4 m-0 duration-300 overflow-hidden"
              to="/product/66129e932f55c360c94bd721"
            >
              <div class="w-full rounded-md bg-gray-200 lg:aspect-none overflow-hidden">
                <img
                  class="h-full w-full object-contain object-center lg:h-full lg:w-full hover:scale-[1.03] duration-300 max-h-[600px]"
                  src="https://img.fantaskycdn.com/4be0935ceda5a8576cab3163bba6f042_1080x.jpeg"
                  alt="Trainers"
                />
              </div>
              <p
                class="text-[18px] group-hover:underline p-4 md:text-[28px] font-bold text-[#fcfbf4] absolute bottom-10"
              >
                Brownm Summer Oversized Waffle Letter Mens T-shirts Short...
              </p>
            </NuxtLink>

            <NuxtLink
              class="w-full h-full max-h-[600px] max-[1225px]:max-h-[440px] max-[992px]:max-h-[380px] max-[772px]:max-h-[330px] group relative bg-white m-4 duration-300 overflow-hidden"
              to="/product/66129e982f55c360c94bd724"
            >
              <div class="w-full rounded-md bg-gray-200 lg:aspect-none overflow-hidden">
                <img
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full hover:scale-[1.03] duration-300 max-h-[600px]"
                  src="https://img.ltwebstatic.com/images3_pi/2023/06/02/168569643833cb0ba9b3e415efd2dfa1b0776fe6eb_thumbnail_720x.webp"
                  alt="Trainers"
                />
              </div>
              <p
                class="text-[18px] group-hover:underline p-4 md:text-[28px] font-bold text-[#fcfbf4] absolute bottom-10"
              >
                Manfinity Homme Homens Gráfico De Slogan Camiseta
              </p>
            </NuxtLink>
          </div>

          <div class="col-span-12 md:col-span-6 flex items-center flex-col sm:flex-row">
            <NuxtLink
              class="w-full h-full max-h-[600px] max-[1225px]:max-h-[440px] max-[992px]:max-h-[380px] max-[772px]:max-h-[330px] group relative bg-white m-4 duration-300 overflow-hidden"
              to="/product/66129e9a2f55c360c94bd727"
            >
              <div class="w-full rounded-md bg-gray-200 lg:aspect-none overflow-hidden">
                <img
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full hover:scale-[1.03] duration-300 max-h-[600px]"
                  src="https://i.pinimg.com/736x/d8/fe/19/d8fe19282f306c026565410469072769.jpg"
                  alt="Trainers"
                />
              </div>
              <p
                class="text-[18px] group-hover:underline p-4 md:text-[28px] font-bold text-[#fcfbf4] absolute bottom-10"
              >
                Contra Oversized Short Sleeve Tee Shirt
              </p>
            </NuxtLink>

            <NuxtLink
              class="w-full h-full max-h-[600px] max-[1225px]:max-h-[440px] max-[992px]:max-h-[380px] max-[772px]:max-h-[330px] group relative bg-white m-4 duration-300 overflow-hidden"
              to="/product/66129e9b2f55c360c94bd72a"
            >
              <div class="w-full rounded-md bg-gray-200 lg:aspect-none overflow-hidden">
                <img
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full hover:scale-[1.03] duration-300 max-h-[600px]"
                  src="https://img.ltwebstatic.com/images3_pi/2023/07/13/1689216389f25d7a1cc2e4180e9bf880ef48f5d876.webp"
                  alt="Trainers"
                />
              </div>
              <p
                class="text-[18px] group-hover:underline p-4 md:text-[28px] font-bold text-[#fcfbf4] absolute bottom-10"
              >
                Manfinity Homme Loose Fit Men's Slogan Graphic T-Shirt
              </p>
            </NuxtLink>
          </div>
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
