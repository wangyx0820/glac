document.body.addEventListener('touchstart', function(){ });

// tab切换

function select(id,className){
    var target = document.getElementById(id); 
    var els = target.getElementsByClassName('product-item');
    var swipers = target.getElementsByClassName(className);

    for (var i = 0; i < els.length; i++) {
        const element = els[i];
        els[i].index = i;

        element.onclick = function(){
            for(var j=0;j<els.length;j++){
                //清除所有的 类
                els[j].classList.remove('active');
                swipers[j].classList.add('hide');
            }
            this.classList.add('active')
            swipers[this.index].classList.remove('hide');
        }
    }
}

function setTab(name,cursel,n){
    for(i=1;i<=n;i++){
        var menu=document.getElementById(name+i);
        var con=document.getElementById("con_"+name+"_"+i);
        menu.className = i==cursel ? "active" : "";
        i == cursel ? con.classList.remove('hide') : con.classList.add('hide');
    }
}

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