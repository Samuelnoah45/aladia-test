<script setup>
import { usePriceCard } from "@/stores/useCardDisplay";
const cardStore = usePriceCard();
const content = ref(null);
const hero = ref(null);
const isAtTop = ref(false);
const checkIfAtTop = () => {
  if (content.value) {
    const { top } = content.value.getBoundingClientRect();
    const { top: heroTop } = hero.value.getBoundingClientRect();

    if (top <= 0) {
      cardStore.setCardName("smallCard");
    } else {
      cardStore.setCardName("bigCard");
    }

    isAtTop.value = heroTop <= 0;
  }
};

onMounted(() => {
  window.addEventListener("scroll", checkIfAtTop);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkIfAtTop);
});
</script>
<template>
  <div v-if="isAtTop" class="w-full fixed top-0 lg:h-[70px] hidden lg:inline-block z-30 bg-black p-3">
    <p class="text-white font-extrabold">Complete Web & Mobile Designer: UI/UX, Figma, +more</p>
    <div class="flex space-x-2">
      <button class="bg-[#ECEB98] text-xs p-1 font-medium">Bestseller</button>
      <div class="flex items-center text-yellow-600">
        <span class="px-1">5</span><Icon v-for="i in 5" :key="i" class="" name="mdi:star" />
      </div>
      <p class="text-sm text-primaryDark">(133,000 ratings)</p>
      <p class="text-sm text-white">161,715 students</p>
    </div>
  </div>
  <HomeNavBar />
  <div>
    <div ref="hero">
      <HomeHero />
    </div>
    <div ref="content" class="max-w-6xl mx-auto py-6 px-2 lg:grid lg:grid-cols-5 gap-4">
      <div class="lg:col-span-3 space-y-6">
        <HomeCourseList />
        <HomeExplore />
        <HomeCourseContent />
        <HomeReview />
        <HomeStudentBought />
        <HomeFrequentlyBoughtTogether />
        <HomeInstructors />
        <HomeUsersReviews />
        <HomeMoreCourses />
      </div>
      <div class="h-full col-span-2">
        <HomePriceCard v-if="cardStore.cardName == 'smallCard'" class="sticky top-3 w-full" />
      </div>
    </div>
    <HomeFooter />
  </div>
</template>
