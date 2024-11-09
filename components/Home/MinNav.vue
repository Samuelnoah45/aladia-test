<template>
  <div class="w-full fixed top-0 h-[70px] z-30 bg-black p-3">
    <p class="text-white font-extrabold">Complete Web & Mobile Designer: UI/UX, Figma, +more</p>
    <div class="flex space-x-2">
      <button class="bg-[#ECEB98] text-xs p-1 font-medium">Bestseller</button>
      <div class="flex items-center text-yellow-600">
        <span class="px-1">5</span><Icon v-for="i in 5" :key="i" class="" name="mdi:star" />
      </div>
      <p class="text-sm text-primaryDark">(133,000 ratings)</p>
      <p class="text-sm text-white">161,715 students</p>
    </div>
  </div>
</template>
