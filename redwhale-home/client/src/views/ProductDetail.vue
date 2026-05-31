<template>
  <div v-if="product">
    <el-button @click="$router.back()">返回列表</el-button>
    <h1>{{ product.name }}</h1>
    <img :src="product.image_url" style="max-width:400px;"><br>
    <p>价格：¥{{ product.price }}</p>
    <p>分类：{{ product.category }}</p>
    <p>{{ product.description }}</p>
    <div v-html="product.details"></div>
  </div>
  <div v-else>加载中...</div>
</template>

<script>
export default {
  data() { return { product: null } },
  mounted() {
    const id = this.$route.params.id
    this.$http.get(`/products/${id}`).then(res => this.product = res.data)
  }
}
</script>