<template>
    <div class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-white text-lg font-bold">Cryptonian Exchange</div>
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">About</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Services</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from "vue";
  let loading = ref(true);
  onMounted(() => {
    loading.value = false;
  });
  </script>
  <style lang="scss" scoped>
  .headerHeight {
    height: calc(100vh - 30px);
  }
  </style>
  