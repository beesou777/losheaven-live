<template>
  <div class="flex flex-wrap">
    <div class="md:w-1/2 pr-4 pl-4 w-full">
      <div class="bg-white my-3 p-6 rounded-2">
        <div class="input_feild">
          <label class="py-2 head-5">
            Product Name:
            <span class="text-red-600">*</span>
          </label>
          <input type="text" v-model="product_name" class="w-full border py-2 rounded" required />
        </div>

        <div class="input_feild">
          <label class="py-2 head-5"> Product Description </label>
          <textarea v-model="product_desc" class="w-full border py-2 rounded min-h-[150px] max-h-[150px]"></textarea>
        </div>
      </div>

      <div class="bg-white my-3 p-6 rounded-2">
        <div class="input_feild">
          <label class="py-2 head-5"> Discount Price </label>
          <input type="number" v-model="discount" class="w-full border py-2 rounded" />
        </div>

        <div class="input_feild">
          <label class="py-2 head-5">
            Price
            <span class="text-red-600">*</span>
          </label>
          <input type="number" v-model="actual_price" class="w-full border py-2 rounded" required />
        </div>

        <div class="input_feild">
          <label class="py-2 head-5">
            materials
            <span class="text-red-600">*</span>
          </label>
          <input type="text" v-model="materials" class="w-full border py-2 rounded" required />
        </div>
        <div class="input_feild">
          <label class="py-2 head-5">
            Stock
            <span class="text-red-600">*</span>
          </label>
          <input type="number" v-model="quantity" class="w-full border py-2 rounded" required />
        </div>

        <div class="input_feild">
          <label class="py-2 head-5">
            Manufacturer
            <span class="text-red-600">*</span>
          </label>
          <input type="text" v-model="manufacturer" class="w-full border py-2 rounded" required />
        </div>
      </div>
    </div>
    <div class="md:w-1/2 pr-4 pl-4 w-full">
      <div class="bg-white p-6 my-3 rounded-2">
        <h5 class="pb-4 large t-primary">Product Image <span class="text-red-600">*</span></h5>
        <div class="text-center">
          <input
            type="text"
            id="product_image"
            name="product_image"
            class="w-full border py-2 rounded"
            v-model="product_image"
            placeholder="Enter image URLs separated by commas"
            required
          />
        </div>
      </div>

      <div class="input_feild bg-white my-3 p-6 rounded-2">
        <label class="py-2 head-5">
          Category
          <span class="text-red-600">*</span>
        </label>
        <input type="text" v-model="product_category" class="w-full border py-2 rounded" required />
      </div>

      <div class="button-wrapper p-6 w-full bg-white rounded-2">
        <button class="bg-amber-500 text-white py-4 rounded-[12px] w-full" @click="updateProduct">Add product</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// // imports
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'nuxt/app';

const productStore = useProductStore();
const router = useRouter();
// variables
const product_name = ref<string>('');
const product_desc = ref<string>('');
const discount = ref<number>();
const actual_price = ref<number>();
const quantity = ref<number>();
const manufacturer = ref<string>('');
const product_category = ref<string>('');
const product_image = ref<string>();
const materials = ref<number>();

onMounted(async () => {
  await productStore.getSingleProduct(router.currentRoute.value.params.id);
  product_name.value = productStore.singleProduct?.name;
  product_desc.value = productStore.singleProduct?.description;
  discount.value = productStore.singleProduct.discounted_price;
  actual_price.value = productStore.singleProduct.price;
  quantity.value = productStore.singleProduct.stock;
  manufacturer.value = productStore.singleProduct.manufacturer;
  product_category.value = productStore.singleProduct.category;
  product_image.value = productStore.singleProduct?.images?.join(',');
  materials.value = productStore.singleProduct.materials;
});

const updateProduct = () => {
  const imageUrlsArray = product_image.value.split(',');
  if (product_name.value.length == 0) {
    alert('Please enter product name');
  } else if (product_desc.value.length == 0) {
    alert('Please enter product description');
  } else if (discount.value == null) {
    alert('Please enter discount price');
  } else if (actual_price.value == null) {
    alert('Please enter actual price');
  } else if (quantity.value == null) {
    alert('Please enter quantity');
  } else if (manufacturer.value.length == 0) {
    alert('Please enter product sku');
  } else if (product_category.value.length == 0) {
    alert('Please enter product category');
  } else if (product_image.value.length == 0) {
    alert('Please enter product image');
  } else {
    const data = {
      product_name: product_name.value,
      materials: materials.value,
      product_desc: product_desc.value,
      discount: discount.value,
      actual_price: actual_price.value,
      quantity: quantity.value,
      manufacturer: manufacturer.value,
      product_category: product_category.value,
      product_image: imageUrlsArray,
    };
    productStore.updateProduct(data, router.currentRoute.value.params.id);
    // router.push('/dashboard/product')
  }
};
</script>
