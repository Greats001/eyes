

const htiem = document.querySelector('.tieme')
function getMyDate() {
  const date = new Date()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s
  return `${h}:${m}`
}
htiem.innerHTML = getMyDate()
setInterval(function () {
  htiem.innerHTML = getMyDate()
}, 1000)


// 禁用双指放大
document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault()
  }
}, { passive: false })

// 禁用双击放大
var lastTouchEnd = 0
document.documentElement.addEventListener('touchend', function (event) {
  var now = Date.now()
  if (now - lastTouchEnd <= 300) {
    event.preventDefault()
  }
  lastTouchEnd = now
}, { passive: false })



var mo = function (e) { e.preventDefault(); };
function stop() {
  document.body.style.overflow = 'hidden';
  document.addEventListener("touchmove", mo, false);//禁止页面滑动
}
//直接默认不让滑动
stop();


/***取消滑动限制***/
function move() {
  document.body.style.overflow = '';//出现滚动条
  document.removeEventListener("touchmove", mo, false);
}

move()
const esico = document.querySelectorAll('#listall li')


var left = 0
var timer
run()
function run() {
  if (left <= -1900) {
    left = 0
  }
  var m = Math.floor(-left / 380)
  imglist.style.marginLeft = left + 'px'
  var n = (left % 380 == 0) ? n = 2000 : n = 10

  left -= 10
  timer = setTimeout(run, n)

  icochange(m)
}

function icochange(m) {

  for (let i = 0; i < esico.length; i++) {
    esico[i].style.background = ''
    esico[i].style.width = ""
  }
  if (m + '' < esico.length) {
    esico[m + ''].style.background = '#4e86f7'
    esico[m + ''].style.width = "30px"
  }
}
const body = document.querySelector('.yess_top_hg')
const scrolls = document.querySelector('.yess_body')
scrolls.addEventListener('scroll', () => {
  if (scrolls.scrollTop > 50) {
    body.style.background = '#ffffff'
    document.querySelector('.yess_top_index').style.top = '50px'
  } else {
    body.style.background = '#dbe6fd'
    document.querySelector('.yess_top_index').style.top = '0'
  }
})




const yessbtn = document.querySelector('.yess_body_btn')
yessbtn.addEventListener('click', (e) => {
  document.querySelector('.yess_top_hg').style.display = 'none'
  document.querySelector('.yess_top_index').style.display = 'none'
  document.querySelector('.yess_body').style.display = 'none'
  document.querySelector('.yess_bottom').style.display = 'none'
  document.querySelector('.alert_tier').style.display = 'block'

  // document.querySelector('.yess_body_two_top').style.marginLeft = '20px'
})


const alertbomt = document.querySelectorAll('.alert_tier_buuomt')
const alertBer = document.querySelectorAll('.yess_alert_ber>div')
for (let i = 0; i < alertBer.length; i++) {

  alertBer[i].addEventListener('click', function (e) {

    if (e.target.id === "namea") {
      document.querySelector('.yess_alert_ber .activeText').classList.remove('activeText')
      document.querySelector('.yess_alert_ber .active').classList.remove('active')
      e.target.classList.add('activeText')
      e.target.nextElementSibling.classList.add('active')
    }
  })
}



//导航切换
var tobs = document.querySelectorAll('#namea')
var tabContent = document.querySelectorAll('.alert_tier_buuomt')
for (let i = 0; i < tobs.length; i++) {

  const element = tobs[i];
  element.onclick = function () {
    for (let index = 0; index < tabContent.length; index++) {
      const tabContents = tabContent[index];
      if (index === i) {

        tabContents.style.display = 'block'

      } else {
        tabContents.style.display = 'none'
      }
    }
  }
}

const alertbody = document.querySelector('body')
const alertscrolls = document.querySelector('.alert_box')
alertscrolls.addEventListener('scroll', () => {
  if (alertscrolls.scrollTop > 200) {
    document.querySelector('.alert_top_index').style.display = "block"
    alertbody.style.background = '#ffffff'
    document.querySelector('.alert_top_index').style.top = '45px'
  } else {
    alertbody.style.background = '#eaf8ff'
    document.querySelector('.alert_top_index').style.top = '0'
    document.querySelector('.alert_top_index').style.display = "none"
  }
})
const ifmae = document.querySelector('.alert_box2')
const alertBlock = document.querySelector('.alert_box2_btn')
alertBlock.addEventListener('click', () => {
  ifmae.style.display = 'block'
  alertbody.style.background = '#ffffff'
})

const alertBlocka = document.querySelector('.alert_box3_btn')
alertBlocka.addEventListener('click', () => {
  console.log(111);
  ifmae.style.display = "none"
  alertbody.style.background = ''
})