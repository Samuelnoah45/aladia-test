<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { sections } from "@/constant/courseContent";
const showMore = ref(false);
</script>
<template>
  <div class="space-y-4">
    <h1 class="font-bold text-2xl">Course content</h1>
    <div class="flex justify-between text-sm">
      <p>31 sections • 331 lectures • 25h 42m total length</p>
      <button class="font-bold text-sm text-primary">Expand all section</button>
    </div>
    <div class="w-full overflow-hidden" :class="[!showMore ? 'h-[632px]' : '']">
      <Disclosure v-for="(section, index) in sections" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between space-x-2 bg-gray-50 border-x border-t border-gray-400 p-3 text-left text-sm font-medium text-secondary"
          :class="[!open ? '' : 'border-b', index == sections.length - 1 ? 'border-b' : '']"
        >
          <div class="flex space-x-2 items-center">
            <Icon :class="!open ? 'rotate-180 transform' : ''" class="h-5 w-5" name="mingcute:up-line" />
            <span class="text-md font-bold">{{ section.title }}</span>
          </div>
          <p class="text-sm">{{ section.lectures.length }} lectures . {{ section.totalDuration }}</p>
        </DisclosureButton>
        <DisclosurePanel class="px-4 pb-2 pt-4 text-sm border-x space-y-4">
          <div class="flex justify-between" v-for="lecture in section.lectures">
            <div class="flex items-center space-x-2">
              <Icon class="text-base" :name="lecture.type == 'video' ? 'ph:video-light' : 'mdi:file-outline'" />
              <p :class="lecture.type == 'video' ? 'text-primary underline' : ''">{{ lecture.title }}</p>
            </div>
            <div class="flex space-x-4">
              <p v-if="lecture.type == 'video'" class="text-primary underline">Preview</p>
              <p>{{ lecture.duration }}</p>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
    <button
      v-if="!showMore"
      @click="showMore = true"
      class="border p-3 w-full flex justify-center text-sm font-bold border-gray-400"
    >
      12 More section
    </button>
  </div>
</template>
<style scoped>
.buttonStyle {
  @apply border border-secondary font-bold text-base  px-3 py-2  rounded-full;
}
</style>
