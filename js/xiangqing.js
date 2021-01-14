one()
function one(){
    const div = document.querySelector('.one .one_2>i')
  const  res =getCookie('name')

 console.log(res);
 if(!res){
     return
 }else{
   div.innerHTML=`你好&nbsp&nbsp&nbsp${res}`
 }

}


   //渲染
   xuan()
  function xuan(){
    let id =window. sessionStorage.getItem('goods_id')
       if(!id){
         window.location.href='./../zqk.html'
         return
       }
       goodss_id()
       async function goodss_id(){
        const res =  await  $.get('./../server/goodsInfo.php',{id},null,'json')
        
       
          
        bind(res.info)
    
    
    
       }

function bind(a){
         let div = document.querySelector('.four')
         
         console.log(a);
         
        console.log(div);
      let srr =`
      <div class="four_one" >
      <div class="four_onet" >
        <img src="${a.goods_big_logo}" alt="">
         <div class="mengban" >

         </div>


      </div>
      <div class="four_oneb">
        <img  data-a="${a.goods_small_logo}"   src="${a.goods_small_logo}" alt=""  class="mingzi"  >
        <img    data-a="./../img/5.jpg"     src="./../img/5.jpg" alt="">
      </div>

    </div>
   
<div class="four_two">
     <p class="p1">${a.goods_name}</p>
      <div class="p2">

       <p class="div_p1"> 
         <span>${a.goods_name}</span>
         <s>${a.goods_number}</s>
       </p>
       <p class="div_p2">
         
         <span>促销价</span>
         <b>￥${a.goods_price}</b>
          </p>
      </div  >

      <div class="four_two1">
         <span>运费</span>
         <div>全国至北京</div>
      </div>
       
      <ul class="four_two2">
        <li>月销量<span>999</span></li>
        <li>累计评价<span>${a.goods_weight}</span></li>
        <li>送天猫积分<span>66</span>起</li>
      </ul>

      <div class="four_two3">
       <span>尺码</span>
       <ul>
         <li >m</li>
         <li>l</li>
         <li>xl</li>
         <li>xxl</li>


       </ul>

      </div>

      <div class="four_two4">
        <span>颜色</span>
        <img src="${a.goods_small_logo}" alt=""   data-a='白色'  >
        <img src="${a.goods_small_logo}" alt=""    data-a='黄色' >
     
        <img src="${a.goods_small_logo}" alt=""    data-a='绿色'  >
     
        <img src="${a.goods_small_logo}" alt=""   data-a='蓝色'  >
     
        <img src="${a.goods_small_logo}" alt=""    data-a='红色'     >
     
        <img src="${a.goods_small_logo}" alt=""    data-a='紫色'     >
     
     

      </div>

     <div class="four_two5">
         <span>数量</span>
     
            <input type="text"   value='1' >
            <div>
             <button class='button_left'><</button>
             <button class='button_right'>></button>
            </div>
             <i>件</i>
             <h6>库存<b>${a.goods_number}</b>件</h6>
        
     </div>


     <div class="four_two6">
          <span>分期</span>
         <ul>
           <li >
             <p>花呗分期3期</p>
             <p>(含手续费)</p>
           </li>
           <li>
             <p>花呗分期6期</p>
             <p>(含手续费)</p>
           </li>
           <li>
             <p>花呗分期9期</p>
             <p>(含手续费)</p>
           </li>
         </ul>


     </div>
    
     <div class="four_two7">
       <button  class='gou' >立即购买</button>
       <button   class='gou' >加入购物车</button>



      </div>

     
      <div class="four_two8">

      </div>










    
     </div>
      `
  
      div.innerHTML=srr

    two() 
    three()
    four()
    five()
    six()
    seven()
      let box = document.querySelector('.four_two8 ')
    
      
      box.style.backgroundImage=`url(${a.goods_small_logo})`



    }
    




      
  }     




































 //放大镜

