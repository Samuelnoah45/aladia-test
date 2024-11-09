<script setup lang="ts">
import { usePriceCard } from "@/stores/useCardDisplay";
const cardStore = usePriceCard();
import Breadcrumb from "primevue/breadcrumb";
const items = ref([{ label: "Design" }, { label: "Web Design" }, { label: "Mobile App Design" }]);
const isLanguageMore = ref(false);
const languageSmallList = "English [Auto], Arabic [Auto], ";
const languageMoreList =
  "English [Auto], Arabic [Auto], Chinese [Auto], French [Auto], German [Auto], Indonesian [Auto], Italian [Auto], Japanese [Auto], Korean [Auto], Polish [Auto], Portuguese [Auto], Russian [Auto], Spanish [Auto], Thai [Auto], Turkish [Auto], Vietnamese [Auto]";
const language = ref(languageSmallList);
const handleLanguageVisibility = () => {
  isLanguageMore.value = !isLanguageMore.value;
  language.value = isLanguageMore.value ? languageMoreList : languageSmallList;
};
</script>
<template>
  <div class="w-full bg-secondary p-6">
    <div class="mx-auto grid grid-cols-5 max-w-6xl gap-16" :class="[isLanguageMore ? 'h-[430px]' : 'h-[330px]']">
      <div class="col-span-3 space-y-6">
        <Breadcrumb class="text-primaryDark text-sm font-bold" :model="items">
          <template #separator> <Icon class="text-xl text-white font-bold" name="lsicon:right-filled" /> </template>
        </Breadcrumb>
        <h1 class="text-3xl font-extrabold text-white">Complete Web & Mobile Designer: UI/UX, Figma, +more</h1>
        <p class="text-lg text-white">
          Become a UX/UI Designer! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML,
          and CSS
        </p>
        <div class="flex space-x-2">
          <button class="bg-[#ECEB98] text-xs p-1 font-medium">Bestseller</button>
          <div class="flex items-center text-yellow-600">
            <span class="px-1">5</span><Icon v-for="i in 5" :key="i" class="" name="mdi:star" />
          </div>
          <p class="text-base text-primaryDark">(133,000 ratings)</p>
          <p class="text-base text-white">161,715 students</p>
        </div>
        <div class="flex space-x-2 text-sm">
          <p class="text-white">Created by</p>
          <p class="text-primaryDark underline">samuel noah,</p>
          <p class="text-primaryDark underline">Daniel noah</p>
        </div>

        <div class="flex flex-wrap gap-4 text-white text-sm w-[80%]">
          <div class="flex items-center space-x-2">
            <Icon class="text-base" name="carbon:information-filled" />
            <p>Last updated 9/2024</p>
          </div>
          <div class="flex items-center space-x-2">
            <Icon class="text-base" name="tabler:world" />
            <p>English</p>
          </div>
          <div class="flex justify-start space-x-2">
            <p>
              <span><Icon class="text-base shrink-0" name="mdi:subtitles" /></span> {{ language }}
            </p>
            <button v-if="!isLanguageMore" class="text-primaryDark underline" @click="handleLanguageVisibility">
              13 More
            </button>
          </div>
        </div>
      </div>
      <div v-if="cardStore.cardName == 'bigCard'" class="col-span-2">
        <HomePriceCard />
      </div>
    </div>
  </div>
</template>
