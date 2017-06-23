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
@import '../assets/styles/variables'
@import '~sass-ems/index'

.profile-pic-info
  margin-left: 1px

.profile-pic-info__img
  overflow: hidden
  width: 43px
  height: 43px
  border-radius: 50%

.profile-pic-info__details
  display: inline-block
  padding-left: 6px
  vertical-align: text-bottom

.profile-pic-info__name
  color: $text-strong
  letter-spacing: -.6px
  font-size: em(17.5px)

.profile-pic-info__nickname
  display: block
  color: $text-light
  line-height: 16px
  padding-bottom: 4px
  letter-spacing: -.5px
</style>
