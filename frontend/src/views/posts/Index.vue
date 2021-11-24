<template>
  <div>
    <p v-if="error" style="color: red">{{ error }}</p>
    <div v-if="posts" class="posts-wrapper">
     <div class="grid grid-cols-2 gap-4">
        <post-item v-for="post in posts" :key="post.id" :post="post"></post-item>
      </div>
    </div>
    <p v-if="loading">Loading...</p>
  </div>
</template>

<script>
import repository from '@/api/repository'
import PostItem from '@/components/PostItem'
export default {
  name: 'posts-index',
  components: { PostItem },
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
      console.log(data)
      this.posts = data.data
    } catch (error) {
      this.error = error.response.data ?? error
    }
  }
}
</script>

<style>
</style>
