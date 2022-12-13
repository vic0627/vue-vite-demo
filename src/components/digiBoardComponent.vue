<script setup>
import { ref, onBeforeUpdate, onUpdated, onMounted } from 'vue';
import digiNumComponentVue from '../components/digiNumComponent.vue';
const props = defineProps(["num"])
let numArray;
onUpdated(() => {
    numArray = [...props.num]
    for(let i=0; i<9; i++){
        if(numArray[i]===undefined){
            numArray[i] = '';
        }
        num.value[i] = numArray[i];
    }
})
const num = ref(['','','','','','','','','']);

</script>

<template>
    <div class="digiBoard">
        <digi-num-component-vue v-for="n in 9" :key="n" :num="num[n-1]" :id="n"/>
    </div>
</template>

<style lang="scss" scoped>
.digiBoard{
    display: flex;
    background: #000;
    border: 10px solid #666;
    border-radius: 5px;
    overflow: hidden;
}
</style>