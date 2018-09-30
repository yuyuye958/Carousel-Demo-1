var allButtons = $('#buttons > span')

// 点击按钮切换图片
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function(x){
        let index = $(x.currentTarget).index()
        let px = index * (-300)
        $('.images').css({
            transform: 'translateX(' + px +'px)'
        })
        allButtons.eq(index).addClass('red').siblings('.red').removeClass('red')
    }) 
}

//自动轮播
var n = 0
var size = allButtons.length
allButtons.eq(n%size).trigger('click')
var Timer = setTimer()

function setTimer(){
    return setInterval(()=>{
        n++
        allButtons.eq(n%size).trigger('click')
    }, 2000)
}

// 鼠标进入则停止轮播
$('.window').on('mouseenter',function(){
    window.clearInterval(Timer)
})
$('.window').on('mouseleave',function(){
    Timer = setTimer()
})

