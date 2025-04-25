"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cursorOutlineRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      if (!isVisible) {
        setIsVisible(true)
      }
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleLinkHoverStart = () => {
      setIsHovering(true)
    }

    const handleLinkHoverEnd = () => {
      setIsHovering(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    const hoverElements = document.querySelectorAll("a, button, .hover-trigger")

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", handleLinkHoverStart)
      element.addEventListener("mouseleave", handleLinkHoverEnd)
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)

      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleLinkHoverStart)
        element.removeEventListener("mouseleave", handleLinkHoverEnd)
      })
    }
  }, [isVisible])

  // Add event listeners for new elements after page changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const hoverElements = document.querySelectorAll("a, button, .hover-trigger")

          hoverElements.forEach((element) => {
            element.addEventListener("mouseenter", () => setIsHovering(true))
            element.addEventListener("mouseleave", () => setIsHovering(false))
          })
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <motion.div
        ref={cursorDotRef}
        className="cursor-dot"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <motion.div
        ref={cursorOutlineRef}
        className="cursor-outline"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          rotate: isHovering ? [0, -10, 10, -10, 10, 0] : 0,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          rotate: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
      />
    </>
  )
}
