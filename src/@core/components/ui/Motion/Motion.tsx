import { PropsWithChildren } from 'react'
import s from './Motion.module.scss'
import { AnimatePresence, motion } from 'motion/react'

const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 1, height: 0 },
}

interface MotionProps extends PropsWithChildren {
  isOpen: boolean
}

export default function Motion({ children, isOpen }: MotionProps) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
          className={s['motion-div']}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
