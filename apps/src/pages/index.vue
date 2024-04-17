<template>
  <section class="text-center lg:text-left overflow-hidden">
    <div class="relative md:max-h-[90vh] max:height-[50vh] md:h-[90vh] h-[50vh] aspect-w-16 aspect-h-9">
      <video muted autoplay class="absolute inset-0 w-full h-full object-cover">
        <source src="./comming.mp4" type="video/mp4" />
      </video>
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-[40%]"></div>
      <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
    </div>
    <div class="text-center mx-auto max-w-[1500px] py-10">
      <div class="max-h-[200px] max-w-[400px] mx-auto h-full w-full">
        <img src="https://i.postimg.cc/KzL8qkP1/Untitled-design.png" alt="losheaven" class="w-full h-full" />
      </div>
      <NuxtLink to="/product" class="rounded-md px-6 p-3 text-sm font-semibold bg-black text-white hover:bg-gray-800"
        >Shop Now</NuxtLink
      >
    </div>
    <div id="order">
      <div class="">
        <h2 class="text-[18px] md:text-[28px] font-bold text-center text-gray-600">Check out our varied samples!</h2>
        <div class="mt-6 grid sm:grid-cols-12 grid-cols-6 aspect-1">
          <div class="col-span-6 md:col-span-6 flex items-center flex-col sm:flex-row">
            <div class="w-full h-full bg-gray-200 lg:aspect-none overflow-hidden">
              <img
                class="h-full w-full object-cover lg:h-full lg:w-full"
                src="https://i.pinimg.com/564x/78/43/ec/7843ec2518693010f7ad2d9003b9e6bd.jpg"
                alt="Trainers"
              />
            </div>
          </div>
          <div class="col-span-6 md:col-span-6 flex items-center flex-col sm:flex-row">
            <div class="w-full h-full bg-gray-200 lg:aspect-none overflow-hidden">
              <img
                class="h-full w-full object-cover lg:h-full lg:w-full"
                src="https://i.postimg.cc/P5GbRRRS/packaging-box.jpg"
                alt="Trainers"
              />
            </div>
          </div>
          <div class="col-span-6 md:col-span-6 flex items-center flex-col sm:flex-row">
            <div class="w-full h-full bg-gray-200 lg:aspect-none overflow-hidden">
              <img
                class="h-full w-full object-cover lg:h-full lg:w-full"
                src="https://i.pinimg.com/564x/56/0f/bc/560fbcb050dc41564204ace231bb9b49.jpg"
                alt="Trainers"
              />
            </div>
          </div>
          <div class="col-span-6 md:col-span-6 flex items-center flex-col sm:flex-row">
            <div class="w-full h-full bg-gray-200 lg:aspect-none overflow-hidden">
              <img
                class="h-full w-full object-cover lg:h-full lg:w-full"
                src="https://i.pinimg.com/564x/f9/b7/e2/f9b7e29b791f7643c52cf4f0e2ea05e2.jpg"
                alt="Trainers"
              />
            </div>
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
  title: '',
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
