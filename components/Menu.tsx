'use client'
import {useState} from 'react'
import Image from 'next/image'
import {motion,useReducedMotion} from 'framer-motion'
import {dishes} from '../lib/menu'
import SectionHeading from './SectionHeading'
import s from './Menu.module.css'
const categories=['All','Meals','Snacks','Curries','Breads','Sweets']
export default function Menu(){const [filter,setFilter]=useState('All');const reduced=useReducedMotion();return <section id="menu" className={s.section}><SectionHeading tag="Explore the menu" title="Find your favourite." desc="A variety of pure vegetarian Indian favourites and sweets."/><div className={s.filters} aria-label="Menu categories">{categories.map(c=><button key={c} aria-pressed={filter===c} onClick={()=>setFilter(c)}>{filter===c&&<motion.span layoutId={reduced?undefined:"menu-tab"} className={s.activeTab} transition={{duration:reduced?0:.25}}/>}<span className={s.tabText}>{c}</span></button>)}</div><div className={s.grid}>{dishes.filter(d=>filter==='All'||d[3]===filter).map(([name,desc,img,cat])=><motion.article key={name} initial={reduced?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} className={s.card}><div className={s.image}><Image src={'/images/'+img} alt={name} fill sizes="(max-width:767px) 100px, 140px" className="object-contain"/></div><div><span>{cat}</span><h3>{name}</h3><p>{desc}</p></div></motion.article>)}</div></section>}
