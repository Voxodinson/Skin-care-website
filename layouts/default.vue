<template>
  <div>
    <Navigation />
    <div class="">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "~/components/Footer.vue";
import Navigation from "~/components/Navigation.vue";
</script>

<style lang="scss" scoped></style>
