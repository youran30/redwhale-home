<template>
  <div>
    <h1 style="text-align:center;">红鲸家居</h1>
    <el-carousel height="400px">
      <el-carousel-item v-for="item in banners" :key="item">
        <img :src="item" style="width:100%;height:100%;object-fit:cover;">
      </el-carousel-item>
    </el-carousel>
    <el-divider>推荐产品</el-divider>
    <el-row :gutter="20">
      <el-col :span="6" v-for="p in products" :key="p.id">
        <el-card shadow="hover" @click.native="$router.push(`/product/${p.id}`)">
          <img :src="p.image_url" style="width:100%;height:160px;object-fit:cover;">
          <div style="padding:10px;">{{ p.name }} - ¥{{ p.price }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        '/images/sofa.jpg',
        '/images/table.jpg'
      ],
      products: []
    }
  },
  mounted() {
    this.$http.get('/products').then(res => this.products = res.data.slice(0,4))
  }
}
</script>