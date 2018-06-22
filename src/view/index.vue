<template>
  <div id="index">
    <div class="menuWrap">
      <div class="indexMenu">
        <img src="../assets/logo-img.png" alt="" class="logo">
        <el-menu
          :default-active="activeIndex2"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="about">关于我们</el-menu-item>
          <el-submenu index="2">
            <template slot="title">服务内容</template>
            <el-menu-item index="2-1">内容1</el-menu-item>
            <el-menu-item index="2-2">内容2</el-menu-item>
            <el-menu-item index="2-3">内容3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">内容4</template>
              <el-menu-item index="2-4-1">内容1</el-menu-item>
              <el-menu-item index="2-4-2">内容2</el-menu-item>
              <el-menu-item index="2-4-3">内容3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">案列</template>
            <el-menu-item index="3-1">案例1</el-menu-item>
            <el-menu-item index="3-2">案例2</el-menu-item>
            <el-menu-item index="3-3">案例3</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">拾途观点</el-menu-item>
          <el-menu-item index="5">排行榜</el-menu-item>
          <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
        </el-menu>
      </div>
    </div>
    <el-container>
      <router-view></router-view>
      <el-footer class="footer">11</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex2: 'about'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="scss">
  .menuWrap{
    background-color: rgb(84, 92, 100);
  }
.indexMenu{
  width: 1200px;
  margin: 0 auto;
  padding-left: 120px;
  position: relative;
  .logo{
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    height: 60px;
  }
}
</style>
