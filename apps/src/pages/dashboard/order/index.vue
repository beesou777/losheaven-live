<template>
  <div class="py-[27px]">
    <div class="flex justify-between items-center relative">
      <p class="text-[24px]">Product</p>
    </div>

    <!-- feature card  -->
    <DashboardFeatureCard
      title="Total Order"
      title2="Pending Order"
      title3="Success Order"
      title4="Cancelled Order"
      :price="featureOrder?.total_order"
      :price2="featureOrder?.pending_order"
      :price3="featureOrder?.delivered_order"
      :price4="featureOrder?.cancelled_order"
      :loading="false"
    />
    <dashboard-data-tables
      title="Order Data Table"
      tableHead1="Item ID"
      tableHead2="Customer Name"
      tableHead3="Total Order Price"
      tableHead4="Customer Email"
      tableHead5="Customer contact"
      tableHead6="Order Status"
      tableHead7="Payment status"
      tableHead8="customer details"
      tableHead9="product Details"
    >
      <template v-slot:tbody>
        <tr v-for="(items, index) in orders" :key="index">
          <td>{{ items._id }}</td>
          <td>{{ items?.shipping_details?.name || null }}</td>
          <td>{{ totalOrderPrice(items?.orderItems) }}</td>
          <td>{{ items?.shipping_details?.email || null }}</td>
          <td>{{ items?.shipping_details?.phone || null }}</td>
          <td class="cursor-pointer" @click="openPaymentAndOrderOverlay(items._id, items)">
            <span
              :class="[
                items?.order_status === 'Delivered'
                  ? 'bg-green-500 px-5 py-2 rounded-[8px] text-white'
                  : 'bg-amber-500 px-5 py-2 rounded-[8px]',
              ]"
              >{{ items?.order_status || 'Unpaid' }}</span
            >
          </td>
          <td class="cursor-pointer" @click="openPaymentAndOrderOverlay(items._id, items)">
            <span
              :class="[
                items.payment_status === 'Paid'
                  ? 'bg-green-500 px-5 py-2 rounded-[8px] text-white'
                  : 'bg-amber-500 px-5 py-2 rounded-[8px]',
              ]"
              >{{ items.payment_status || 'pending' }}</span
            >
          </td>
          <td>
            <button @click="seeCustomerDetails(items.customer_details)" class="bg-teal-500 px-5 py-2 rounded-[8px]">
              See customer deails
            </button>
          </td>
          <td>
            <button @click="seeProductDetails(items.orderItems)" class="bg-teal-400 px-5 py-2 rounded-[8px]">
              Product details
            </button>
          </td>
        </tr>
        <tr
          v-if="orderStore.isLoading"
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

    <dashboard-order-see-product-details
      v-if="isProductsDetails"
      @toggle-product-overlay="seeProductDetails"
      :productData="singleOrder"
    />
    <dashboard-order-status-update
      v-if="isStatusShown"
      @update-status="updateStatus"
      @toggle-product-overlay="openPaymentAndOrderOverlay"
    />
    <dashboard-order-customer-details
      v-if="isCustomerDetails"
      @toggle-customer-overlay="seeCustomerDetails"
      :customerData="orderStore.customerDetails"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'nuxt/app';
import { useOrderStore } from '../../../composables/store/order.store';

const orderStore = useOrderStore();
// data
const isProductsDetails = ref(false);
const isCustomerDetails = ref(false);
const router = useRouter();
const isStatusShown = ref<boolean>(false);
const customerId = ref<number>();

useHead({
  title: 'LosHeaven Dashboard',
});

onMounted(async () => {
  await orderStore.getOrders();
});

const orders = computed(() => {
  return orderStore?.order;
});

const totalOrderPrice = (data: any) => {
  return data.reduce((acc: any, item: any) => {
    return acc + item?.product?.price * parseInt(item.quantity);
  }, 0);
};

const seeCustomerDetails = (item: any) => {
  orderStore.customerDetails = item;
  isCustomerDetails.value = !isCustomerDetails.value;
};

const seeProductDetails = (item: any) => {
  orderStore.singleOrder = item;
  isProductsDetails.value = !isProductsDetails.value;
};

const singleOrder = computed(() => {
  return orderStore?.singleOrder;
});

const featureOrder = computed(() => {
  return orderStore?.orderFeature;
});

const openPaymentAndOrderOverlay = (id: number, data: any) => {
  customerId.value = id;
  isStatusShown.value = !isStatusShown.value;
};

const updateStatus = async (data: any) => {
  const response = await orderStore.updateOrderStatus(customerId.value, data);
  if (response.status === 200) {
    isStatusShown.value = false;
  }
};
</script>
