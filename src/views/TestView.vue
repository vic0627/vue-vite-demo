<script setup>
import { getCurrentScope, onMounted } from 'vue';
import gsap from 'gsap';
import { imgs } from './js/img';
let ww = window.innerWidth;
onMounted(()=> {
    
    scrollSum();
    $$('.ol').addEventListener('scroll', ()=> {
        scrollSum()
        scrollH2('.title')
        log(xxx)
    })
})
const log = (e) => console.log(e);
const $$ = (e) => document.querySelector(e);

let xxx, yyy, zzz;
const scrollList = (e, delay = 0, dur = .1) => {
    let os = $$('.ol').scrollTop - (delay * $$('.ol').offsetHeight);
    xxx = Math.sin(os / $$('.ol').offsetHeight * Math.PI);
    yyy = Math.sin(os / $$('.ol').offsetHeight * 2 * Math.PI);
    zzz = Math.cos(os / $$('.ol').offsetHeight * Math.PI);
    let xrwd;
    if(ww<576){
        xrwd = 0;
    }else{
        xrwd = xxx;
    }
    if(zzz<0){
        $$(e).style['z-index'] = '0';
        gsap.to(e, {
            filter: `blur(${-zzz*3}px) grayscale(80%)`,
            duration: .3,
        })
    }else{
        $$(e).style['z-index'] = '2';
        gsap.to(e, {
            filter: `blur(0px) grayscale(80%)`,
            duration: .3,
        })
    }
    
    gsap.to(e, {
        top: 50*($$('.ol').scrollTop / $$('.ol').offsetHeight)+'%',
        rotateX: xrwd*10,
        rotateY: 180*(os / $$('.ol').offsetHeight),
        rotateZ: -zzz*10,
        left: 50+xxx*40+'%',
        scale: (zzz+1)/2+.5,
        duration: dur,
    })
};
const scrollH2 = (e) => {
    let h2Speed = () =>{
        if(ww<576){
            return .15
        }else{
            return .11
        }
    }
    gsap.to(e, {
        top: $$('.ol').scrollTop*h2Speed()+'%',
        duration: .3,
    })
}

const scrollSum = () => {
    scrollList('.li1')
    scrollList('.li2', .6)
    scrollList('.li3', 1.2)
    scrollList('.li4', 1.8)
    scrollList('.li5', 2.4)
    scrollList('.li6', 3)
    scrollList('.li7', 3.6)
    scrollList('.li8', 4.2)
    scrollList('.li9', 4.8)
    scrollList('.li10', 5.4)
};

const toImg = (e) => {
    let topPercent = (Number(e.target.parentNode.style.top.split('%')[0])/100);
    let movPercent = (window.innerHeight*topPercent);
    if(e.target.parentNode.style['z-index'] == 2){
        gsap.to(e.target.parentNode, {
            left: 50+'%',
            filter: `blur(0px) grayscale(0%)`,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 2,
            duration: .3,
        })
    }
}

</script>

<template>
    <section class="box">
        <ol class="ol">
            <h2 class="title">EFPV</h2>
            <li v-for="n in 10" :class="`li${n}`" @click="toImg">
                <img :src="imgs[n]">
            </li>
        </ol>
    </section>
    
</template>

<style scoped lang="scss">
body{
    
}
.box{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
}
ol{
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    position: relative;
    h2{
        color: #fff;
        writing-mode: vertical-lr;
        letter-spacing: 5px;
        font-size: 70px;
        width: 70px;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        line-height: 1;
        z-index: 1;
        @media screen and (min-width: 576px) {
            font-size: 200px;
            width: 200px;
            letter-spacing: 10px;
        }
    }
    li{
        width: 25%;
        height: 10%;
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
        list-style: none;
        margin-left: -12.5%;
        position: relative;
        transform: perspective(1000px);
        cursor: pointer;
        @media screen and (min-width: 576px) {
            width: 400px;
            height: 300px;
            margin-left: -200px;
            border-radius: 20px;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(50%);
        }
    }
    li:nth-child(2){
        margin-top: 35vh;
    }
    li:nth-child(11){
        margin-bottom: 100vh;
        @media screen and (min-width: 576px) {
            margin-bottom: 300vh;
        }
    }
}
</style>