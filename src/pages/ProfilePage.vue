<template>
  <div class="profile-page" :class="{ loading: isLoading }">
    <div class="profile-page__loading" v-if="isLoading">
      <h1>Loading...</h1>
    </div>
    <div class="profile-content" v-else>
      <profile-details
        :profile-address='user.contact.address'
        :profileBio='user.bio'
        :profileBoxes='user.boxes_count'
        :profileFollowers='user.followers_count'
        :profileFollowing='user.following_count'
        :profileItems='user.items_count'
        :profileNickname='user.nickname'
        :profileName='user.name'
        :profilePic='user.avatar.small_url'
        :profilePositiveReviews='user.positive_reviews'
        :profileTotalReviews='user.total_reviews'
        :profileWebsite='user.website'
      />
      <profile-items
        :items="profileItems"
      />
    </div>
  </div>
</template>

<script>
import ProfileDetails from '@/components/ProfileDetails'
import ProfileItems from '@/components/ProfileItems'
import { fetchUser, fetchProfileItems } from '../lib/api/api-methods.js'

export default {
  data () {
    return {
      user: {},
      profileItems: [],
      isLoading: true
    }
  },
  components: {
    ProfileDetails,
    ProfileItems
  },
  async created () {
    let { id } = this.$route.params
    await Promise.all([
      fetchUser(id)
        .then(user => {
          this.user = user
        }),
      fetchProfileItems(id)
        .then(items => {
          this.profileItems = items
        })
    ])

    this.isLoading = false
  }
}
</script>

<style lang="sass" scoped>
.profile-page__loading
  text-align: center
.loading
  opacity: .5
</style>
