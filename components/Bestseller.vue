<template>
  <div class="w-full items-center justify-center">
    <div class="w- mt-5 py-4 gap-6 flex items-center justify-center">
      <CardProduct
        v-for="product in bestSellers"
        :key="product.id"
        :title="product.name"
        :description="product.description"
        :price="product.price"
        :discount="product.discount"
        :image="product.images"
        :status="product.type"
        :link="`/shop/product/${product.id}`"
      />
    </div>
  </div>
</template>

<script setup>
import { ProductsData } from "~/content/data/products";

const products = ref(ProductsData);

// Computed property to filter best-sellers
const bestSellers = computed(() => {
  return products.value
    .filter((product) => product.type === "best-seller")
    .slice(0, 4);
});
</script>

<style lang="scss" scoped></style>
