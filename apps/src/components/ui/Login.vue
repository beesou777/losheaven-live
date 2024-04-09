<template>
  <div
    @click="emit('login-success')"
    class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[10] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
  ></div>
  <div
    class="w-full max-w-lg bg-white shadow-lg rounded-md p-6 fixed !z-[9999] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
  >
    <svg
      @click="emit('login-success')"
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
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign in to your account
      </h1>
      <form class="space-y-4 md:space-y-6" action="#">
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input
            type="email"
            name="email"
            v-model="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@gmail.com"
            required=""
          />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
            type="password"
            v-model="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <button
          type="submit"
          @click="Login"
          class="w-full text-gray-900 text-[18px] bg-amber-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-yellow-600 dark:focus:ring-primary-800"
        >
          Sign in
        </button>
      </form>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?
        <button @click="register" href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
          Sign up
        </button>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  isLoginShown: Boolean,
});

const emit = defineEmits(['login-success']);
const router = useRouter();

const authStore = useAuthStore();
const email = ref<string>('');
const password = ref<string>('');
const Login = async (event) => {
  event.preventDefault();
  const data = {
    email: email.value,
    password: password.value,
  };
  const response = await authStore.CustomerLogin(data);
  if (response.status === 200) {
    emit('login-success');
  } else {
    console.log('error');
  }
};

const register = () => {
  emit('login-success');
  router.push('/register');
};
</script>
