<script setup>
import { reviews } from "@/constant/reviewList";
const showMore = ref(false);
</script>
<template>
  <div class="space-y-4">
    <h1 class="font-bold flex items-center text-2xl">
      <span><Icon class="text-yellow-600 mb-1 ml-2" name="material-symbols:star" /></span> 4.5 course rating 33K ratings
    </h1>
    <div class="grid grid-cols-2 gap-2">
      <HomeUsersReviewsCard v-for="review in reviews" :reviewData="review" />
    </div>
    <button class="border p-3 text-sm font-bold border-gray-400">show More Reviews</button>
  </div>
</template>
<style scoped></style>
