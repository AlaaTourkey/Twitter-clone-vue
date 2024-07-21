<script setup>
import Info from '@/components/Info.vue';
import logo from '@/assets/img/logo.png';
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

const users = ref([]);

const getUsers = async () => {
  try {
    const result = await axios.get('https://randomuser.me/api/?results=10');
    users.value = result.data.results;
    console.log(result.data.results);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

onMounted(() => {
  getUsers();
});
</script>

<template>
  <div>
    <Info />

    <div class="bg-gray-100 p-2">
      <h2 class="font-extrabold text-xl my-1">Who to follow</h2>
      <hr />
      <div v-for="(user, index) in users" :key="index" class="my-5 p-3 border-b-2 border-gray-200">
        <RouterLink :to="'/userdetails/' + index" class="grid grid-cols-3 gap-1 cursor-pointer">
          <div class="col-span-2 flex items-center">
            <img :src="user.picture.thumbnail" alt="Profile Picture" class="w-8 mr-2">
            <div class="flex flex-wrap">
              <h4 class="font-extrabold w-full">{{ user.name.first }} {{ user.name.last }}</h4>
              <h6 class="text-gray-600 text-sm w-full">{{ user.email }}</h6>
            </div>
          </div>
          <div class="col-span-1 flex items-center justify-center">
            <button class="bg-blue-400 py-1 px-4 rounded-3xl text-white">Follow</button>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles here if needed */
</style>
