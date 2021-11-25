<template>
  <div id="app">
    <div id="nav">
      <header-component :authenticated="authenticated"></header-component>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderComponent from '@/components/HeaderComponent'
export default {
  name: 'App',
  components: { HeaderComponent },
  data () {
    return {
      loading: false,
      error: false
    }
  },
  computed: {
    ...mapGetters({
      authenticated: 'authenticated'
    })
  }
}
</script>

<style lang="scope">
</style>
