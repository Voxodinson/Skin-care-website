<template>
  <div class="w-full flex items-center justify-center flex-col">
    <div class="w-[50%] flex flex-col gap-4 py-6">
      <div class="flex items-center flex-col">
        <h3
          class="flex items-center justify-center py-2 font-seimbold text-[40px] capitalize"
        >
          Product history
        </h3>
        <p class="text-gray-400 text-center">
          Check the status of recent orders, manage returns, and<br />
          discover similar products.
        </p>
      </div>
      <div
        v-for="i in 2"
        class="p-4 rounded-lg border-[1px] border-gray-400 w-full flex flex-col"
      >
        <div
          class="w-full flex items-center justify-between border-b-[1px] border-y-gray-400 pb-4"
        >
          <div class="flex gap-4 items-center">
            <p class="text-gray-400">Delivery on March 22,2021</p>
            <span>Order #4376</span>
          </div>
          <div class="w-fit flex gap-4 items-center">
            <NuxtLink
              class="underline font-thin text-[.9rem] text-gray-400 cursor-pointer hover:text-gray-600"
              >Manage order</NuxtLink
            >
            <NuxtLink
              class="underline font-thin text-[.9rem] text-gray-400 cursor-pointer hover:text-gray-600"
              >View invoice</NuxtLink
            >
            <span class="rotate-[-90deg] mb-2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path
                  d="M400-107.69 27.69-480 400-852.31l42.54 42.54L112.77-480l329.77 329.77L400-107.69Z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div class="mt-4">
          <div
            class="capitalize border-b-[1px] py-2 flex justify-between items-center border-gray-300 w-full"
            v-for="item in itemToBuy"
          >
            <div class="flex gap-4">
              <NuxtLink :to="`/shop/product/${item.id}`" class="w-[100px]">
                <img :src="item.images" alt="" class="w-full" />
              </NuxtLink>
              <div class="flex flex-col gap-2">
                <h3 class="font-semibold">{{ item.name }}</h3>
                <div class="flex gap-2">
                  <span class="py-1 px-3 rounded-full bg-gray-100">50ml</span>
                  <span class="py-1 px-3 rounded-full bg-gray-100">
                    <span class="text-[.7rem]">x</span>
                    {{ item.quantity }} items
                  </span>
                </div>
                <h3 class="font-semibold">$100</h3>
              </div>
            </div>
            <div class="">
              <span class="font-semibold">$100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ProductsData } from "~/content/data/products";

const products = ref(ProductsData);

// Computed property to filter best-sellers
const itemToBuy = computed(() => {
  return products.value
    .filter((product) => product.type === "best-seller")
    .slice(0, 4);
});
</script>

<style lang="scss" scoped></style>
