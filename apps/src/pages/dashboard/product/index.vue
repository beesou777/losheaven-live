<template>
  <div class="py-[27px]">
    <div class="flex justify-between items-center relative">
      <p class="text-[24px]">Product</p>
      <NuxtLink to="/dashboard/product/add" class="bg-amber-500 text-white px-[12px] py-[4px] rounded"
        >Add Product</NuxtLink
      >
    </div>

    <!-- feature card  -->
    <DashboardFeatureCard
      title="Total Profit"
      title2="Total Product"
      title3="Total Sales"
      price="NRS 15050"
      price2="150"
      price3="100"
      :loading="false"
    />

    <dashboard-data-tables
      title="Product Data Table"
      tableHead1="Item ID"
      tableHead2="Item Name"
      tableHead3="Item Price"
      tableHead4="Item Stock"
      tableHead5="Discounted Price"
      tableHead6="Manufacturer"
      tableHead7="isActive"
      tableHead8="Action"
    >
      <template v-slot:tbody>
        <tr class="" v-for="(items, index) in products" :key="index" v-if="!productStore.isLoading">
          <td>{{ items._id }}</td>
          <td>{{ items.name }}</td>
          <td>{{ items.price }}</td>
          <td>{{ items.stock }}</td>
          <td>{{ items?.discounted_price }}</td>
          <td>{{ items.manufacturer }}</td>
          <td>{{ items.isactive }}</td>
          <td class="flex flex-row gap-[20px]">
            <button
              class="bg-green-500 px-5 py-2 rounded-[8px]"
              @click="router.push(`/dashboard/product/${items._id}`)"
            >
              Edit
            </button>
            <button class="bg-amber-500 px-5 py-2 rounded-[8px]" @click="productStore.deleteProduct(items._id)">
              Delete
            </button>
          </td>
        </tr>
        <tr
          v-if="productStore.isLoading"
          class="loading-skeleton"
          v-for="(items, index) in [1, 2, 3, 4, 5, 6]"
          :key="index"
        >
          <td><span class="loader py-[1px] ms-[10px] px-[105px]"></span></td>
          <td><span class="loader py-[1px] ms-[10px] px-[32px]"></span></td>
          <td><span class="loader py-[1px] ms-[10px] px-[52px]"></span></td>
          <td><span class="loader py-[1px] ms-[10px] px-[42px]"></span></td>
          <td><span class="loader py-[1px] ms-[10px] px-[42px]"></span></td>
          <td><span class="loader py-[1px] ms-[10px] px-[65px]"></span></td>
          <td><span class="loader py-[1px] ms-[10px] px-[65px]"></span></td>
          <td><span class="loader py-[1px] ms-[10px] px-[65px]"></span></td>
        </tr>
      </template>
    </dashboard-data-tables>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'nuxt/app';
import { useProductStore } from '../../../composables/store/product.store';

const productStore = useProductStore();
const router = useRouter();
onMounted(async () => {
  await productStore.getProducts();
});

const products = computed(() => {
  return productStore?.product;
});
</script>
