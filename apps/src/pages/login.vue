<template>
  <div v-if="!isRegisterShown" class="w-full bg-white rounded-md p-6 max-w-[500px] mx-auto">
    <div class="space-y-4 md:space-y-6 sm:p-8">
      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Login to your account</h1>
      <form class="space-y-4 md:space-y-6" action="#">
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
          <input
            type="email"
            name="email"
            v-model="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="name@gmail.com"
            required=""
          />
        </div>
        <div class="relative">
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
        <div class="flex items-center justify-between gap-[8px]">
          <button
            type="submit"
            @click="Login"
            class="w-full text-white text-[18px] lh-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center"
          >
            Login
          </button>
        </div>
      </form>
      <p class="text-sm font-light text-gray-500">
        Don’t have an account yet?
        <NuxtLink to="/register" class="font-medium text-primary-600 hover:underline">Register</NuxtLink>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';

const props = defineProps({
  isLoginShown: Boolean,
});

const emit = defineEmits(['login-success']);
const router = useRouter();

const authStore = useAuthStore();
const email = ref<string>('');
const password = ref<string>('');
const showPassword = ref<boolean>(false);
const isRegisterShown = ref<boolean>(false);

onMounted(() => {
  if (authStore.accessToken) {
    router.push('/');
  }
});

const Login = async (event: any) => {
  event.preventDefault();
  const data = {
    email: email.value,
    password: password.value,
  };
  const response = await authStore.CustomerLogin(data);
  if (response?.status === 200) {
    authStore.accessToken = response.data.access;
    setTimeout(() => {
      toast.success('Login Successful!!');
      emit('login-success');
    }, 500);
    router.push('/');
  } else {
    toast.error('Invalid user details');
  }
};

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>
