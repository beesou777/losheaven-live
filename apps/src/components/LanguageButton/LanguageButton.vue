<template>
  <select
    v-model="locale"
    @change="switchLocale(locale)"
    class="w-full px-2 outline-none rounded border bg-transparent text-gray-700 border-gray-900/10"
  >
    <option v-for="locale in localeCodes" :key="locale" :value="locale">{{ locale }}</option>
  </select>
</template>

<script setup lang="ts">
const { locale, setLocale, localeCodes } = useI18n();

const switchLocale = (val: string) => setLocale(val);
</script>
