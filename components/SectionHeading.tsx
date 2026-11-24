import s from './SectionHeading.module.css'
export default function SectionHeading({tag,title,desc}:{tag:string;title:string;desc?:string}){return <div className={s.heading}><span>{tag}</span><h2>{title}</h2>{desc&&<p>{desc}</p>}</div>}
