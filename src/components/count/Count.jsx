'use client'
import React, { useEffect, useRef, useState } from 'react'

function Count({ num }) {
  const [isVisible, setIsVisible] = useState(false)
  const [number, setNumber] = useState(0)
  const numberRef = useRef()

  useEffect(() => {
    const onScroll = () => {
      if (numberRef.current) {
        const rect = numberRef.current?.getBoundingClientRect()
        const viewHeight = Math.max(
          numberRef.current.clientHeight || 0,
          window.innerHeight || 0,
        )
        if (rect.top <= viewHeight && rect.bottom >= 0) {
          setIsVisible(true)
        }
      }
    }

    const handleInitialVisible = () => {
      if (numberRef.current) {
        const rect = numberRef.current.getBoundingClientRect();
        const viewHeight = Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        );
        if (rect.top <= viewHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', onScroll)
    handleInitialVisible();
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    let setTimeOutId = null
    if (isVisible) {
      setTimeOutId = setTimeout(() => {
        if (number < parseInt(num)) {
          setNumber((pre) => pre + 1)
        }
      }, 1000 / parseInt(num))
    } else {
      setNumber(0)
    }
    return () => {
      setTimeOutId && clearTimeout(setTimeOutId)
    }
  }, [number, isVisible, num])
  return (

    <span
      ref={numberRef}
    >
      {number < 10 ? `000${number}` : number}
    </span>
  )
}

export default Count