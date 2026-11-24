'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import SectionHeading from './SectionHeading'
import s from './Gallery.module.css'
const images = [
  '1727090252.jpg',
  '1727090471.jpg',
  '1727090375.jpg',
  'thali.jpg',
  'menu_rest_1_3.png',
  'sweets.jpg',
]
export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null)
  useEffect(() => {
    if (!selected) return
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [selected])
  return (
    <section id="gallery" className={s.section}>
      <SectionHeading tag="Gallery" title="A feast for the eyes." />
      <div className={s.grid}>
        {images.map((img, i) => (
          <button
            key={img}
            className={s.tile}
            aria-label={`View food photo ${i + 1}`}
            onClick={() => setSelected(img)}
          >
            <Image
              src={'/images/' + img}
              alt={`A1 Sweets food selection ${i + 1}`}
              fill
              sizes="(max-width:767px) 50vw, 33vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>
      {selected && (
        <div
          className={s.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Food photo"
          onClick={() => setSelected(null)}
        >
          <button
            autoFocus
            aria-label="Close photo"
            className={s.close}
            onClick={() => setSelected(null)}
          >
            <X />
          </button>
          <div className={s.large} onClick={(e) => e.stopPropagation()}>
            <Image
              src={'/images/' + selected}
              alt="Selected A1 Sweets food"
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
