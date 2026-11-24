'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import s from './apple-cards-carousel.module.css'
export default function AppleCardsCarousel({
  items,
}: {
  items: { name: string; image: string; description: string }[]
}) {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <>
      <div className={s.controls}>
        {[-1, 1].map((d) => (
          <button
            key={d}
            aria-label={d < 0 ? 'Previous sweets' : 'Next sweets'}
            onClick={() =>
              ref.current?.scrollBy({
                left: d * 340,
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)')
                  .matches
                  ? 'auto'
                  : 'smooth',
              })
            }
          >
            {d < 0 ? <ArrowLeft /> : <ArrowRight />}
          </button>
        ))}
      </div>
      <div ref={ref} className={s.track}>
        {items.map((item) => (
          <Dialog.Root key={item.name}>
            <Dialog.Trigger className={s.card}>
              <Image
                src={'/images/' + item.image}
                alt=""
                fill
                sizes="340px"
                className="object-cover"
              />
              <div className={s.label}>
                <small>THE MITHAI COLLECTION</small>
                <h3>{item.name}</h3>
                <ArrowUpRight />
              </div>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={s.overlay} />
              <Dialog.Content className={s.modal}>
                <Dialog.Close className={s.close} aria-label="Close">
                  <X />
                </Dialog.Close>
                <div className={s.photo}>
                  <Image
                    src={'/images/' + item.image}
                    alt={item.name}
                    fill
                    sizes="500px"
                    className="object-contain"
                  />
                </div>
                <Dialog.Title className={s.title}>{item.name}</Dialog.Title>
                <Dialog.Description>{item.description}</Dialog.Description>
                <Dialog.Close asChild>
                  <a href="#contact" className={s.link}>
                    Enquire about sweets <ArrowUpRight size={16} />
                  </a>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>
    </>
  )
}
