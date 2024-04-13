<template>
  <section class="text-center lg:text-left overflow-hidden">
    <div class="relative md:max-h-[90vh] max:height-[50vh] md:h-[90vh] h-[50vh] aspect-w-16 aspect-h-9">
      <video muted autoplay loop class="absolute inset-0 w-full h-full object-cover">
        <source src="./comming.mp4" type="video/mp4" />
      </video>
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-[40%]"></div>
      <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
    </div>
    <div id="order">
      <div class="md:px-10 px-5 py-8 md:py-16 sm:py-24 lg:px-8">
        <h2 class="text-[18px] md:text-[28px] font-bold text-center text-gray-600">Our Samples</h2>
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
