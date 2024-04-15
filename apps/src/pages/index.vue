<template>
  <section class="text-center lg:text-left overflow-hidden">
    <div class="relative md:max-h-[90vh] max:height-[50vh] md:h-[90vh] h-[50vh] aspect-w-16 aspect-h-9">
      <video muted autoplay class="absolute inset-0 w-full h-full object-cover">
        <source src="./comming.mp4" type="video/mp4" />
      </video>
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-[40%]"></div>
      <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
    </div>
    <div id="order">
      <div class="md:px-10 px-5 py-8 md:py-16 sm:py-24 lg:px-8">
        <h2 class="text-[18px] md:text-[28px] font-bold text-center text-gray-600">Our Galerry</h2>
        <div class="mt-6 grid lg:grid-cols-12 grid-cols-6 aspect-1">
          <div class="col-span-6 md:col-span-3 flex items-center flex-col sm:flex-row">
            <div class="w-full h-full max-h-[400px] mx-w-[400px] bg-gray-200 lg:aspect-none overflow-hidden">
              <img
                class="h-full w-full object-cover object-top lg:h-full lg:w-full hover:scale-[1.03] duration-300"
                src="./men.jpg"
                alt="Trainers"
              />
            </div>
          </div>
          <div
            class="col-span-6 md:col-span-3 flex items-center flex-col sm:flex-row"
            to="/product/66129e982f55c360c94bd724"
          >
            <div class="w-full h-full max-h-[400px] bg-gray-200 lg:aspect-none overflow-hidden">
              <img
                class="h-full w-full object-cover lg:h-full lg:w-full hover:scale-[1.03] duration-300"
                src="./nayandra.jpg"
                alt="Trainers"
              />
            </div>
          </div>
          <div class="col-span-6 md:col-span-3 flex items-center flex-col sm:flex-row">
            <div class="w-full h-full bg-gray-200 lg:aspect-none overflow-hidden">
              <img
                class="h-full w-full max-h-[400px] object-cover object-top lg:h-full lg:w-full hover:scale-[1.03] duration-300"
                src="./women.jpg"
                alt="Trainers"
              />
            </div>
          </div>
          <div
            class="col-span-6 md:col-span-3 flex items-center flex-col sm:flex-row"
            to="/product/66129e9b2f55c360c94bd72a"
          >
            <div class="w-full h-full max-h-[400px] mx-w-[400px] bg-gray-200 lg:aspect-none overflow-hidden">
              <img
                class="h-full w-full max-h-[400px] object-cover object-top lg:h-full lg:w-full hover:scale-[1.03] duration-300"
                src="./t-shirt.jpg"
                alt="Trainers"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="px-4 max-w-[1540px] mx-auto">
      <div class="mx-auto max-w-3xl text-center">
        <h3 class="mb-6 text-3xl font-bold">Testimonials</h3>
        <p class="mb-6 pb-2 text-neutral-500 dark:text-neutral-300 md:mb-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate
          esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </div>

      <div class="grid gap-12 text-center md:grid-cols-2">
        <!--First Testimonial-->
        <div class="mb-6 md:mb-0">
          <div class="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(22).jpg"
              class="w-24 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300">
            "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut perspiciatis unde omnis."
          </p>
          <p class="italic">- Anna Morian</p>
        </div>

        <!--Second Testimonial-->
        <div class="mb-0">
          <div class="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(19).jpg"
              class="w-24 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300">
            "Neque cupiditate assumenda in maiores repudiandae mollitia architecto elit sed adipiscing elit."
          </p>
          <p class="italic">- Teresa May</p>
        </div>
      </div>
      <div class="text-center py-5">
        <button class="lh-primary text-white py-3 p-2 rounded" @click="$router.push('/reviews')">
          See All Reviews
        </button>
      </div>
    </section>
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
