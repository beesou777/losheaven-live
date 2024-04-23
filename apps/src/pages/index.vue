<template>
  <section class="text-center lg:text-left overflow-hidden">
    <home-feature />
    <home-gallery />
    <home-new-arrival />
    <home-help-section />
    <div class="bg-gray-300 p-8">
      <div class="max-w-[1450px] mx-auto">
        <h1 class="text-3xl font-semibold mb-3">Discover Trendy Losheaven Clothing in Nepal</h1>
        <p class="md:text-[18px] text-[16px]">
          Explore a diverse collection of stylish
          <a href="/product" class="underline font-semibold">oversized t-shirts</a> and clothing in Nepal at Losheaven.
        </p>
        <p class="md:text-[18px] text-[16px]">
          Losheaven offers a wide range of oversized clothing t-shirts designed to elevate your fashion statement.
        </p>
        <p class="md:text-[18px] text-[16px]">
          Shop now to stay ahead in Nepali fashion trends with Losheaven's premium quality clothing line.
        </p>
        <p class="md:text-[18px] text-[16px]">
          Experience the perfect blend of comfort and style with Losheaven's exclusive collection of oversized clothing.
        </p>
        <p class="md:text-[18px] text-[16px]">
          Visit Losheaven today and redefine your wardrobe with our latest arrivals.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
const productStore = useProductStore();

useHead({
  title: 'Losheaven Clothing in Nepal',
  meta: [
    {
      name: 'description',
      content:
        'Losheaven crafts unique apparel experiences. Discover trendy, oversized clothing designed to empower your style and individuality. Shop now!',
    },
    {
      name: 'keywords',
      content:
        'losheaven clothing, losheaven clothing Nepal, oversized clothing, trendy clothing Nepal, oversized t-shirts Nepal, Nepali fashion',
    },
    {
      name: 'canonical',
      content: 'https://www.losheaven.com/',
    },
    {
      name: 'Publisher',
      content: 'Losheaven Clothing',
    },
    {
      name: 'X-Robots-Tag',
      content: 'index, follow',
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
    description:
      'Discover trendy Losheaven clothing in Nepal. Shop now for oversized t-shirts, hoodies, and more. Elevate your fashion with Losheaven.',
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

.content {
  margin-top: 30px;
}
</style>
