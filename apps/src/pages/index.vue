<template>
  <section class="text-center lg:text-left overflow-hidden">
    <home-feature />
    <!-- <div class="text-center mx-auto max-w-[1500px] py-10">
      <div class="max-h-[200px] max-w-[400px] mx-auto h-full w-full">
        <img src="https://i.postimg.cc/KzL8qkP1/Untitled-design.png" alt="losheaven" class="w-full h-full" />
      </div>
      <NuxtLink to="/product" class="rounded-md px-6 p-3 text-sm font-semibold bg-black text-white hover:bg-gray-800"
        >Shop Now</NuxtLink
      >
    </div> -->
    <home-gallery />
    <!-- <home-founder-review/> -->
    <home-new-arrival />
    <home-help-section />
  </section>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
const productStore = useProductStore();

useHead({
  title: 'Shop Stylish Oversized Clothing in Nepal at Losheaven - Nepali Startup',
  meta: [
    {
      name: 'description',
      content:
        'Discover a wide range of trendy oversized clothing in Nepal at Losheaven. Shop now for the latest oversized t-shirts, hoodies, and more.',
    },
    {
      name: 'keywords',
      content:
        'oversized clothing in Nepal, stylish clothing Nepal, Nepali fashion, oversized t-shirts Nepal, losheaven clothing Nepal, losheaven Nepal clothing',
    },
  ],
});

useSchemaOrg([
  {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    brand: 'losheaven',
    name: 'losheaven',
    url: 'https://www.losheaven.com/',
    logo: 'https://www.losheaven.com/images/logo.png',
    description: '',
    sameAs: ['https://www.facebook.com/profile.php?id=61557557091843', 'https://www.instagram.com/losheaven17/'],
  },
]);
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
