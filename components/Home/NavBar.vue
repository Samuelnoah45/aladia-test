<script setup></script>
<template>
  <div class="flex items-center p-2 space-x-6 text-sm">
    <div class="flex items-center space-x-4">
      <img src="@/assets/images//logo-udemy.svg" alt="Google" class="w-20" />
      <p>categories</p>
    </div>
    <div class="relative flex-1">
      <input type="text" class="rounded-full w-full p-3 pl-12 focus:ring-0 focus:border-secondary" />
      <Icon class="absolute left-4 top-[30%] text-xl" name="si:search-line" />
    </div>
    <div class="flex items-center space-x-4">
      <p>Udemy Business</p>
      <p>Teacher on Udemy</p>
      <Icon class="text-2xl" name="mdi:cart-outline" />
      <button class="border border-secondary p-2 px-4 font-medium">Log in</button>
      <button class="border border-secondary bg-secondary p-2 px-4 font-medium text-white">Sign up</button>
      <button class="border border-secondary p-2 h-full"><Icon class="text-xl" name="tabler:world" /></button>
    </div>
  </div>
</template>
