import{g as gsapWithCSS}from"./index.c6ddc126.js";import{_ as _export_sfc,h as ref,o as onMounted,i as onUpdated,a as openBlock,c as createElementBlock,F as Fragment,d as renderList,b as createBaseVNode,n as normalizeClass,f as createVNode,t as toDisplayString,p as pushScopeId,g as popScopeId}from"./index.60f37373.js";const digiNumComponent_vue_vue_type_style_index_0_scoped_0918e91e_lang="",_hoisted_1$2={class:"numUnit"},_sfc_main$2={__name:"digiNumComponent",props:["num","id"],setup(n){const t=n;ref(0),onMounted(()=>{}),onUpdated(()=>{s()});const a=(e,c="#232020")=>{gsapWithCSS.to(e,{background:c,duration:.07})},o="#ddd",l="#e30",s=()=>{switch(t.num){case"0":for(let e=1;e<=7;e++)e!==4?a(`.num${e}${t.id}`,o):a(`.num${e}${t.id}`);break;case"1":for(let e=1;e<=7;e++)e===3||e===6?a(`.num${e}${t.id}`,o):a(`.num${e}${t.id}`);break;case"2":for(let e=1;e<=7;e++)e===2||e===6?a(`.num${e}${t.id}`):a(`.num${e}${t.id}`,o);break;case"3":for(let e=1;e<=7;e++)e===2||e===5?a(`.num${e}${t.id}`):a(`.num${e}${t.id}`,o);break;case"4":for(let e=1;e<=7;e++)e===2||e===3||e===4||e===6?a(`.num${e}${t.id}`,o):a(`.num${e}${t.id}`);break;case"5":for(let e=1;e<=7;e++)e===3||e===5?a(`.num${e}${t.id}`):a(`.num${e}${t.id}`,o);break;case"6":for(let e=1;e<=7;e++)e===3?a(`.num${e}${t.id}`):a(`.num${e}${t.id}`,o);break;case"7":for(let e=1;e<=7;e++)e===4||e===5||e===7?a(`.num${e}${t.id}`):a(`.num${e}${t.id}`,o);break;case"8":for(let e=1;e<=7;e++)a(`.num${e}${t.id}`,o);break;case"9":for(let e=1;e<=7;e++)e===5?a(`.num${e}${t.id}`):a(`.num${e}${t.id}`,o);break;case"-":for(let e=1;e<=7;e++)e===4?a(`.num${e}${t.id}`,o):a(`.num${e}${t.id}`);break;case"e":for(let e=1;e<=7;e++)e===3||e===6?a(`.num${e}${t.id}`):a(`.num${e}${t.id}`,l);break;case"r":for(let e=1;e<=7;e++)e===4||e===5?a(`.num${e}${t.id}`,l):a(`.num${e}${t.id}`);break;case"o":for(let e=1;e<=7;e++)e===1||e===2||e===3?a(`.num${e}${t.id}`):a(`.num${e}${t.id}`,l);break;case"":for(let e=1;e<=7;e++)a(`.num${e}${t.id}`);break}};return(e,c)=>(openBlock(),createElementBlock("div",_hoisted_1$2,[(openBlock(),createElementBlock(Fragment,null,renderList(7,r=>createBaseVNode("span",{key:r,class:normalizeClass(`num num${r} num${r}${t.id}`)},null,2)),64))]))}},digiNumComponentVue=_export_sfc(_sfc_main$2,[["__scopeId","data-v-0918e91e"]]),digiBoardComponent_vue_vue_type_style_index_0_scoped_548ab9cb_lang="",_hoisted_1$1={class:"digiBoard"},_sfc_main$1={__name:"digiBoardComponent",props:["num"],setup(n){const t=n;let a;onUpdated(()=>{a=[...t.num];for(let l=0;l<9;l++)a[l]===void 0&&(a[l]=""),o.value[l]=a[l]});const o=ref(["","","","","","","","",""]);return(l,s)=>(openBlock(),createElementBlock("div",_hoisted_1$1,[(openBlock(),createElementBlock(Fragment,null,renderList(9,e=>createVNode(digiNumComponentVue,{key:e,num:o.value[e-1],id:e},null,8,["num","id"])),64))]))}},digiBoardComponentVue=_export_sfc(_sfc_main$1,[["__scopeId","data-v-548ab9cb"]]),calcView_vue_vue_type_style_index_0_scoped_a5f2fe25_lang="",_withScopeId=n=>(pushScopeId("data-v-a5f2fe25"),n=n(),popScopeId(),n),_hoisted_1=_withScopeId(()=>createBaseVNode("h2",null,"Vue \u8A08\u7B97\u6A5F",-1)),_hoisted_2={class:"features"},_hoisted_3={class:"calcBox"},_hoisted_4={class:"btns"},_hoisted_5=["onClick"],_hoisted_6=["onClick"],_sfc_main={__name:"calcView",setup(__props){const sum=ref(""),operator={1:{id:1,val:"+"},2:{id:2,val:"-"},3:{id:3,val:"*"},4:{id:4,val:"/"},5:{id:5,val:"="},6:{id:6,val:"C"}},operation=ref({num1:{id:1,val:""},operator:{id:2,val:""},num2:{id:2,val:""}});let step=1;const num=[1,2,3,4,5,6,7,8,9,0],addNum=n=>{step===2&&operation.value.operator.val===""&&(operation.value.num1.val="",sum.value="",step=1),operation.value[`num${step}`].val.length<9&&step!==3&&(operation.value[`num${step}`].val+=n.toString(),sum.value=operation.value[`num${step}`].val,operation.value[`num${step}`].val=="0"&&(operation.value[`num${step}`].val=""))},calc=id=>{id===6?(sum.value="",operation.value.operator.val="",operation.value.num1.val="",operation.value.num2.val="",step=1):id===5&&step!==3&&step!==1?(sum.value=parseInt(eval(operation.value.num1.val+operation.value.operator.val+operation.value.num2.val)).toString(),operation.value.operator.val="",operation.value.num1.val=sum.value,sum.value.length>9?(sum.value="error",operation.value.num1.val="",step=3):step=2,operation.value.num2.val=""):id<5&&(operation.value.num1.val!=""&&operation.value.num2.val!=""?(operation.value.num1.val=parseInt(eval(operation.value.num1.val+operation.value.operator.val+operation.value.num2.val)).toString(),sum.value=operation.value.num1.val,sum.value.length>9?(sum.value="error",step=3):step=2,operation.value.num2.val="",operation.value.operator.val=operator[id].val):step!==3&&(operation.value.operator.val=operator[id].val,sum.value="",step=2))},chosen=n=>{gsapWithCSS.to(n,{background:"#e39",duration:.07})},remove=n=>{gsapWithCSS.to(n,{background:"#c51",duration:.07})},calcToggle=(n,t,a,o)=>{chosen(n),remove(t),remove(a),remove(o)};onUpdated(()=>{switch(operation.value.operator.val){case"+":calcToggle(".calcBtn1",".calcBtn2",".calcBtn3",".calcBtn4");break;case"-":calcToggle(".calcBtn2",".calcBtn1",".calcBtn3",".calcBtn4");break;case"*":calcToggle(".calcBtn3",".calcBtn2",".calcBtn1",".calcBtn4");break;case"/":calcToggle(".calcBtn4",".calcBtn2",".calcBtn3",".calcBtn1");break;case"":remove(".calcBtn1"),remove(".calcBtn2"),remove(".calcBtn3"),remove(".calcBtn4");break}});const features={good:{id:1,title:"\u7279\u8272",text:{1:"\u52D5\u614B\u63A5\u6536 props \u7684\u6578\u4F4D\u6578\u5B57\u7D44\u4EF6\u3002",2:"\u8D85\u904E\u4E5D\u4F4D\u6578(\u542B\u8CA0\u6578)\u986F\u793A error \u3002"}},want:{id:2,title:"\u5F85\u5BE6\u8E10",text:{1:"\u6578\u4F4D\u6578\u5B57\u9760\u53F3\u5C0D\u9F4A\u3002",2:"\u5C0F\u6578\u9EDE\u904B\u7B97\u3002",3:"\u904B\u7B97\u5B50\u6578\u4F4D\u986F\u793A\u7D44\u4EF6\u3002"}},bug:{id:3,title:"\u76EE\u524Dbug",text:{1:"\u5F85\u767C\u73FE..."}}};return(n,t)=>(openBlock(),createElementBlock(Fragment,null,[_hoisted_1,createBaseVNode("div",_hoisted_2,[(openBlock(),createElementBlock(Fragment,null,renderList(features,a=>createBaseVNode("ol",{class:normalizeClass(`feature${a.id} feature`)},[createBaseVNode("h3",null,toDisplayString(a.title),1),(openBlock(!0),createElementBlock(Fragment,null,renderList(a.text,o=>(openBlock(),createElementBlock("li",null,toDisplayString(o),1))),256))],2)),64))]),createBaseVNode("section",_hoisted_3,[createVNode(digiBoardComponentVue,{num:sum.value,class:"digiBoard"},null,8,["num"]),createBaseVNode("div",_hoisted_4,[(openBlock(),createElementBlock(Fragment,null,renderList(num,a=>createBaseVNode("p",{onClick:o=>addNum(a),key:a,class:normalizeClass(`btn numBtn${a}`)},toDisplayString(a),11,_hoisted_5)),64)),(openBlock(),createElementBlock(Fragment,null,renderList(operator,a=>createBaseVNode("p",{key:a.id,onClick:o=>calc(a.id),class:normalizeClass(`btn calcBtn${a.id}`)},toDisplayString(a.val),11,_hoisted_6)),64))])])],64))}},calcView=_export_sfc(_sfc_main,[["__scopeId","data-v-a5f2fe25"]]);export{calcView as default};
