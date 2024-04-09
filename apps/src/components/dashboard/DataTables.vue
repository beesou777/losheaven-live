<template>
  <div class="my-[24px] bg-white pt-[24px] rounded-[12px]">
    <div class="flex justify-between px-[24px] mb-[24px]">
      <p class="font-medium">{{ $props.title }}</p>
      <div class="flex gap-[12px] text-[14px]">
        <slot name="options"></slot>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full" cellpadding="12">
        <thead class="border-b-[1px] bg-gray-50 w-full">
          <tr class="text-left text-[13px] w-full">
            <th class="px-[24px] font-medium" v-if="$props.tableHead1">{{ $props.tableHead1 }}</th>
            <th class="px-[24px] font-medium" v-if="$props.tableHead2">{{ $props.tableHead2 }}</th>
            <th class="px-[24px] font-medium" v-if="$props.tableHead3">{{ $props.tableHead3 }}</th>
            <th class="px-[24px] font-medium" v-if="$props.tableHead4">{{ $props.tableHead4 }}</th>
            <th class="px-[24px] font-medium" v-if="$props.tableHead5">{{ $props.tableHead5 }}</th>
            <th class="px-[24px] font-medium" v-if="$props.tableHead6">{{ $props.tableHead6 }}</th>
            <th class="px-[24px] font-medium" v-if="$props.tableHead7">{{ $props.tableHead7 }}</th>
            <th class="px-[24px] font-medium" v-if="$props.tableHead8">{{ $props.tableHead8 }}</th>
            <th class="px-[24px] font-medium" v-if="$props.tableHead9">{{ $props.tableHead9 }}</th>
            <th class="px-[24px] font-medium" v-if="$props.tableHead10">{{ $props.tableHead10 }}</th>
            <th class="px-[24px] font-medium" v-if="$props.tableHead11">{{ $props.tableHead11 }}</th>
            <th class="px-[24px] font-medium" v-if="$props.tableHead12">{{ $props.tableHead12 }}</th>
            <th class="px-[24px] font-medium" v-if="$props.tableHead13">{{ $props.tableHead13 }}</th>
          </tr>
        </thead>
        <tbody>
          <slot name="tbody"></slot>
        </tbody>
      </table>
    </div>
    <slot name="tfooter"></slot>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

// props data
const props = defineProps([
  'title',
  'tableHead1',
  'tableHead2',
  'tableHead3',
  'tableHead4',
  'tableHead5',
  'tableHead6',
  'tableHead7',
  'tableHead8',
  'tableHead9',
  'tableHead10',
  'tableHead11',
  'tableHead12',
  'tableHead13',
  'tableHead14',
]);
</script>
