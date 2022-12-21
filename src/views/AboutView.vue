<script setup>
import { reactive, ref, onMounted } from "vue";
import gsap from "gsap";
let scrollLeft = 0, ww = window.innerWidth;
const $w = (e) => document.querySelector(e).getBoundingClientRect().width;
onMounted(()=>{
  window.addEventListener('wheel', (e)=>{
    let wheel = e.wheelDeltaY / Math.abs(e.wheelDeltaY);
    if(scrollLeft>=0){
      scrollLeft += e.wheelDeltaY*-1;
    }else if(scrollLeft>=ww*5){
      scrollLeft = ww*5;
    }else{
      scrollLeft = 0;
    }
    if(scrollLeft>=$w('.box1')){
      box1.value.style.order = 1;
      scrollLeft = 0;
    }
    gsap.to('.container', {
      scrollLeft,
      duration: .3,
    })
  })
})
const container = ref(null);
const box1 = ref(null);
const box2 = ref(null);
const box3 = ref(null);

</script>
<template>

<div class="container" ref="container">
  <div class="boxs">
    <div class="box box1" ref="box1"></div>
    <div class="box box2" ref="box2"></div>
    <div class="box box3" ref="box3"></div>
  </div>
</div>

</template>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  .boxs{
    width: 600vw;
    height: 100%;
    display: flex;
    .box{
      width: 200vw;
      height: 100%;
    }
    .box1{
      background: #600;
    }
    .box2{
      background: #060;
    }
    .box3{
      background: #006;
    }
  }
}
</style>
