<template>
  <div class="w-[77%] flex flex-col gap-3">
    <div class="py-4">
      <h3 class="font-bold text-[40px] capitalize">Reviews</h3>
    </div>
    <div
      class="h-fit flex flex-col rounded-md p-4 border-[1px] rmd border-[#459D7A]"
      v-for="(faq, index) in displayedFaqs"
      :key="index"
      @click="toggle(index)"
    >
      <div class="cursor-pointer w-full flex justify-between items-start">
        <h3 class="font-semibold text-[#459D7A]">{{ faq.title }}</h3>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
            :class="{
              'rotate-[-90deg]': activeIndex !== index,
              'rotate-[90deg]': activeIndex === index,
            }"
            class="transition-transform duration-300"
          >
            <path
              d="M400-107.69 27.69-480 400-852.31l42.54 42.54L112.77-480l329.77 329.77L400-107.69Z"
            />
          </svg>
        </div>
      </div>
      <div
        v-if="activeIndex === index"
        class="border-t-[1px] border-gray-300 mt-4 pt-3"
      >
        <p>{{ faq.text }}</p>
      </div>
    </div>

    <div class="w-full">
      <button
        @click="handleClick"
        class="text-[#459D7A] py-1 w-full b border-t-[1px] border-gray-400"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Faqs } from "~/content/data/products";

// Initial number of FAQs to display
const defaultDisplayCount = 4;

// Reactive variable to control the number of FAQs shown
const displayedFaqs = ref(Faqs.slice(0, defaultDisplayCount));
const activeIndex = ref(null);
const buttonText = ref("");
buttonText.value = "Show more";
function toggle(index) {
  activeIndex.value = activeIndex.value === index ? null : index;
}

function handleClick() {
  const currentLength = displayedFaqs.value.length;
  const totalLength = Faqs.length;

  if (currentLength < totalLength) {
    const newLength = Math.min(currentLength + 4, totalLength);
    displayedFaqs.value = Faqs.slice(0, newLength);
    if (newLength === Faqs.length) {
      buttonText.value = "Show Less";
    }
  } else {
    displayedFaqs.value = Faqs.slice(0, 4);
    buttonText.value = "Show more";
  }
}
</script>
