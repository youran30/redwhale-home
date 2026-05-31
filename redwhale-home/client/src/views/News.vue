<template>
  <div>
    <h1>新闻动态</h1>
    <div v-for="item in newsList" :key="item.id" style="margin:20px 0;">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
export default {
  data() { return { newsList: [] } },
  mounted() {
    this.$http.get('/news').then(res => this.newsList = res.data)
  }
}
</script>