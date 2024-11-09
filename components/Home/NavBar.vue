<script setup></script>
<template>
  <div class="flex items-center p-2 justify-between px-4 space-x-6 text-sm">
    <div class="lg:hidden">
      <Icon class="hidden text-2xl" name="material-symbols:menu" />
    </div>

    <div class="flex items-center flex-1 lg:flex-0 justify-center space-x-4">
      <img src="@/assets/images//logo-udemy.svg" alt="Google" class="w-20" />
      <p class="hidden lg:inline-block">categories</p>
    </div>
    <div class="relative">
      <input
        type="text"
        class="rounded-full hidden lg:inline-block w-full p-3 pl-12 focus:ring-0 focus:border-secondary"
      />
      <Icon class="lg:absolute lg:left-4 lg:top-[30%] text-xl" name="si:search-line" />
    </div>
    <div class="flex items-center justify-end lg:space-x-4">
      <p class="hidden lg:inline-block">Udemy Business</p>
      <p class="hidden lg:inline-block">Teacher on Udemy</p>
      <Icon class="text-2xl" name="mdi:cart-outline" />
      <button class="border border-secondary p-2 px-4 font-medium hidden lg:inline-block">Log in</button>
      <button class="border border-secondary bg-secondary p-2 px-4 font-medium text-white hidden lg:inline-block">
        Sign up
      </button>
      <button class="border border-secondary p-2 h-full hidden lg:inline-block">
        <Icon class="text-xl" name="tabler:world" />
      </button>
    </div>
  </div>
</template>
