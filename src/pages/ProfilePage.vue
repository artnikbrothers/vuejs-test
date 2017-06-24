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
      <items-explorer :profileId="profileId" />
    </div>
  </div>
</template>

<script>
import ProfileDetails from '@/components/ProfileDetails'
import ItemsExplorer from '@/components/ItemsExplorer'
import { fetchUser } from '@/lib/api/api-methods.js'

export default {
  name: 'ProfilePage',
  data () {
    return {
      user: {},
      boxes: [],
      items: [],
      isLoading: true,
      listType: 'items',
      profileId: this.$route.params.id
    }
  },
  components: {
    ProfileDetails,
    ItemsExplorer
  },
  created () {
    fetchUser(this.profileId)
      .then(user => {
        this.user = user
        this.isLoading = false
      })
  }
}
</script>

<style lang="sass" scoped>
.profile-page__loading
  text-align: center
.loading
  opacity: .5
</style>
