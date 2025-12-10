'use client'

import { useEffect, useState } from 'react'

interface Ripple {
  x: number
  y: number
  id: number
}

export function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMoving(true)

      clearTimeout(moveTimeout)
      moveTimeout = setTimeout(() => {
        setIsMoving(false)
      }, 100)
    }

    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      }
      setRipples(prev => [...prev, newRipple])
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id))
      }, 1000)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('click', handleClick)
      clearTimeout(moveTimeout)
    }
  }, [])

  return (
    <>
      {/* Main cursor - magnetic dot */}
      <div
        className="pointer-events-none fixed z-50 transition-transform duration-150 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          {/* Outer ring */}
          <div 
            className={`absolute inset-0 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/40 transition-all duration-200 ${
              isMoving ? 'scale-150 opacity-50' : 'scale-100 opacity-100'
            }`} 
          />
          
          {/* Middle ring */}
          <div 
            className={`absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60 transition-all duration-150 ${
              isMoving ? 'scale-125' : 'scale-100'
            }`} 
          />
          
          {/* Center dot with glow */}
          <div className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 animate-ping opacity-75" />
          </div>
        </div>
      </div>

      {/* Click ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="pointer-events-none fixed z-40"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-0 h-0 rounded-full border-2 border-primary/60 animate-ripple" />
            <div className="absolute w-0 h-0 rounded-full border border-purple-500/40 animate-ripple" style={{ animationDelay: '0.1s' }} />
          </div>
        </div>
      ))}

      {/* Trailing glow effect */}
      <div
        className="pointer-events-none fixed z-30 transition-all duration-500 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          opacity: isMoving ? 0.6 : 0.3,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl" />
        </div>
      </div>

      {/* Ambient light */}
      <div
        className="pointer-events-none fixed z-20 transition-all duration-700 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400/10 via-blue-400/10 to-purple-400/10 blur-3xl" />
        </div>
      </div>
    </>
  )
}
