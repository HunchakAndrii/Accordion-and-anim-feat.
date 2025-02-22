import gsap from 'gsap'

export default function accordion() {
  const accordionItem = document.querySelectorAll('.accordion__item')

  accordionItem.forEach(item => {
    item.querySelector('.accordion__header').addEventListener('click', e => {
      item.classList.toggle('active')

      const content = item.querySelector('.accordion__content')
      if (item.classList.contains('active')) {
        gsap.fromTo(
          content,
          { height: 0 },
          { height: content.scrollHeight, duration: 0.5 }
        )
      } else {
        gsap.fromTo(
          content,
          { height: content.scrollHeight },
          { height: 0, duration: 0.5 }
        )
      }

      accordionItem.forEach(i => {
        if (i !== item) {
          i.classList.remove('active')

          gsap.to(i.querySelector('.accordion__content'), {
            height: 0,
            duration: 0.5,
          })
        }
      })
    })
  })
}
