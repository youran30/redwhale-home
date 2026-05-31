<template>
  <div style="width:300px; margin:100px auto;">
    <h2>管理员登录</h2>
    <el-input v-model="username" placeholder="用户名"></el-input><br>
    <el-input v-model="password" type="password" placeholder="密码" style="margin-top:10px;"></el-input><br>
    <el-button type="primary" @click="login" style="margin-top:10px;">登录</el-button>
  </div>
</template>

<script>
export default {
  data() { return { username:'', password:'' } },
  methods: {
    async login() {
      try {
        const res = await this.$http.post('/admin/login', {
          username: this.username,
          password: this.password
        })
        localStorage.setItem('token', res.data.token)
        this.$router.push('/admin/dashboard')
      } catch {
        this.$message.error('用户名或密码错误')
      }
    }
  }
}
</script>