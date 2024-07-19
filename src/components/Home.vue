<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  addPost: {
    type: Function,
    required: true
  }
});
console.log(props);
</script>

<template>
  <div class="flex justify-between  mt-2 px-2">
    <h1 class="text-2xl font-bold ">Home</h1>
    <i class="pi pi-sparkles text-2xl text-blue-400" ></i>
  </div>
  <section class="border-solid border-y-2 border-gray-400 p-5 my-3">
      <form @submit.prevent="">
        <input type="text" placeholder="what's happening ..." class="w-full p-3 rounded-2xl">
        <div class="flex justify-between my-5">
          <div class="icons">
            <i class="pi pi-home text-xl text-blue-400 mx-1 hover:-translate-y-1 hover:scale-110 transition ease-in-out"></i>
            <i class="pi pi-image text-xl text-blue-400 mx-1 hover:-translate-y-1 hover:scale-110 transition ease-in-out"></i>
            <i class="pi pi-gift text-xl text-blue-400 mx-1 hover:-translate-y-1 hover:scale-110 transition ease-in-out"></i>
            <i class="pi pi-face-smile text-xl text-blue-400 mx-1 hover:-translate-y-1 hover:scale-110 transition ease-in-out"></i>
            <i class="pi pi-calendar-clock text-xl text-blue-400 mx-1 hover:-translate-y-1 hover:scale-110 transition ease"></i>
          </div>
          <div class="">
            <button @click="addPost" class="transition ease-in-out bg-blue-400 text-white hover:bg-white hover:text-blue-400 px-4 py-2 rounded-3xl font-bold ">Tweet</button>
          </div>
        </div>
      </form>
    </section>
</template>

<style scoped>


</style>
