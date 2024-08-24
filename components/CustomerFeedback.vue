<template>
  <div class="flex flex-col items-center justify-center w-[77%] h-fit">
    <div class="w-full flex items-center justify-between">
      <h3 class="font-bold text-[40px] capitalize">Reviews</h3>
      <button
        class="flex items-center justify-center gap-2 py-2 px-4 border-[1px] border-[#459D7A] text-[#459D7A] rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#459D7A"
        >
          <path
            d="M255.38-415.38h88.16l210.77-210.77q5.15-5.93 7.73-12.43t2.58-12.88q0-6.39-2.7-12.66-2.69-6.26-7.61-12.19l-36.77-38q-5.16-5.15-11.92-7.73-6.77-2.58-13.39-2.58-6.38 0-12.88 2.58-6.5 2.58-12.43 7.73L255.38-503.54v88.16Zm273.85-236.08-37-37.77 37 37.77ZM290.77-450.77v-38l137.92-137.92 18.46 19.54 18.77 19.23-137.15 137.15h-38Zm156.38-156.38 18.77 19.23-37.23-38.77 18.46 19.54Zm25.23 191.77h232.24v-40H512.38l-40 40ZM120-156.92v-618.46q0-27.62 18.5-46.12Q157-840 184.62-840h590.76q27.62 0 46.12 18.5Q840-803 840-775.38v430.76q0 27.62-18.5 46.12Q803-280 775.38-280h-532.3L120-156.92ZM226-320h549.38q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-430.76q0-9.24-7.69-16.93-7.69-7.69-16.93-7.69H184.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93v521.15L226-320Zm-66 0v-480 480Z"
          />
        </svg>
        Write a review
      </button>
    </div>
    <div class="flex gap-10 pb-10">
      <div class="w-fit">
        <div class="flex items-center justify-start gap-2">
          <span class="font-meduim text-[40px]"> {{ rating }}</span>
          <div class="flex">
            <span v-for="i in 5" :key="i">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                :fill="i / 1 <= rating ? '#F3C63F' : '#E0E0E0'"
              >
                :class="{'bg-[#F3C63F]': i / 1 <= rating}" >
                <path
                  d="m293-203.08 49.62-212.54-164.93-142.84 217.23-18.85L480-777.69l85.08 200.38 217.23 18.85-164.93 142.84L667-203.08 480-315.92 293-203.08Z"
                />
              </svg>
            </span>
          </div>
          <span>{{ Customers.length }} reviews</span>
        </div>
        <div class="flex flex-col gap-2">
          <div
            class="flex gap-2 items-center justify-start"
            v-for="rating in rating_static"
          >
            <span>{{ rating.number }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#F3C63F"
            >
              <path
                d="m293-203.08 49.62-212.54-164.93-142.84 217.23-18.85L480-777.69l85.08 200.38 217.23 18.85-164.93 142.84L667-203.08 480-315.92 293-203.08Z"
              />
            </svg>
            <div class="w-[200px] bg-gray-200 h-[10px] rounded-full">
              <div
                class="h-[10px] rounded-l-full bg-[#F3C63F]"
                :style="{ width: rating.ratingPercent + '%' }"
              ></div>
            </div>
            <span>{{ rating.ratingPercent }}%</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div
          class="border-b-[1px] border-gray-200 py-2"
          v-for="customer in Customer_feedback"
        >
          <div class="flex gap-2">
            <div class="w-[50px] h-[50px] overflow-hidden rounded-full">
              <img :src="customer.image" alt="" />
            </div>
            <div class="flex flex-col items-start justify-start">
              <div class="flex gap-2 items-center">
                <h3 class="font-semibold">
                  {{ customer.customerName }}
                </h3>
                <span class="text-[12px] text-gray-500 mt-[2px]"
                  >{{ customer.date }}day ago</span
                >
              </div>
              <div class="flex">
                <span v-for="i in 5" :key="i">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    :fill="i / 1 <= customer.rating ? '#F3C63F' : '#E0E0E0'"
                  >
                    :class="{'bg-[#F3C63F]': i / 1 <= customer.rating}" >
                    <path
                      d="m293-203.08 49.62-212.54-164.93-142.84 217.23-18.85L480-777.69l85.08 200.38 217.23 18.85-164.93 142.84L667-203.08 480-315.92 293-203.08Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="w-full">
            <p class="text-gray-600 text-[14px]">{{ customer.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  rating: {
    type: Number,
    required: true,
  },
});
import { Customer_feedback } from "~/content/data/products";
const Customers = ref(Customer_feedback);

const rating_static = [
  { number: 5, ratingPercent: 60 },
  { number: 4, ratingPercent: 25 },
  { number: 3, ratingPercent: 10 },
  { number: 2, ratingPercent: 5 },
  { number: 1, ratingPercent: 0 },
];
</script>

<style lang="scss" scoped></style>
