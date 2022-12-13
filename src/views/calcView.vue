<script setup>
import { ref } from 'vue';
import digiNumComponentVue from '../components/digiNumComponent.vue';
import digiBoardComponentVue from '../components/digiBoardComponent.vue';
const sum = ref('');
const operator = {
    1: {
        id: 1,
        val: '+',
    },
    2: {
        id: 2,
        val: '-',
    },
    3: {
        id: 3,
        val: '*',
    },
    4: {
        id: 4,
        val: '/',
    },
    5: {
        id: 5,
        val: '=',
    },
    6: {
        id: 6,
        val: 'C',
    },
}
const operation = ref({
    num1: {
        id: 1,
        val: '',
    },
    operator: {
        id: 2,
        val: '',
    },
    num2: {
        id: 2,
        val: '',
    },
})
let step = 1;
const num = [1,2,3,4,5,6,7,8,9,0]
const include = (n) => sum.value.includes(n)
const end = (n) => sum.value.endsWith(n)
const start = (n) => sum.value.startsWith(n)

const addNum = (n) => {
    if(step===2&&operation.value.operator.val === ''){
        operation.value.num1.val = '';
        sum.value = '';
        step = 1;
    }
    if(operation.value[`num${step}`].val.length<9&&step!==3){
        operation.value[`num${step}`].val+=n.toString();
        sum.value = operation.value[`num${step}`].val;
        if(operation.value[`num${step}`].val=='0'){
            operation.value[`num${step}`].val=''
        }
    }
    
};
const calc = (id) => {
    if(id===6){
        sum.value = '';
        operation.value.operator.val = '';
        operation.value.num1.val = '';
        operation.value.num2.val = '';
        step=1;
    }else if(id===5){
        sum.value = parseInt(eval(operation.value.num1.val+operation.value.operator.val+operation.value.num2.val)).toString();
        operation.value.operator.val = '';
        operation.value.num1.val = sum.value;
        if(sum.value.length>9){
            sum.value = 'error';
            step = 3;
        }else{
            step = 2;
        };
        operation.value.num2.val = '';
        
    }else if(id<5){
        if(operation.value.num1.val!=''&&operation.value.num2.val!=''){
            operation.value.num1.val = parseInt(eval(operation.value.num1.val+operation.value.operator.val+operation.value.num2.val)).toString();
            sum.value = operation.value.num1.val;
            if(sum.value.length>9){
                sum.value = 'error';
                step = 3;
            }else{
                step = 2;
            }
            operation.value.num2.val = '';
        }else{
            sum.value = '';
            step=2;
        }
        operation.value.operator.val = operator[id].val
        
    }
}
</script>

<template>
    <section class="calcBox">
        <digi-board-component-vue :num="sum" class="digiBoard"/>
        <div class="numBtns">
            <p v-for="n in num" @click="addNum(n)" :key="n" :class="`btn numBtn`">{{ n }}</p>
            <p v-for="n in operator" :key="n.id" @click="calc(n.id)" :class="`btn`">{{ n.val }}</p>
        </div>
        
    </section>
</template>

<style lang="scss" scoped>
    .calcBox{
        outline: 1px solid red;
        display: flex;
        flex-wrap: wrap;
        width: 335px;
        font-size: 36px;
        .digiBoard{
            
        }
        .numBtns{
            width: 75%;
            display: flex;
            flex-wrap: wrap;
            .numBtn{
                outline: 1px solid red;
                width: 33.333333%;
                text-align: center;
                line-height: 1.8;
            }
        }
    }
</style>
