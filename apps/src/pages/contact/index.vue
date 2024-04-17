<template>
  <section class="mb-32">
    <div id="map" class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.147903676823!2d85.36364807598174!3d27.61993557623283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb11cffd043303%3A0x84baf58b6cf12124!2sMulpani%20youth%20club!5e0!3m2!1sen!2snp!4v1712842338070!5m2!1sen!2snp"
        width="100%"
        height="480"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div class="container px-6 md:px-12 mx-auto">
      <div
        class="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300"
      >
        <div class="flex flex-wrap">
          <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <form>
              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="email"
                  class="peer block pt-[20px] min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:lh-color data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleInput90"
                  v-model="email"
                />
                <label
                  class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:lh-color peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                  for="exampleInput90"
                  >E-mail
                </label>
              </div>
              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  class="peer block pt-[20px] min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:lh-color data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleInput91"
                  v-model="subject"
                />
                <label
                  class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:lh-color peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                  for="exampleInput91"
                  >subject
                </label>
              </div>
              <div class="relative mb-6" data-te-input-wrapper-init>
                <textarea
                  v-model="message"
                  class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none pt-[20px]"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
                <label
                  for="exampleFormControlTextarea1"
                  class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:lh-color peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                  >Message</label
                >
              </div>
              <button
                type="button"
                @click="handleSubmit"
                class="mb-6 w-full rounded lh-primary text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0"
              >
                Send
              </button>
            </form>
          </div>
          <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div class="flex flex-wrap">
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-sky-200 p-4 lh-color">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold">Technical support</p>
                    <p class="text-sm text-neutral-500">losheaven@gmail.com</p>
                    <p class="text-sm text-neutral-500">shahbishwa21@gmail.com</p>
                  </div>
                </div>
              </div>
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div class="flex items-start">
                  <div class="srink-0">
                    <div class="inline-block rounded-md bg-sky-200 p-4 lh-color">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-7 h-7"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold">Address</p>
                    <p class="text-sm text-neutral-500">
                      Bhaisepati, <br />
                      Mulpani <br />
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                <div class="align-start flex">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-sky-200 p-4 lh-color">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold">Mobile</p>
                    <p class="text-neutral-500">+977 9862531293</p>
                    <p class="text-neutral-500">+977 9823875770</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Container for demo purpose -->
</template>
<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import { useOrderStore } from '../../composables/store/order.store';

const subject = ref('');
const email = ref('');
const message = ref('');
const success = ref(false);
const error = ref(false);

const orderStore = useOrderStore();

const handleSubmit = async () => {
  try {
    if (!subject.value || !email.value || !message.value) {
      toast.error('Please fill all the fields');
      return;
    }
    const data = {
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    const response = await orderStore.contactUs(data);
    if (response.status === 200) {
      email.value = '';
      subject.value = '';
      message.value = '';
      toast.success('Message sent successfully');
    }
  } catch (e) {
    toast.error('Something went wrong');
  }
};

useHead({
  title: 'Contact Us', // Page title
  meta: [
    { name: 'description', content: 'Contact us for technical support or inquiries.' },
    { name: 'keywords', content: 'contact, support, inquiries, customer service' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'losheaven' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'msapplication-TileColor', content: '#ffffff' },
    { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
    { name: 'theme-color', content: '#ffffff' },
  ],
});
</script>
