<template>
  <div class="grid">
    <slot></slot>
    <div v-for="placeholder in placeholders" :class="`placeholders placeholders${placeholder}`"></div>
  </div>
</template>

<script>
export default {
  props: {
    placeholders: {
      type: Number,
      default: 3
    }
  }
}
</script>
