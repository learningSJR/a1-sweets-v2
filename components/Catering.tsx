'use client'
import Image from 'next/image'
import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import s from './Catering.module.css'
export default function Catering() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1])
  const reduced = useReducedMotion()
  return (
    <section ref={ref} id="catering" className={s.section}>
      <div className={s.copy}>
        <span>OUTDOOR CATERING</span>
        <h2>
          Your occasion.
          <br />
          Our flavours.
        </h2>
        <p>Bring delicious vegetarian cuisine to your next gathering.</p>
        <a href="#contact">
          Plan your event <ArrowUpRight size={18} />
        </a>
      </div>
      <motion.div className={s.image} style={{ scale: reduced ? 1 : scale }}>
        <Image
          src="/images/value.png"
          alt="Vegetarian catering spread"
          fill
          sizes="90vw"
          className="object-cover"
        />
      </motion.div>
    </section>
  )
}
