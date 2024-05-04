<template>
  <!-- component -->
  <nav class="flex pt-10 px-[30px] overflow-x-hidden" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li class="inline-flex items-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px]">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
        >
          <svg
            class="w-3 h-3 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
            />
          </svg>
          Home
        </NuxtLink>
      </li>
      <li class="whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px]">
        <div class="flex items-center">
          <svg
            class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <NuxtLink
            to="/product"
            class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >Product</NuxtLink
          >
        </div>
      </li>
      <li aria-current="page whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px]">
        <div class="flex items-center">
          <svg
            class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="ms-1 whitespace-nowrap text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{{
            getProduct?.name
          }}</span>
        </div>
      </li>
    </ol>
  </nav>
  <div class="grid grid-cols-12 py-8 2xl:px-20 md:px-6 px-2">
    <div class="col-span-12 lg:col-span-7 pr-0 md:pr-8">
      <div class="md:grid flex flex-row items-center h-full overflow-x-auto md:min-w-full md:grid-cols-4 aspect-1">
        <div
          class="md:col-span-2 col-span-4 bg-gray-100 aspect-1 min-w-[400px] md:min-w-full min-h-[400px] h-full overflow-x-auto"
          v-for="(item, index) in getProduct?.images"
          :key="index"
        >
          <nuxt-img
            loading="lazy"
            class="h-full w-full object-cover lg:h-full lg:w-full min-w-full"
            :alt="getProduct?.name"
            :src="item"
            width="400"
            height="400"
          />
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-5 md:mt-0 mt-2 top-[100px] overflow-auto h-fit">
      <h2 class="text-[14px] md:text-[16px] title-font text-gray-500 tracking-widest">{{ getProduct?.category }}</h2>
      <h1 class="text-gray-900 text-[20px] md:text-[26px] title-font font-medium mb-1">{{ getProduct?.name }}</h1>
      <div class="flex mb-4 items-center">
        <span class="title-font font-medium text-2xl text-gray-900">NRS{{ getProduct?.price }}</span>
        <span class="flex py-2 ml-3 pl-3 border-l border-gray-500">
          <a
            href="https://www.facebook.com/profile.php?id=61557557091843"
            target="_blank"
            area-label="Facebook"
            class="text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          <a href="/contact" area-label="Contact" class="ml-2 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
              ></path>
            </svg>
          </a>
        </span>
      </div>
      <p class="leading-relaxed text-[16px] md:text-[18px]">
        {{ getProduct?.description }}
      </p>
      <div class="mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
        <h2 class="text-[15px] md:text-[18px] font-bold text-gray-800">SIZE : FREE SIZE</h2>

        <div>
          <h2 class="text-[15px] md:text-[18px] font-bold text-gray-800">Color</h2>
          <div class="flex flex-wrap gap-4 mt-4">
            <button
              aria-label="color"
              type="button"
              class="w-12 h-12 border-2 hover:border-gray-800 border-gray-800 rounded-full shrink-0"
              :style="{ backgroundColor: getProduct && getProduct.color ? '#' + getProduct.color.color_code : '#fff' }"
            ></button>
          </div>
        </div>
        <div class="mt-6">
          <p>
            visit our
            <strong>
              <a class="underline" href="https://www.instagram.com/losheaven.official/" target="_blank"
                >Instagram profile</a
              >
            </strong>
            or use <strong> ROBEK </strong> for 10% discount on all orders
          </p>
        </div>
      </div>
      <div class="flex gap-3 max-[512px]:flex-col">
        <button
          aria-label="ciew cart"
          @click="checkout"
          class="w-full text-center cursor-pointer text-white lh-primary border-0 py-4 px-6 focus:outline-none rounded"
        >
          View Cart
        </button>
        <button
          aria-label="add to cart"
          @click="addToCart"
          class="w-full text-[#333] border border-1 py-4 px-6 focus:outline-none hover:bg-[#f6f6f6] ease-in duration-300 rounded"
        >
          PRE ORDER NOW
        </button>
      </div>

      <!-- other detils -->
      <div class="py-3 border-t-2 mt-6">
        <h2 class="text-[24px] font-medium">Other Details:</h2>
        <div class="mt-4">
          <h2 class="text-[18px] font-semibold">Clothing Feature Highlights:</h2>
          <ul class="list-disc list-inside">
            <li>Designed for individuals who prefer a trendy, loose, or Jhole style of t-shirt.</li>
            <li>Recommended for individuals with a height of 5.2ft or taller.</li>
            <li>
              Looks great when worn with high-waisted bottoms like jeans, skirts, or shorts, giving you a balanced and
              stylish look.
            </li>
            <li>Not suitable for those who prefer tight-fitting clothes</li>
            <li>Available in one size fits all (free size), ensuring convenience for all wearers.</li>
          </ul>
        </div>
        <div class="mt-4">
          <h2 class="text-[18px] font-semibold">Fabric & Care:</h2>
          <ul class="list-disc list-inside">
            <li>Made from cotton and polyester <strong>(Thai cotton terry)</strong></li>
            <li>Ethically crafted in Nepal</li>
            <li>Do not wash on <strong>Washing Machine</strong></li>
            <li>Hand Wash Only</li>
          </ul>
        </div>
        <div class="mt-4">
          <h2 class="text-[18px] font-semibold">Size & Fit :</h2>
          <p>Fit: Loose Fit / Over Size Fit</p>
          <p>Size: Free size</p>
        </div>
        <div class="mt-4">
          <h2 class="text-[18px] font-semibold">Shipping & Returns :</h2>
          <p>
            The shipping cost is <strong>FREE</strong> within Kathmandu Valley. For returns, please refer to our terms
            and conditions at
            <strong
              ><a class="underline" href="/term-and-condition" area-label="term and condition"
                >term-and-condition</a
              ></strong
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- related product -->
  <div class="py-8 px-2 md:px-6">
    <h2 class="text-[24px] font-semibold pb-3">You may also like</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div
        v-for="(items, index) in relatedProducts"
        :key="index"
        class="relative bg-white rounded-2xl cursor-pointer group transition-all"
        style="width: 100%; height: 100%"
      >
        <NuxtLink
          :to="`/product/${items.name.toLowerCase().split(' ').join('-')}/${items._id}`"
          class="pb-4 text-decoration-none flex items-start flex-col hover:bg-gray-100 rounded"
          style="width: 100%; height: 100%"
        >
          <div class="w-full h-[400px] lg:h-[550px] bg-gray-200 overflow-hidden">
            <nuxt-img
              loading="lazy"
              :src="items?.images[0]"
              :alt="items?.name"
              height="400"
              width="400"
              class="object-cover w-full h-full hover:scale-[1.02] duration-300 ease-in"
            />
          </div>
          <div class="py-2">
            <p class="text-[12px] md:text-[14px] text-gray-700">{{ items?.category }}</p>
            <h3 class="text-[14px] md:text-[16px] font-medium text-gray-800 group-hover:underline">
              {{ items?.name }}
            </h3>
            <h4 class="text-lg text-gray-700 font-bold py-1">NRS {{ items.price }}</h4>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'nuxt/app';
