'use client'
import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import Image from 'next/image'
import s from './FoodStory.module.css'
export default function FoodStory() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const reduced = useReducedMotion()
  const a = useTransform(scrollYProgress, [0, 1], [-170, 0])
  const b = useTransform(scrollYProgress, [0, 1], [170, 0])
  const r = useTransform(scrollYProgress, [0, 1], [-22, 0])
  return (
    <section ref={ref} className={s.story}>
      <div className={s.sticky}>
        <div className={s.copy}>
          <small>THE A1 EXPERIENCE / 01</small>
          <h2>
            A little
            <br />
            of everything.
          </h2>
          <p>
            From savoury favourites to traditional sweets. Make every meal a
            celebration.
          </p>
          <a href="#menu">Find your favourite ↗</a>
        </div>
        <div className={s.stage}>
          <motion.div
            className={s.meal}
            style={{ x: reduced ? 0 : a, rotate: reduced ? 0 : r }}
          >
            <Image
              src="/images/thali-cutout.png"
              fill
              sizes="45vw"
              alt="Vegetarian meal"
              className="object-contain"
            />
          </motion.div>
          <motion.div className={s.sweet} style={{ x: reduced ? 0 : b }}>
            <Image
              src="/images/gulab-jamun.png"
              fill
              sizes="25vw"
              alt="Gulab jamun"
              className="object-contain"
            />
          </motion.div>
          <span>✳</span>
        </div>
      </div>
    </section>
  )
}
