<template>
  <figure class="boxes">
    <a class="boxes__picture__link" :href="link">
      <img
        class="boxes__image"
        v-for="image in images"
        :src="image.photo"
        :alt="image.name"
        :key="image.id"
      >
      <div
        v-if="images.length < 4"
        v-for="n in (4 - images.length)"
        class="boxes__empty"></div>
    </a>
    <figcaption class="boxes__title">
      <a class="boxes__link" :href="link">
        {{ truncatedBoxesTitle }}
      </a>
      <span class="boxes__count">
        {{ formatedBoxesCount }} {{ count | pluralize('item') }}
      </span>
    </figcaption>
  </figure>
</template>

<script>
import { truncateString } from '@/lib/helpers/strings'
import { abbrNum } from '@/lib/helpers/numbers'

export default {
  name: 'ProfileBox',
  props: {
    count: {
      type: [String, Number],
      default: 0
    },
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
    truncatedBoxesTitle () {
      return truncateString(this.title, 12)
    },
    formatedBoxesCount () {
      return abbrNum(this.count)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/variables'
@import '~sass-ems/index'

.boxes__picture__link
  display: block;
  height: 0;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  position: relative;

.boxes__image,
.boxes__empty
  width: calc(50% - 1px)
  height: calc(50% - 1px)
  position: absolute
  display: block

  &:nth-child(1)
    top: 0
    left: 0
  &:nth-child(2)
    top: 0
    right: 0
  &:nth-child(3)
    bottom: 0
    left: 0
  &:nth-child(4)
    bottom: 0
    right: 0

.boxes__empty
  background-color: #e3e3e5

.boxes__count
  display: block
  text-transform: uppercase
  font-size: em(13px)
  color: #919191
  margin-top: 5px

.boxes__link
  text-align: center
  color: $primary

.boxes__title
  display: block
  font-weight: 600
  line-height: em(18px)
  padding: 0 5px
  margin-top: 10px
  text-align: center
</style>
