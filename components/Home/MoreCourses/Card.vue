<script setup>
const props = defineProps({
  courseData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="max-w-xs">
    <div class="relative w-full h-32 overflow-hidden mb-3">
      <img src="@/assets/images/courses.png" alt="Course Image" class="w-full h-full object-cover" />
      <div class="absolute -top-4 left-2 rounded-full p-1">
        <img :src="courseData.logo" alt="Logo" class="w-4 h-16 rotate-45" />
      </div>
    </div>

    <h3 class="text-gray-800 font-semibold text-sm mb-1 truncate">
      {{ courseData.title }}
    </h3>
    <p class="text-gray-500 text-xs mb-2 truncate">
      {{ courseData.instructors.join(", ") }}
    </p>

    <div class="flex items-center text-xs mb-1">
      <CommonRatingStars :rating="courseData.rating" />
      <span class="text-gray-700 font-semibold ml-1">{{ courseData.rating.toFixed(1) }}</span>
      <span class="text-gray-500 ml-1">({{ courseData.reviews.toLocaleString() }})</span>
    </div>

    <!-- Course Details (hours, lectures, level) -->
    <p class="text-gray-500 text-xs mb-2">
      {{ courseData.totalHours }} total hours · {{ courseData.lectures }} lectures · {{ courseData.level }}
    </p>

    <!-- Price -->
    <div class="flex items-center space-x-2">
      <span class="text-lg font-bold">{{ courseData.currentPrice }}</span>
      <span v-if="courseData.originalPrice" class="text-gray-400 line-through">
        {{ courseData.originalPrice }}
      </span>
    </div>
  </div>
</template>
