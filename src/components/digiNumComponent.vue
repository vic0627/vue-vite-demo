<script setup>
import { ref, onBeforeUpdate, onUpdated, onMounted } from 'vue';
import gsap from 'gsap';
const num = ref(0);
const props = defineProps(["num", "id"])
onMounted(() => {

})
onUpdated(() => {
    numRun();
})
const numFloat = (e, background = '#232020') => {
    gsap.to(e, {
        background,
        duration: .07,
    })
}
const color2 = '#ddd';
const color3 = '#e30'
const numRun = () => {
    switch (props.num) {
        case '0':
            for(let i=1; i<=7; i++){
                if(i!==4){
                    numFloat(`.num${i}${props.id}`, color2);
                }else{
                    numFloat(`.num${i}${props.id}`);
                };
            };
            break;
        case '1':
            for(let i=1; i<=7; i++){
                if(i===3||i===6){
                    numFloat(`.num${i}${props.id}`, color2);
                }else{
                    numFloat(`.num${i}${props.id}`);
                };
            };
            break;
        case '2':
            for(let i=1; i<=7; i++){
                if(i===2||i===6){
                    numFloat(`.num${i}${props.id}`);
                }else{
                    numFloat(`.num${i}${props.id}`, color2);
                };
            };
            break;
        case '3':
            for(let i=1; i<=7; i++){
                if(i===2||i===5){
                    numFloat(`.num${i}${props.id}`);
                }else{
                    numFloat(`.num${i}${props.id}`, color2);
                };
            };
            break;
        case '4':
            for(let i=1; i<=7; i++){
                if(i===2||i===3||i===4||i===6){
                    numFloat(`.num${i}${props.id}`, color2);
                }else{
                    numFloat(`.num${i}${props.id}`);
                };
            };
            break;
        case '5':
            for(let i=1; i<=7; i++){
                if(i===3||i===5){
                    numFloat(`.num${i}${props.id}`);
                }else{
                    numFloat(`.num${i}${props.id}`, color2);
                };
            };
            break;
        case '6':
            for(let i=1; i<=7; i++){
                if(i===3){
                    numFloat(`.num${i}${props.id}`);
                }else{
                    numFloat(`.num${i}${props.id}`, color2);
                };
            };
            break;
        case '7':
            for(let i=1; i<=7; i++){
                if(i===4||i===5||i===7){
                    numFloat(`.num${i}${props.id}`);
                }else{
                    numFloat(`.num${i}${props.id}`, color2);
                };
            };
            break;
        case '8':
            for(let i=1; i<=7; i++){
                numFloat(`.num${i}${props.id}`, color2);
            };
            break;
        case '9':
            for(let i=1; i<=7; i++){
                if(i===5){
                    numFloat(`.num${i}${props.id}`);
                }else{
                    numFloat(`.num${i}${props.id}`, color2);
                };
            };
            break;
        case '-':
            for(let i=1; i<=7; i++){
                if(i===4){
                    numFloat(`.num${i}${props.id}`, color2);
                }else{
                    numFloat(`.num${i}${props.id}`);
                };
            };
            break;
        case 'e':
            for(let i=1; i<=7; i++){
                if(i===3||i===6){
                    numFloat(`.num${i}${props.id}`);
                }else{
                    numFloat(`.num${i}${props.id}`, color3);
                };
            };
            break;
        case 'r':
            for(let i=1; i<=7; i++){
                if(i===4||i===5){
                    numFloat(`.num${i}${props.id}`, color3);
                }else{
                    numFloat(`.num${i}${props.id}`);
                };
            };
            break;
        case 'o':
            for(let i=1; i<=7; i++){
                if(i===1||i===2||i===3){
                    numFloat(`.num${i}${props.id}`);
                }else{
                    numFloat(`.num${i}${props.id}`, color3);
                };
            };
            break;
        case '':
            for(let i=1; i<=7; i++){
                numFloat(`.num${i}${props.id}`);
            };
            break;
    }
};
</script>

<template>
    <div class="numUnit">
        <span v-for="i in 7" :key="i" :class="`num num${i} num${i}${props.id}`"></span>
    </div>
</template>

<style lang="scss" scoped>
    .numUnit{
        margin: 10px 0;
        width: 35px;
        height: 46.666666px;
        position: relative;
        @media screen and (min-width:576px) {
            width: 40px;
            height: 53.333333px;
        }
        @media screen and (min-width:1024px) {
            width: 50px;
            height: 66.666666px;
        }
        @media screen and (min-width:1200px) {
            width: 60px;
            height: 80px;
        }
        .num{
            background: #232020;
            display: block;
            border-radius: 30%;
            width: 60%;
            height: 10%;
            clip-path: polygon(0 50%, 10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%);
            position: absolute;
        }
        .num1{
            top: 5%;
            left: 0;
            right: 0;
            margin: 0 auto;
        }
        .num4{
            top: 50%;
            left: 0;
            right: 0;
            margin: -6.5% auto 0;
        }
        .num7{
            bottom: 5%;
            left: 0;
            right: 0;
            margin: 0 auto;
        }
        .num2, .num3, .num5, .num6{
            width: 45%;
            transform: rotate(90deg);
        }
        .num2{
            top: 25%;
            left: -5%;
        }
        .num3{
            top: 25%;
            right: -5%;
        }
        .num5{
            bottom: 25%;
            left: -5%;
        }
        .num6{
            bottom: 25%;
            right: -5%;
        }
    }
</style>