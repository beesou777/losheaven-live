<template>
  <section class="py-24 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
      <h2 class="font-manrope font-bold text-4xl leading-10 text-black text-center">Order History</h2>
      <p class="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
        Thanks for making a purchase you can check our order summary frm below
      </p>
      <div class="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
          <div class="data">
            <p class="font-semibold text-base leading-7 text-black">
              Order Id: <span class="text-indigo-600 font-medium">#10234987</span>
            </p>
            <p class="font-semibold text-base leading-7 text-black mt-4">
              Order Payment : <span class="text-gray-400 font-medium"> 18th march 2021</span>
            </p>
          </div>
          <button
            class="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400"
          >
            Track Your Order
          </button>
        </div>
        <div class="w-full px-3 min-[400px]:px-6">
          <div class="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
            <div class="img-box max-lg:w-full">
              <img
                src="https://pagedone.io/asset/uploads/1701167607.png"
                alt="Premium Watch image"
                class="aspect-square w-full lg:max-w-[140px]"
              />
            </div>
            <div class="flex flex-row items-center w-full">
              <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
                <div class="flex items-center">
                  <div class="">
                    <h2 class="font-semibold text-xl leading-8 text-black mb-3">Premium Quality Dust Watch</h2>
                    <p class="font-normal text-lg leading-8 text-gray-500 mb-3">By: Dust Studios</p>
                    <div class="flex items-center">
                      <p class="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                        Size: <span class="text-gray-500">100 ml</span>
                      </p>
                      <p class="font-medium text-base leading-7 text-black">
                        Qty: <span class="text-gray-500">2</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-5">
                  <div class="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                    <div class="flex gap-3 lg:block">
                      <p class="font-medium text-sm leading-7 text-black">price</p>
                      <p class="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">$100</p>
                    </div>
                  </div>
                  <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                    <div class="flex gap-3 lg:block">
                      <p class="font-medium text-sm leading-7 text-black">Status</p>
                      <p
                        class="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600"
                      >
                        Ready for Delivery
                      </p>
                    </div>
                  </div>
                  <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                    <div class="flex gap-3 lg:block">
                      <p class="font-medium text-sm whitespace-nowrap leading-6 text-black">Expected Delivery Time</p>
                      <p class="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                        23rd March 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row items-center py-6 gap-6 w-full">
            <div class="img-box max-lg:w-full">
              <img
                src="https://pagedone.io/asset/uploads/1701167621.png"
                alt="Diamond Watch image"
                class="aspect-square w-full lg:max-w-[140px]"
              />
            </div>
            <div class="flex flex-row items-center w-full">
              <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
                <div class="flex items-center">
                  <div class="">
                    <h2 class="font-semibold text-xl leading-8 text-black mb-3">Diamond Platinum Watch</h2>
                    <p class="font-normal text-lg leading-8 text-gray-500 mb-3">Diamond Dials</p>
                    <div class="flex items-center">
                      <p class="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                        Size: <span class="text-gray-500">Regular</span>
                      </p>
                      <p class="font-medium text-base leading-7 text-black">
                        Qty: <span class="text-gray-500">1</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-5">
                  <div class="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                    <div class="flex gap-3 lg:block">
                      <p class="font-medium text-sm leading-7 text-black">price</p>
                      <p class="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">$100</p>
                    </div>
                  </div>
                  <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                    <div class="flex gap-3 lg:block">
                      <p class="font-medium text-sm leading-7 text-black">Status</p>
                      <p
                        class="font-medium text-sm leading-6 py-0.5 px-3 whitespace-nowrap rounded-full lg:mt-3 bg-indigo-50 text-indigo-600"
                      >
                        Dispatched
                      </p>
                    </div>
                  </div>
                  <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                    <div class="flex gap-3 lg:block">
                      <p class="font-medium text-sm whitespace-nowrap leading-6 text-black">Expected Delivery Time</p>
                      <p class="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                        23rd March 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between">
          <div class="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
            <button
              class="flex outline-0 py-6 sm:pr-6 sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600"
            >
              <svg
                class="stroke-black transition-all duration-500 group-hover:stroke-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
              </svg>
              Cancel Order
            </button>
            <p class="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">
              Paid using Credit Card <span class="text-gray-500">ending with 8822</span>
            </p>
          </div>
          <p class="font-semibold text-lg text-black py-6">
            Total Price: <span class="text-indigo-600"> $200.00</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
// data
// mounted
// computed
// methods
</script>
