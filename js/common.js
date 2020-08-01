document.body.addEventListener('touchstart', function(){ });

// 点击菜单弹出二级菜单栏
var menuBtn = document.querySelector('.left-menu-btn');
var menuList = document.querySelector('#menuList');
var subMenu = document.querySelector('.submenu');
menuBtn.onclick = function(){
    if(menuList.style.left=='0rem'){
        menuList.style.left = '-1.8rem';
        menuList.style.transition = 'all .3s';
        subMenu.classList.remove('active')
    }else{
        menuList.style.left = '0rem';
        menuList.style.transition = 'all .3s';
    }
}
subMenu.onclick = function(){
    subMenu.className = 'active'
}


// 监听页面滚动高度，固定导航栏
window.onscroll=function(){
    var topScroll = get_scrollTop_of_body();//滚动的距离,距离顶部的距离

    var navBar = document.querySelector(".nav-list");//获取到导航栏id
    if(topScroll > 50){ //当滚动距离大于50px时执行下面的东西
        navBar.style.position = 'fixed';
        navBar.style.top = '0';
        navBar.style.zIndex = '9999';
        navBar.style.width = '1200px';
        navBar.style.paddingBottom = '0'
        navBar.style.background = 'rgba(0, 0, 0, 0.7)'
    }else{
        navBar.style.position = 'static';
        navBar.style.background = ''
    }
}
/*解决浏览器兼容问题*/
function get_scrollTop_of_body(){ 
    var scrollTop; 
    if(typeof window.pageYOffset != 'undefined'){//pageYOffset指的是滚动条顶部到网页顶部的距离 
        scrollTop = window.pageYOffset; 
    }else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat')        { 
        scrollTop = document.documentElement.scrollTop; 
    }else if(typeof document.body != 'undefined'){ 
        scrollTop = document.body.scrollTop; 
    } 
    return scrollTop; 
} 