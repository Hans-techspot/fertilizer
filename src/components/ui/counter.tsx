import React, { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

const Counter = ({ end, duration = 2000, suffix = '', className = '' }: CounterProps): JSX.Element => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      let start = 0
      const increment = end / (duration / 16) // 60fps
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}

export { Counter }