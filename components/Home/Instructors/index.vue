<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { courses } from "@/constant/boughtCourses";
const showMore = ref(false);
</script>
<template>
  <div class="space-y-1 pt-10">
    <h1 class="font-bold text-2xl">Instructors</h1>
    <div>
      <HomeInstructorsCard />
    </div>
  </div>
</template>
<style scoped></style>
