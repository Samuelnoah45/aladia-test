<script setup>
import { frequentlyBoughtCourses } from "@/constant/frequentlyBoughtCourses";
const showMore = ref(false);
</script>
<template>
  <div class="space-y-6 border p-4">
    <h1 class="font-bold text-2xl">Frequently Bought Together</h1>
    <div class="space-y-4">
      <HomeFrequentlyBoughtTogetherCard v-for="course in frequentlyBoughtCourses" :courseData="course" />
      <div class="w-full flex justify-end">
        <button class="border p-3 text-sm font-bold bg-primary text-white">Add to cart</button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
