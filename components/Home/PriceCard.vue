<script setup></script>

<template>
  <div class="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
    <div class="relative">
      <img src="@/assets/images/video.png" alt="Course Preview" class="w-full h-48 object-cover" />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex-col flex items-center justify-center">
        <Icon class="text-white text-7xl" name="lsicon:play-filled" />
        <button class="text-white text-xl font-bold">Preview this course</button>
      </div>
    </div>

    <div class="p-4">
      <div class="flex items-center space-x-4">
        <div class="text-3xl text-primary font-bold">$11.99</div>
        <div class="text-gray-500 line-through">$74.99</div>
        <div class="">84% off</div>
      </div>
      <p class="text-red-700 text-sm pt-1">
        <span><Icon class="text-xl shrink-0 mb-1 mr-1" name="material-symbols:alarm-outline" /></span
        ><span class="font-bold">1 hour</span> left at this price!
      </p>

      <button class="w-full bg-primary font-bold text-white py-3 mt-4 hover:bg-purple-700">Add to cart</button>
      <button class="w-full border font-bold border-gray-300 py-3 mt-2 hover:bg-gray-100">Buy now</button>

      <p class="text-center text-xs text-gray-500 mt-2">30-Day Money-Back Guarantee</p>

      <div class="mt-4 text-sm">
        <p class="font-semibold">This course includes:</p>
        <ul class="mt-2 space-y-4">
          <li class="flex items-center gap-1">
            <Icon class="text-xl shrink-0" name="ph:video" />25 hours on-demand video
          </li>
          <li class="flex items-center gap-1">
            <Icon class="text-xl shrink-0" name="ic:outline-code" />1 coding exercise
          </li>
          <li class="flex items-center gap-1"><Icon class="text-xl shrink-0" name="mdi:paper-outline" />57 articles</li>
          <li class="flex items-center gap-1">
            <Icon class="text-xl shrink-0" name="line-md:file-download" />15 downloadable resources
          </li>
          <li class="flex items-center gap-1">
            <Icon class="text-xl shrink-0" name="bx:mobile" />Access on mobile and TV
          </li>
          <li class="flex items-center gap-1">
            <Icon class="text-xl shrink-0" name="mdi:infinity" />Full lifetime access
          </li>
          <li class="flex items-center gap-1">
            <Icon class="text-xl shrink-0 mt-1" name="mdi:prize" />Certificate of completion
          </li>
        </ul>
      </div>

      <div class="mt-4 flex justify-between text-sm text-secondary font-bold">
        <a href="#" class="underline">Share</a>
        <a href="#" class="underline">Gift this course</a>
        <a href="#" class="underline">Apply Coupon</a>
      </div>
      <div class="flex mt-2 border border-dashed justify-between p-1 px-2 items-center">
        <div>
          <p class="text-sm font-bold">ST2MT110724BNEW <span class="text-xs font-normal">is applied</span></p>
          <span class="text-xs">Udemy coupon</span>
        </div>
        <Icon class="text-xl shrink-0" name="material-symbols-light:close" />
      </div>
      <div class="flex mt-2">
        <input
          type="text"
          placeholder="Enter Coupon"
          class="border border-gray-300 w-[70%] focus:ring-0 focus:border-gray-300 px-4 py-2 text-sm"
        />
        <button class="w-[30%] bg-secondary text-white py-2 hover:bg-gray-800">Apply</button>
      </div>
    </div>

    <div class="p-4 border-t space-y-2">
      <p class="text-lg text-gray-700 font-bold">Training 5 or more people?</p>
      <p class="text-sm text-gray-500 mb-2">Get your team access to 27,000+ top Udemy courses anytime, anywhere.</p>
      <button class="w-full border-secondary border text-gray-700 py-2 font-bold text-sm hover:bg-gray-300">
        Try Udemy Business
      </button>
    </div>
  </div>
</template>
