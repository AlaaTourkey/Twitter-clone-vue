<script setup>
import { ref } from 'vue';
import axios from 'axios';
import logo from '@/assets/img/logo.png';

const posts = ref([]);
const inputText = ref('');

// Function to add a new post
const addPost = async () => {
  if (inputText.value.trim()) {
    const newPost = {
      name: ' Static Name',
      email: 'static.email@example.com',
      body: inputText.value,
    };

    posts.value.push(newPost);
    inputText.value = ''
  }
}

//  Fetch initial posts from the API 
const fetchPosts = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
    posts.value = res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchPosts();
</script>

<template>
  <div class="flex justify-between mt-2 px-2">
    <h1 class="text-2xl font-bold">Home</h1>
    <i class="pi pi-sparkles text-2xl text-blue-400"></i>
  </div>

  <!-- Form to add a new post -->
  <section class="border-solid border-y-2 border-gray-400 p-5 my-3">
    <form @submit.prevent="addPost">
      <input type="text" v-model="inputText" placeholder="what's happening ..." class="w-full p-3 rounded-2xl" />
      <div class="flex justify-between my-5">
        <div class="icons">
          <i
            class="pi pi-home text-xl text-blue-400 mx-1 hover:-translate-y-1 hover:scale-110 transition ease-in-out"></i>
          <i
            class="pi pi-image text-xl text-blue-400 mx-1 hover:-translate-y-1 hover:scale-110 transition ease-in-out"></i>
          <i
            class="pi pi-gift text-xl text-blue-400 mx-1 hover:-translate-y-1 hover:scale-110 transition ease-in-out"></i>
          <i
            class="pi pi-face-smile text-xl text-blue-400 mx-1 hover:-translate-y-1 hover:scale-110 transition ease-in-out"></i>
          <i
            class="pi pi-calendar-clock text-xl text-blue-400 mx-1 hover:-translate-y-1 hover:scale-110 transition ease"></i>
        </div>
        <div>
          <button type="submit"
            class="transition ease-in-out bg-blue-400 text-white hover:bg-white hover:text-blue-400 px-4 py-2 rounded-3xl font-bold">
            Tweet
          </button>
        </div>
      </div>
    </form>
  </section>

  <!-- Display the posts -->
  <section>
    <div v-for="(post, index) in posts" :key="index" class="p-3 grid grid-cols-9 gap-4 border-b-2 border-gray-400">
      <div class="col-span-1">
        <img :src="logo" alt="logo" class="w-14">
      </div>
      <div class="col-span-8">
        <h2 class="font-bold">{{ post.name }}</h2>
        <h4 class="font-medium text-gray-400">{{ post.email }}</h4>
        <p>{{ post.body }}</p>
      </div>
      <div class="col-start-3 col-end-8">
        <div class="icons flex justify-between my-5">
          <span class="cursor-pointer text-l text-gray-600 mx-1 hover:-translate-y-1 hover:text-blue-500 transition ease-in-out">
            <i class="pi pi-comment "></i>
            50
          </span>
          <span class="cursor-pointer text-l text-gray-600 mx-1 hover:-translate-y-1 hover:text-green-500 transition ease-in-out">
            <i class="pi pi-share-alt "></i>
            70
          </span>
          <span class="cursor-pointer text-l text-gray-600 mx-1 hover:-translate-y-1 hover:text-red-500 transition ease-in-out">
            <i class="pi pi-heart "></i>
            1350
          </span>
          <span class="cursor-pointer text-l text-gray-600 mx-1 hover:-translate-y-1 hover:text-blue-500 transition ease-in-out">
            <i class="pi pi-upload "></i>
            20
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
