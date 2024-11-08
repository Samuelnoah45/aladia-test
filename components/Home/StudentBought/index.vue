<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { courses } from "@/constant/boughtCourses";
</script>
<template>
  <div class="space-y-4">
    <h1 class="font-bold text-2xl">Course content</h1>
    <div>
      <HomeStudentBoughtCourseCard v-for="course in courses" :course="course" />
    </div>
  </div>
</template>
<style scoped></style>
