import AppleCardsCarousel from './ui/apple-cards-carousel'
import s from './Sweets.module.css'
const items = [
  {
    name: 'Gulab Jamun',
    image: 'gulab-jamun.png',
    description: 'Traditional syrup-soaked sweets.',
  },
  {
    name: 'Traditional Barfi',
    image: '1727090252.jpg',
    description: 'Classic Indian mithai for sharing.',
  },
  {
    name: 'Jalebi',
    image: '1727090471.jpg',
    description: 'A traditional sweet favourite.',
  },
  {
    name: 'Kheer',
    image: '1727090375.jpg',
    description: 'A comforting Indian dessert.',
  },
]
export default function Sweets() {
  return (
    <section id="sweets" className={s.section}>
      <div className={s.head}>
        <div>
          <span>THE MITHAI COLLECTION</span>
          <h2>Sweetness worth sharing.</h2>
        </div>
        <p>
          Discover the joy of traditional Indian sweets, from everyday treats to
          special celebrations.
        </p>
      </div>
      <AppleCardsCarousel items={items} />
    </section>
  )
}
