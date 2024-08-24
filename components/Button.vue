<template>
  <button
    class="rounded-[4px] py-2 px-4 capitalize"
    :class="buttonClass"
    :type="type"
    :disabled="disabled"
    :text="text"
    :variant="variant"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
    text: {
      type: String,
      required: true,
      default: "button name",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "medium", // Could be 'small', 'large', etc.
    },
  },
  computed: {
    buttonClass() {
      return [
        this.getVariantClass(),
        this.getSizeClass(),
        { "opacity-50 cursor-not-allowed": this.disabled },
      ];
    },
  },
  methods: {
    getVariantClass() {
      switch (this.variant) {
        case "secondary":
          return "bg-[#6fd1aa] hover:bg-gray-600";
        case "primary":
          return "bg-[#459D7A] hover:bg-[#5cad8d] hover:text-white text-gray-50";
        default:
          return "bg-none text-[#459D7A]";
      }
    },
    getSizeClass() {
      switch (this.size) {
        case "small":
          return "text-sm py-1 text-[16px] px-[36.25px] w-fit";
        case "large":
          return "text-lg py-3 px-6 w-fit";
        default:
          return "text-md py-2 px-4";
      }
    },
    handleClick(event) {
      // Emit a custom event for handling button clicks
      this.$emit("click", event);
    },
  },
};
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
