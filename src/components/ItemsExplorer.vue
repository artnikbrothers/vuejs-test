<template>
  <div class="items-explorer">
    <div class="items-explorer__header">
      <div class="items-explorer__header__filters">
        <div class="items-explorer__header__filter--view">
          <button
            type="button"
            class="items-explorer__filter__icon items-explorer__header__filter--list"
            :class="{ active: listType === 'boxes' }"
            :disabled="isLoading"
            @click="fetchBoxes"
          />
          <button
            type="button"
            :class="{ active: listType === 'items' }"
            class="items-explorer__filter__icon items-explorer__header__filter--grid"
            :disabled="isLoading"
            @click="fetchItems"
          />
        </div>
        <div class="items-explorer__header__filter--sort">
          <button type="button" 
            class="items-explorer__filter__icon items-explorer__header__filter--reverse"
            @click="onClickRevertItems" />
        </div>
      </div>
    </div>
    <div v-if="isLoading" class="items-explorer__loading">
      <img class="preloader" src="../assets/images/preloader.gif">
    </div>
    <grid v-else class="items-explorer__list grid-5" :placeholders="5">
      <profile-item
        v-if="listType === 'items'"
        class="column"
        v-for="item in items"
        :key="item.id"
        :link="item.share_url"
        :images="item.item_photos"
        :title="item.name"
      />
      <profile-box
        v-if="listType === 'boxes'"
        class="column"
        v-for="box in boxes"
        :key="box.id"
        :count="box.items_count"
        :images="box.items_preview"
        :link="box.share_url"
        :title="box.name"
      />
    </grid>
  </div>
</template>

<script>
import Grid from './Grid'
import ProfileItem from './ProfileItem'
import ProfileBox from './ProfileBox'
import { fetchProfileItems, fetchProfileBoxes } from '../lib/api/api-methods.js'

export default {
  name: 'ItemsExplorer',
  data () {
    return {
      items: [],
      boxes: [],
      listType: 'item',
      isLoading: true
    }
  },
  props: {
    profileId: {
      type: [String, Number],
      required: true
    },
    defaultListType: {
      type: String,
      default: 'items'
    }
  },
  components: {
    Grid,
    ProfileItem,
    ProfileBox
  },
  methods: {
    fetchItems () {
      this.isLoading = true

      fetchProfileItems(this.profileId)
        .then(items => {
          this.items = items
          this.listType = 'items'
          this.isLoading = false
        })
    },
    fetchBoxes () {
      this.isLoading = true

      fetchProfileBoxes(this.profileId)
        .then(res => {
          this.boxes = res.boxes
          this.listType = 'boxes'
          this.isLoading = false
        })
    },
    onClickRevertItems (e) {
      console.log(e)
    }
  },
  beforeMount () {
    this.listType = this.defaultListType
  },
  created () {
    if (this.listType) {
      this.fetchItems()
    } else {
      this.fetchBoxes()
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~bulma/sass/utilities/all'
@import '../assets/styles/variables'
@import '../assets/styles/mixins'

.items-explorer
  display: flex
  flex-wrap: wrap
  margin-left: 11px
  margin-right: 14px
  @media (min-width: $break-2)
    margin-right: 12px

.items-explorer__header
  width: 100%
  padding: 15px 0 9px

.items-explorer__header__filters
  text-align: center
  position: relative
  
  button
    border: none
    background-color: transparent
    
.items-explorer__filter__icon
  display: inline-block
  width: 32px
  height: 30px
  background-image: url("../assets/images/icons.png")
  +image-2x("../assets/images/icons@2x.png", 200, 90)
  margin-right: 9px
  margin-left: 7px

.items-explorer__header__filter--view
  display: flex
  justify-content: center
  align-items: center
  margin-top: 4px

.items-explorer__header__filter--list,
.items-explorer__header__filter--grid
  width: 40px
  height: 34px
  &.active
    background-color: #eee
    border-radius: $radius-large

.items-explorer__header__filter--list
  background-position: -117px 2px
  &.active
    background-position: -117px -29px

.items-explorer__header__filter--grid
  background-position: -152px 0
  &.active
    background-position: -152px -28px

.items-explorer__header__filter--sort
  position: absolute
  right: 0
  top: 0

.items-explorer__header__filter--reverse
  width: 24px
  height: 25px
  background-position: -95px -2px
  margin: 5px 3px

.items-explorer__loading
  width: 100%
  text-align: center
  margin-top: 50px

.items-explorer__list
  margin-top: 0

  &.loading
    opacity: .5

  .column
</style>
