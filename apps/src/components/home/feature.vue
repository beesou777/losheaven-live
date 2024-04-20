<template>
  <div class="relative w-full h-screen">
    <NuxtImg
      src="https://i.postimg.cc/1RVXphJb/63364c192129093-65d6b06bbb968.jpg"
      alt="losheaven oversize thsirt"
      class="w-full h-full object-cover"
      :quantity="85"
      :loading="'lazy'"
      format="jpg"
    />
    <div class="absolute top-0 left-0 h-full w-full bg-gray-900 opacity-[15%]"></div>
    <div
      class="max-w-[800px] w-full p-5 mx-auto absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <h1 class="md:text-[64px] py-3 text-[42px] font-medium text-white md:leading-[4rem]">
        Beat the Heat with Oversized Tees!
      </h1>
      <p class="text-white text-[16px] md:text-[20px]">
        Get summer-ready with our oversized tees! Nab a cool 10% off using our influencer code. But move fast, we've
        only got a limited amount!
      </p>
      <NuxtLink to="/product" class="text-white px-6 underline text-[18px] pt-5">SHOP NOW</NuxtLink>
    </div>
  </div>
  <div class="w-full bg-gray-200">
    <p class="px-2 text-center py-10 max-w-[750px] mx-auto text-gray-600">
      Losheaven is a clothing brand on the rise, dedicated to crafting the perfect clothing experience for you. We're
      more than just threads and fabrics - we're about empowering you to look and feel your best, providing you with
      clothing that complements your unique style.
    </p>
  </div>
</template>
