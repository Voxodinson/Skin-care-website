<template>
  <div class="w-full flex items-center justify-center flex-col">
    <div class="flex gap-4 w-[77.5%] flex-col">
      <div
        class="w-full flex items-center justify-center py-2 font-bold text-[40px] capitalize"
      >
        My Shopping Bag (3 Items)
      </div>
      <div class="flex gap-4 w-full flex-col">
        <div
          class="flex w-full items-center justify-start text-[24px] font-semibold capitalize"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#5f6368"
          >
            <path
              d="M286.15-97.69q-29.15 0-49.57-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.57-20.42 29.16 0 49.58 20.42 20.42 20.42 20.42 49.58 0 29.15-20.42 49.57-20.42 20.43-49.58 20.43Zm387.7 0q-29.16 0-49.58-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.58-20.42 29.15 0 49.57 20.42t20.42 49.58q0 29.15-20.42 49.57Q703-97.69 673.85-97.69ZM240.61-730 342-517.69h272.69q3.46 0 6.16-1.73 2.69-1.73 4.61-4.81l107.31-195q2.31-4.23.38-7.5-1.92-3.27-6.54-3.27h-486Zm-28.76-60h555.38q24.54 0 37.11 20.89 12.58 20.88 1.2 42.65L677.38-494.31q-9.84 17.31-26.03 26.96-16.2 9.66-35.5 9.66H324l-46.31 84.61q-3.08 4.62-.19 10 2.88 5.39 8.65 5.39h457.69v60H286.15q-40 0-60.11-34.5-20.12-34.5-1.42-68.89l57.07-102.61L136.16-810H60v-60h113.85l38 80ZM342-517.69h280-280Z"
            />
          </svg>
          Order Summary
        </div>
        <div class="flex w-full gap-6">
          <div class="w-[70%] mt-4">
            <table
              class="min-w-full bg-white shadow-md rounded-lg overflow-hidden"
            >
              <thead class="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th class="text-left px-6 py-4 font-medium text-gray-600">
                    Image
                  </th>
                  <th class="text-left px-6 py-4 font-medium text-gray-600">
                    Name
                  </th>
                  <th class="text-left px-6 py-4 font-medium text-gray-600">
                    Price
                  </th>
                  <th class="text-left px-6 py-4 font-medium text-gray-600">
                    Quantity
                  </th>
                  <th class="text-left px-6 py-4 font-medium text-gray-600">
                    Total
                  </th>
                  <th class="text-left px-6 py-4 font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(product, index) in cartitems"
                  :key="index"
                  class="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td class="px-6 py-2">
                    <div class="w-[80px] h-[80px] rounded-md shadow-">
                      <img
                        :src="product.images"
                        alt="Product Image"
                        class="object-cover w-full h-full"
                      />
                    </div>
                  </td>
                  <td class="px-6 py-4 text-gray-700">
                    {{ product.name }}
                  </td>
                  <td class="px-6 py-4 text-gray-700">
                    {{ product.price }}
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex gap-2">
                      <button
                        @click="decreaseQuantity(product.id)"
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
                        @click="increaseQuantity(product.id)"
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
                  </td>
                  <td class="px-6 py-4 text-[#459D7A]">$50</td>
                  <td class="px-6 py-4">
                    <button @click="removeItem(index)" class="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#F44336"
                      >
                        <path
                          d="M292.31-140q-29.92 0-51.12-21.19Q220-182.39 220-212.31V-720h-40v-60h180v-35.38h240V-780h180v60h-40v507.69Q740-182 719-161q-21 21-51.31 21H292.31ZM680-720H280v507.69q0 5.39 3.46 8.85t8.85 3.46h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-720ZM376.16-280h59.99v-360h-59.99v360Zm147.69 0h59.99v-360h-59.99v360ZM280-720v520-520Z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="w-full mt-4 rounded-lg border-gray-200 border-[2px] p-4"
            >
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#00000"
                >
                  <path
                    d="M227.51-195.38q-43.66 0-74.05-30.52-30.38-30.51-30.38-74.1H67.69v-395.38q0-27.62 18.5-46.12 18.5-18.5 46.12-18.5h529.23v144.62h92.31l138.46 186.15V-300h-64.62q0 43.59-30.56 74.1-30.57 30.52-74.23 30.52-43.67 0-74.05-30.52-30.39-30.51-30.39-74.1H332.31q0 43.85-30.57 74.23-30.56 30.39-74.23 30.39Zm.18-40q27 0 45.81-18.81Q292.31-273 292.31-300q0-27-18.81-45.81-18.81-18.81-45.81-18.81-27 0-45.81 18.81-18.8 18.81-18.8 45.81 0 27 18.8 45.81 18.81 18.81 45.81 18.81ZM107.69-340h25.85q8.54-26.46 34.77-45.54 26.23-19.08 59.38-19.08 31.62 0 58.62 18.7 27 18.69 35.54 45.92h299.69v-380H132.31q-9.23 0-16.93 7.69-7.69 7.69-7.69 16.93V-340Zm615.39 104.62q27 0 45.8-18.81Q787.69-273 787.69-300q0-27-18.81-45.81-18.8-18.81-45.8-18.81-27 0-45.81 18.81Q658.46-327 658.46-300q0 27 18.81 45.81 18.81 18.81 45.81 18.81ZM661.54-420H850L732.31-575.38h-70.77V-420ZM364.62-530Z"
                  />
                </svg>
                <h3
                  class="flex w-full items-center justify-start text-[24px] font-semibold capitalize"
                >
                  Delivery Options
                </h3>
              </div>
              <div class="flex gap-[28px] py-2">
                <div
                  class="flex gap-2 items-center text-[16px]"
                  v-for="(dev, i) in delivery"
                  :key="i"
                >
                  <input
                    type="radio"
                    name="id"
                    class="outline-none size-[1.2rem]"
                  />
                  <label for="">{{ dev.name }}</label>
                </div>
              </div>
              <div class="w-full flex gap-4">
                <div
                  class="w-[50%] border-[2px] flex flex-col gap-1 border-[#459D7A] p-4 rounded-lg shadow-md *:text-[#459D7A]"
                  v-for="(method, i) in typeDeivery"
                  :key="i"
                >
                  <div class="flex gap-4 items-center">
                    <div
                      class="w-[24Px] h-[24px] flex items-center justify-center border-[1px] border-[#117B34] rounded-full"
                    >
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
                    <h3 class="text-[30px] font-semibold">
                      ${{ method.price }}
                    </h3>
                  </div>
                  <span class="pl-[40px]">{{ method.type }}</span>
                  <span class="pl-[40px]">{{ method.arrived }}</span>
                </div>
              </div>
            </div>
            <div class="w-full border-gray-200 border-[2px] rounded-lg mt-4">
              <form action=" " class="w-full flex flex-col gap-4 p-[28px]">
                <div class="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#00000"
                  >
                    <path
                      d="M247.85-260.62q51-36.69 108.23-58.03Q413.31-340 480-340t123.92 21.35q57.23 21.34 108.23 58.03 39.62-41 63.73-96.84Q800-413.31 800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 66.69 24.12 122.54 24.11 55.84 63.73 96.84ZM480-460q-50.54 0-85.27-34.73T360-580q0-50.54 34.73-85.27T480-700q50.54 0 85.27 34.73T600-580q0 50.54-34.73 85.27T480-460Zm0 340q-75.31 0-141-28.04t-114.31-76.65Q176.08-273.31 148.04-339 120-404.69 120-480t28.04-141q28.04-65.69 76.65-114.31 48.62-48.61 114.31-76.65Q404.69-840 480-840t141 28.04q65.69 28.04 114.31 76.65 48.61 48.62 76.65 114.31Q840-555.31 840-480t-28.04 141q-28.04 65.69-76.65 114.31-48.62 48.61-114.31 76.65Q555.31-120 480-120Z"
                    />
                  </svg>
                  <h3
                    class="flex w-full items-center justify-start text-[24px] font-semibold capitalize"
                  >
                    Customer Information
                  </h3>
                </div>
                <div class="w-full flex gap-2">
                  <div class="w-[50%] flex-col flex">
                    <label for="" class="font-semibold text-gray-600"
                      >Full name</label
                    >
                    <input
                      type="text"
                      class="py-2 px-4 rounded-md outline-none bg-gray-100"
                      placeholder="Your name here"
                    />
                  </div>
                  <div class="w-[50%] flex-col flex">
                    <label for="" class="font-semibold text-gray-600"
                      >Phone number</label
                    >
                    <input
                      type="text"
                      class="py-2 px-4 rounded-md outline-none bg-gray-100"
                      placeholder="Your number here"
                    />
                  </div>
                </div>
                <div class="w-full">
                  <div class="w-full flex-col flex">
                    <label for="" class="font-semibold text-gray-600"
                      >Full name</label
                    >
                    <input
                      type="text"
                      class="py-2 px-4 rounded-md outline-none bg-gray-100"
                      placeholder="Your name here"
                    />
                  </div>
                </div>
                <div class="w-full flex gap-2 items-center">
                  <input type="checkbox" class="w-[15px] h-[15px]" />
                  <label for="checkbox" class="">Save as default</label>
                </div>
                <div
                  class="w-full rounded-lg flex gap-2 items-center p-4 border-[1px] border-[#754C3C]"
                >
                  <div class="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40px"
                      viewBox="0 -960 960 960"
                      width="40px"
                      fill="#754C3C"
                    >
                      <path
                        d="M480-301.54q10.46 0 17.54-7.08 7.08-7.07 7.08-17.53 0-10.47-7.08-17.54-7.08-7.08-17.54-7.08-10.46 0-17.54 7.08-7.08 7.07-7.08 17.54 0 10.46 7.08 17.53 7.08 7.08 17.54 7.08Zm-20-132.31h40v-240h-40v240ZM480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                      />
                    </svg>
                  </div>

                  <div class="">
                    <h3>Delivery note</h3>
                    <p class="text-[.8rem]">
                      Eiusmod et nisi non sunt dolor proident consequat irure ut
                      exercitation consectetur fugiat
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            class="w-[30%] h-fit p-4 rounded-lg flex flex-col gap-4 border-[1px] border-[#459D7A] mt-4"
          >
            <div class="">Payment Method</div>
            <div class="w-full">
              <button
                class="w-full flex text-[.8rem] items-center justify-start text-blue-400"
              >
                Change payment methods
              </button>
              <div
                class="bg-[#F4FAF8] mt-1 border-[1px] border-[#459D7A] rounded-lg py-4 px-4 flex items-center justify-between"
              >
                <div class="flex items-center justify-center gap-2">
                  <img src="../../public/icon/masterCart.png" alt="" />
                  <h3>Master card</h3>
                </div>
                <span class="text-[14px] text-[#459D7A] font-semibold"
                  >****100503</span
                >
              </div>
            </div>
            <div class="w-full gap-2 flex">
              <input
                type="text"
                placeholder="Enter discount code"
                class="py-2 w-full px-4 rounded-lg border-[1px] text-[.8rem] border-gray-400 outline-none"
              />
              <button class="py-2 rounded-lg px-4 bg-[#F4FAF8]">Apply</button>
            </div>
            <span
              class="w-fit px-4 rounded-lg py-1 text-white bg-yellow-400 text-[.8rem]"
              >15% off</span
            >

            <div
              class="w-full *:w-full *:flex *:items-center *:justify-between *:capitalize"
            >
              <div class="">
                subtotal <span class="font-semibold">$180</span>
              </div>
              <div class="">
                Discount <span class="font-semibold">15%</span>
              </div>
              <div class="">
                Delivery fee <span class="font-semibold">$20</span>
              </div>
              <div class="border-t-[1px] border-gray-200 mt-6">
                total
                <span class="font-bold text-yellow-400 text-[24px]">$187</span>
              </div>
            </div>
            <NuxtLink
              to="/purchases/purchaseSuccessfully"
              class="bg-[#459D7A] flex items-center justify-center py-2 w-full rounded-lg text-white capitalize"
            >
              Proceed to payment
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[78%] ml-1 py-4 mt-1">
      <div class="w-full font-bold text-[40px] capitalize">
        Related products
      </div>
      <Bestseller />
    </div>
  </div>
</template>

<script setup>
import Bestseller from "~/components/Bestseller.vue";
import { ProductsData } from "~/content/data/products";
const products = ref(ProductsData);

const cartitems = computed(() => {
  return products.value.slice(0, 4);
});

const increaseQuantity = (id) => {
  const item = cartitems.value.find((product) => product.id === id);
  if (item) {
    item.quantity++;
  }
};

const decreaseQuantity = (id) => {
  const item = cartitems.value.find((product) => product.id === id);
  if (item && item.quantity > 1) {
    item.quantity--;
  }
};

const delivery = [{ name: "UPS" }, { name: "FedEx" }, { name: "DHL" }];

const typeDeivery = [
  { price: 22, type: "instant delivery", arrived: "Est. arrival: Today" },
  { price: 12, type: "Standard delivery", arrived: "Est. arrival: DD/MM" },
];
</script>

<style lang="scss" scoped></style>
