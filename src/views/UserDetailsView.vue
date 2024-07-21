<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const user = ref(null);
const route = useRoute();

const fetchUserDetails = async () => {
  const index = route.params.id;
  try {
    const result = await axios.get('https://randomuser.me/api/?results=10');
    user.value = result.data.results[index];
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
};

onMounted(() => {
  fetchUserDetails();
});
</script>

<template>
  <div class="user-details p-4">
    <div v-if="user" class="flex flex-col items-center bg-gray-100 p-5 rounded-lg shadow-md">
      <img :src="user.picture.large" alt="Profile Picture" class="w-24 h-24 rounded-full mb-4">
      <h2 class="text-xl font-bold mb-2">{{ user.name.first }} {{ user.name.last }}</h2>
      <p class="text-gray-600 mb-2">{{ user.email }}</p>
      <p class="text-gray-600 mb-2">{{ user.location.city }}, {{ user.location.country }}</p>
      <p class="text-gray-600 mb-2">Phone: {{ user.phone }}</p>
      <p class="text-gray-600 mb-2">Username: {{ user.login.username }}</p>
      <RouterLink to="/" class="mt-4 text-blue-500">Back to Home</RouterLink>
    </div>
    <div v-else class="text-center mt-10">
      <p>Loading user details...</p>
    </div>
  </div>
</template>


<style></style>