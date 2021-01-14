//点击出来登陆框
log()
function log(){
    $('body').on('click','p',function(){
        $('form').css('display','flex')
         
      })
}


//验证非空数据并且提交
NotEmpty()
function NotEmpty(){
  $('form').on('submit',  async  function(e){
    e = e ||window.event
    if (e.preventDefault) e.preventDefault()
    else e.returnValue = false
    const val1 = $('form input:first').val()
    const val2 = $('form input:last').val()
    if(!val1||!val2){alert('请输入账号密码');return}

    const zheng=/[\u4e00-\u9fa5]/gm
    const ze =/^\d{6}$/
    if(!zheng.test(val1)||!ze.test(val2)){alert('请输入正确的格式');return}




     
    const res =   await $.post('./zqk.php',{a:val1,b:val2},null,'json')
    
    
       if(res.code==1){
         setCookie('name',res.name,60*60*24*7)
         const url=   window.sessionStorage.getItem('url')


         window.location.href= `./html/${url?url:'shouye'}.html`
       /*   window.location.href='./html/shouye.html' */
       
   }
   

  })




}
//注册开始
register()
function register(){
    //点击影藏和显示
 $('body').on('click','.register',function(){

     console.log('你好世界');
     $('form').css('display','none')
   $('.reg').css('display',' flex') 


 })
   //每一个input注册时验证正则
 $('.reg input').on('input',function(){
    const zheng=/[\u4e00-\u9fa5]/gm
    const  ze =/^\d{6}$/
     
 if(!zheng.test($('.reg input').eq(0).val())){
    $('.reg span').eq(0).addClass('mingzi')
    
 }else{
    $('.reg span').eq(0).removeClass('mingzi')
 }
  
 if(!ze.test($('.reg input').eq(1).val())){
    $('.reg span').eq(1).addClass('mingzi')
 }else{
    $('.reg span').eq(1).removeClass('mingzi')
 }
  
 if(!zheng.test($('.reg input').eq(2).val())){
    $('.reg span').eq(2).addClass('mingzi')
 }else{
    $('.reg span').eq(2).removeClass('mingzi')
 }


 })
  //点击确定时保存到数据库 并且弹出登录窗口
 $('.reg').on('click','.but_q', async  function(){
   
    const val1 = $('.reg input:first').val()
    const val2 = $('.reg input').eq(1).val()
    const val3 = $('.reg input:last').val()
   if(!val1||!val2||!val3){alert('非空验证');return}
     
  if($('.reg span').hasClass('mingzi')) {
      alert('请按照正确格式书写')
      return
  }else{
       const res=   await $.post('./zqk1.php',{a:val1,b:val2,c:val3},null,'')
       console.log(res);
       if(res==1){
        $('.reg').css('display','none')
        $('.go').css('display','block')

       }
       
  }
   
  
 })
  //点击取消返回登录
 $('.reg').on('click','.but_r',function(){
 
     $('.reg').css('display','none')
     


 })
 //成功点击跳转登录
 $('.go').on('click','button',function(){
  $('.go').css('display','none')


 })

}

