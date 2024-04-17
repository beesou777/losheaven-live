<template>
  <!-- ====== About Section Start -->
  <section class="overflow-hidden pt-20 px-[20px] pb-12 lg:pt-[10px] lg:pb-[90px] bg-white">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center justify-between -mx-4">
        <div class="w-full px-4 lg:w-6/12">
          <div class="flex items-center -mx-3 sm:-mx-4">
            <div class="w-full px-3 sm:px-4 xl:w-1/2">
              <div class="py-3 sm:py-4">
                <img src="https://i.postimg.cc/xTcbc7qG/6.jpg" alt="Comfortable clothing" class="w-full rounded-2xl" />
              </div>
              <div class="py-3 sm:py-4">
                <img
                  src="https://i.postimg.cc/T182wMj7/7c06e403-8271-4cf9-968a-87bc805f9456.jpg"
                  alt="Trendy fashion"
                  class="w-full rounded-2xl"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:px-4 xl:w-1/2">
              <div class="relative z-10 my-4 max-h-[500px] h-full">
                <img
                  src="https://i.postimg.cc/Rh6hVqLr/06549019-020a-4e67-a5cc-a73e69b3d9c4.jpg"
                  alt="Fashionable clothing"
                  class="w-full rounded-2xl h-full object-cover"
                />
                <span class="absolute -right-7 -bottom-7 z-[-1]">
                  <!-- Decorative SVG -->
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div class="mt-10 lg:mt-0">
            <span class="block mb-4 text-lg font-semibold lh-color">Why Choose Us</span>
            <h2 class="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
              Elevating Your Style & Comfort with Losheaven Fashion
            </h2>
            <p class="mb-8 text-base text-body-color">
              Welcome to Losheaven, your ultimate destination for fashion that blends comfort and style seamlessly.
              We're committed to providing you with the finest clothing that not only looks good but also feels
              incredible.
            </p>
            <p class="mb-8 text-base text-body-color">
              Our collection is meticulously curated to cater to your modern lifestyle needs. From cozy loungewear to
              trendy essentials, each piece is designed to elevate your wardrobe effortlessly. Whether you're relaxing
              at home or stepping out for an adventure, Losheaven has you covered.
            </p>
            <p class="mb-8 text-base text-body-color">
              At Losheaven, we believe in empowering individuals to express themselves confidently through their
              clothing. Our versatile range of basics and statement pieces ensures that you always have the perfect
              outfit for any occasion. Discover the joy of dressing well without compromising on comfort with Losheaven.
            </p>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center py-3 text-base font-medium text-white border border-transparent rounded-md px-7 lh-primary hover:bg-opacity-90"
            >
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== About Section End -->
</template>

<script setup lang="ts">
import { ref } from 'vue';

useHead({
  title: 'Losheaven - Elevating Your Style & Comfort',
  meta: [
    {
      name: 'description',
      content:
        'Discover Losheaven, your ultimate destination for fashion that blends comfort and style seamlessly. Elevate your wardrobe with our versatile range of clothing designed to empower you to express yourself confidently.',
    },
    {
      name: 'keywords',
      content:
        'Losheaven, fashion, comfort, style, clothing, loungewear, essentials, statement pieces, modern lifestyle',
    },
  ],
});
</script>
