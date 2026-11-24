import {
  Candy,
  Utensils,
  ShoppingBag,
  ChefHat,
  ArrowUpRight,
} from 'lucide-react'
import s from './FeatureStrip.module.css'
const services = [
  {
    title: 'Traditional sweets',
    desc: 'A taste of celebration',
    href: '#sweets',
    Icon: Candy,
  },
  {
    title: 'Dine-in',
    desc: 'Enjoy a vegetarian meal',
    href: '#menu',
    Icon: Utensils,
  },
  {
    title: 'Takeout',
    desc: 'Your favourites to go',
    href: '#contact',
    Icon: ShoppingBag,
  },
  {
    title: 'Catering',
    desc: 'Food for your occasion',
    href: '#catering',
    Icon: ChefHat,
  },
]
export default function FeatureStrip() {
  return (
    <nav aria-label="Our services" className={s.strip}>
      {services.map(({ title, desc, href, Icon }) => (
        <a key={title} href={href}>
          <Icon size={27} strokeWidth={1.5} />
          <div>
            <strong>{title}</strong>
            <small>{desc}</small>
          </div>
          <ArrowUpRight size={15} />
        </a>
      ))}
    </nav>
  )
}
