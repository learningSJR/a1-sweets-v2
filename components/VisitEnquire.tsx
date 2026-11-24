import {MapPin,Phone,Mail,ArrowUpRight} from 'lucide-react'
import SectionHeading from './SectionHeading'
import {buttonVariants} from './ui/button'
import s from './VisitEnquire.module.css'
export default function VisitEnquire(){return <section id="contact" className={s.section}><SectionHeading tag="Visit or enquire" title="Come hungry. Leave happy."/><div className={s.grid}><div><MapPin/><h3>Visit us</h3><p>3300 McNicoll Ave, Unit 18, Toronto, Ontario</p></div><div><Phone/><h3>Call us</h3><a href="tel:+14162999424">+1 (416) 299-9424</a></div><div><Mail/><h3>Enquire</h3><a href="mailto:info@a1sweets.com">info@a1sweets.com</a></div></div><a className={buttonVariants()} href="https://www.a1sweets.com/">Official website <ArrowUpRight size={16}/></a></section>}
