<script setup>
import { reactive, ref, watch } from "vue";
import gsap from 'gsap';
  const peo = ref({
    name: 'hello',
    age: 24,
    address: 'Taiwan',
  }); // ref 可接受任何型別的資料, 無法監看 object 內的資料是否被改變
  const data = reactive({
    name: 'mike',
    age: 12,
    address: 'Taiwan',
  });  // reactive 只接受 object 與 array 的資料

  const mov = ()=> {
    gsap.to('.box', {
      x: 200,
      y: 300,
      duration: 2,
    });
  };

  setTimeout(()=> {
    peo.value.name = "aaa";
    data.name = "bbb";
  }, 3000);

  watch(peo, ()=> {
    console.log('name change')
  }, {
    deep: true, // 深度監看
  });
  watch(data, ()=> {
    console.log('data change')
  });
</script>

<template>
  <div>
    <p>{{ peo.name }}</p>
    <p>{{ peo.age }}</p>
    <p>{{ peo.address }}</p>
    <p>{{ data.name }}</p>
    <p>{{ data.age }}</p>
    <p>{{ data.address }}</p>
    <div class="box" @click="mov"></div>
  </div>
</template>

<style scoped lang="scss">
  .box{
    width: 100px;
    height: 100px;
    background: #000;
  }
</style>
