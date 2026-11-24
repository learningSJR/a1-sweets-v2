import Image from 'next/image'
import SectionHeading from './SectionHeading'
import s from './Specials.module.css'
const items = [
  ['Vegetarian Thali', 'thali.jpg'],
  ['Channa Bhatura', 'menu_rest_1_2.png'],
  ['Golden samosas', 'samosa.jpg'],
]
export default function Specials() {
  return (
    <section id="specials" className={s.section}>
      <div className={s.inner}>
        <SectionHeading
          tag="Signature favourites"
          title="The vegetarian table."
        />
        <div className={s.grid}>
          {items.map(([name, img], i) => (
            <a href="#menu" key={name} className={s.card}>
              <div className={s.photo}>
                <Image
                  src={'/images/' + img}
                  alt={name}
                  fill
                  sizes="(max-width:767px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className={s.caption}>
                <span>0{i + 1} / A1 FAVOURITES</span>
                <h3>{name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
