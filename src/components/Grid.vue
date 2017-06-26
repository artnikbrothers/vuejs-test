<template>
  <div class="grid" :class="`grid-${columns}`">
    <slot></slot>
    <div v-for="column in columns" :class="`placeholders placeholder-${columns}`"></div>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    columns: {
      type: Number,
      default: 3
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/variables'
@import '../assets/styles/mixins'

.grid
  +center
  display: flex
  flex-direction: row
  justify-content: space-between
  flex-wrap: wrap
  width: 100%

  .column
    margin: 10px 2px 15px

  .column,
  .placeholders
    width: 45.1%
    padding: 0
    flex-basis: auto
    flex-grow: 0

    @media (min-width: $break-2)
      margin-left: 3px
      margin-right: 3px
      max-width: none
      width: 46.38%


.grid-5
  .column,
  .placeholders
    @media (min-width: $break-3)
      width: 30.7%

    @media (min-width: $break-4)
      width: 22.4%

    @media (min-width: $break-5)
      width: 17.7%

.grid-4
  .column,
  .placeholders
    @media (min-width: $break-3)
      width: 22.4%

.grid-3
  .column,
  .placeholders
    @media (min-width: $break-3)
      width: 30.7%
</style>
