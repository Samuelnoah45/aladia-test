<script setup>
const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
});

const toggleWishlist = () => {
  props.course.isInWishlist = !props.course.isInWishlist;
};
</script>

<template>
  <div class="flex items-start space-x-4 py-2 border-b border-gray-200">
    <div class="flex space-x-4 w-2/3">
      <div class="w-20 h-20">
        <img
          src="@/assets/images/video.png"
          alt="Course Thumbnail"
          class="w-full h-full object-cover border border-gray-200"
        />
      </div>

      <div class="flex-1">
        <h3 class="font-semibold text-secondary">
          {{ course.title }}
        </h3>

        <div class="flex items-center space-x-2 text-xs text-gray-600 mt-1">
          <span class="bg-yellow-200 text-black font-semibold px-3 py-1"> Bestseller </span>
          <span class="text-green-950 font-semibold"> {{ course.totalHours }} total hours </span>
          <span>•</span>
          <span>Updated {{ course.updatedDate }}</span>
        </div>
      </div>
    </div>

    <div class="flex justify-between items-start w-1/3">
      <div class="">
        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <span class="text-gray-800 font-semibold">{{ course.rating }}</span>
            <Icon name="tabler:star-filled" class="ml-1 text-yellow-600" />
          </div>
        </div>
      </div>

      <div class="">
        <div class="flex items-center">
          <Icon name="ic:round-people" class="text-lg text-gray-800" />
          <span class="ml-1">{{ course.totalStudents }}</span>
        </div>
      </div>

      <div class="flex items-center gap-x-3">
        <div>
          <div>
            <p class="text-lg font-bold text-gray-900">
              {{ course.discountedPrice }}
            </p>
            <p class="text-sm line-through text-gray-500">
              {{ course.originalPrice }}
            </p>
          </div>
        </div>

        <div>
          <button
            class="text-gray-500 border border-black/60 rounded-full w-10 h-10 hover:bg-gray-200 transition-colors duration-200 ease-linear"
          >
            <Icon :name="course.isInWishlist ? 'mdi:heart' : 'mdi:heart-outline'" class="text-lg text-black/60" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
