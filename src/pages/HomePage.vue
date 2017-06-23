<template>
  <div class="homepage">
    <router-link :to="{ name: 'profile-page', params: { id: '30678' }}">Open user profile</router-link>
  </div>
</template>

<style lang="sass" scoped>
  .homepage
    text-align: center
</style>
