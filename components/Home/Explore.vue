<script setup></script>
<template>
  <div class="space-y-4">
    <h1 class="font-bold text-2xl">Explore related topics</h1>
    <div class="flex gap-4">
      <button class="buttonStyle">Mobile App Design</button>
      <button class="buttonStyle">Web App Design</button>
      <button class="buttonStyle">Design</button>
    </div>
    <div class="grid grid-cols-2 p-6 bg-[#F7F9FA]">
      <div class="space-y-6">
        <h1 class="font-bold text-3xl">Coding Exercises</h1>
        <p class="text-sm">
          This course includes our updated coding exercises so you can practice your skills as you learn.
        </p>
        <button class="underline text-primary">See a demo</button>
      </div>
      <div class="">
        <img class="object-cover" src="@/assets/images/codeDem0.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.buttonStyle {
  @apply border border-secondary font-bold text-base  px-3 py-2  rounded-full;
}
</style>
