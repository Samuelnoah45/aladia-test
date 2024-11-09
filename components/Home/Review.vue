<script setup></script>

<template>
  <div class="bg-white border border-gray-300 p-6 space-y-4">
    <h1 class="font-bold text-2xl">Featured review</h1>
    <div class="flex items-center space-x-4 mb-4">
      <img src="@/assets/images/review.jpg" alt="User Avatar" class="w-16 h-16 rounded-full" />
      <div>
        <h3 class="text-lg font-semibold">Kenneth Gan Kae L.</h3>
        <p class="text-sm text-gray-600">132 courses</p>
        <p class="text-sm text-gray-600">41 reviews</p>
      </div>
    </div>
    <div class="flex items-center space-x-1 mb-2">
      <span class="text-yellow-700 text-sm" v-for="star in 5" :key="star">
        <Icon name="mdi:star" width="20" height="20" />
      </span>
      <span class="text-gray-500 text-sm">4 years ago</span>
    </div>
    <p class="text-gray-800 text-sm mb-4">
      Any courses when it comes from Andrei's or his company ZTM, his online courses never fail to impress. My road
      being a fullstack developer might be slow but with courses from Andrei I know my ah ha! moment will come to me
      pretty soon. And one thing, he always keeps his courses updated, so no worries that materials would not get
      obsolete!
    </p>
    <div class="space-y-4">
      <span class="text-sm">Was this review helpful?</span>
      <div class="flex space-x-2 items-center">
        <button class="flex items-center rounded-full border p-3 text-gray-600 text-sm">
          <Icon name="mdi:thumb-up-outline" width="20" height="20" />
        </button>
        <button class="flex items-center rounded-full border p-3 text-gray-600 text-sm">
          <Icon name="mdi:thumb-down-outline" width="20" height="20" />
        </button>
        <p class="ml-1 underline">Report</p>
      </div>
    </div>
  </div>
</template>
