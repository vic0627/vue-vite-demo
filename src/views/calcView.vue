<script setup>
import { ref } from 'vue';

const sum = ref('0');
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
        val: '.',
    },
    6: {
        id: 6,
        val: '=',
    },
    7: {
        id: 7,
        val: 'C',
    },
}
let step = 1;
const num = [0,1,2,3,4,5,6,7,8,9]
const include = (n) => sum.value.includes(n)
const end = (n) => sum.value.endsWith(n)
const start = (n) => sum.value.startsWith(n)
const addNum = (n) => {
    if(start('0')&&sum.value.length===1){
        sum.value = n.toString();
    }else{
        console.log(n)
        sum.value += n.toString();
    }
};
const calc = (id) => {
    if(id===7){
        sum.value = '0';
    }else if(id===6 && end('+')===false && end('-')===false && end('*')===false && end('/')===false && end('.')===false && end('0')===false){
        sum.value = eval(sum.value).toString()
    }else if(id<6){
        if(include('+')||include('-')||include('*')||include('/')){
            if(end('+')||end('-')||end('*')||end('/')){
                let ending = sum.value.split('', sum.value.length)
                ending.pop();
                sum.value = ending.join('') + operator[id].val
                step = 2
            }
        }else{
            if(sum.value.endsWith('.')){
                sum.value = sum.value.split('.')[0]
                sum.value += operator[id].val
                step = 2
            }else{
                console.log(id)
                sum.value += operator[id].val
                if(id!==5){
                    step = 2
                }
            }
        }
    }
}
</script>

<template>
    <section>
        <p>{{ sum }}</p>
        <p v-for="n in num" @click="addNum(n)">{{ n }}</p>
        <p v-for="n in operator" :key="n.id" @click="calc(n.id)">{{ n.val }}</p>
    </section>
</template>

<style>
    *{
        font-size: 30px;
    }
</style>
