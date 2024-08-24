<template>
  <div
    class="w-full flex justify-between items-start bg-black h-fit py-[60px] px-[180.06px] *:text-white"
  >
    <div class="flex gap-10">
      <div class="flex gap-3 flex-col">
        <h3>About</h3>
        <ul class="flex flex-col gap-3 *:font-thin">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/shop/productListing">Shop</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/offers">Offers</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ourStory">Our story</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
          <li>
            <select
              class="border-[1px] border-white p-2 w-[127px] rounded-[4px] bg-black"
            >
              <option value="khmer">Khmer</option>
              <option value="english">English</option>
              <option value="chinese">Chinese</option>
            </select>
          </li>
        </ul>
      </div>
      <div class="flex gap-3 flex-col">
        <h3>Help</h3>
        <ul class="flex flex-col gap-3 *:font-thin">
          <li>
            <NuxtLink>Shipping & Returns</NuxtLink>
          </li>
          <li>
            <NuxtLink>Track Order</NuxtLink>
          </li>
          <li>
            <NuxtLink>FAQs</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex gap-3 flex-col">
        <h3>Contact</h3>
        <ul class="flex flex-col gap-3 *:font-thin">
          <li>
            <span
              >Phone :
              <NuxtLink class="font-normal">+855 67961719</NuxtLink></span
            >
          </li>
          <li>
            <span
              >Email :
              <NuxtLink class="font-normal"
                >voxodinson@gmail.com</NuxtLink
              ></span
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="flex gap-4 flex-col">
      <div class="">
        <h3 class="text-[20px]">Receive new promotions</h3>
        <p class="text-[14px]">Duis ea tempor commodo amet reprehende</p>
      </div>
      <div class="flex items-center justify-center">
        <div
          class="h-[51px] mt-[1px] flex items-center justify-center w-[303px] rounded-s-md px-4 border-[1px] border-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#FFFFFF"
          >
            <path
              d="M184.62-200q-27.62 0-46.12-18.5Q120-237 120-264.62v-430.76q0-27.62 18.5-46.12Q157-760 184.62-760h590.76q27.62 0 46.12 18.5Q840-723 840-695.38v430.76q0 27.62-18.5 46.12Q803-200 775.38-200H184.62ZM480-475.38 160-684.62v420q0 10.77 6.92 17.7 6.93 6.92 17.7 6.92h590.76q10.77 0 17.7-6.92 6.92-6.93 6.92-17.7v-420L480-475.38Zm0-44.62 307.69-200H172.31L480-520ZM160-684.62V-720v455.38q0 10.77 6.92 17.7 6.93 6.92 17.7 6.92H160v-444.62Z"
            />
          </svg>
          <input
            type="text"
            name=""
            id=""
            placeholder="Input your email"
            class="bg-black outline-none px-4 w-full"
          />
        </div>
        <button class="rounded-e-md h-[52px] px-4 bg-[#459D7A]">
          Subscribe
        </button>
      </div>
      <div class="flex gap-2">
        <NuxtLink>
          <img
            src="../public/icon/twitter.png"
            class="w-[30px] h-[30px]"
            alt="x link"
        /></NuxtLink>
        <NuxtLink>
          <img
            src="../public/icon/facebook.png"
            class="w-[30px] h-[30px]"
            alt="facebook link"
        /></NuxtLink>
        <NuxtLink
          ><img
            src="../public/icon/linkedin.png"
            class="w-[30px] h-[30px]"
            alt="linkedin link"
        /></NuxtLink>
        <NuxtLink>
          <img
            src="../public/icon/youtube.png"
            class="w-[30px] h-[30px]"
            alt="youtube link"
        /></NuxtLink>
      </div>
      <div class="flex gap-2 *:text-[14px]">
        <p>© 2022 Brand, Inc.</p>
        •
        <NuxtLink to="">Privacy</NuxtLink> • <NuxtLink to="">Terms</NuxtLink> •
        <NuxtLink to="">Sitemap</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
