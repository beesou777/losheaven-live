<template>
  <section
    class="w-full max-w-lg overflow-y-auto bg-white shadow-lg rounded-md fixed !z-[9999] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
  >
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <svg
        @click="emit('register-success')"
        xmlns="http://www.w3.org/2000/svg"
        class="w-3.5 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 float-right"
        viewBox="0 0 320.591 320.591"
      >
        <path
          d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
          data-original="#000000"
        ></path>
        <path
          d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
          data-original="#000000"
        ></path>
      </svg>
      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Register to your account</h1>
      <form class="space-y-4 md:space-y-6" action="#">
        <div class="flex items-center gap-[10px] flex-col md:flex-row">
          <div class="w-full">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 w-full">Name</label>
            <input
              type="text"
              name="name"
              v-model="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="your full name"
              required=""
            />
          </div>
          <div class="w-full">
            <label for="address" class="block mb-2 text-sm font-medium text-gray-900">Address</label>
            <input
              type="text"
              name="address"
              v-model="address"
              id="address"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="your address"
              required=""
            />
          </div>
        </div>
        <div class="flex items-center gap-[10px] flex-col md:flex-row">
          <div class="w-full">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">phone</label>
            <input
              type="number"
              v-model="phone"
              name="phone"
              id="phone"
              placeholder="your number"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required=""
            />
          </div>
          <div class="w-full">
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900">City</label>
            <input
              type="text"
              v-model="city"
              name="city"
              id="city"
              placeholder="your city"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required=""
            />
          </div>
        </div>
        <div class="flex items-center gap-[10px] flex-col md:flex-row">
          <div class="w-full">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input
              type="email"
              name="email"
              v-model="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="your email addesss"
              required
            />
          </div>
          <div class="w-full relative">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required=""
            />
            <svg
              v-if="!showPassword"
              @click="togglePassword"
              class="absolute right-5 top-9 cursor-pointer z-[999]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                stroke="#121926"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                stroke="#121926"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div v-else @click="togglePassword">
              <svg
                class="absolute right-5 top-9 cursor-pointer z-[999]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213"
                  stroke="#121926"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <button
          type="submit"
          @click="Login"
          class="w-full text-white text-[18px] lh-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center"
        >
          Register
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { toast } from 'vue3-toastify';

const authStore = useAuthStore();
const emit = defineEmits(['register-success']);
const showPassword = ref<boolean>(false);
// variables
const email = ref<string>('');
const password = ref<string>('');
const name = ref<string>('');
const address = ref<string>('');
const phone = ref<string>('');
const city = ref<string>('');

const Login = async (event) => {
  event.preventDefault();
  if (!email.value) {
    toast.error('Please enter email');
    return;
  }

  if (!password.value) {
    toast.error('Please enter password');
    return;
  }

  if (!name.value) {
    toast.error('Please enter name');
    return;
  }

  if (!address.value) {
    toast.error('Please enter address');
    return;
  }

  if (phone.value.length < 10) {
    toast.error('A phone number must contain at least 10 digits');
    return;
  }

  if (!city.value) {
    toast.error('Please enter city');
    return;
  }

  if (password.value.length < 6) {
    toast.error('Password should be at least 6 characters');
    return;
  }

  const data = {
    email: email.value,
    password: password.value,
    name: name.value,
    address: address.value,
    phone: phone.value,
    city: city.value,
  };
  const response = await authStore.CustomerRegister(data);
  if (response?.status === 200) {
    authStore.accessToken = response.data.access;
    authStore.isLogined = true;
    toast.success('Register Successful!!');
    emit('register-success');
  } else {
    toast.error('Error occur while registering user');
    console.log('error');
  }
};

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>
