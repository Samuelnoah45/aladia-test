<script setup>
import { courseBenefits } from "@/constant/listOfCourse";
const showMore = ref(false);
</script>

<template>
  <div class="p-4 border border-gray-400 space-y-4">
    <h1 class="secondary text-2xl font-bold">What you'll learn</h1>
    <div class="grid grid-cols-2 gap-3 text-sm relative" :class="[showMore ? '' : 'h-[300px] overflow-hidden']">
      <div class="flex gap-3" v-for="benefit in courseBenefits" :key="benefit.id">
        <Icon class="text-xl shrink-0 mt-1" name="material-symbols-light:check" />

        <p>{{ benefit }}</p>
      </div>
      <div class="w-full flex items-end bottom-0 left-0" :class="[!showMore ? 'fadeUp absolute h-16' : '']">
        <button class="text-primary underline" @click="showMore = !showMore">
          {{ showMore ? "Show Less" : "Show More" }}
        </button>
      </div>
    </div>
  </div>
</template>
