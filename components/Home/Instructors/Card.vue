<script setup>
import { reactive } from "vue";

const instructor = reactive({
  name: "Andrei Neagoie",
  position: "Founder of zerotomastery.io",
  image: "/images/course-thumbnail.png",
  rating: "4.6",
  reviews: "247,765",
  students: "1,230,096",
  courses: "17",
});
</script>
<template>
  <div class="w-[80%] py-5">
    <div>
      <div>
        <h2 class="text-xl font-bold text-violet-800 underline">
          {{ instructor.name }}
        </h2>
        <p class="text-gray-500 pb-2">{{ instructor.position }}</p>
      </div>
    </div>
    <div class="flex items-center gap-x-6 pb-2">
      <div class="flex items-center space-x-4">
        <img
          class="w-32 h-32 border border-gray-200 rounded-full"
          src="@/assets//images/instructor.jpg"
          alt="Instructor Avatar"
        />
      </div>
      <div class="mt-4 space-y-1.5">
        <div class="flex items-center space-x-4">
          <Icon name="tdesign:star-filled" />
          <span class="text-gray-700">{{ instructor.rating }} Instructor Rating</span>
        </div>
        <div class="flex items-center space-x-4">
          <Icon name="streamline:star-badge-solid" />
          <span class="text-gray-700">{{ instructor.reviews }} Reviews</span>
        </div>

        <div class="flex items-center space-x-4">
          <Icon name="mdi:people" class="text-lg" />
          <span class="text-gray-700">{{ instructor.students }} Students</span>
        </div>

        <div class="flex items-center space-x-4">
          <Icon name="lets-icons:video-fill" class="text-lg" />
          <span class="text-gray-700 text-sm">{{ instructor.courses }} Courses</span>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <p class="text-gray-600 text-sm">
        Andrei is the instructor of some of the highest rated programming and technical courses online.
        <span class="font-bold"
          >He no longer teaches on Udemy. Instead, he is now the founder of ZTM Academy which is one of the fastest
          growing education platforms in the world</span
        >
      </p>

      <p class="text-gray-600 mt-3">
        ZTM Academy is known for having some of the best instructors and success rates for students.
      </p>
    </div>
  </div>
</template>
