<template>
  <div
    class="w-[570px] h-[338px] rounded-lg shadow-md relative overflow-hidden"
  >
    <img :src="image" alt="" class="w-full" />
    <div
      class="absolute top-0 left-[36px] w-full h-full flex flex-col justify-center gap-4"
    >
      <h2 class="text-[24px] font-medium">{{ title }}</h2>
      <p class="text-[20px]">{{ description }}</p>
      <Button varaint="primary" size="small" text="explore" />
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";

defineProps({
  title: {
    type: String,
    required: true,
    default: "card title",
  },
  description: {
    type: String,
    required: true,
    default: "description card",
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
