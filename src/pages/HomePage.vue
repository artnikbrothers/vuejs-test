<template>
  <div class="homepage">
    <router-link :to="{ name: 'profile-page', params: { id: '30676' }}">Open user profile</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style lang="sass" scoped>
  .homepage
    text-align: center
</style>