import { computed, onMounted, ref } from 'vue';
import { useAuthStore } from '../../composables/store/auth.store';
import { toast } from 'vue3-toastify';

const quantity = ref<number>(1);
const size = ref<string>('FREE SIZE');
const color = ref<string>('');
const productStore = useProductStore();
const authStore = useAuthStore();
const cartStore = useCartStore();
const router = useRouter();
const axios = useApi();

const relatedProducts = ref([]);

onMounted(async () => {
  await productStore.getSingleProduct(router.currentRoute.value.params.slug[1]);
  try {
    const category = 't-shirt'; // You can extract the category from getProduct.value or set it statically
    const productId = router.currentRoute.value.params.slug[1];
    const { data } = await axios.get(`/product/get-related-category-product`, {
      params: { category, productId },
    });
    relatedProducts.value = data;
  } catch (error) {
    console.error(error);
  }
});

const getProduct = computed(() => {
  return productStore.singleProduct;
});

const increaseQuantity = () => {
  quantity.value += 1;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value -= 1;
  }
};

const addToCart = async () => {
  const cookie = useCookie('customer-access').value;
  if (!cookie) {
    toast.error('Please Login to add product to cart');
    router.push('/login');
    return;
  }
  const data = {
    product: getProduct.value._id,
    quantity: quantity.value,
    size: size.value,
    color: {
      color_code: getProduct.value.color.color_code,
      color_name: getProduct.value.color.color_name,
    },
  };
  const response = await cartStore.addToCart(data);
  if (response.status === 200) {
    toast.success('Product added to cart');
    cartStore.showCart = true;
  }
};

