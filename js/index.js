//设置标题变化
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '别离开我！回来！';
        clearTimeout(titleTime);
    }
    else {
        document.title = '哎嘿~欢迎回来💜💙';
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 2000);
    }
});

//点击出现文字或表情包
window.addEventListener('load', function () {
    let body = document.body;
    let content = ["❤","💜","💙","🩷"] //自定义内容的数组
    body.addEventListener('click', function (e) {
        let x = e.pageX;
        let y = e.pageY; //当前坐标
        let randContent = Math.ceil(Math.random() * content.length);
        let text = new Text(x, y, randContent);
        let span = document.createElement('span')
        span.style.color = text.getRandom();
        text.create(span);
        setTimeout(function () {
            text.out(span)
        }, 1900)
    })

    function Text(x, y, rand) {
        this.x = x;
        this.y = y;
        this.rand = rand;
    }
    Text.prototype.create = function (_this) {
        let body = document.body;
        _this.innerHTML = content[this.rand - 1];
        _this.className = 'text'
        _this.style.top = this.y - 20 + 'px'
        _this.style.left = this.x - 50 + 'px'
        _this.style.animation = 'remove 2s'
        body.appendChild(_this);
        let i = 0
        setInterval(() => {
            _this.style.top = this.y - 20 - i + 'px'
            i++
        }, 10);
    }
    Text.prototype.out = function (_this) {
        _this.remove()
    }
    //设置随机颜色
    Text.prototype.getRandom = function () {
        let allType = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'; //16进制颜色
        let allTypeArr = allType.split(','); //通过','分割为数组
        let color = '#';
        for (var i = 0; i < 6; i++) {
            //随机生成一个0-16的数
            var random = parseInt(Math.random() * allTypeArr.length);
            color += allTypeArr[random];
        }
        return color; //返回随机生成的颜色
    }
})

//记录博客时间
function runtime(){
    // 初始时间，月/日/年 时:分:秒
    X = new Date("1/21/2025 00:00:00");
    Y = new Date();
    T = (Y.getTime()-X.getTime());
    M = 24*60*60*1000;
    a = T/M;
    A = Math.floor(a);
    b = (a-A)*24;
    B = Math.floor(b);
    c = (b-B)*60;
    C = Math.floor((b-B)*60);
    D = Math.floor((c-C)*60);
    time.innerHTML = "博客记录了: "+A+"天"+B+"小时"+C+"分"+D+"秒"
}
setInterval(runtime, 1000); // 日记时间


//伪随机的背景变化xx
const backgroundImages = [
    'img/mfy.webp',
    'img/♥.webp',
    'img/background-szk.webp',
];

// 复制原数组，避免修改原数组
let shuffledImages = [...backgroundImages];
let currentIndex = 0;

// 洗牌算法，打乱图片数组顺序
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 初始化打乱图片顺序
shuffledImages = shuffleArray(shuffledImages);

// 获取按钮元素
const changeButton = document.getElementById('changeButton');

// 为按钮添加点击事件监听器
changeButton.addEventListener('click', function () {
    // 设置新的背景图片
    document.body.style.backgroundImage = `url('${shuffledImages[currentIndex]}')`;

    // 更新索引
    currentIndex++;

    // 如果一轮图片显示完，重新洗牌并重置索引
    if (currentIndex >= shuffledImages.length) {
        shuffledImages = shuffleArray([...backgroundImages]);
        currentIndex = 0;
    }
});
