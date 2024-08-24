<template>
  <nav class="w-full h-[10vh] flex items-center justify-between px-14">
    <div class="">
      <h1 class="font-bold capitalize">Company-name</h1>
    </div>
    <div class="flex items-center justify-center gap-20">
      <ul class="flex gap-2 *:px-2 *:capitalize">
        <li>
          <NuxtLink class="" to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink class="" to="/shop/productListing">Shop</NuxtLink>
        </li>
        <li>
          <NuxtLink class="" to="/offers">offers</NuxtLink>
        </li>
        <li>
          <NuxtLink class="" to="/ourStory">our story</NuxtLink>
        </li>
        <li>
          <NuxtLink class="" to="/blog">blog</NuxtLink>
        </li>
      </ul>
      <div class="flex gap-2">
        <ISearch placeholder="Search product..." />
        <div class="flex gap-4 justify-center items-center">
          <div class="flex items-center justify-center">
            <NuxtLink to="/orders/cartItems">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path
                  d="M286.15-97.69q-29.15 0-49.57-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.57-20.42 29.16 0 49.58 20.42 20.42 20.42 20.42 49.58 0 29.15-20.42 49.57-20.42 20.43-49.58 20.43Zm387.7 0q-29.16 0-49.58-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.58-20.42 29.15 0 49.57 20.42t20.42 49.58q0 29.15-20.42 49.57Q703-97.69 673.85-97.69ZM240.61-730 342-517.69h272.69q3.46 0 6.16-1.73 2.69-1.73 4.61-4.81l107.31-195q2.31-4.23.38-7.5-1.92-3.27-6.54-3.27h-486Zm-28.76-60h555.38q24.54 0 37.11 20.89 12.58 20.88 1.2 42.65L677.38-494.31q-9.84 17.31-26.03 26.96-16.2 9.66-35.5 9.66H324l-46.31 84.61q-3.08 4.62-.19 10 2.88 5.39 8.65 5.39h457.69v60H286.15q-40 0-60.11-34.5-20.12-34.5-1.42-68.89l57.07-102.61L136.16-810H60v-60h113.85l38 80ZM342-517.69h280-280Z"
                />
              </svg>
            </NuxtLink>
            <div class="">
              <span>Cart <span>(0)</span></span>
            </div>
          </div>
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#5f6368"
            >
              <path
                d="M247.85-260.62q51-36.69 108.23-58.03Q413.31-340 480-340t123.92 21.35q57.23 21.34 108.23 58.03 39.62-41 63.73-96.84Q800-413.31 800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 66.69 24.12 122.54 24.11 55.84 63.73 96.84ZM480-460q-50.54 0-85.27-34.73T360-580q0-50.54 34.73-85.27T480-700q50.54 0 85.27 34.73T600-580q0 50.54-34.73 85.27T480-460Zm0 340q-75.31 0-141-28.04t-114.31-76.65Q176.08-273.31 148.04-339 120-404.69 120-480t28.04-141q28.04-65.69 76.65-114.31 48.62-48.61 114.31-76.65Q404.69-840 480-840t141 28.04q65.69 28.04 114.31 76.65 48.61 48.62 76.65 114.31Q840-555.31 840-480t-28.04 141q-28.04 65.69-76.65 114.31-48.62 48.61-114.31 76.65Q555.31-120 480-120Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import ISearch from "./ISearch.vue";
</script>

<style scoped>
.router-link-exact-active {
  color: rgb(0, 218, 0);
}
</style>
