import React, { useEffect, useState } from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  // Generate a random position within the screen
  const getRandomPosition = () => ({
    x: Math.random() * (window.innerWidth - 300),
    y: Math.random() * (window.innerHeight - 300),
  })

  const [state, setState] = useState({
    position: getRandomPosition(),
    direction: { dx: -2, dy: -2 },
    color: 'yellow',
    rotation: 0,
  })

  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const colors = ['yellow', 'red', 'green', 'blue', 'purple']
    const speed = 0.7

    const moveElement = () => {
      if (!isPaused) {
        setState((prev) => {
          const { position, direction } = prev
          const newX = position.x + direction.dx * speed
          const newY = position.y + direction.dy * speed

          let newDx = direction.dx
          let newDy = direction.dy
          let newColor = prev.color

          // Detect edges
          if (newX <= 0 || newX >= window.innerWidth - 300) {
            newDx = -direction.dx
            newColor = colors[Math.floor(Math.random() * colors.length)]
          }
          if (newY <= 0 || newY >= window.innerHeight - 300) {
            newDy = -direction.dy
            newColor = colors[Math.floor(Math.random() * colors.length)]
          }

          return {
            ...prev,
            position: { x: newX, y: newY },
            direction: { dx: newDx, dy: newDy },
            color: newColor,
            rotation: (prev.rotation + 1) % 360,
          }
        })
      }
    }

    const interval = setInterval(moveElement, 30)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div
      style={{
        position: 'absolute',
        top: state.position.y,
        left: state.position.x,
        width: '300px',
        height: '300px',
        backgroundColor: state.color,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        transform: `rotate(${state.rotation}deg)`,
        cursor: isPaused ? 'pointer' : 'grab',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={() => setIsPaused(true)} // Pause movement and rotation on hover
      onMouseLeave={() => setIsPaused(false)} // Resume movement and rotation on leave
    >
      <section className="flex flex-col justify-center items-center h-96 text-center">
        <FaExclamationTriangle className="text-white text-8xl mb-4" />
        <h1 className="text-3xl font-bold mb-4 text-white">404 Not Found</h1>
        <p className="text-xl mb-5 text-white">This page does not exist</p>
        <Link
          to="/"
          className="text-white bg-indigo-700 hover:bg-indigo-900 rounded px-3 py-2 mt-4"
        >
          GO BACK
        </Link>
      </section>
    </div>
  )
}

export default NotFoundPage
