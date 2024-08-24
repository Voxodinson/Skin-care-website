<template>
  <div class="w-full h-fit">
    <div class="w-full relative">
      <div class="w-full h-full">
        <img
          src="../../assets/image/poster-image-shop.png"
          class="w-full"
          alt=""
        />
      </div>
      <div
        class="w-[445px] absolute top-[195px] left-[150px] flex gap-4 flex-col"
      >
        <h2 class="font-bold text-[40px]">Gift for your skin</h2>
        <p class="text-[15px]">
          Aliquip fugiat ipsum nostrud ex et eu incididunt <br />
          quis minim dolore excepteur voluptate
        </p>
        <NuxtLink
          to="/storeEvents/eventPromotion"
          class="py-2 px-6 rounded-md w-fit text-white bg-[#459D7A]"
          >Events & Promotion</NuxtLink
        >
      </div>
    </div>
    <div class="w-full flex items-center justify-center">
      <div class="w-[77%] py-2 flex items-center justify-between">
        <div class="flex gap-2">
          <Button text="All products" size="small" class="" />
          <Button text="Face" size="small" class="bg-white text-green-400" />
          <div class="border-[1px] my-2 border-green-400"></div>
          <Button text="Body" size="small" class="bg-white text-green-400" />
        </div>
        <div class="flex items-center justify-center gap-4 py-4">
          <ISearch placeholder="Search here..." />
          <button
            class="flex gap-2 h-[42px] p-4 rounded-md bg-slate-200 items-center justify-center"
          >
            Sort By
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#5f6368"
            >
              <path
                d="M422.31-280v-40h114.61v40H422.31Zm-150-180v-40h414.61v40H272.31ZM160-640v-40h640v40H160Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center justify-center">
      <div class="w-[77%] flex gap-4 flex-wrap justify-between">
        <CardProduct
          v-for="product in products"
          :key="product.id"
          :title="product.name"
          :link="`/shop/product/${product.id}`"
          :description="product.description"
          :price="product.price"
          :discount="product.discount"
          :image="product.images"
          :status="product.type"
          link="#"
        />
      </div>
    </div>
    <div class="flex gap-4 w-full items-center justify-center h-[15vh]">
      <button
        @click="decreaseIndex()"
        class="hover:scale-110 transition-all duration-100 flex items-center justify-center w-[40px] h-[40px] border-[1px] rounded-full hover:border-green-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          class="rotate-180"
        >
          <path
            d="m320.23-107.69-42.54-42.54L607.46-480 277.69-809.77l42.54-42.54L692.54-480 320.23-107.69Z"
          />
        </svg>
      </button>
      <button
        v-for="i in 5"
        :key="i"
        @click="setActive(i)"
        class="w-[40px] h-[40px] flex items-center justify-center rounded-full"
        :class="{ 'border-green-400 border-[1px]': activeIndex === i }"
      >
        {{ i }}
      </button>
      <button
        @click="increaseIndex()"
        class="hover:scale-110 transition-all duration-100 ease-in-out flex items-center justify-center w-[40px] h-[40px] border-[1px] rounded-full hover:border-green-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path
            d="m320.23-107.69-42.54-42.54L607.46-480 277.69-809.77l42.54-42.54L692.54-480 320.23-107.69Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import Button from "~/components/Button.vue";
import CardProduct from "~/components/CardProduct.vue";
import ISearch from "~/components/ISearch.vue";
import { ProductsData } from "~/content/data/products";

const products = ref(ProductsData);
import { ref } from "vue";

const activeIndex = ref(1);

const setActive = (index) => {
  if (index >= 5) {
    return; // Reset to 1 if it reaches or exceeds 10
  } else {
    activeIndex.value = index;
  }
};
function increaseIndex() {
  if (activeIndex.value === 5) {
    return;
  } else {
    activeIndex.value++;
  }
}
function decreaseIndex() {
  if (activeIndex.value === 1) {
    return;
  } else {
    activeIndex.value--;
  }
}
</script>

<style lang="scss" scoped></style>
