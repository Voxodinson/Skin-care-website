<template>
  <div class="w-full h-fit flex flex-col items-center justify-center">
    <div class="w-[77%] py-4">
      <NuxtLink to="/" class="text-[#459D7A]">Home</NuxtLink>
      >

      <NuxtLink to="/shop/productListing" class="text-[#459D7A]"
        >Product</NuxtLink
      >
      >
      <NuxtLink>Detail {{ productId }}</NuxtLink>
    </div>
    <div class="w-[77%] h-[85vh] flex gap-10 border-b-[1px] border-gray-200">
      <div v-if="product" class="w-[50%] h-full flex gap-2">
        <!-- Thumbnails -->
        <div class="flex flex-col gap-2 overflow-auto h-[536px] pr-2">
          <div class="h-fit flex flex-col gap-2">
            <div
              class="rounded-md overflow-hidden h-[125px] w-[100px] cursor-pointer"
              v-for="image in product.detailsImages"
              :key="image"
              @click="changeMainImage(image)"
            >
              <img
                :src="image"
                alt=""
                class="w-full h-full rounded-md hover:scale-110 transition-all duration-100 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div class="h-[536px] w-[437px] relative rounded-md overflow-hidden">
          <img :src="mainImage" alt="" class="w-full h-full" />
          <div
            v-if="product.type"
            class="py-1 capitalize px-4 rounded-md bg-[#FFC970] text-white absolute top-2 right-2"
          >
            {{ product.type }}
          </div>
        </div>
      </div>
      <div class="">
        <div class="flex gap-4 flex-col">
          <div class="flex flex-col">
            <h3 class="font-medium text-[1.5rem]">{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </div>
          <div class="flex items-center gap-2">
            <h4 class="text-[24px] font-md text-[#459D7A] font-bold">
              ${{ product.price }}
            </h4>
            <span class="line-through text-[#6E7787] text-[16px]">
              ${{ product.discount }}
            </span>
          </div>
          <p>{{ product.detail }}</p>
          <div class="flex gap-4">
            <span class="flex gap-2 font-bold">
              {{ product.reviewCount }}
              <span class="font-thin text-gray-400">reviews</span>
            </span>
            <span class="flex gap-2 font-bold">
              {{ product.productSold }}
              <span class="font-thin text-gray-400">sold</span>
            </span>
            <div class="flex">
              <span v-for="i in 5" :key="i">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  :fill="i / 1 <= product.rating ? '#F3C63F' : '#E0E0E0'"
                >
                  :class="{'bg-[#F3C63F]': i / 1 <= product.rating}" >
                  <path
                    d="m293-203.08 49.62-212.54-164.93-142.84 217.23-18.85L480-777.69l85.08 200.38 217.23 18.85-164.93 142.84L667-203.08 480-315.92 293-203.08Z"
                  />
                </svg>
              </span>
              <span class="font-bold"> {{ product.rating }}</span>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="border-[1px] border-[#117B34] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#117B34"
              >
                <path
                  d="M382-267.69 183.23-466.46 211.77-495 382-324.77 748.23-691l28.54 28.54L382-267.69Z"
                />
              </svg>
            </div>
            <span>Free shipping on orders over $49USD</span>
          </div>
          <div class="flex gap-3">
            <div class="border-[1px] border-[#117B34] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#117B34"
              >
                <path
                  d="M382-267.69 183.23-466.46 211.77-495 382-324.77 748.23-691l28.54 28.54L382-267.69Z"
                />
              </svg>
            </div>
            <span>Free + easy returns</span>
          </div>
          <div class="w-full flex flex-col gap-1">
            <span class="font-medium text-gray-700 text-[16px]"
              >Choose size</span
            >
            <select
              name=""
              id=""
              class="py-2 rounded-md px-4 border-[1px] border-gray-400 outline-none"
            >
              <option v-for="size in product.size" value="{{ size.value }}">
                {{ size.value }} ML
              </option>
            </select>
          </div>
          <div class="w-full flex flex-col gap-1">
            <span class="font-medium text-gray-700 text-[16px]">Quantity</span>
            <div class="flex gap-2">
              <button
                @click="decreaseQuantity()"
                class="flex items-center justify-center bg-gray-200 hover:bg-gray-100 w-[40px] rounded-sm h-[40px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M240-460v-40h480v40H240Z" />
                </svg>
              </button>
              <div
                class="flex items-center justify-center bg-gray-200 w-[40px] rounded-sm h-[40px]"
              >
                {{ product.quantity }}
              </div>
              <button
                @click="increaseQuantity()"
                class="flex items-center justify-center bg-gray-200 hover:bg-gray-100 w-[40px] rounded-sm h-[40px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path
                    d="M460-460H240v-40h220v-220h40v220h220v40H500v220h-40v-220Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex gap-2 w-full mt-2">
            <button
              class="py-2 flex items-center w-[50%] justify-center border-[1px] border-green-400 text-[#459D7A] rounded-md gap-2"
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
              Add to bag
            </button>
            <Button text="checkout" class="w-[50%]" />
          </div>
          .
        </div>
      </div>
    </div>
    <div class="w-[77%]">
      <div class="">
        <h3 class="text-[40px] font-medium capitalize">Related products</h3>
      </div>
      <Bestseller />
    </div>
    <div class="flex flex-col gap-10 w-full items-center justify-center pt-4">
      <div class="w-[77%] grid grid-cols-5">
        <button
          v-for="(btn, index) in buttons"
          :key="index"
          @click="handleClick(index)"
          :class="[
            'w-full py-2 rounded-md text-[#459D7A]',
            activeButton === index ? 'bg-[#C5E6D9]' : 'bg-white',
          ]"
        >
          {{ btn.label }}
        </button>
      </div>
      <div class="w-[77%] flex gap-4">
        <div class="w-[50%]">
          <div v-if="activeButton === 0" class="w-full flex flex-col gap-6">
            <div class="">
              <h3 class="font-bold text-[40px] capitalize">
                {{ product.benefits.title }}
              </h3>
              <span class="text-[16px] text-gray-600">{{
                product.benefits.description
              }}</span>
            </div>
            <div
              class=""
              v-for="benefitDetail in product.benefits.benefitdetail"
            >
              <p class="font-semibold text-[20px]">
                {{ benefitDetail.benefitDetailTitle }}
              </p>
              <p class="text-[16px] text-gray-600">
                {{ benefitDetail.benefittext }}
              </p>
            </div>
          </div>
          <div v-if="activeButton === 1" class="w-full flex flex-col gap-6">
            <div class="">
              <h3 class="font-bold text-[40px] capitalize">
                {{ product.Ingredients.title }}
              </h3>
              <p class="text-[16px] text-gray-600">
                {{ product.Ingredients.description }}
              </p>
            </div>
            <div
              class=""
              v-for="ingredient in product.Ingredients.Ingredientsdetail"
            >
              <p class="font-semibold text-[20px]">
                {{ ingredient.IngredientsName }}
              </p>
              <p class="text-[16px] text-gray-600">
                {{ ingredient.IngredientText }}
              </p>
            </div>
          </div>
          <div v-if="activeButton === 2" class="w-full flex flex-col gap-6">
            <div class="">
              <h3 class="font-bold text-[40px] capitalize">
                {{ product.Howtouse.title }}
              </h3>
              <p class="text-[16px] text-gray-600">
                {{ product.Howtouse.description }}
              </p>
            </div>
            <div class="" v-for="htuDetail in product.Howtouse.howtouseDetail">
              <p class="font-semibold text-[20px]">
                {{ htuDetail.howtouseName }}
              </p>
              <p class="text-[16px] text-gray-600">
                {{ htuDetail.howtouseText }}
              </p>
            </div>
          </div>
          <div v-if="activeButton === 3" class="w-full flex flex-col gap-6">
            <div class="">
              <h3 class="font-bold text-[40px] capitalize">Reviews</h3>
              <p class="text-[16px]">Here are some reviews...</p>
            </div>
          </div>
          <div v-if="activeButton === 4" class="w-full flex flex-col gap-6">
            <div class="">
              <h3 class="font-bold text-[40px] capitalize">FAQs</h3>
              <p class="text-[16px] text-gray-600">
                Frequently asked questions...
              </p>
            </div>
          </div>
        </div>
        <div class="w-[50%] h-fit">
          <img
            src="../../../assets/image/benefit-image.png"
            alt=""
            class="w-full h-[700px]"
          />
        </div>
      </div>
    </div>
    <div class="w-full flex items-center justify-center flex-col">
      <div class="w-[77%] font-bold text-[40px] capitalize pt-6">
        Ingredients
      </div>
      <div class="w-[77%] flex justify-between py-6">
        <SmallCard
          :image="ingredientImage1"
          cardTitle="Hyaluronic acid"
          description="Elit sit excepteurexcepteur duis labore nisi sit anim adipisicing consectetur irure duis labore nisi sit anim adipisicing consectetur irure"
        />
        <SmallCard
          :image="ingredientImage2"
          cardTitle="Hyaluronic acid"
          description="Elitexcepteur duis labore nisi sit anim adipisicing consectetur irure sit excepteur duis labore nisi sit anim adipisicing consectetur irure"
        />
        <SmallCard
          :image="ingredientImage3"
          cardTitle="Hyaluronic acid"
          description="Elit sit excepteur excepteur duis labore nisi sit anim adipisicing consectetur irureduis labore nisi sit anim adipisicing consectetur irure"
        />
      </div>
      <div class="w-full flex items-center justify-center pb-4">
        <NuxtLink
          class="py-2 w-[200px] text-center text-[#459D7A] font-medium rounded-md border-[1px] border-[#459D7A]"
          >See full list</NuxtLink
        >
      </div>
    </div>
    <div class="w-[77%] flex relative py-4">
      <img
        src="../../../assets/image/how-to-use-image.png"
        alt=""
        class="w-full"
      />
      <div
        class="w-full h-full flex items-center justify-center absolute top-0 right-0"
      >
        <button
          class="py-2 flex text-[15px] items-center group justify-center gap-2 px-6 rounded-[4px] bottom-16 right-[140px] bg-black text-white capitalize"
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
    <CustomerFeedback :rating="product.rating" />
    <Faqs />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import { ProductsData } from "~/content/data/products";
