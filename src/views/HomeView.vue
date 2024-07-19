<script setup>
import Home from '@/components/Home.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import logo from '@/assets/img/logo.png';

const posts = ref([]);

const addPost = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/2/comments');
    const newPost = res.data;
    posts.value.push(newPost);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
    posts.value = res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

console.log(posts);
</script>

<template>
  <div class="border-solid border-2 border-gray-400">
    <Home  :add-post="addPost" />
    <!-- <button @click="addPost" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add Post</button> -->
    <section>
      <div v-for="post in posts" :key="post.id" class="p-3 grid grid-cols-9 gap-4 border-b-2 border-gray-400">
        <div class="col-span-1">
          <img :src="logo" alt="" class="w-14">
        </div>
        <div class="col-span-8">
          <h2 class="font-bold">{{ post.name }}</h2>
          <h4 class="font-medium text-gray-400">{{ post.email }}</h4>
          <p>Body: {{ post.body }}</p>
        </div>
      </div>
    </section>
  </div>
</template>



<style>
.main-color {
  background-color: #1da1f2;
}
</style>