function two(){

  //最大的盒子
 let div = document.querySelector('.four')
//左边图片盒子shang 
 let show = document.querySelector('.four_onet')
 //左边图片盒子下
 let list = document.querySelector('.four_oneb')
 //左边蒙版
 let ban= document.querySelector('.mengban')
 //右边图片盒子
 let big =document.querySelector('.four_two8')



 //用左右比例求出阴影的宽和高

   //左边盒子
  let showw = show.clientWidth

  let showh = show.clientHeight

  //右边盒子
  let bigw =parseInt(window.getComputedStyle(big).width)

  let bigh = parseInt(window.getComputedStyle(big).height)
  
  //背景图
  let bjw =  parseInt(window.getComputedStyle(big).backgroundSize.split(' ')[0])
  let bjh = parseInt(window.getComputedStyle(big).backgroundSize.split(' ')[1])
 
   
      
        
 











//移入  移出
show.addEventListener('mouseover',function(){
  big.style.display='block'
  ban.style.display='block'
  
})

show.addEventListener('mouseout',function(){
  big.style.display='none'
  ban.style.display='none'
})
//切换图片

list.addEventListener('click',function(e){
       e= e || window.event
      let taget = e.target||e.srcElement
      if(taget.nodeName=='IMG'){
       let a = taget.getAttribute('src')
       for(let i=0; i<list.children.length;i++){
        list.children[i].classList.remove('mingzi')
       }
       taget.classList.add('mingzi')
      
        show.style.src= `${a}`
       
        
        show. firstElementChild.src=a
        big.style.backgroundImage=`url(${a})`


      
   


      }
      
 

})


//鼠标跟随
show.addEventListener('mousemove' ,function(e){
  e =e ||window.event
   
  
     
     //阴影的宽和高

    let    a=Math.ceil(showw*bigw/bjw)

   let    b=Math.ceil(showh*bigh/bjh)


  

   ban.style.width=a+'px'
      
 ban.style.height=b+'px'
   
  let x= e.offsetX-a/2
  let y = e.offsetY-b/2
  if(x<=0){x=0}
  if(y<=0){y=0}
  if(x>=show.clientWidth-ban.clientWidth){x=show.clientWidth-ban.clientWidth}
  if(y>=show.clientHeight-ban.clientHeight){y=show.clientHeight-ban.clientHeight}
  ban.style.left=x+'px'
  ban.style.top=y+'px'
  
  let bjx =parseFloat( big.clientWidth)* parseInt(ban.style.left)/parseInt(ban.clientWidth)
 

let bjy=parseFloat(big.clientHeight)* parseInt(ban.style.top)/parseInt(ban.clientHeight)


big.style.backgroundPosition= `-${ bjx }px -${ bjy }px`










  

   

  
    




})










  

}

//右边事件
 //分期
 function three(){
   let  lis = document.querySelectorAll('.four_two6>ul>li')
     for(let i=0;i<lis.length;i++){
        lis[i].addEventListener('click',function(){
           for(let  j=0;j<lis.length;j++){
             lis[j].classList.remove('fen')
           }

            this.classList.add('fen')
  




        })

     }
     

 }
 //尺码
 function four(){
   let lis = document.querySelectorAll('.four_two3>ul>li')

   
    for(let i=0;i<lis.length;i++){
    lis[i].addEventListener('click',function(){
       for(let  j=0;j<lis.length;j++){
         lis[j].classList.remove('fen')
       }

        this.classList.add('fen')





    })

 }
 


 }
 //img 点击
 function five(){
  let lis = document.querySelectorAll(' .four_two4 img')
  for(let i=0;i<lis.length;i++){
    lis[i].addEventListener('click',function(){
       for(let  j=0;j<lis.length;j++){
         lis[j].classList.remove('fen')
       }

        this.classList.add('fen')





    })

 }



 }
//数量加减购物车
function six(){
 let div =document.querySelector('.four_two5')
 let input = document.querySelector('.four_two5>input')
  
  div.addEventListener('click',function(e){
     e= e ||window.event
  let taget = e.target||e.srcElement
  console.log(taget.className);
       if(taget.className=='button_left') {
         input.value++

       }
       if(taget.className=='button_right') {
         if( input.value<=0){
           return
         }else{
          input.value--
         }
      


      }






  

  })
  



}


//提交购物
function seven(){
  let div = document.querySelector('.four_two')
  let yanse = document.querySelectorAll(' .four_two4 img')
  let chima = document.querySelectorAll('.four_two3>ul>li')
  let  fenqi = document.querySelectorAll('.four_two6>ul>li')
  let input = document.querySelector('.four_two5>input')

  
div.addEventListener('click',function(e){
   let aa=1
   let bb=1
   let cc=1


  e= e ||window.event
  let taget = e.target||e.srcElement

  if(taget.className=='gou'){
    
  let a=[]
  yanse.forEach(function(item){
     
   a.push(item)


  })
let a1=   a.some(function(item){
  return item.className=='fen'
})



let b=[]
chima.forEach(function(item){
   
 b.push(item)


})
let b1=   b.some(function(item){
return item.className=='fen'
})





let c=[]
fenqi.forEach(function(item){
   
 c.push(item)


})
let c1=   c.some(function(item){
return item.className=='fen'
})

  if(!a1){
    alert('请选择颜色')
  }
  if(!b1){
    alert('请选择尺码')
  }
  if(!c1){
    alert('请选择是否分期')
  }
   if(input.value==0){
    alert('请选择数量')
  }
  a.forEach(function(item){
     if(item.className. indexOf('fen')!=-1){
          aa=   item.dataset.a
       
     }
  })
  b.forEach(function(item){
    if(item.className. indexOf('fen')!=-1){
         bb=   item.innerText
      
    }
 })
 c.forEach(function(item){
  if(item.className. indexOf('fen')!=-1){
       cc=   item.innerText
    
  }
})

    
    

   if(a1&&b1&&c1&&input.value-0){
   

    let a=  confirm('你确定要买'+input.value+'件'+aa+'的'+bb+'号'+cc)
   
      if(a){
      alert('我不卖，哈哈哈哈啊')

      }else{
       alert('不买点什么点')


      }
      


   }













  }





})









  




}


