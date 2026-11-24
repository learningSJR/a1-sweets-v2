'use client'
import {useState} from 'react'
import {ArrowLeft,ArrowRight,Quote,UserRound} from 'lucide-react'
import {reviews} from '../lib/reviews'
import s from './Testimonials.module.css'
export default function Testimonials(){const [i,setI]=useState(0);return <section className={s.section} aria-label="Customer testimonials"><div className={s.inner}><div><span>FROM OUR CUSTOMERS</span><h2>Good food.<br/>Kind words.</h2><div className={s.controls}><button aria-label="Previous review" onClick={()=>setI(v=>(v+reviews.length-1)%reviews.length)}><ArrowLeft/></button><button aria-label="Next review" onClick={()=>setI(v=>(v+1)%reviews.length)}><ArrowRight/></button></div></div><div className={s.review} aria-live="polite"><Quote size={42}/><blockquote>“{reviews[i].quote}”</blockquote><p><UserRound aria-hidden="true"/>{reviews[i].name}</p></div></div></section>}
