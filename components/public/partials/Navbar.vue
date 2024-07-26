<template>
    <nav class="bg-gray-900 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold">
        <a href="#" class="hover:text-blue-500">Crypto Loom</a>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-6">
        <a href="#" class="hover:text-blue-500">Home</a>
        <a href="#" class="hover:text-blue-500">Features</a>
        <a href="#" class="hover:text-blue-500">Pricing</a>
        <a href="#" class="hover:text-blue-500">About</a>
        <a href="#" class="hover:text-blue-500">Contact</a>
      </div>

      <!-- CTA Buttons and Theme Toggle -->
      <div class="hidden md:flex items-center space-x-4">
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
        <button class="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded">Log In</button>
        <button @click="toggleDarkMode" class="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded">
          <i :class="isDarkMode ? 'mdi mdi-weather-sunny' : 'mdi mdi-weather-night'"></i>
        </button>
      </div>

      <!-- Hamburger Menu -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <i :class="menuOpen ? 'mdi mdi-close' : 'mdi mdi-menu'"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden bg-gray-800 p-4">
      <a href="#" class="block py-2 hover:text-blue-500">Home</a>
      <a href="#" class="block py-2 hover:text-blue-500">Features</a>
      <a href="#" class="block py-2 hover:text-blue-500">Pricing</a>
      <a href="#" class="block py-2 hover:text-blue-500">About</a>
      <a href="#" class="block py-2 hover:text-blue-500">Contact</a>
      <div class="mt-4">
        <button class="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
        <button class="w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded mt-2">Log In</button>
      </div>
    </div>
  </nav>
</template>
<script setup>
const menuOpen = ref(false)
const isDarkMode = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark')
}
</script>

<style scoped>
nav {
  transition: background-color 0.3s ease;
}
</style>