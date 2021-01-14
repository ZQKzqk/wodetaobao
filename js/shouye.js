
//头

head()
function head(){
 $('.header_left>p').hover(
     function(){
          $(this).css('background','#fff') 
          $('.header_left>ul').css('display','block')
    },
 

    /*    $('.header_left>ul').css('display','none')  */

 )
 $('.header_left>ul').hover(
     function(){},
    function(){
         
         $('.header_left>p').css('background','')
         $(this).css('display','none') 
   },
)
 $('.header_left>ul>li').hover(
    function(){$(this).css('background','pink'). siblings().css('background','')},
   function(){$(this).css('background','') },
)
 $('.header_last>li').hover(
  function(){
     $(this).css('background','#fff')/* .siblings().css('background','') */
     $(this).find('ul').css('display','block')/* . parent().siblings().find('ul').css('display','none') */
   },
   function(){
      $(this).css('background','')
      $(this).find('ul').css('display','')
   }
  
 )

 $('.li_last a').hover(
    function(){$(this).css('background','red')},
    function(){$(this).css('background','')}
 )
    
 







}

//第二
two()
function two(){
  //搜索框
  $('.nav-center').on('click','span',function(){
     /* $(this).css('background','red').siblings().css('background','') */
   /*  if($(this).text()=='店铺'){$('.nav-center input').css( 'placeholder','' )} */
   $(this).addClass('mingzi').siblings().removeClass('mingzi')
   if($(this).text()=='店铺'){
       $('.nihao').prop('placeholder','回家吧')
    
   }
   if($(this).text()=='天猫'){
      $('.nihao').prop('placeholder','别买了')
    
  }
  if($(this).text()=='宝贝'){
   $('.nihao').prop('placeholder','买？')

}
   

  })






}
//第三
three()
function three(){
   $('.ban_three>ul>li').hover(
      function(){$(this).find('span').css('display','block')},

   function(){$(this).find('span').css('display','none')}
   )

}
//轮播图
lun()
function lun(){
   const fir=   $('.lunbotu>ul>li').first().clone(true)
   const las = $('.lunbotu>ul>li').last().clone(true)
    console.log(fir,las);
    $('.lunbotu>ul').append(fir)
    $('.lunbotu>ul').prepend(las)
    $('.lunbotu>ul').css('width',$('.lunbotu>ul>li').length*$('.lunbotu').width())
    $('.lunbotu>ul').css('left',-$('.lunbotu').width())
    let a = 1
    let b =1
    //跑起来
  b= setInterval(function(){
   a++
   $('.lunbotu>ul').stop().animate({
      left:-$('.lunbotu').width()*a
        

}, function(){
   if(a>=$('.lunbotu>ul>li').length-1){
       a=1
       $('.lunbotu>ul').css('left',-$('.lunbotu').width())

   }
})



  },1000)
  //移入移出
 /*  $('.lunbotu').hover(
     function(){ clearInterval(b)   },
     function(){  setInterval(function(){
      a++
      $('.lunbotu>ul').stop().animate({
         left:-$('.lunbotu').width()*a
           
   
   }, function(){
      if(a>=$('.lunbotu>ul>li').length-1){
          a=1
          $('.lunbotu>ul').css('left',-$('.lunbotu').width())
   
      }
   })
   
   
   
     },1000) },
     
 
    
  ) */





  
}
//three 上右 下
the()
function the(){
   $('.banban_right_b>ul').on('mousemove','li',function(){
      $(this).addClass('mingzi').siblings().removeClass('mingzi')
      if($(this).html()=='公告'){
         $('.banban_right_bb').html('今天是个好日子')
      }
      if($(this).html()=='论坛'){
         $('.banban_right_bb').html('心想的事儿都能成')
      }
      if($(this).html()=='安全'){
         $('.banban_right_bb').html('恭喜发财')
      }
      if($(this).html()=='工艺'){
         $('.banban_right_bb').html('新年快乐')
      }
      if($(this).html()=='规则'){
         $('.banban_right_bb').html('万事如意')
      }
           
   })



}
//真轮播图
zhen()
function zhen(){
let span1 =document.querySelector('.ban_butt>span') 
let div = document.querySelector('.ban_but')
let ul=document.querySelector('.ban_but>ul')
let ol = document.querySelector('.ban_but>ol')
let uli =document.querySelectorAll('.ban_but>ul>li')
let span = document.querySelectorAll('.ban_but>p>span')
let time = 1
let index = 1
let f =true
console.log(span1);

//渲染ol
o()
 function o(){
  
 let sss = document.createDocumentFragment()

 
 for(let i =0;i<uli.length;i++){
  
    let li = document.createElement('li')
    if(i==0){li.classList.add('yanse')}
    li.dataset.dd=i
   sss.appendChild(li)

   
   
   
 }
 ol.appendChild(sss)
    
    
 
 }
 //插入ul
 dingwei()
  function dingwei(){
   let fir = ul.firstElementChild.cloneNode(true)
   let las = ul.lastElementChild.cloneNode(true)
  
   
   
   ul.appendChild(fir)
   ul.insertBefore(las, ul.firstElementChild)
    ul.style.width=div.clientWidth*ul.children.length+'px'


 } 
 //跑起来
 yundog()
 function yundog(){
  time=   setInterval(function(){
    index++
    move(ul,{left:-index*div.clientWidth},end)
/*     
    span1.innerText=index */

  },1000)

 }
 
 function end(){
  if(index==ul.children.length-1){
     index=1
     ul.style.left=-div.clientWidth+'px' }
  if(index==0){
      index=ul.children.length-2
      ul.style.left=-index*div.clientWidth+'px'
  }
  for(let i=0;i<ol.children.length;i++){
   ol.children[i].classList.remove('yanse')
  }
  ol.children[index-1].classList.add('yanse')
 

   f= true

   span1.innerText=index
   if( span1.innerText>=6){
      span1.innerText=6
   } 

 }
 //移入移出
 yi()
  function yi(){
   div.addEventListener('mouseover',function(){
      clearInterval(time)
      span[0].style.display='block'
      span[1].style.display='block'

   })
   div.addEventListener('mouseout',function(){
      span[0].style.display='none'
      span[1].style.display='none'
      yundog()

   })






  }
  //两边的
 liangbian()
  function liangbian(){
   
   
    span[0].onclick=function(){
      if(!f){return}
      f=false
       index--
       move(ul,{left:-index*div.clientWidth},end)
       /* span1.innerText=index */
    }
    span[1].onclick=function(){
      if(!f){return}
      f=false
      index++
      move(ul,{left:-index*div.clientWidth},end)
     /*  span1.innerText=index */
   }


  }
  //上面的ol
  jiaodian()
  function jiaodian(){
   ol.addEventListener('click',function(e){
      e= e||window.event
  
    let  ming=      e.target
    if(ming.nodeName=='LI'){
      if(!f){return}
      f=false
    
     index=ming.dataset.dd-0+1
     move(ul,{left:-index*div.clientWidth},end)
   /*   span1.innerText=index */
    }



   })




  }
//关闭窗口
  guanbi()
  function guanbi(){
   
    document.addEventListener('visibilitychange',function(){
        const guan = document.visibilityState
     
      if(guan==='hidden'){clearInterval(time)
         console.log('wojintianhenkaixin')
      }
      if(guan==='visible'){yundog()}
       

    })
   
}
    
 

 

}
//又一个二级菜单
er()
function er(){
   let zqk = document.querySelector('.zqk')
  let uls = document.querySelectorAll('.three>ul>li')
  let ols = document.querySelectorAll('.three>ol>li')
  let ol = document.querySelector('.oool')
      for(let i=0;i<uls.length-1;i++){
          uls[i].addEventListener('mouseover',function(){
            zqk.style.display='none'
             ol.style.display='block'
            for(let j=0;j<uls.length-1;j++){
               uls[j].classList.remove('sho')
               ols[j].classList.remove('show')
            }



            uls[i].classList.add('sho')
            ols[i].classList.add('show')
          })
     }
      
 
     
}
//三级菜单
san()
function san(){
let uls = document.querySelectorAll('.ban_ban .three>ol .q1>ul>li')
let ols = document.querySelectorAll('.ban_ban .three>ol .q1>ol>li')

 for(let i=0;i<uls.length;i++){
  uls[i].addEventListener('mouseover',function(){
   for(let j=0;j<uls.length;j++){
      uls[j].classList.remove('shang')
      ols[j].classList.remove('xia')
   }



    uls[i].classList.add('shang')
    ols[i].classList.add('xia')
  })
 }

 

}
si()
function si(){
   let uls = document.querySelectorAll('.ban_ban .three>ol .q2>ul>li')
   let ols = document.querySelectorAll('.ban_ban .three>ol .q2>ol>li')
 
    for(let i=0;i<uls.length;i++){
     uls[i].addEventListener('mouseover',function(){
      for(let j=0;j<uls.length;j++){
         uls[j].classList.remove('shang')
         ols[j].classList.remove('xia')
      }
   
   
   
       uls[i].classList.add('shang')
       ols[i].classList.add('xia')
     })
    }
   
    
   
   }
   wu()
