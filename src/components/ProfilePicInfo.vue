<template>
  <div class="profile-pic-info">
    <img class="profile-pic-info__img" :src="profilePic" :alt="profileName">
    <div class="profile-pic-info__details">
      <strong class="profile-pic-info__name">{{ profileName }}</strong>
      <span class="profile-pic-info__nickname">{{ profileNickname }}</span>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'ProfilePicInfo',
  props: {
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
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~sass-ems/index'
@import '../assets/styles/variables'
@import '../assets/styles/mixins'

.profile-pic-info
  margin-left: 1px
  margin-top: 4px

  @media (min-width: $break-2)
    margin-top: 0

.profile-pic-info__img
  overflow: hidden
  width: 35px
  height: 35px
  border-radius: 50%
  margin-left: 5px

  @media (min-width: $break-2)
    width: 43px
    height: 43px
    margin-left: 0

.profile-pic-info__details
  display: inline-block
  padding-left: 6px
  vertical-align: top

  @media (min-width: $break-2)
    vertical-align: text-bottom

.profile-pic-info__name
  color: $text-strong
  letter-spacing: -.6px
  font-size: em(16px)
  font-weight: 600

  @media (min-width: $break-2)
    font-size: em(17px)

.profile-pic-info__nickname
  display: block
  color: $text-light
  line-height: 14px
  padding-bottom: 4px
  letter-spacing: -.5px
  font-size: em(13px)
  font-weight: 500

  @media (min-width: $break-2)
    font-size: em(15px)
    font-weight: normal
    line-height: 16px
</style>
