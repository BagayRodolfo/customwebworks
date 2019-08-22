/* eslint-disable no-use-before-define */
const fadeIn = () => {
  let elems
  let windowHeight
  const init = () => {
    elems = document.querySelectorAll('.scroll-fade-opacity')
    console.log(elems)
    windowHeight = window.innerHeight
    addEventHandlers()
    checkPosition()
  }
  const checkPosition = () => {
    for (let i = 0; i < elems.length; i += 1) {
      const positionFromTop = elems[i].getBoundingClientRect().top
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'scroll-fade-opacity',
          'scroll-fade-in'
        )
      }
    }
  }
  const addEventHandlers = () => {
    window.addEventListener('scroll', checkPosition)
    window.addEventListener('resize', init)
  }
  return init()
}

export default fadeIn
