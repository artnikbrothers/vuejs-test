<template>
  <div class="profile-items">
    <div class="profile-items__header">
      <div class="profile-items__header__filters">
        <div class="profile-items__header__filter--view">
          <a href="#"
            class="profile-items__filter__icon profile-items__header__filter--list"
            @click.prevent="onClickSortTypeBoxes"></a>
          <a href="#"
            class="profile-items__filter__icon profile-items__header__filter--grid"
            @click.prevent="onClickSortTypeItems"></a>
        </div>
        <div class="profile-items__header__filter--sort">
          <a href="#"
            class="profile-items__filter__icon profile-items__header__filter--reverse"
            @click.prevent="onClickRevertItems"></a>
        </div>
      </div>
    </div>
    <div class="profile-items__list grid-5">
      <profile-item
        class="column"
        v-for="item in items"
        :key="item.id"
        :item-link="item.share_url"
        :item-image="item.item_photos[0].small"
        :item-title="item.name"
      />
    </div>
  </div>
</template>

<script>
import ProfileItem from './ProfileItem'

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    ProfileItem
  },
  methods: {
    onClickSortTypeBoxes (e) {
      console.log(e)
    },
    onClickSortTypeItems (e) {
      console.log(e)
    },
    onClickRevertItems (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~bulma/sass/utilities/all'
@import '../assets/styles/variables'
@import '../assets/styles/mixins'

.profile-items
  display: flex
  flex-wrap: wrap
  margin-left: 13px
  margin-right: 12px

.profile-items__header
  width: 100%
  padding: 15px 0 9px

.profile-items__header__filters
  text-align: center
  position: relative

.profile-items__filter__icon
  display: inline-block
  width: 32px
  height: 30px
  background-image: url("../assets/images/icons.png")
  +image-2x("../assets/images/icons@2x.png", 200, 90)
  margin-right: 9px
  margin-left: 7px

.profile-items__header__filter--view
  display: flex
  justify-content: center
  align-items: center
  margin-top: 4px

.profile-items__header__filter--list
  background-position: -120px 0

.profile-items__header__filter--grid
  background-position: -152px 0
  width: 40px
  height: 34px

.profile-items__header__filter--sort
  position: absolute
  right: 0
  top: 0

.profile-items__header__filter--reverse
  width: 24px
  height: 25px
  background-position: -95px -2px
  margin: 5px 3px

.profile-items__list
  margin-top: 0

  &.loading
    opacity: .5

  .column
    margin-left: 2px
    margin-right: 2px
</style>
