<template>
  <section class="text-center lg:text-left overflow-hidden">
    <div class="relative md:max-h-[90vh] max:height-[50vh] md:h-[90vh] h-[50vh] aspect-w-16 aspect-h-9">
      <video muted autoplay class="absolute inset-0 w-full h-full object-cover">
        <source src="./comming.mp4" type="video/mp4" />
      </video>
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-[40%]"></div>
      <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
    </div>
    <div class="text-center max-w-[400px] max-h-[200px] h-full w-full py-10 mx-auto">
      <img src="https://i.postimg.cc/KzL8qkP1/Untitled-design.png" alt="losheaven" class="w-full h-full" />
    </div>
    <div id="order">
      <div class="pt-8 md:pt-16 sm:pt-32">
        <h2 class="text-[18px] md:text-[28px] font-bold text-center text-gray-600">Check out our varied samples!</h2>
        <div class="mt-6 grid sm:grid-cols-12 grid-cols-6 aspect-1">
          <div class="col-span-6 md:col-span-6 flex items-center flex-col sm:flex-row">
            <div class="w-full h-full max-h-[800px] bg-gray-200 lg:aspect-none overflow-hidden">
              <img
                class="h-full w-full max-h-[800px] object-cover lg:h-full lg:w-full"
                src="https://i.pinimg.com/564x/bf/9e/15/bf9e15b11ab3ff8df4ca6e441ab20fb6.jpg"
                alt="Trainers"
              />
            </div>
          </div>
          <div
            class="col-span-6 md:col-span-6 flex items-center flex-col sm:flex-row"
            to="/product/66129e982f55c360c94bd724"
          >
            <div class="w-full h-full max-h-[800px] bg-gray-200 lg:aspect-none overflow-hidden">
              <img
                class="h-full w-full max-h-[800px] object-cover object-top lg:h-full lg:w-full"
                src="https://i.postimg.cc/P5GbRRRS/packaging-box.jpg"
                alt="Trainers"
              />
            </div>
          </div>
          <div class="col-span-6 md:col-span-6 flex items-center flex-col sm:flex-row">
            <div class="w-full h-full bg-gray-200 lg:aspect-none overflow-hidden">
              <img
                class="h-full w-full max-h-[800px] object-cover lg:h-full lg:w-full"
                src="https://i.pinimg.com/564x/56/0f/bc/560fbcb050dc41564204ace231bb9b49.jpg"
                alt="Trainers"
              />
            </div>
          </div>
          <div
            class="col-span-6 md:col-span-6 flex items-center flex-col sm:flex-row"
            to="/product/66129e9b2f55c360c94bd72a"
          >
            <div class="w-full h-full max-h-[800px] bg-gray-200 lg:aspect-none overflow-hidden">
              <img
                class="h-full w-full object-cover object-top lg:h-full lg:w-full"
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
