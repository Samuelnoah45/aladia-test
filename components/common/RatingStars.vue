<script setup>
// Define props for the rating and review count
const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
});

// Determine the number of stars to display
const fullStars = Math.floor(props.rating);
const hasHalfStar = props.rating % 1 >= 0.5;
const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
</script>

<template>
  <div class="flex items-baseline text-gray-600">
    <span class="font-semibold text-gray-900 mr-1">{{ rating }}</span>

    <template v-for="n in fullStars" :key="'full' + n">
      <Icon name="tabler:star-filled" class="text-yellow-600 text-xs" />
    </template>

    <Icon v-if="hasHalfStar" name="tabler:star-half-filled" class="text-yellow-600" />

    <template v-for="n in emptyStars" :key="'empty' + n">
      <Icon name="tabler:star" class="text-gray-300 text-xs" />
    </template>
  </div>
</template>
