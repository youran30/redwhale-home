<template>
  <div id="app">
    <!-- 导航栏：深胡桃木色 -->
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      router
      background-color="#5d4037"
      text-color="#fff"
      active-text-color="#ffcc80">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/products">产品中心</el-menu-item>
      <el-menu-item index="/news">新闻动态</el-menu-item>
      <el-menu-item index="/about">关于我们</el-menu-item>
      <el-menu-item index="/contact">联系我们</el-menu-item>
      <el-menu-item index="/admin">后台管理</el-menu-item>
    </el-menu>
    <router-view style="padding:20px;"></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    activeIndex() {
      return this.$route.path
    }
  }
}
</script>

<style>
/* 全局样式 - 原木风 */
body {
  background-color: #faf6f0;
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei", "微软雅黑", sans-serif;
}

/* 标题颜色 */
h1, h2, h3 {
  color: #4e342e;
}

/* 价格高亮色 */
.price {
  color: #e67e22;
  font-weight: bold;
}

/* 卡片阴影柔化 */
.el-card {
  border-radius: 8px;
  border: 1px solid #e8d5c4;
}

/* 按钮主题色改为暖橙 */
.el-button--primary {
  background-color: #e67e22;
  border-color: #e67e22;
}
.el-button--primary:hover {
  background-color: #d35400;
  border-color: #d35400;
}

/* 分割线颜色 */
.el-divider__text {
  color: #8d6e63;
  background-color: #faf6f0;
}
</style>