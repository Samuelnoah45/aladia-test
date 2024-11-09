<script setup>
import { courses } from "@/constant/MoreCourses";
const showMore = ref(false);
</script>
<template>
  <div class="space-y-4">
    <h1 class="font-bold flex items-center text-2xl space-x-1">
      More Courses by
      <span class="text-primary pl-1"> Andrei Neagoie</span>
    </h1>
    <div class="grid lg:grid-cols-3 gap-2 border-b pb-10">
      <HomeMoreCoursesCard v-for="course in courses" :courseData="course" />
    </div>
    <button class="border p-3 w-full text-sm font-bold border-gray-400">Report Abuse</button>
  </div>
</template>
<style scoped></style>
