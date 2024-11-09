<script setup>
// Define props for dynamic data

const props = defineProps({
  reviewData: {
    type: Object,
    required: true,
  },
});

// Calculate initials based on the reviewerName if no image is provided
const initials = computed(() => {
  return props.reviewData.reviewerName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
});

// Check if the review text is truncated
const isTruncated = computed(() => props.reviewData.reviewText.length > 400);

// Truncate the review text to 400 characters
const truncatedText = computed(() => {
  return isTruncated.value
    ? props.reviewData.reviewText.slice(0, 400) + "..."
    : props.reviewData.reviewText;
});
</script>

<template>
  <div class="max-w-md p-4 bg-white border-t">
    <div class="flex items-center mb-2">      
      <div
        
        class="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold"
      >
        {{ initials }}
      </div>

      <div class="ml-3">
        <h4 class="text-gray-800 font-semibold">
          {{ reviewData.reviewerName }}
        </h4>
        <div class="flex items-center gap-x-2">
          
          <CommonRatingStars :rating="reviewData.rating" />
          <p class="text-gray-500 text-sm font-medium">
            {{ reviewData.datePosted }}
          </p>
        </div>
      </div>

      <Icon
        name="mdi:dots-vertical"
        class="ml-auto text-xl text-gray-500 cursor-pointer"
      />
    </div>

    <p class="text-gray-700 my-2 mb-3">
        <p>
            {{ truncatedText }}
        </p>
      <span
        v-if="!isTruncated"
        @click="expanded = true"
        class="text-black cursor-pointer font-medium underline"
        >Show more</span
      >
    </p>

    <div class="flex text-gray-500 text-sm py-2">
      <p class="mr-2">Helpful?</p>
      <Icon
        name="mdi:thumb-up-outline"
        class="mr-2 cursor-pointer text-lg text-black"
      />
      <Icon
        name="mdi:thumb-down-outline"
        class="cursor-pointer text-lg text-black"
      />
    </div>
  </div>
</template>