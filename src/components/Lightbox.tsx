import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'

type Props = {
  title: string
  images: readonly string[]
  open: boolean
  onClose: () => void
}

// Fullscreen screenshot gallery: arrows/keys/swipe to move, Esc or backdrop to close.
export default function Lightbox({ title, images, open, onClose }: Props) {
  const [index, setIndex] = useState(0)
  const closeRef = useRef<HTMLButtonElement>(null)
  const count = images.length

  const go = useCallback((step: number) => setIndex((i) => (i + step + count) % count), [count])

  useEffect(() => {
    if (!open) return
    setIndex(0)
    const trigger = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      trigger?.focus()
    }
  }, [open, onClose, go])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshots`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            // close only when the empty dark area is clicked, not the image or controls
            const t = e.target as HTMLElement
            if (t === e.currentTarget || t.classList.contains('lightbox-stage')) onClose()
          }}
        >
          <div className="lightbox-bar" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox-title">{title}</span>
            <span className="lightbox-count">
              {index + 1} / {count}
            </span>
            <button ref={closeRef} className="lightbox-btn" aria-label="Close gallery" onClick={onClose}>
              <FiX />
            </button>
          </div>

          <div className="lightbox-stage">
            {count > 1 && (
              <button className="lightbox-btn lightbox-prev" aria-label="Previous screenshot" onClick={() => go(-1)}>
                <FiChevronLeft />
              </button>
            )}
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={images[index]}
                className="lightbox-img"
                draggable={false}
                src={images[index]}
                alt={`${title} — screenshot ${index + 1} of ${count}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.2 }}
                drag={count > 1 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(1)
                  else if (info.offset.x > 60) go(-1)
                }}
              />
            </AnimatePresence>
            {count > 1 && (
              <button className="lightbox-btn lightbox-next" aria-label="Next screenshot" onClick={() => go(1)}>
                <FiChevronRight />
              </button>
            )}
          </div>

          {count > 1 && (
            <div className="lightbox-dots" onClick={(e) => e.stopPropagation()}>
              {images.map((src, i) => (
                <button
                  key={src}
                  className={`lightbox-dot ${i === index ? 'active' : ''}`}
                  aria-label={`Show screenshot ${i + 1}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
