<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { courses } from "@/constant/boughtCourses";
const showMore = ref(false);
</script>
<template>
  <div class="space-y-4">
    <h1 class="font-bold text-2xl">Students also bought</h1>
    <div :class="[!showMore ? 'h-[450px] overflow-hidden' : '']">
      <HomeStudentBoughtCourseCard v-for="course in courses" :course="course" />
    </div>
    <button
      @click="showMore = !showMore"
      class="border p-3 w-full flex justify-center text-sm font-bold border-gray-400"
    >
      {{ !showMore ? "show More" : "show Less" }}
    </button>
  </div>
</template>
<style scoped></style>