function wu(){
   let uls = document.querySelectorAll('.ban_ban .three>ol .q3>ul>li')
   let ols = document.querySelectorAll('.ban_ban .three>ol .q3>ol>li')

    for(let i=0;i<uls.length;i++){
     uls[i].addEventListener('mouseover',function(){
      for(let j=0;j<uls.length;j++){
         uls[j].classList.remove('shang')
         ols[j].classList.remove('xia')
      }

       uls[i].classList.add('shang')
       ols[i].classList.add('xia')
     })
    }
   
    
   
   }
//点击删除
shan()
function shan(){
 let span = document.querySelectorAll('.ban_ban .three>ol>li>span')
 let div = document.querySelector('.three')
 let ol = document.querySelector('.oool')
 let uli = document.querySelectorAll('.three>ul>li')
  let zqk = document.querySelector('.zqk')
    

  div.addEventListener('click',function(e){
     e = e||window.event
     const tar = e.target
     if(tar.nodeName=='SPAN'){
          zqk.style.display='block'
           ol.style.display='none'
           for(let i =0;i<uli.length;i++){
              uli[i].classList.remove('sho')
           }


         
         
     }
      
  })

}
//百度

    let input = document.querySelector('.nihao')
    let ul = document.querySelector('.nav-centerul')
    let body = document.body
    input.addEventListener('input',()=>{
     
      let res=input.value;
   
      let script = document.createElement('script')
        script.src =`https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1429,33221,33306,33261,33351,33313,33312,33169,33311,33310,33309,33308,33307,33145,33389&wd=${res}&req=2&csor=1&cb=fn&_=1608781783085`
       
      body.appendChild(script)
        script.remove()
    })

