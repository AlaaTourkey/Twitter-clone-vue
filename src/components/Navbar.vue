<script setup>
import { RouterLink, useRoute } from 'vue-router';

let route = useRoute()
const isActiveLink = (routerPath) => {
  return route.path === routerPath;
}

</script>

<template>
  <div class="sidebar ">
    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span class="sr-only">Open sidebar</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
        </path>
      </svg>
    </button>
    <aside id="default-sidebar"
      class="fixed top-0   left-0 z-40  h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar">
      <div class="h-full w-60 px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-8 font-medium">
          <li>
            <RouterLink to="/"
              :class="[isActiveLink('/') ? 'bg-blue-400' : 'hover:bg-gray-900', 'text-white', 'py-2', 'px-3', 'rounded-md', 'hover:duration-700', 'transition', ' duration-150', 'ease-in-out']">
              <i class="pi pi-home text-base "></i>
              <span class="flex-1 ms-3 whitespace-nowrap">Home</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/explor"
              :class="[isActiveLink('/explor') ? 'bg-blue-400' : 'hover:bg-gray-900', 'text-white', 'py-2', 'px-3', 'rounded-md', 'hover:duration-700', 'transition', ' duration-150', 'ease-in-out']">
              <i class="pi pi-hashtag text-base "></i>
              <span class="flex-1 ms-3 whitespace-nowrap">Explor</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/notification"
              :class="[isActiveLink('/notification') ? 'bg-blue-400' : 'hover:bg-gray-900', 'text-white', 'py-2', 'px-3', 'rounded-md', 'hover:duration-700', 'transition', ' duration-150', 'ease-in-out']">
              <i class="pi pi-bell text-base "></i>
              <span class="flex-1 ms-3 whitespace-nowrap">Notification</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/message"
              :class="[isActiveLink('/message') ? 'bg-blue-400' : 'hover:bg-gray-900', 'text-white', 'py-2', 'px-3', 'rounded-md', 'hover:duration-700', 'transition', ' duration-150', 'ease-in-out']">
              <i class="pi pi-envelope text-base "></i>
              <span class="flex-1 ms-3 whitespace-nowrap">Message</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/bookmark"
              :class="[isActiveLink('/bookmark') ? 'bg-blue-400' : 'hover:bg-gray-900', 'text-white', 'py-2', 'px-3', 'rounded-md', 'hover:duration-700', 'transition', ' duration-150', 'ease-in-out']">
              <i class="pi pi-bookmark text-base "></i>
              <span class="flex-1 ms-3 whitespace-nowrap">Bookmarks</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/list"
              :class="[isActiveLink('/list') ? 'bg-blue-400 ' : 'hover:bg-gray-900', 'text-white', 'py-2', 'px-3', 'rounded-md', 'hover:duration-700', 'transition', ' duration-150', 'ease-in-out']">
              <i class="pi pi-list text-base "></i>
              <span class="flex-1 ms-3 whitespace-nowrap">Lists</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/profile"
              :class="[isActiveLink('/profile') ? 'bg-blue-400' : 'hover:bg-gray-900', 'text-white', 'py-2', 'px-3', 'rounded-md', 'hover:duration-700', 'transition', ' duration-150', 'ease-in-out']">
              <i class="pi pi-user text-base "></i>
              <span class="flex-1 ms-3 whitespace-nowrap">Profile</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/setting"
              :class="[isActiveLink('/setting') ? 'bg-blue-400' : 'hover:bg-gray-900', 'text-white', 'py-2', 'px-3', 'rounded-md', 'hover:duration-700', 'transition', ' duration-150', 'ease-in-out']">
              <i class="pi pi-cog text-base "></i>
              <span class="flex-1 ms-3 whitespace-nowrap">Setting</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<style scoped>
/* Add any additional styles for the sidebar here */
</style>
