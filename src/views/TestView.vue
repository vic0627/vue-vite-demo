<script setup>
import { getCurrentScope, onMounted } from 'vue';
import gsap from 'gsap';
import { imgs, texts } from './js/img';
let ww = window.innerWidth;
onMounted(()=> {
    scrollSum();
    allFloat();
    $$('.ol').addEventListener('scroll', ()=> {
        scrollSum()
        scrollH2('.title')
    })
})
const log = (e) => console.log(e);
const $$ = (e) => document.querySelector(e);

let xxx, yyy, zzz;
const scrollList = (e, delay = 0, dur = .1, e2, e3) => {
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
        gsap.to($$(e).firstChild, {
            filter: `blur(${-zzz*3}px) grayscale(80%)`,
            duration: .3,
        })
    }else{
        $$(e).style['z-index'] = '2';
        gsap.to($$(e).firstChild, {
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
    

    gsap.to($$(e).lastChild, {
        left: 0,
        opacity: 0,
        duration: .3,
    })
    gsap.to($$(e).lastChild.previousSibling, {
        left: 0,
        opacity: 0,
        duration: .3,
        delay: .3,
    })
};
const scrollH2 = (e) => {
    let h2Speed = () =>{
        if(ww<576){
            return .15
        }else if(ww>=576 && ww<1023){
            return .12
        }else{
            return .11
        }
    }
    gsap.to(e, {
        top: $$('.ol').scrollTop*h2Speed()+'%',
        duration: .1,
    })
    /* if(Number($$(e).style.top.split('%')[0])>90){
        $$(e).style.top = '90%'
    } */
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
    if(e.target.parentNode.style['z-index'] > 0){
        e.target.parentNode.style['z-index'] = 3;
        gsap.to(e.target.parentNode, {
            left: 50+'%',
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 2,
            duration: .3,
        })
        gsap.to(e.target, {
            filter: `blur(0px) grayscale(0%)`,
            duration: .3,
        })
        gsap.to(e.target.nextSibling, {
            left: -15+'%',
            opacity: 1,
            duration: .3,
            delay: .3,
        })
        gsap.to(e.target.nextSibling.nextSibling, {
            left: -10+'%',
            opacity: 1,
            duration: .3,
            delay: .6,
        })
    }
}
let timelines = {};
for(let i=1; i<=10; i++){
    timelines[i] = new gsap.timeline({repeat:-1});
}
const float = (i,e) => {
    let rand = Math.random()+1;
    timelines[i].to(e, {
        y: -20,
        duration: rand,
    })
    timelines[i].to(e, {
        y: 0,
        duration: rand,
    })
}
const allFloat = () => {
    for(let i=1; i<=10; i++){
        float(i, `.li${i}`);
    }
};
</script>

<template>
    <section class="box">
        <ol class="ol">
            <h2 class="title">EFPV</h2>
            <li v-for="n in 10" :class="`li${n}`" @click="toImg">
                <img :src="imgs[n]">
                <h3 :class="`h3${n}`">{{ texts.title }}</h3>
                <p :class="`p${n}`">{{ texts.text }}</p>
            </li>
        </ol>
    </section>
    
</template>

<style scoped lang="scss">

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
        font-size: 150px;
        width: 150px;
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
        list-style: none;
        margin-left: -12.5%;
        position: relative;
        transform: perspective(1000px);
        cursor: pointer;
        @media screen and (min-width: 576px) {
            width: 25%;
            height: 18.75%;
            margin-left: -12.5%;
        }
        @media screen and (min-width: 1023px) {
            width: 400px;
            height: 300px;
            margin-left: -200px;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        h3{
            color: #fff;
            position: absolute;
            top: 40%;
            left: 0;
            width: 0px;
            opacity: 0;
            pointer-events: none;
            font-size: 0;
            @media screen and (min-width: 576px) {
                width: 200px;
                font-size: 16px;
            }
            @media screen and (min-width: 1023px) {
                width: 400px;
                font-size: 20px;
            }
        }
        p{
            color: #eee;
            position: absolute;
            top: 60%;
            left: 0;
            width: 0px;
            font-size: 0;
            opacity: 0;
            pointer-events: none;
            @media screen and (min-width: 576px) {
                top: 80%;
                width: 200px;
                font-size: 12px;
            }
            @media screen and (min-width: 1023px) {
                top: 60%;
                width: 300px;
                font-size: 16px;
            }
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