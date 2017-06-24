<template>
  <div class="grid">
    <slot></slot>
    <div v-for="placeholder in placeholders" :class="`placeholders placeholder-${placeholder}`"></div>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    placeholders: {
      type: Number,
      default: 3
    }
  }
}
</script>
