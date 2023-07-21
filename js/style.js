// $(window).resize(function(){
//     if ($(window).width() < 980){
//         $('#hamburger').click(function(){
//             $('.list').slideToggle(500);
//         })
//     }
// })

if ($(window).width() < 980) {
    $('#hamburger').off('click').on('click', function() {
      $('.list').slideToggle(500);
    });
  } else {
    // 窗口宽度大于等于980px时，如果列表是隐藏的，则显示出来
    if ($('.list').is(':hidden')) {
      $('.list').slideDown(500);
    }
  }





//980px rwd
if (window.innerWidth < 980){
let list_el = document.getElementsByClassName("the");

    for(let i = 0; i < list_el.length; i++){
        list_el[i].addEventListener("click", function(){
            
            let subMenu = document.getElementsByClassName("drop");
            for(let i = 0; i < subMenu.length; i++){
                if(subMenu[i].classList.contains("-open"))
                subMenu[i].classList.remove("-open")
            }


            // this.nextElementSibling.classList.toggle("-open");

            if(!this.nextElementSibling.classList.contains("-open")){
                // this.nextElementSibling.classList.remove("-open");
                // console.log("tt");
                this.nextElementSibling.classList.add("-open");
            }
            
        });

   
    }

    document.addEventListener('click', function(event) {
        // 獲取點擊的目標元素
        const target = event.target;
        
        // 檢查點擊的目標元素是否為 .the 或 .drop 元素
        const isTheElement = target.classList.contains('the');
        const isDropElement = target.classList.contains('drop');
        const Ham = target.classList.contains('ham')
        
        // 如果點擊的目標元素不是 .the 或 .drop 元素，則隱藏所有的 .drop 元素
        if (!isTheElement && !isDropElement && !Ham) {
            $(".list").slideUp();

          }
        
      });
      


}//end