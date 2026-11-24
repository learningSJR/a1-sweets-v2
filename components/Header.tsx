'use client'
import {useState,useEffect} from 'react'
import Image from 'next/image'
import {Menu,X,ArrowUpRight} from 'lucide-react'
import {buttonVariants} from './ui/button'
import s from './Header.module.css'
const links=[['Home','home'],['Sweets','sweets'],['Our story','about'],['Menu','menu'],['Catering','catering'],['Gallery','gallery'],['Contact','contact']]
export default function Header(){const [open,setOpen]=useState(false);const [compact,setCompact]=useState(false);useEffect(()=>{const update=()=>setCompact(window.scrollY>80);update();window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update)},[]);return <header className={`${s.header} ${compact?s.compact:""}`}><div className={s.top}>PURE VEGETARIAN <span>•</span> TORONTO, ONTARIO</div><div className={s.bar}><a href="#home" aria-label="A1 Sweets home"><Image src="/images/logo1.png" width={112} height={74} alt="A1 Sweets"/></a><nav aria-label="Main navigation" className={s.nav}>{links.map(([n,id])=><a key={id} href={'#'+id}>{n}</a>)}</nav><a className={`${buttonVariants()} ${s.cta}`} href="#contact">Visit us <ArrowUpRight size={16}/></a><button className={s.toggle} aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>{open&&<nav id="mobile-nav" className={s.mobile} aria-label="Mobile navigation">{links.map(([n,id])=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{n}</a>)}</nav>}</header>}
