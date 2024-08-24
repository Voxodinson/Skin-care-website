<template>
  <div>
    <div class="w-[376px] overflow-hidden h-[382px] rounded-[8px] shadow-md">
      <div class="w-full h-[229px]">
        <img :src="image" alt="" class="w-full" />
      </div>
      <div class="h-[147px] flex flex-col gap-2 p-[16px] justify-between">
        <h3 class="text-wrap font-medium text-[]">{{ cardTitle }}</h3>
        <p>{{ description }}</p>
        <span>{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  cardTitle: {
    type: String,
    required: true,
    default: "",
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
  date: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped></style>
