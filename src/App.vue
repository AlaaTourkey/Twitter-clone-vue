<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Info from '@/components/Info.vue';
import InfoView from './views/InfoView.vue';
</script>

<template>
    <div class="grid grid-cols-5 gap-1">
        <div class="col-span-1">
            <Navbar />
        </div>
        <div class="col-start-2 col-span-3  border-solid border-x-2 border-gray-400">
            <RouterView />
        </div>
        <div class="col-span-1">
            <InfoView/>
        </div>
    </div>
    <div class="app-container">



    </div>
</template>

<style scoped></style>
