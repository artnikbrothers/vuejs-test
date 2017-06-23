<template>
  <div class="profile-details">
    <div class="profile-details__header">
      <profile-pic-info
        :profile-pic="profilePic"
        :profile-name="profileName"
        :profileNickname="profileNickname"
      />
      <div class="profile-details__buttons-group">
        <button type="button" class="btn__icon btn__follow">Follow</button>
        <button type="button" class="btn__icon btn__message"></button>
        <button type="button" class="btn__icon btn__share"></button>
        <button type="button" class="btn__icon btn__more"></button>
      </div>
    </div>
    <div class="profile-details__body">
      <p class="profile-details__bio" v-if="profileBio">{{ profileBio }}</p>
      <a
        v-if="profileWebsite"
        class="profile-details__website"
        :href="profileWebsite"
      >{{ profileWebsite }}</a>
      <div
        v-if="profileAddress"
        class="profile-details__address"
      >{{ profileAddress }}</div>
    </div>
    <div class="profile-details__footer">
      <div class="profile-details__reviews">
        <a href="#" @click.prevent="addReview">
          <i class="profile-details__reviews__icon"></i>
          <span class="profile-details__reviews__stat">{{ profilePositiveReviews }} of {{ profileTotalReviews }} reviews</span>
        </a>
      </div>
      <div class="profile-details__stats">
        <ul class="columns profile-details__stats__list">
          <li class="column">
            <a href="#">
              <span class="profile-details__stats__count">{{ formatedProfileFollowers }}</span>
              <span class="profile-details__stats__type">Followers</span>
            </a>
          </li>
          <li class="column">
            <a href="#">
              <span class="profile-details__stats__count">{{ formatedProfileFollowing }}</span>
              <span class="profile-details__stats__type">Following</span>
            </a>
          </li>
          <li class="column">
            <a href="#">
              <span class="profile-details__stats__count">{{ formatedProfileItems }}</span>
              <span class="profile-details__stats__type">Items</span>
            </a>
          </li>
          <li class="column">
            <a href="#">
              <span class="profile-details__stats__count">{{ formatedProfileBoxes }}</span>
              <span class="profile-details__stats__type">Boxes</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePicInfo from './ProfilePicInfo'
import { abbrNum } from '@/lib/helpers/numbers'

export default {
  props: {
    profileAddress: {
      type: String,
      default: ''
    },
    profileBio: {
      type: String,
      default: ''
    },
    profileBoxes: {
      type: [String, Number],
      default: 0
    },
    profileFollowers: {
      type: [String, Number],
      default: 0
    },
    profileFollowing: {
      type: [String, Number],
      default: 0
    },
    profileItems: {
      type: [String, Number],
      default: 0
    },
    profileNickname: {
      type: String,
      required: true
    },
    profileName: {
      type: String,
      required: true
    },
    profilePic: {
      type: String,
      required: true
    },
    profilePositiveReviews: {
      type: [String, Number],
      default: 0
    },
    profileTotalReviews: {
      type: [String, Number],
      default: 0
    },
    profileWebsite: {
      type: String,
      default: ''
    }
  },
  components: {
    ProfilePicInfo
  },
  computed: {
    formatedProfileFollowers () {
      return abbrNum(this.profileFollowers)
    },
    formatedProfileFollowing () {
      return abbrNum(this.profileFollowing)
    },
    formatedProfileItems () {
      return abbrNum(this.profileItems)
    },
    formatedProfileBoxes () {
      return abbrNum(this.profileBoxes)
    }
  },
  methods: {
    addReview (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~bulma/sass/utilities/all'
@import '~sass-ems/index'
@import '../assets/styles/variables'
@import '../assets/styles/mixins'

.profile-details__header
  display: flex
  justify-content: space-between

.profile-details__body,
.profile-details__footer
  margin-left: 16px
  margin-right: 16px

.profile-details__body
  margin-top: 5px

.profile-details__bio
  letter-spacing: -.19px
  line-height: em(23px)
  font-size: em(14px)
  font-weight: 500

.profile-details__website,
.profile-details__address
  display: block
  font-weight: 600
  font-size: em(16px)
  line-height: em(27px)
  color: $primary-second

.profile-details__website
  letter-spacing: -.3px

.profile-details__address
  line-height: em(26px)
  letter-spacing: -.08px

.profile-details__footer
  padding-bottom: 1px
  border-bottom: 1px solid #dddddd

.profile-details__reviews
  font-weight: 600
  font-size: em(15px)
  margin-top: 6px
  margin-bottom: 6px

.profile-details__reviews__icon
  display: inline-block
  width: 14px
  height: 13px
  background-image: url("../assets/images/icons.png")
  +image-2x("../assets/images/icons@2x.png", 200, 90)
  background-position: -1px -32px
  margin-right: 3px

.profile-details__reviews__stat
  color: #6d6d6f
  vertical-align: text-bottom
  letter-spacing: -.6px
  line-height: em(21px)

.profile-details__buttons-group
  display: flex

.btn__icon
  border: none
  width: 33px
  height: 30px
  margin-top: 6px
  margin-left: 6px
  background-color: transparent
  background-image: url("../assets/images/icons.png")
  +image-2x("../assets/images/icons@2x.png", 200, 90)

.btn__follow
  border: none
  width: 75px
  height: 35px
  background-position: 1px 44px
  margin-right: 11px
  margin-top: 2px
  padding-left: 2px
  font-size: em(16px)
  font-weight: 500
  letter-spacing: -.5px

.btn__message
  margin-right: 3px

.btn__share
  background-position: -31px 0

.btn__more
  background-position: -61px 0
  margin-right: 4px

.profile-details__stats
  padding: 5px 0 9px
  text-align: center
  +tablet
    padding-left: 25px
    padding-right: 25px

.profile-details__stats__list
  text-align: center
  font-weight: 600
  display: inline-block
  +tablet
    display: flex

  li
    display: inline-block


  li a span
    display: block

.profile-details__stats__count
  color: $primary

.profile-details__stats__type
  font-size: em(11px)
  text-transform: uppercase
  line-height: 11px
  color: #808082
</style>
