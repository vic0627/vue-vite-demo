<script setup>
import { ref, onUpdated, onBeforeUpdate } from 'vue';
import gsap from 'gsap';
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
    }else if(id===5&&step!==3&&step!==1){
        sum.value = parseInt(eval(operation.value.num1.val+operation.value.operator.val+operation.value.num2.val)).toString();
        operation.value.operator.val = '';
        operation.value.num1.val = sum.value;
        if(sum.value.length>9){
            sum.value = 'error';
            operation.value.num1.val = '';
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
            operation.value.operator.val = operator[id].val;
        }else if(step!==3){
            operation.value.operator.val = operator[id].val;
            sum.value = '';
            step=2;
        }
    }
};
const chosen = (e) => {
    gsap.to(e, {
        background: '#e39',
        duration: .07,
    })
}
const remove = (e) => {
    gsap.to(e, {
        background: '#c51',
        duration: .07,
    })
}
const calcToggle = (a,b,c,d) => {
    chosen(a);
    remove(b);
    remove(c);
    remove(d);
};
onUpdated(() => {
    switch (operation.value.operator.val) {
        case '+':
            calcToggle('.calcBtn1','.calcBtn2','.calcBtn3','.calcBtn4');
            break;
        case '-':
            calcToggle('.calcBtn2','.calcBtn1','.calcBtn3','.calcBtn4');
            break;
        case '*':
            calcToggle('.calcBtn3','.calcBtn2','.calcBtn1','.calcBtn4');
            break;
        case '/':
            calcToggle('.calcBtn4','.calcBtn2','.calcBtn3','.calcBtn1');
            break;
        case '':
            remove('.calcBtn1');
            remove('.calcBtn2');
            remove('.calcBtn3');
            remove('.calcBtn4');
            break;
    }
})
const features = {
    good: {
        id: 1,
        title: '特色',
        text: {
            1: '動態接收 props 的數位數字組件。',
            2: '超過九位數(含負數)顯示 error 。'
        },
    },
    want: {
        id: 2,
        title: '待實踐',
        text: {
            1: '數位數字靠右對齊。',
            2: '小數點運算。',
            3: '運算子數位顯示組件。'
        },
    },
    bug: {
        id: 3,
        title: '目前bug',
        text: {
            1: '待發現...'
        },
    },
}
</script>

<template>
    <h2>Vue 計算機</h2>
    <div class="features">
        <ol :class="`feature${n.id} feature`" v-for="n in features">
            <h3>{{ n.title }}</h3>
            <li v-for="i in n.text">{{ i }}</li>
        </ol>
    </div>
    <section class="calcBox">
        <digi-board-component-vue :num="sum" class="digiBoard"/>
        <div class="btns">
            <p v-for="n in num" @click="addNum(n)" :key="n" :class="`btn numBtn${n}`">{{ n }}</p>
            <p v-for="n in operator" :key="n.id" @click="calc(n.id)" :class="`btn calcBtn${n.id}`">{{ n.val }}</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    h2{
        width: 90%;
        margin: 40px auto;
    }
    .features{
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        .feature{
            width: 30%;
            margin: 0 10%;
            h3{
                margin: 10px auto;
            }
            li{
                margin: 5px auto;
            }
        }
    }
    .calcBox{
        margin: 60px auto;
        display: flex;
        flex-wrap: wrap;
        width: 335px;
        font-size: 36px;
        border-radius: 15px;
        box-shadow: -10px -15px 20px 0 #333 inset;
        background: linear-gradient(#333 20%, #999 25%);
        @media screen and (min-width:576px) {
            width: 380px;
        }
        @media screen and (min-width:1024px) {
            width: 470px;
        }
        @media screen and (min-width:1200px) {
            width: 560px;
        }
        .btns{
            width: 90%;
            margin: 30px auto;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            justify-items: center;
            row-gap: 10px;
            @media screen and (min-width:576px) {
                row-gap: 15px;
                margin: 25px auto;
            }
            @media screen and (min-width:1024px) {
                row-gap: 20px;
                margin: 30px auto;
            }
            @media screen and (min-width:1200px) {
                row-gap: 25px;
                margin: 40px auto;
            }
            
            .btn{
                width: 75%;
                height: 100%;
                text-align: center;
                line-height: 1.8;
                border-radius: 10px;
                background: #666;
                box-shadow: -10px -10px 20px 0 #3339 inset;
                transition: all .3s;
                cursor: pointer;
            }
            .numBtn4{
                grid-column: 1/2;
                grid-row: 2/3;
            }
            .calcBtn4{
                grid-column: 4/5;
                grid-row: 1/2;
                background: #c51;
            }
            .calcBtn3{
                grid-column: 4/5;
                grid-row: 2/3;
                background: #c51;
            }
            .calcBtn2{
                grid-column: 4/5;
                grid-row: 3/4;
                background: #c51;
            }
            .calcBtn1{
                grid-column: 4/5;
                grid-row: 4/5;
                background: #c51;
            }
            .calcBtn6{
                background: #935;
                grid-column: 1/2;
                grid-row: 4/5;
            }
            .calcBtn5{
                background: #a31;
            }
        }
    }
</style>
