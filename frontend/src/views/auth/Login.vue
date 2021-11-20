<template>
 <div class="container mx-auto">

    <h3>login</h3>
    <p v-if="loading">Loading...</p>
    <p v-if="error" style="color: red">{{ error }}</p>
    <input
      type="email"
      name="email"
      placeholder="email"
      v-model="user.email"
      id="email"
    />
    <br />
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="user.password"
      id="password"
    />
    <br />
    <button @click.prevent="login">Login</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: {
        email: null,
        password: null
      },
      loading: false,
      error: null
    }
  },

  methods: {
    async login () {
      this.error = null

      try {
        await this.$store.dispatch('login', this.user)
        await this.$router.push({ name: 'posts' })
      } catch (error) {
        console.log(error.response)
        this.error = error.response.data.errors
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style>
</style>
