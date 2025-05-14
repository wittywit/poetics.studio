"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
<<<<<<< HEAD
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
=======
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if it's a mobile device
    const isMobile = window.innerWidth <= 768

    // Only set up cursor on non-mobile devices
    if (!isMobile) {
      // Handle mouse movement to update cursor position
      const handleMouseMove = (e: MouseEvent) => {
        // Update immediately without animation for better responsiveness
        setMousePosition({ x: e.clientX, y: e.clientY })
      }

      // Detect when hovering over interactive elements
      const handleMouseOver = (e: MouseEvent) => {
        if (
          (e.target as HTMLElement).tagName === "A" ||
          (e.target as HTMLElement).closest("a") ||
          (e.target as HTMLElement).tagName === "BUTTON" ||
          (e.target as HTMLElement).closest("button")
        ) {
          setIsHovering(true)
        } else {
          setIsHovering(false)
        }
      }

      window.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseover", handleMouseOver)

      // Hide default cursor
      document.body.style.cursor = "none"

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseover", handleMouseOver)
        document.body.style.cursor = "auto"
      }
    }
  }, [])

  // Animation variants for cursor states
  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      transition: {
        type: "tween",
        ease: "backOut",
        duration: 0.1, // Much faster for responsiveness
      },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      transition: {
        type: "tween",
        ease: "backOut",
        duration: 0.1, // Much faster for responsiveness
      },
    },
  }

  // Animation variants for decorative elements
  const curlyLineVariants = {
    default: {
      opacity: 0,
      scale: 0.8,
      rotate: 0,
    },
    hover: {
      opacity: 1,
      scale: 1,
      rotate: [0, 15, -15, 0],
      transition: {
        rotate: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
        },
      },
    },
  }

  return (
    <>
      {/* Only render custom cursor on non-mobile devices */}
      {typeof window !== "undefined" && window.innerWidth > 768 && (
        <>
          {/* Main cursor circle */}
          <motion.div
            ref={cursorRef}
            className="fixed top-0 left-0 z-50 pointer-events-none"
            variants={cursorVariants}
            animate={isHovering ? "hover" : "default"}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-[#fb4e4e] rounded-full opacity-30"></div>

              {/* Curly lines that animate on hover */}
              <motion.div
                className="absolute inset-0"
                variants={curlyLineVariants}
                animate={isHovering ? "hover" : "default"}
              >
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute border border-[#fb4e4e] rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                      width: `${100 + i * 10}%`,
                      height: `${100 + i * 10}%`,
                      opacity: 0.5 - i * 0.05,
                    }}
                  ></div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Small dot that follows cursor exactly */}
          <motion.div
            className="fixed top-0 left-0 z-50 w-2 h-2 bg-[#fb4e4e] rounded-full pointer-events-none"
            style={{
              x: mousePosition.x - 1,
              y: mousePosition.y - 1,
              transition: "transform 0.01s linear", // Direct style for immediate response
            }}
          ></motion.div>
        </>
      )}
>>>>>>> c74b1e7 (Initial commit)
    </>
  )
}
