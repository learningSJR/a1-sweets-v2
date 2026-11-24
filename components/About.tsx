'use client'
import Image from 'next/image'
import {motion,useReducedMotion} from 'framer-motion'
import {useState} from 'react'
import FoodIllustration from './FoodIllustration'
import s from './About.module.css'
const chapters=[{title:'Rooted in tradition.',text:'Experience the delicious flavours of Indian vegetarian cuisine, from satisfying meals to irresistible sweets.',image:'welcome-img.png'},{title:'Made for sharing.',text:'We bring together traditional recipes and fresh ingredients for everyday meals.',image:'gulab-jamun.png'},{title:'Every occasion matters.',text:'Celebrate special occasions with vegetarian food and traditional sweets.',image:'value.jpg'}]
export default function About(){const [active,setActive]=useState(0);const reduced=useReducedMotion();return <section id="about" className={s.section}><div className={s.copy}><div className={s.avatar}><FoodIllustration/></div><span>OUR STORY</span>{chapters.map((c,i)=><motion.article key={c.title} className={s.chapter} onViewportEnter={()=>setActive(i)} viewport={{amount:.65}}><h2>{c.title}</h2><p>{c.text}</p><div className={s.mobilePhoto}><Image src={'/images/'+c.image} alt="A1 Sweets food" fill sizes="90vw" className="object-contain"/></div></motion.article>)}</div><div className={s.art}><motion.div key={active} initial={reduced?false:{opacity:0}} animate={{opacity:1}} className={s.picture}><Image src={'/images/'+chapters[active].image} alt="A1 Sweets food" fill sizes="45vw" className="object-contain"/></motion.div></div></section>}
