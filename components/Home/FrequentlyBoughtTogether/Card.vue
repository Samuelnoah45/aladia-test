<script setup>
// Define props for dynamic data
const props = defineProps({
  courseData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex items-start space-x-4">
    <div class="w-48 h-32">
      <img
        src="@/assets//images/courses2.png"
        alt="Product Thumbnail"
        class="w-full h-full object-cover border border-gray-200"
      />
    </div>

    <div class="flex flex-col flex-1 space-y-1.5">
      <h3 class="text-lg font-semibold text-gray-900">
        {{ courseData.title }}
      </h3>

      <div class="flex items-center space-x-2 text-sm text-gray-600">
        <span class="font-semibold">{{ courseData.authors.join(", ") }}</span>
      </div>

      <div class="flex items-center space-x-2 text-sm text-gray-600">
        <CommonRatingStars :rating="courseData.rating" />
        <span>({{ courseData.reviews.toLocaleString() }})</span>
      </div>

      <div class="">
        <span v-if="courseData.isBestseller" class="bg-yellow-200 text-black font-semibold px-2 py-1 mt-2">
          Bestseller
        </span>
      </div>
    </div>

    <div class="text-right">
      <p class="text-lg font-bold text-gray-900">
        {{ courseData.discountedPrice }}
      </p>
      <p class="text-sm line-through text-gray-500">
        {{ courseData.originalPrice }}
      </p>
    </div>
  </div>
</template>
