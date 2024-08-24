<template>
  <div class="w-full h-fit">
    <div class="w-full relative h-[90vh]">
      <div class="w-full h-full">
        <img src="../assets/image/section-poster.png" class="w-full" alt="" />
      </div>
      <div class="w-full absolute top-[195px] pl-[150px] flex gap-4 flex-col">
        <h2 class="font-bold text-[40px]">Gift for your skin</h2>
        <p class="text-[15px]">
          Aliquip fugiat ipsum nostrud ex et eu incididunt <br />
          quis minim dolore excepteur voluptate
        </p>
        <NuxtLink
          to="/"
          class="py-2 w-fit px-4 text-white font-medium rounded-[6px] bg-[#459D7A]"
          >Shop now</NuxtLink
        >
      </div>
    </div>
    <div class="">
      <div class="w-full h-fit flex items-center flex-col gap-5">
        <h1 class="text-[40px] font-medium">Our Products</h1>
        <div class="flex gap-2">
          <Button
            varaint="primary"
            text="best-sellers"
            size="small"
            class="text-white"
          />
          <Button
            text="new-products"
            size="small"
            class="bg-white text-green-400"
          />
        </div>
      </div>
      <Bestseller />
    </div>
    <div class="w-full h-fit flex flex-col items-center justify-center">
      <h2 class="text-[40px] font-medium py-4">Event Promotion</h2>
      <div class="w-full flex gap-7 items-center justify-center py-4">
        <EventCard
          title="Relaxing & Pampering"
          description="Pariatur ad nisi ex tempor ea"
          :image="EventCardImage"
        />
        <EventCard
          title="Relaxing & Pampering"
          description="Pariatur ad nisi ex tempor ea"
          :image="EventCardImage2"
        />
      </div>
    </div>

    <div class="w-full flex mt-4 flex-col items-center justify-center">
      <div class="w-[1140px] relative flex justify-center items-center">
        <h2 class="font-medium text-[40px]">Our Story</h2>
        <NuxtLink
          to="#"
          class="no-underline text-[#459D7A] hover:underline text-[16px] absolute right-0"
          >See more</NuxtLink
        >
      </div>
      <div class="w-full mt-4 relative">
        <img
          src="../assets/image/our-history-image.png"
          alt=""
          class="w-full"
        />
        <button
          class="py-2 flex text-[15px] items-center group justify-center gap-2 px-6 rounded-[4px] bottom-16 right-[140px] absolute bg-black text-white capitalize"
        >
          watch video
          <span
            class="group-hover:scale-125 transition-all ease-in-out duration-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#FFFFFF"
            >
              <path
                d="M390-318.46 641.54-480 390-641.54v323.08ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Zm-.07-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
    <div class="flex items-center justify-center my-10">
      <div
        class="w-[376px] h-[382px] flex flex-col justify-center gap-6 items-start p-4"
      >
        <h3>Read What’s New</h3>
        <p>
          Sint consequat in ipsum irure adipisicing dolore culpa incididunt.
          Veniam elit magna anim ipsum eiusmod eu
        </p>

        <div class="flex justify-between w-full items-center">
          <button
            class="py-2 w-[152px] border-[1px] border-[#459D7A] rounded-[4px] text-[#459D7A]"
          >
            Explore more
          </button>
          <div class="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#58c499"
              class="transition-colors duration-300 hover:fill-teal-600"
            >
              <path
                d="M372.31-267.69 160-480l212.31-212.31L400.62-664l-164 164H800v40H236.62l164 164-28.31 28.31Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#58c499"
              class="transition-colors duration-300 hover:fill-teal-600"
            >
              <path
                d="m547.69-267.69-28.31-28.77L682.92-460H200v-40h482.92L519.38-663.54l28.31-28.77L760-480 547.69-267.69Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="flex gap-4">
        <SmallCard
          :image="smallCardImage1"
          cardTitle="Anim sint Lorem proident in elit magna deser excepteur commodo "
          date="Oct 12, 2024"
        />

        <SmallCard
          :image="smallCardImage2"
          cardTitle="Adipisicing proident in elit magna deser elit proident in elit magna deser"
          date="Oct 12, 2024"
        />
      </div>
    </div>
    <div class="w-full flex items-center justify-center flex-col gap-4 py-4">
      <h3 class="font-medium text-[40px]">Instagram</h3>
      <p class="italic">@yourinstagram_offical</p>
      <div class="w-fit gap-2 grid grid-cols-6">
        <div
          class="w-[186px] h-[186px] rounded-md overflow-hidden"
          v-for="image in images"
        >
          <img
            :src="image.image"
            alt=""
            class="hover:scale-110 transition-all ease-in-out duration-100"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Bestseller from "~/components/Bestseller.vue";
import Button from "~/components/Button.vue";
import CardProduct from "~/components/CardProduct.vue";
import SmallCard from "~/components/SmallCard.vue";

import {
  EventCardImage,
  EventCardImage2,
  smallCardImage1,
  smallCardImage2,
  instagramImage1,
  instagramImage2,
  instagramImage3,
  instagramImage4,
  instagramImage6,
  instagramImage7,
  instagramImage8,
  instagramImage9,
  instagramImage10,
  instagramImage11,
  instagramImage12,
  instagramImage13,
} from "~/static";

const images = [
  {
    image: instagramImage1,
  },
  {
    image: instagramImage2,
  },
  {
    image: instagramImage3,
  },
  {
    image: instagramImage4,
  },
  {
    image: instagramImage6,
  },
  {
    image: instagramImage7,
  },
  {
    image: instagramImage8,
  },
  {
    image: instagramImage9,
  },
  {
    image: instagramImage10,
  },
  {
    image: instagramImage11,
  },
  {
    image: instagramImage12,
  },
  {
    image: instagramImage13,
  },
];
</script>

<style scoped></style>
