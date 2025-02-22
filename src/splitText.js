import SplitType from 'split-type'
import { gsap, ScrollTrigger } from 'gsap/all'

export default function splitText() {
  const text = SplitType.create('.text')
  const text2 = SplitType.create('.text-2')
  gsap.registerPlugin(ScrollTrigger)

  gsap.fromTo(
    text.lines,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
    }
  )

  text2.elements.forEach(title => {
    console.log(title)

    gsap.fromTo(
      title.querySelectorAll('.line'),
      {
        opacity: 0,
        y: 20,
      },
      {
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end: 'bottom 20%',
          markers: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
      }
    )
  })
}
