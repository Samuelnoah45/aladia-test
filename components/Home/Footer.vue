<template>
  <footer class="bg-[#2D2F31] text-gray-400 px-16 pt-16 space-y-8 pb-4 flex flex-col justify-between">
    <div class="flex-1">
      <div class="flex flex-col lg:flex-row items-center justify-between border-b border-gray-700 pb-6 mb-6">
        <p class="text-center lg:text-left text-white mb-4 lg:mb-0">
          Top companies choose
          <span class="text-blue-400 font-semibold">Udemy Business</span> to build in-demand career skills.
        </p>
        <div class="flex items-center flex-wrap space-x-6">
          <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="Nasdaq" class="h-8" />
          <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="Volkswagen" class="h-8" />
          <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="Box" class="h-8" />
          <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="NetApp" class="h-8" />
          <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="Eventbrite" class="h-8" />
        </div>
      </div>

      <div class="flex items-start justify-between">
        <div class="grid lg:grid-cols-2 md:grid-cols-4 gap-4 text-white text-sm mb-6">
          <div class="space-y-1.5">
            <a href="#" class="block hover:text-white">Udemy Business</a>
            <a href="#" class="block hover:text-white">Teach on Udemy</a>
            <a href="#" class="block hover:text-white">Get the app</a>
            <a href="#" class="block hover:text-white">About us</a>
            <a href="#" class="block hover:text-white">Contact us</a>
          </div>
          <div class="space-y-1.5">
            <a href="#" class="block hover:text-white">Careers</a>
            <a href="#" class="block hover:text-white">Blog</a>
            <a href="#" class="block hover:text-white">Help and Support</a>
            <a href="#" class="block hover:text-white">Affiliate</a>
            <a href="#" class="block hover:text-white">Investors</a>
          </div>
          <div class="space-y-1.5">
            <a href="#" class="block hover:text-white">Terms</a>
            <a href="#" class="block hover:text-white">Privacy policy</a>
            <a href="#" class="block hover:text-white">Cookie settings</a>
            <a href="#" class="block hover:text-white">Sitemap</a>
            <a href="#" class="block hover:text-white">Accessibility statement</a>
          </div>
        </div>

        <div>
          <button
            class="flex justify-center items-center border border-gray-500 text-white px-7 py-1.5 hover:bg-gray-700"
          >
            <Icon name="icon-park-outline:earth" class="mr-2 text-lg" /> English
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
      <div class="mt-4 md:mt-0 flex items-center justify-between w-full space-x-2">
        <img src="@/assets/images/logo-udemy-white.svg" alt="Udemy Logo" class="h-6" />
        <span>© 2024 Udemy, Inc.</span>
      </div>
    </div>
  </footer>
</template>
