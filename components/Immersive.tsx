'use client'
import { useEffect, useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChefHat,
} from 'lucide-react'
import Image from 'next/image'
import WaveDivider from './WaveDivider'
import s from './Immersive.module.css'
const slides = [
  {
    title: 'SWEET BY',
    line: 'TRADITION.',
    img: 'gulab-jamun.png',
    color: '#ad1739',
    desc: 'Traditional Indian mithai',
    link: 'sweets',
  },
  {
    title: 'GOOD FOOD.',
    line: 'GOOD MOOD.',
    img: 'thali-cutout.png',
    color: '#191a4f',
    desc: 'Pure vegetarian favourites',
    link: 'menu',
  },
  {
    title: 'LET’S',
    line: 'CELEBRATE.',
    img: 'welcome-img.png',
    color: '#ad1739',
    desc: 'Food for every occasion',
    link: 'catering',
  },
]
export function Loader() {
  const [show, setShow] = useState(true)
  const reduced = useReducedMotion()
  useEffect(() => {
    let timer = setTimeout(() => setShow(false), 1100)
    return () => clearTimeout(timer)
  }, [])
  return (
    <AnimatePresence>
      {show && !reduced && (
        <motion.div
          className={s.loader}
          exit={{ pointerEvents: 'none' }}
          aria-hidden="true"
        >
          <div className={s.panels}>
            {['#191a4f', '#ad1739', '#ff8426', '#ffcf45', '#fff5df'].map(
              (c, i) => (
                <motion.div
                  key={c}
                  style={{ background: c }}
                  exit={{ y: '-105%' }}
                  transition={{ duration: 0.55, delay: i * 0.06 }}
                />
              ),
            )}
          </div>
          <motion.div className={s.loadContent} exit={{ opacity: 0 }}>
            <ChefHat size={54} />
            <p>A little sweetness is on its way...</p>
            <div className={s.track}>
              <motion.i
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease: 'linear' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export function Hero() {
  const [index, setIndex] = useState(0)
  const reduced = useReducedMotion()
  const d = slides[index]
  return (
    <>
      <section id="home" className={s.hero} style={{ background: d.color }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={s.heroInner}
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <p className={s.kicker}>INDIAN SWEETS • PURE VEGETARIAN</p>
            <h1>
              {d.title}
              <br />
              {d.line}
            </h1>
            <motion.div
              className={s.heroFood}
              animate={reduced ? {} : { y: [0, -12, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Image
                src={'/images/' + d.img}
                alt={d.desc}
                fill
                priority
                sizes="(max-width:700px) 85vw, 55vw"
                className="object-contain"
              />
            </motion.div>
            <div className={s.heroBottom}>
              <p>
                {d.desc}
                <br />
                Made for sharing.
              </p>
              <a href={'#' + d.link}>
                EXPLORE <ArrowUpRight />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className={s.controls}>
          <button
            aria-label="Previous slide"
            onClick={() => setIndex((index + 2) % 3)}
          >
            <ChevronLeft />
          </button>
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={'Slide ' + (i + 1)}
              aria-pressed={index === i}
              onClick={() => setIndex(i)}
            >
              {'0' + (i + 1)}
            </button>
          ))}
          <button
            aria-label="Next slide"
            onClick={() => setIndex((index + 1) % 3)}
          >
            <ChevronRight />
          </button>
        </div>
        <a className={s.scroll} href="#about" aria-label="Scroll to our story">
          <ArrowDown />
        </a>
      </section>
      <WaveDivider from={d.color} to="#ffcf45" />
    </>
  )
}
export function Wave({ color }: { color: string }) {
  return (
    <div className={s.wave} style={{ color }} aria-hidden="true">
      <svg viewBox="0 0 120 24" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0 12 Q15 -12 30 12 T60 12 T90 12 T120 12 V24 H0Z"
        />
      </svg>
    </div>
  )
}
const steps = [
  'The thali',
  'Bhatura',
  'The curries',
  'The breads',
  'Celebration',
]
export function Assembly() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const [step, setStep] = useState(0)
  const reduced = useReducedMotion()
  useEffect(
    () =>
      scrollYProgress.on('change', (v) =>
        setStep(Math.min(4, Math.floor(v * 5))),
      ),
    [scrollYProgress],
  )
  const y = useTransform(scrollYProgress, [0, 1], [-70, 0])
  const rotate = useTransform(scrollYProgress, [0, 1], [-15, 0])
  return (
    <section ref={ref} className={s.assembly}>
      <div className={s.sticky}>
        <p className={s.kicker}>THE ART OF INDIAN FOOD</p>
        <h2>
          A THALI.
          <br />A WHOLE WORLD.
        </h2>
        <div className={s.assemblyGrid}>
          <ol>
            {steps.map((v, i) => (
              <li key={v} className={i === step ? s.active : ''}>
                <small>0{i + 1}</small>
                {v}
              </li>
            ))}
          </ol>
          <motion.div className={s.plate} style={reduced ? {} : { y, rotate }}>
            <Image
              src="/images/thali-cutout.png"
              alt="Vegetarian thali"
              fill
              sizes="70vw"
              className="object-contain"
            />
            <AnimatePresence>
              {step > 0 && (
                <motion.div
                  key={step}
                  className={s.ingredient}
                  initial={{ opacity: 0, y: -70 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Image
                    src={
                      '/images/menu_rest_1_' + [1, 2, 6, 10, 8][step] + '.png'
                    }
                    alt=""
                    fill
                    sizes="180px"
                    className="object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        <div className={s.track}>
          <motion.i style={{ scaleX: scrollYProgress }} />
        </div>
      </div>
    </section>
  )
}
const foods = [
  ['Thali', 'thali.jpg'],
  ['Mithai', 'sweets.jpg'],
  ['Samosa', 'samosa.jpg'],
  ['Jalebi', 'menu_rest_1_4.png'],
  ['Catering', 'value.jpg'],
]
export function FoodRail() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-48%'])
  const reduced = useReducedMotion()
  return (
    <section ref={ref} id="sweets" className={s.rail}>
      <div className={s.sticky}>
        <p className={s.kicker}>A1 FAVOURITES</p>
        <h2>
          MUCH MORE.
          <br />
          MUCH DELICIOUS.
        </h2>
        <motion.div className={s.railTrack} style={reduced ? {} : { x }}>
          {foods.map(([name, img], i) => (
            <article key={name}>
              <span>0{i + 1}</span>
              <Image
                src={'/images/' + img}
                alt={name}
                fill
                sizes="(max-width:700px) 70vw, 32vw"
                className="object-cover"
              />
              <h3>{name}</h3>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
export function DoodleStory() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 35%'],
  })
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.8],
    ['inset(0 0 0 100%)', 'inset(0 0 0 0%)'],
  )
  const reduced = useReducedMotion()
  return (
    <section ref={ref} id="about" className={s.story}>
      <p className={s.kicker}>FOOD BRINGS US TOGETHER</p>
      <h2>
        Made to share.
        <br />
        <em>Made with love.</em>
      </h2>
      <div className={s.reveal}>
        <Image
          src="/images/thali.jpg"
          alt="A colourful vegetarian meal"
          fill
          sizes="90vw"
          className="object-cover"
        />
        <motion.div className={s.doodle} style={reduced ? {} : { clipPath }}>
          <Image
            src="/images/thali-doodle.png"
            alt="Line-art interpretation of the vegetarian meal"
            fill
            sizes="90vw"
            className="object-cover"
          />
        </motion.div>
      </div>
      <p>
        Traditional recipes, comforting vegetarian meals and sweet moments worth
        remembering.
      </p>
      <a href="#menu">
        DISCOVER OUR MENU <ArrowUpRight size={20} />
      </a>
    </section>
  )
}
export function Marquee() {
  return (
    <section className={s.marquee}>
      <h2>
        SO MANY FAVOURITES.
        <br />
        ONE DELICIOUS DESTINATION.
      </h2>
      <div className={s.marqueeClip}>
        <div>
          {[0, 1].map((i) => (
            <span key={i} aria-hidden={i === 1}>
              GULAB JAMUN ✳ SAMOSA ✳ JALEBI ✳ THALI ✳{' '}
            </span>
          ))}
        </div>
        <div>
          {[0, 1].map((i) => (
            <span key={i} aria-hidden={i === 1}>
              PANEER ✳ BARFI ✳ CHAAT ✳ PARATHA ✳{' '}
            </span>
          ))}
        </div>
      </div>
      <a href="#menu">
        COME AND TRY IT! <ArrowUpRight />
      </a>
    </section>
  )
}
