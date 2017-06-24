<template>
  <figure class="item">
    <a class="item__picture__link" :href="link">
      <template v-for="image in images">
        <img class="item__image" :src="image.small" :alt="truncatedItemTitle">
      </template>
    </a>
    <figcaption class="item__title">
      <a class="item__link" :href="link">
        {{ truncatedItemTitle }}
      </a>
    </figcaption>
  </figure>
</template>

<script>
import { truncateString } from '@/lib/helpers/strings'

export default {
  name: 'ProfileItem',
  props: {
    images: {
      type: Array,
      require: true
    },
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    truncatedItemTitle () {
      return truncateString(this.title)
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
