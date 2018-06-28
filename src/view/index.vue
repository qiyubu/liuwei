<template>
  <div id="index">
    <!--<div class="menuWrap">-->
      <!--<div class="indexMenu">-->
        <!--<img src="../assets/logo-img.png" alt="" class="logo">-->
        <!--<el-menu-->
          <!--:default-active="activeIndex2"-->
          <!--mode="horizontal"-->
          <!--@select="handleSelect"-->
          <!--background-color="#545c64"-->
          <!--text-color="#fff"-->
          <!--active-text-color="#ffd04b">-->
          <!--<el-menu-item index="about">关于我们</el-menu-item>-->
          <!--<el-submenu index="2">-->
            <!--<template slot="title">服务内容</template>-->
            <!--<el-menu-item index="2-1">内容1</el-menu-item>-->
            <!--<el-menu-item index="2-2">内容2</el-menu-item>-->
            <!--<el-menu-item index="2-3">内容3</el-menu-item>-->
            <!--<el-submenu index="2-4">-->
              <!--<template slot="title">内容4</template>-->
              <!--<el-menu-item index="2-4-1">内容1</el-menu-item>-->
              <!--<el-menu-item index="2-4-2">内容2</el-menu-item>-->
              <!--<el-menu-item index="2-4-3">内容3</el-menu-item>-->
            <!--</el-submenu>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="3">-->
            <!--<template slot="title">案列</template>-->
            <!--<el-menu-item index="3-1">案例1</el-menu-item>-->
            <!--<el-menu-item index="3-2">案例2</el-menu-item>-->
            <!--<el-menu-item index="3-3">案例3</el-menu-item>-->
          <!--</el-submenu>-->
          <!--<el-menu-item index="4">拾途观点</el-menu-item>-->
          <!--<el-menu-item index="5">排行榜</el-menu-item>-->
          <!--&lt;!&ndash;<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>&ndash;&gt;-->
        <!--</el-menu>-->
      <!--</div>-->
    <!--</div>-->
    <el-container>
      <router-view></router-view>
      <el-footer class="footer" style="height: 400px">
        <div class="contactWrap">
          <div class="contact">
            <div class="contactItem">
              <img class="logo" src="../assets/logo.png" alt="">
            </div>
            <div class="contactItem program">
              <h1>我们的项目</h1>
              <p>测试项目</p>
              <p>测试项目2</p>
            </div>
            <div class="contactItem aboutUs">
              <h1>关于我们</h1>
              <p>Email:12628685@qq.com</p>
              <p>地址： 上海市乌鲁木齐</p>
            </div>
          </div>
        </div>
        <div class="wechatWrap">
          <div class="wechat">
            <p>关注我们</p>
            <img class="wechatImg" src="" alt="">
          </div>
        </div>
        <div class="copyrightWrap">
          copyright
        </div>
      </el-footer>
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
  created () {
    console.log('测试')
    this.scrollDir(function (dir) {
      console.log(dir)
    })
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="scss">
  #index{
    .el-footer{
      padding: 0;
    }
    padding-top: 60px;
    .el-menu--horizontal {
      border: none;
    }
    .menuWrap{
      background-color: rgb(84, 92, 100);
      position: fixed;
      top:0;
      width: 100%;
      z-index: 10;
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
  }
  .footer{
    box-sizing: border-box;
    width: 100%;
  }
  .contactWrap{
    width: 100%;
    background-color:#172132;
    border-bottom: 1px solid #40444f;
    .contact{
      width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      .program{
        margin-left: 140px;
        padding-top: 20px;
        h1{
          font-size: 14px;
          margin-bottom: 10px;
        }
      }
      .aboutUs{
        margin-left: 140px;
        padding-top: 20px;
        h1{
          font-size: 14px;
          margin-bottom: 10px;
        }
      }
      .contactItem{
        color: white;
        text-align: left;
        font-size: 12px;
        .logo{
          width: 100%;
        }
      }
    }
  }
  .wechatWrap{
    width: 100%;
    background-color:#172132;
    border-bottom: 1px solid #40444f;
    .wechat{
      width: 1200px;
      margin:0 auto;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      p{
        padding-top: 20px;
        font-size: 14px;
        color: white;
      }
    }
  }
</style>
