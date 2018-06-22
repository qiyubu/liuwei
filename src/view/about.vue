<template>
     <el-carousel height="80vh" id="carousel">
       <el-carousel-item>
         <img src="../assets/index2.jpg" alt="">
       </el-carousel-item>
       <el-carousel-item>
         <img src="../assets/index3.jpg" alt="">
       </el-carousel-item>
       <el-carousel-item>
       <img src="../assets/index4.jpg" alt="">
     </el-carousel-item>
       <el-carousel-item>
       <img src="../assets/index1.jpg" alt="">
     </el-carousel-item>
     </el-carousel>
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
</style>
