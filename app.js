// 3d scroll

let zSpacing =  - 1000
let lastPosition = zSpacing / 5
let $frames = document.getElementsByClassName('frame')
let frames = Array.from($frames)
let zValues = []

window.onscroll = function() {
   
   let top = document.documentElement.scrollTop
   let delta = lastPosition - top
   lastPosition = top

   frames.forEach(function(n, i) {
      zValues.push((i * zSpacing) + zSpacing)
      zValues[i] += delta * -5.5

      let frame = frames[i]
      let transform = `translateZ(${zValues[i]}px)`
      let opacity = zValues[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
      frame.setAttribute('style', `transform: ${transform};
                                   opacity: ${opacity}`)
   })
}

window.scrollTo(0, 1)

// Audio

let soundButton = document.querySelector('.soundbutton')
let audio = document.querySelector('.audio')

soundButton.addEventListener('click', event => {
   soundButton.classList.toggle('paused')
   audio.paused ? audio.play() : audio.pause()
})

// Turn on/off Audio if browser page visible or not

window.onfocus = function() {
   soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
   audio.pause()
}