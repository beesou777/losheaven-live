<template>
  <h2
    class="text-[18px] w-fit mx-auto text-center pt-8 pb-8 relative after:content-[''] after:absolute after:bottom-[20px] after:left-0 after:w-full after:h-[2px] after:bg-black"
  >
    OUR NEW ARRIVAL
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
    <div class="col-span-1 relative max-h-[600px] h-[600px] bg-gray-100">
      <nuxt-img
        src="https://i.postimg.cc/4NWgQcG8/face-tshirt.webp"
        alt=""
        loading="lazy"
        class="h-full w-full object-cover"
        height="600"
        width="500"
      />
      <div class="absolute top-[50%] left-[50%] translate-x-[-50%] z-[2] text-white">
        <NuxtLink
          to="product/loose-fit-men's-figure-print-drop-shoulder--skin-color-t-shirt/661efcd7b9cbf45920cbe56b"
          class="text-[20px] cursor-pointer"
          >ORDER</NuxtLink
        >
      </div>
      <div class="absolute top-0 left-0 h-full w-full hover:bg-gray-900 hover:opacity-[10%]"></div>
    </div>
    <div class="col-span-1 relative max-h-[600px] h-[600px] bg-gray-100">
      <nuxt-img
        src="https://i.postimg.cc/kGbD0yyv/black-tshirt.webp"
        alt=""
        class="h-full w-full object-cover"
        loading="lazy"
        height="500"
        width="500"
      />
      <div class="absolute top-[50%] left-[50%] translate-x-[-50%] z-[2] text-white">
        <NuxtLink
          to="product/loose-fit-men's-figure-print-drop-shoulder-black-t-shirt/661f02b121fd285dba1c4686"
          class="cursor-pointer text-[20px]"
          >ORDER</NuxtLink
        >
      </div>
      <div class="absolute top-0 left-0 h-full w-full hover:bg-gray-900 hover:opacity-[10%]"></div>
    </div>
    <div class="col-span-1 relative max-h-[600px] h-[600px] bg-gray-100">
      <nuxt-img
        src="https://i.postimg.cc/pdf50vZX/blue-tshirt.webp"
        alt=""
        class="h-full w-full object-cover"
        loading="lazy"
        format="jpg"
        height="500"
        width="500"
      />
      <div class="absolute top-[50%] left-[50%] translate-x-[-50%] z-[2] text-white">
        <NuxtLink
          to="product/loose-fit-men's-figure-print-drop-shoulder-royal-blue-t-shirt/661f03cb21fd285dba1c468e"
          class="cursor-pointer text-[20px]"
          >ORDER</NuxtLink
        >
      </div>
      <div class="absolute top-0 left-0 h-full w-full hover:bg-gray-900 hover:opacity-[10%]"></div>
    </div>
  </div>
</template>