const handleLoginSuccess = () => {
  authStore.isLogined = false;
};

const checkout = async () => {
  try {
    const isLoggedIn = !!useCookie('customer-access').value;
    if (!isLoggedIn) {
      toast.error('Please Login to view cart');
      authStore.isLogined = true;
      return;
    }

    // Check if cart data is available and has products
    const hasProductsInCart =
      cartStore.cartData && cartStore.cartData.cartData && cartStore.cartData.cartData.length > 0;

    if (!hasProductsInCart) {
      toast.error('You need to have products in your cart to view your cart');
      return;
    }

    cartStore.showCart = true;
  } catch (error) {
    // Handle error fetching cart data
    console.error('Error fetching cart data:', error);
    toast.error('Error fetching cart data. Please try again later.');
  }
};

const updateSize = (color: any) => {
  size.value = color;
};

useHead({
  title: getProduct?.value?.name,
  meta: [
    {
      name: 'description',
      content:
        getProduct.value?.description ||
        'Preto Casual Collar Meia manga Tecido de malha Desenho Animado,Slogan Embellished Elasticidade Baixa Tops Masculino',
    },
    {
      property: 'og:title',
      content: getProduct?.value?.name || "Loose Fit Men's Figure Print Drop Shoulder black T-Shirt",
    },
    {
      property: 'og:description',
      content:
        getProduct?.value?.description ||
        'Preto Casual Collar Meia manga Tecido de malha Desenho Animado,Slogan Embellished Elasticidade Baixa Tops Masculino',
    },
    {
      property: 'og:image',
      content:
        getProduct?.value?.images[0] || 'https://i.pinimg.com/564x/78/43/ec/7843ec2518693010f7ad2d9003b9e6bd.jpg',
    },
    {
      name: 'twitter:card',
      content:
        'https://img.ltwebstatic.com/images3_pi/2023/05/30/168541035154da22a2dc571e2fd77b13b21581a969_thumbnail_720x.webp',
    },
    {
      name: 'twitter:title',
      content: getProduct?.value?.name || "Loose Fit Men's Figure Print Drop Shoulder black T-Shirt",
    },
    {
      name: 'twitter:description',
      content:
        getProduct?.value?.description ||
        'Preto Casual Collar Meia manga Tecido de malha Desenho Animado,Slogan Embellished Elasticidade Baixa Tops Masculino',
    },
    {
      name: 'twitter:image',
      content:
        getProduct?.value?.images[0] || 'https://i.pinimg.com/564x/78/43/ec/7843ec2518693010f7ad2d9003b9e6bd.jpg',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://www.losheaven.com/product/${router.currentRoute.value.params.slug[0]}/${router.currentRoute.value.params.slug[1]}`,
    },
  ],
});

useSchemaOrg([
  {
    '@context': 'http://schema.org/',
    '@type': 'Product',
    '@id': getProduct.value?._id,
    name: getProduct.value?.name,
    category: 't-shirt',
    releaseDate: '',
    image: getProduct.value?.images[0],
    identifier: getProduct.value?._id,
    description: getProduct.value?.description,
    disambiguatingDescription: 't-shirt',
    manufacturer: {
      '@type': 'Organization',
      name: 'losheaven',
    },
  },
]);
</script>
