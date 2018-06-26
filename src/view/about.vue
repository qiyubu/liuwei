<template>
  <er-row>
    <!--<el-carousel height="80vh" id="carousel">-->
    <!--<el-carousel-item>-->
    <!--<img src="../assets/index2.jpg" alt="">-->
    <!--</el-carousel-item>-->
    <!--<el-carousel-item>-->
    <!--<img src="../assets/index3.jpg" alt="">-->
    <!--</el-carousel-item>-->
    <!--<el-carousel-item>-->
    <!--<img src="../assets/index4.jpg" alt="">-->
    <!--</el-carousel-item>-->
    <!--<el-carousel-item>-->
    <!--<img src="../assets/index1.jpg" alt="">-->
    <!--</el-carousel-item>-->
    <!--</el-carousel>-->
    <section class="item desc">
      <div class="item_content">
        <div class="item_title">flex测试</div>
        <div class="item_text">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
      </div>
    </section>
    <section class="item adviser">
      <div class="adviser_wrap" v-for="n in 5" :key="n">
        <div class="adviserPhoto">
          <img src="../assets/adviser/adviser1.jpg" alt="" class="adviserImg">
          <div class="mainContent">
            <p style="margin-bottom: 10px">执行董事</p>
            <p>wodeceshishlsdjfajdfjajfdlajdfjaljdajfldjf</p>
          </div>
        </div>
        <div class="adviser_desc">
          {{n}}
        </div>
      </div>
    </section>
  </er-row>
</template>

<script>
export default {
  data () {
    return {
      msg: '关于我们'
    }
  }
}
</script>

<style scoped lang="scss">
#carousel{
  img{
    width: 100%;
    display: block;
  }
}
.desc{
  background-color: rgba(185,195,213,.9);
  height: 273px;
}
  .item{
    display: flex;
    flex-flow:row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    .item_content{
      padding: 30px;
      width: 800px;
      box-sizing: border-box;
      .item_title{
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .item_text{
        text-align: left;
        font-size: 18px;
      }
    }
  }
  .adviser{
    width: 1200px;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: flex-start;
    .adviser_desc{
      height: 40px;
      width: auto;
      display: inline-block;
      line-height: 40px;
      padding: 0 10px;
      border-bottom: 1px solid #05b8d0;
      font-size: 20px;
      font-weight: 400;
    }
    .adviserImg{
      width: 100%;
    }
    .adviserPhoto{
      position: relative;
      .mainContent{
        position: absolute;
        left: 0;
        bottom: 2px;
        background-color: rgba(0,0,0,0.5);
        color: white;
        width: 100%;
        font-size: 14px;
        padding: 10px 10px 30px;
        height: 0;
        transition: height 1s;
      }
    }
    .adviserPhoto:hover .mainContent{
      height: 80%;
    }
    .adviser_wrap{
      flex-shrink: 0;
      flex-grow:0;
      width: 280px;
      margin: 0 10px;
      text-align: left;
    }
  }
</style>