function  fn(res){

   console.log(res.g)
   if(!res.g){ul.style.display='none'
      return}
   else{ul.style.display='block'}
     

      let  srt = ``
     res.g.forEach((item)=>{

      srt+=`<li>${item.q}</li>`


     })
      ul.innerHTML=srt






   }
  //登陆过有名字
  mingzi()
  function mingzi(){
     let b = document.querySelector('.banban_right>b')
     let m =getCookie('name')
     console.log(m);
     if(m){
        b.innerHTML=` 你好 ${m}`
        return
     }
     
    
      
  }
  //跳转
  tiaodao()
  function  tiaodao(){
      let lis = document.querySelectorAll('.banban_right_ul>li')
       for(i=0;i<lis.length;i++){
          lis[i].addEventListener('click',function(){
             window.location.href='./../zqk.html'
          })
       }
  }
 //渲染ul列表
 xuanran()
 function xuanran(){
 
    ban()
    async function ban(){
        const  {list}=await $.get(
           './../server/list.php',
           null,
           null,
           'json'
        )
        console.log(list);
      let srt = `<li>全部</li>`
      list.forEach(function(item){
     srt+= `<li>${item.cat_one_id}<li>`
   
      })
      $('.ban_banu').html(srt)
    }
    //一级
    









 }

 //左边ul点击跳转列表页
 dianji()
 function dianji(){
   $('.ban_banu').on('click',function(){
     window.location.href='./list.html'
     
   })


 }

 //定位粘性
nooo()
function nooo(){
 let div = document.querySelector('.shiquan')

    
     
   window.onscroll=function(){
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
     if(scrollTop>=200){
      div.style.display='block'


     }else{
      div.style.display='none'
     }
       
 




   }  
     


}

//顶
ding()
function ding(){
  let div = document.querySelector('.dingbu')
  div.addEventListener('click',function(){
   window.scrollTo(0,0)



  })



}

//楼

dao()
function dao(){
   $('.louceng>li').on('click',function(){

      $('html, body').animate({ scrollTop: $('.item').eq($(this).index()).offset().top })
      $(this).addClass('ming').siblings().removeClass('ming')

   })
   $(window).scroll(function () {
      // 拿到页面卷去的高度
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

      // 循环遍历
      const items = $('.item')
      for (let i = 0; i < items.length; i++) {
        
        if (scrollTop >= $(items[i]).offset().top) {
          // i 就是索引
          $('.louceng > li').removeClass('ming').eq(i-0+1).addClass('ming')
        }
      }
    })


}

