<template>
  <div class="item">
    <a class="item__link" :href="itemLink">
      <img class="item__image" :src="itemImage" :alt="truncatedItemTitle">
      <span class="item__title">{{ truncatedItemTitle }}</span>
    </a>
  </div>
</template>

<script>
import { truncateString } from '@/lib/helpers/strings'

export default {
  props: {
    itemImage: {
      type: String,
      require: true
    },
    itemLink: {
      type: String,
      required: true
    },
    itemTitle: {
      type: String,
      required: true
    }
  },
  computed: {
    truncatedItemTitle () {
      return truncateString(this.itemTitle)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/variables'
@import '~sass-ems/index'

.item
  width: 165px
  height: 200px
  margin: 10px 5px 15px

.item__image
  width: 100%
  height: 164px

.item__link
  display: inline-block
  text-align: center

.item__title
  display: block
  color: $primary
  font-weight: 600
  line-height: em(18px)
  padding: 0 5px
  text-align: left
</style>
