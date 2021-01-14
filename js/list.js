//设置一个没登陆进不来
kukei()
function kukei(){
 const m =  getCookie('name')
  console.log(m);
  if(!m){
      window.location.href='./../zqk.html'
      window.sessionStorage.setItem('url','list')

  }

}
//头部
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
//二级hr
ji()
function ji(){
    let uli = document.querySelectorAll('.three>ul>li')
    for(let i=0;i<uli.length;i++){
        uli[i].addEventListener('mouseover',function(){
            for(let j=0;j<uli.length;j++){
                uli[j].classList.remove('mingzi')
            }
            this.classList.add('mingzi')
        })
    }
    for(let i=0;i<uli.length;i++){
        uli[i].addEventListener('mouseout',function(){
            for(let j=0;j<uli.length;j++){
                uli[j].classList.remove('mingzi')
            }
            
        })
    }


}
//four 开始渲染
$(function(){
  xuan()
function xuan(){
    const list_info = {
        cat_one: 'all',
        cat_two: 'all',
        cat_three: 'all',
        sort: 'id',
        sortType: 'ASC',
        current: 1,
        pagesize: 12
      }
      
 yiji()
 //一级
 async function yiji(){
     //拿数据
       const {list} =     await  $.get(
            './../server/list.php',
            null,
            null,
            'json'
       )
      
       
   let srt = `<span class="ming">全部</span>`

   list.forEach(function(item){
     srt+=`<span>${item.cat_one_id}</span>` 
  
   })

   $('.yiji').html(srt)

   $('.yiji').on('click','span',function(){
  
    list_info.cat_two='all'
    list_info.cat_three='all'
    $('.sanji').html('<span class="ming">全部</span>')

              const res=    $(this).html();
      $(this).addClass('ming').siblings().removeClass('ming')

      list_info.cat_one=res

      if(list_info.cat_one=='全部'){
        list_info.cat_one='all'
        $('.erji').html('<span class="ming">全部</span>')
        $('.sanji').html('<span class="ming">全部</span>')
      }else{
          erji()
      }
          
  
      fenyeqi()

   })






 }
 
 //二级拿数据
 async function erji(){
   const {lis} = await  $.get(
       './../server/listTow.php',
       {a:list_info.cat_one},
       null,
       'json'

   )
   let srt = `<span class="ming">全部</span>`

   lis.forEach(function(item){
      srt+=`<span>${item.cat_two_id}</span>`


   })
   
   $('.erji').html(srt)
   //二级事件
$('.erji').on('click','span',function(){
  
    const res= $(this).html()
    list_info.cat_two=res

    $(this).addClass('ming').siblings().removeClass('ming')

    if( list_info.cat_two=='全部'){

       list_info.cat_two='all'
       $('.sanji').html('<span>全部</span>')

    }else{
        sanji()
    }




    fenyeqi()



})


 }
 //三级
 async function sanji(){
    const{lit} = await $.get(
        './../server/listThree.php',
        {b: list_info.cat_two  },
        null,
        'json'
    )
  let srt = `<span class="ming"> 全部</span>`

   console.log(lit);
   
  lit.forEach(function(item){

    srt+=`<span>${item.cat_three_id}</span>`

  })

  $('.sanji').html(srt)

$('.sanji').on('click','span',function(){
    

    $(this).addClass('ming').siblings().removeClass('ming')

    list_info.cat_three=$(this).html()

  if(list_info.cat_three=='全部'){
    list_info.cat_three='all'
  }


  
  fenyeqi()

})






   


 }

 fenyeqi()
 //分页器
 async function fenyeqi(){
   const {count} = await $.get(
    './../server/getCount.php',
    {cat_one:list_info.cat_one,cat_two:list_info.cat_two,cat_three:list_info.cat_three},
    null,
    'json'
   )
    
   new Pagination ('.pagination ',{
    total:count,
    pagesize:12,
    sizeList:[12, 16, 20, 24],
    change(current,pagesize){
      
       
      
       list_info.current=current,
       list_info. pagesize=pagesize
         
       goodsList()
    }
   })

   










 }
 async function  goodsList(){
       const {list} = await $.get(
           './../server/goodsList.php',
           list_info,
           null,
           'json'

       )
    
       

       let srt =``
    list.forEach(function(item){
       srt+=`<li data-id=${item.goods_id}  >
       <img src="${item.goods_big_logo}" alt="">
       <p class="p1" > <span>￥${item.goods_price}</span> <i>11人付款</i></p>
       <p class="p2">${item.goods_name}</p>
       <p class="p3"><a>${item.cat_id}</a><span>${item.cat_three_id}&nbsp;${item.cat_two_id}</span></p>
       <p class="p4"><span>广告</span> <span>天猫</span></p>
   
     </li> `



    })
    $('.nine').html(srt)
      
      
    

}
//排序
$('.paixu').on('click','span',function(){
    if( list_info.sort==this.dataset.sort){
      list_info.sortType=  list_info.sortType='ASC'? 'DESC':'ASC'
    }else{
     list_info.sortType='ASC'
    }
  

 
 list_info.sort=this.dataset.sort
$(this).addClass("ming").siblings().removeClass("ming")
list_info.current=1
fenyeqi()

})

//点击跳转
zhuan()
function zhuan(){
 $('.nine').on('click','li',function(){
    window. sessionStorage.setItem('goods_id',this.dataset.id)
   window.location.href='./xiangqing.html'







 })



}


}

})



const input = document.querySelector('.two_cen>input')
const body  = document.body
const ul =document.querySelector('.two_cen>ul')
 if(!input.value.trim()){
   ul.style.display='none'
 }



//搜索框

input.addEventListener('input',function(){
 const res = this.value
 let script  = document.createElement('script')
 script.src=`https://suggest.taobao.com/sug?code=utf-8&q=${res}&_ksTS=1610417638201_674&callback=jsonp675&k=1&area=c2c&bucketid=20`
 body.appendChild(script)
 script.remove()
 

})



function jsonp675(res){
 
  

  

 if(!res.result.length){
     ul.style.display='none'
   return
 }else{
  ul.style.display = 'block'
  let srt=``
  res.result.forEach(function(item){

   srt+=`<li>${item[0]}</li>`




  })


  
  ul.innerHTML=srt


   
  let lis=    document.querySelectorAll('.two .two_cen>ul>li')
 
  
for( let i=0;i<lis.length;i++){
  //点击时候  li的值变成input
lis[i].addEventListener('click',function(){
 
    input.value=this.innerHTML

  ul.style.display='none'


})




}











 }










}


//定位粘性
nian()
function nian(){

  window.onscroll=function(){
    let div = document.querySelector('.shiquan')
     
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
   
     if(scrollTop>=160){
        div.style.display='block'

     }else{
      div.style.display='none'
     }

  }

}

//顶部

ding()
function ding(){

 let div = document.querySelector('.huidao')

 div.addEventListener('click',function(){
  window.scrollTo(0, 0)


 })
 






}







