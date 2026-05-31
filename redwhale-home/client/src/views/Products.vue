<template>
  <div>
    <h1>产品中心</h1>
    <el-input v-model="keyword" placeholder="搜索产品" style="width:200px;margin-bottom:20px;"></el-input>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in filteredList" :key="item.id">
        <el-card shadow="hover" @click.native="$router.push(`/product/${item.id}`)">
          <img :src="item.image_url" style="width:100%;height:160px;object-fit:cover;">
          <div style="padding:10px;">{{ item.name }} - ¥{{ item.price }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return { products: [], keyword: '' }
  },
  computed: {
    filteredList() {
      return this.products.filter(p => p.name.includes(this.keyword))
    }
  },
  mounted() {
    this.$http.get('/products').then(res => this.products = res.data)
  }
}
</script>