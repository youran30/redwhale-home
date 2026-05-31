<template>
  <div>
    <h1>联系我们</h1>
    <el-form ref="form" :model="form" label-width="80px" style="width:400px;">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="留言">
        <el-input type="textarea" v-model="form.message"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submit">提交留言</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() { return { form: { name:'', email:'', message:'' } } },
  methods: {
    async submit() {
      await this.$http.post('/contact', this.form)
      this.$message.success('留言成功，我们会尽快联系您')
      this.form = { name:'', email:'', message:'' }
    }
  }
}
</script>