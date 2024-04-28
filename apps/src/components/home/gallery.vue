<template>
  <h2
    class="text-[18px] w-fit mx-auto text-center pt-8 pb-8 relative after:content-[''] after:absolute after:bottom-[20px] after:left-0 after:w-full after:h-[2px] after:bg-black"
  >
    A FEW OF OUR FAVOURITES
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
    <div class="col-span-1 relative max-h-[500px] h-[500px] bg-gray-100">
      <nuxt-img
        src="https://i.postimg.cc/yNr6m6XW/losheaven-1.png"
        alt=""
        loading="lazy"
        class="h-full w-full object-cover"
        height="500"
        width="500"
      />
      <div class="absolute top-1/2 left-1/2 translate-x-[-50%] z-[2] text-white">
        <p class="text-[18px]">LOSHEAVEN</p>
      </div>
      <div class="absolute top-0 left-0 h-full w-full hover:bg-gray-900 hover:opacity-[10%]"></div>
    </div>
    <div class="col-span-1 relative max-h-[500px] h-[500px] bg-gray-100">
      <nuxt-img
        src="https://i.postimg.cc/DfRgCqyP/losheaven-2.png"
        alt=""
        loading="lazy"
        class="h-full w-full object-cover"
        height="500"
        width="500"
      />
      <div class="absolute top-1/2 left-1/2 translate-x-[-50%] z-[2] text-white">
        <p class="text-[18px]">LOSHEAVEN</p>
      </div>
      <div class="absolute top-0 left-0 h-full w-full hover:bg-gray-900 hover:opacity-[10%]"></div>
    </div>
    <div class="col-span-1 relative max-h-[500px] h-[500px] bg-gray-100">
      <nuxt-img
        src="https://i.postimg.cc/L4vrbQZF/losheaven-3.png"
        alt=""
        loading="lazy"
        class="h-full w-full object-cover"
        height="500"
        width="500"
      />
      <div class="absolute top-1/2 left-1/2 translate-x-[-50%] z-[2] text-white">
        <p class="text-[18px]">LOSHEAVEN</p>
      </div>
      <div class="absolute top-0 left-0 h-full w-full hover:bg-gray-900 hover:opacity-[10%]"></div>
    </div>
  </div>
</template>
