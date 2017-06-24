<template>
  <figure class="item">
    <router-link class="item__picture__link" :to="itemLink">
      <img class="item__image" :src="itemImage" :alt="truncatedItemTitle">
    </router-link>
    <figcaption class="item__title">
      <router-link class="item__link" :to="itemLink">
        {{ truncatedItemTitle }}
      </router-link>
    </figcaption>
  </figure>
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

.item__picture__link
  display: block
  height: 0
  padding-bottom: 100%
  overflow: hidden
  position: relative

.item__image
  max-width: 100%;
  height: 100%
  position: absolute
  left: 50%
  transform: translateX(-50%)

.item__link
  text-align: center
  color: $primary

.item__title
  display: block
  font-weight: 600
  line-height: em(18px)
  padding: 0 5px
  margin-top: 10px
  text-align: left
</style>
