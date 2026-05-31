<template>
  <div v-if="token">
    <h2>后台管理</h2>
    <el-tabs v-model="activeTab">
      <el-tab-pane label="产品管理" name="products">
        <el-button type="primary" @click="dialogVisible=true">添加产品</el-button>
        <el-table :data="products" style="margin-top:20px;">
          <el-table-column prop="id" label="ID" width="80"></el-table-column>
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column prop="price" label="价格"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="deleteProduct(scope.row.id)" type="danger" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog title="添加产品" :visible.sync="dialogVisible" width="500px">
          <el-form :model="newProduct" label-width="80px">
            <el-form-item label="名称"><el-input v-model="newProduct.name"></el-input></el-form-item>
            <el-form-item label="分类"><el-input v-model="newProduct.category"></el-input></el-form-item>
            <el-form-item label="价格"><el-input v-model="newProduct.price" type="number"></el-input></el-form-item>
            <el-form-item label="描述"><el-input v-model="newProduct.description"></el-input></el-form-item>
            <el-form-item label="图片URL"><el-input v-model="newProduct.image_url"></el-input></el-form-item>
            <el-form-item label="详情"><el-input v-model="newProduct.details" type="textarea"></el-input></el-form-item>
          </el-form>
          <span slot="footer">
            <el-button @click="dialogVisible=false">取消</el-button>
            <el-button type="primary" @click="addProduct">确定</el-button>
          </span>
        </el-dialog>
      </el-tab-pane>
      <el-tab-pane label="留言管理" name="contacts">
        <el-table :data="contacts">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="email" label="邮箱"></el-table-column>
          <el-table-column prop="message" label="留言"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: localStorage.getItem('token'),
      activeTab: 'products',
      products: [],
      contacts: [],
      dialogVisible: false,
      newProduct: { name:'', category:'', price:'', description:'', image_url:'', details:'' }
    }
  },
  mounted() {
    if (!this.token) {
      this.$router.push('/admin')
      return
    }
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const [res1, res2] = await Promise.all([
        this.$http.get('/products'),
        this.$http.get('/contact')
      ])
      this.products = res1.data
      this.contacts = res2.data
    },
    async deleteProduct(id) {
      await this.$http.delete(`/products/${id}`)
      this.$message.success('删除成功')
      this.fetchData()
    },
    async addProduct() {
      await this.$http.post('/products', this.newProduct)
      this.$message.success('添加成功')
      this.dialogVisible = false
      this.newProduct = { name:'', category:'', price:'', description:'', image_url:'', details:'' }
      this.fetchData()
    }
  }
}
</script>