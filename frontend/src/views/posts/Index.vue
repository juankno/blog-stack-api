<template>
  <div>
    <h2>posts:</h2>
    <p v-if="error" style="color: red">{{ error }}</p>
    <div v-if="posts" class="posts-wrapper">
      <div v-for="(post, index) in posts" :key="index" class="post">
        <h3>{{ post.title }}</h3>
        <h5>{{ post.extract }}</h5>
        <p>{{ post.content }}</p>
      </div>
    </div>
    <p v-if="loading">Loading...</p>
  </div>
</template>

<script>
import repository from '@/api/repository'
export default {
  name: 'posts-index',
  data () {
    return {
      posts: null,
      loading: false,
      error: null
    }
  },
  async mounted () {
    try {
      const { data } = await repository.getPosts()
      this.posts = data
    } catch (error) {
      this.error = error.response.data ?? error
    }
  }
}
</script>

<style>
</style>