import Bestseller from "~/components/Bestseller.vue";
import SmallCard from "~/components/SmallCard.vue";
import { ingredientImage1, ingredientImage2, ingredientImage3 } from "~/static";
import CustomerFeedback from "~/components/CustomerFeedback.vue";
import Faqs from "~/components/faqs.vue";

// Reactive variables
const route = useRoute();
const productId = ref(route.params.id);
const product = ref(ProductsData.find((p) => p.id === productId.value));
const mainImage = ref(product.value.images);
const activeButton = ref(0);
// Watch for route changes
watch(
  () => route.params.id,
  (newId) => {
    product.value = ProductsData.find((p) => p.id === newId);
    mainImage.value = product.value ? product.value.images : product.images;
  }
);
const changeMainImage = (image) => {
  mainImage.value = image;
};
const increaseQuantity = () => {
  product.value.quantity++;
};
const decreaseQuantity = () => {
  if (product.value.quantity === 1) {
    return;
  }
  product.value.quantity--;
};

const buttons = [
  {
    label: "Benefits",
  },
  {
    label: "Ingredients",
  },
  {
    label: "How to use",
  },
  {
    label: "Reviews",
  },
  {
    label: "FAQs",
  },
];
//handle add active button
const handleClick = (index) => {
  activeButton.value = index;
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: white;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(171, 171, 171);
}
</style>
