<template>
  <footer class="text-center bg-gray-900 text-white">
    <div class="py-[50px] max-w-[90vw_42em] mx-auto px-3">
      <h2 class="text-[20px] md:text-[2rem] mx-auto max-w-[700px]">
        A world of timeless designs that honour the people  who make them and the places they’re made.
      </h2>
      <p class="mt-[32px] text-[14px] md:text-[16px]">
        Get 8% off using our code <strong>LOSHEAVEN</strong> as thanks for staying in touch.
      </p>
      <ul
        class="mx-auto max-w-[600px] text-gray-300 font-medium flex flex-wrap justify-center gap-[0px_20px] mt-[2.5rem]"
      >
        <li class="my-2">
          <NuxtLink to="/" class="text-[14px] py-2 md:hover:underline md:text-[16px]">Home</NuxtLink>
        </li>
        <li class="my-2">
          <NuxtLink to="/product" class="text-[14px] py-2 md:hover:underline md:text-[16px]">Product</NuxtLink>
        </li>
        <li class="my-2">
          <NuxtLink to="/about-us" class="text-[14px] py-2 md:hover:underline md:text-[16px]">About us</NuxtLink>
        </li>
        <li class="my-2">
          <NuxtLink to="/contact" class="text-[14px] py-2 md:hover:underline md:text-[16px]">Contact</NuxtLink>
        </li>
        <li class="my-2">
          <NuxtLink to="https://forms.gle/WShzaRzCtJSURELt5" class="text-[14px] py-2 md:hover:underline md:text-[16px]"
            >Carrers</NuxtLink
          >
        </li>
        <li class="my-2">
          <a href="https://www.facebook.com/profile.php?id=61557557091843" class="hover:underline py-2">Facebook</a>
        </li>
        <li class="my-2">
          <a href="https://www.instagram.com/losheaven17/" class="hover:underline py-2 md:hover:underline">Instagram</a>
        </li>
        <li class="my-2">
          <a href="/faq" class="hover:underline py-2 md:hover:underline">FAQ</a>
        </li>
        <li class="my-2">
          <NuxtLink to="/privacy-and-policy" class="hover:underline py-2 md:hover:underline">Privacy Policy</NuxtLink>
        </li>
        <li class="my-2">
          <NuxtLink to="/term-and-condition" class="hover:underline py-2 md:hover:underline"
            >Terms &amp; Conditions</NuxtLink
          >
        </li>
      </ul>
      <div class="mt-4 flex justify-center">
        <img
          src="https://i.postimg.cc/BvCBxLP3/los.png"
          alt="losheaven"
          height="60"
          width="200"
          class="h-[auto] w-[200px]"
        />
      </div>
      <p class="mt-[1rem] text-[14px] md:text-[16px]">&copy; LOSHEAVEN. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { name: companyName } = useAppConfig();
</script>
