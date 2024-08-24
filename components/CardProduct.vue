<template>
  <div
    class="w-[276px] h-[464px] relative shadow-md rounded-md overflow-hidden"
  >
    <div
      class="w-full h-[334px] flex overflow-hidden items-start justify-start"
    >
      <NuxtLink
        :to="link"
        class="w-full h-full hover:scale-110 transition-all ease-in-out duration-100"
      >
        <img v-if="image" :src="image" class="w-full h-full" />
      </NuxtLink>
    </div>
    <div class="p-3.5 flex flex-col justify-between h-[135px]">
      <div class="flex flex-col">
        <h2 class="text-[16px] font-semibold">{{ title }}</h2>
        <p class="text-gray-700 text-[14px]">{{ description }}</p>
      </div>
      <div class="flex justify-between">
        <div class="flex items-center gap-2">
          <h4 class="text-[24px] font-md">${{ price }}</h4>
          <span class="line-through text-[#6E7787] text-[16px]"
            >${{ discount }}</span
          >
        </div>
        <button
          class="border-[1px] border-[#459D7A] rounded-full p-2 hover:scale-110 transition-all duration-100 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#459D7A"
          >
            <path
              d="M286.15-97.69q-29.15 0-49.57-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.57-20.42 29.16 0 49.58 20.42 20.42 20.42 20.42 49.58 0 29.15-20.42 49.57-20.42 20.43-49.58 20.43Zm387.7 0q-29.16 0-49.58-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.58-20.42 29.15 0 49.57 20.42t20.42 49.58q0 29.15-20.42 49.57Q703-97.69 673.85-97.69ZM240.61-730 342-517.69h272.69q3.46 0 6.16-1.73 2.69-1.73 4.61-4.81l107.31-195q2.31-4.23.38-7.5-1.92-3.27-6.54-3.27h-486Zm-28.76-60h555.38q24.54 0 37.11 20.89 12.58 20.88 1.2 42.65L677.38-494.31q-9.84 17.31-26.03 26.96-16.2 9.66-35.5 9.66H324l-46.31 84.61q-3.08 4.62-.19 10 2.88 5.39 8.65 5.39h457.69v60H286.15q-40 0-60.11-34.5-20.12-34.5-1.42-68.89l57.07-102.61L136.16-810H60v-60h113.85l38 80ZM342-517.69h280-280Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      v-if="status"
      class="py-1 capitalize px-4 rounded-md bg-[#FFC970] text-white absolute top-2 right-2"
    >
      {{ status }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
  image: {
    type: String,
    required: false,
    default: "",
  },
  link: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  discount: {
    type: Number,
    required: false,
    default: 0,
  },
  status: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style scoped></style>
