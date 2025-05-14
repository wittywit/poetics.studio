"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Plus, Minus } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

// This would typically come from a database or CMS
const products = {
  "ceramic-vessel-3": {
    title: "Ceramic Vessel No. 3",
    price: "8,500",
    description: "Hand-crafted ceramic vessel with subtle texture variations.",
    longDescription:
      "This hand-crafted ceramic vessel is the result of our material exploration into subtle texture variations. Each piece is unique, with slight variations in texture and finish that catch and reflect light in different ways throughout the day. The minimalist form allows the material qualities to take center stage.",
    details: [
      "Dimensions: 25cm x 15cm x 15cm",
      "Material: Stoneware clay with matte glaze",
      "Color: Off-white",
      "Care: Wipe clean with a damp cloth",
      "Handmade in our Bangalore studio",
    ],
    images: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    relatedProducts: ["paper-light-shade", "linen-wall-hanging", "glass-carafe"],
  },
  "paper-light-shade": {
    title: "Paper Light Shade",
    price: "5,200",
    description: "Handmade paper light shade with folded geometric pattern.",
    longDescription:
      "Our paper light shade is the culmination of extensive experimentation with folding techniques and light diffusion. The geometric pattern creates a play of light and shadow that transforms any space. Each shade is meticulously hand-folded from high-quality, acid-free paper.",
    details: [
      "Dimensions: 40cm diameter x 30cm height",
      "Material: Acid-free paper",
      "Color: Natural white",
      "Includes: Ceiling fixture and 2m cord",
      "Handmade in our Bangalore studio",
    ],
    images: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    relatedProducts: ["ceramic-vessel-3", "wooden-tray-set", "glass-carafe"],
  },
  // Add more products as needed
}

// Related products data
const relatedProductsData = {
  "ceramic-vessel-3": {
    title: "Ceramic Vessel No. 3",
    price: "8,500",
    image: "/placeholder.svg?height=800&width=800",
  },
  "paper-light-shade": {
    title: "Paper Light Shade",
    price: "5,200",
    image: "/placeholder.svg?height=800&width=800",
  },
  "linen-wall-hanging": {
    title: "Linen Wall Hanging",
    price: "7,800",
    image: "/placeholder.svg?height=800&width=800",
  },
  "wooden-tray-set": {
    title: "Wooden Tray Set",
    price: "6,200",
    image: "/placeholder.svg?height=800&width=800",
  },
  "glass-carafe": {
    title: "Glass Carafe",
    price: "4,800",
    image: "/placeholder.svg?height=800&width=800",
  },
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = products[params.slug as keyof typeof products]

  if (!product) {
    return <div>Product not found</div>
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link href="/products" className="inline-flex items-center gap-2 mb-8 hover:text-[hsl(var(--accent))]">
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative aspect-square">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <motion.div
                key={index}
                className={`relative aspect-square cursor-pointer ${selectedImage === index ? "ring-2 ring-[hsl(var(--accent))]" : ""}`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.title} - view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-4xl font-normal mb-2">{product.title}</h1>
          <div className="accent-bar"></div>
          <p className="text-2xl text-[hsl(var(--accent))] mb-6">₹{product.price}</p>
          <p className="text-lg mb-8">{product.longDescription}</p>

          <div className="mb-8">
            <h3 className="text-xl mb-4">Details</h3>
            <ul className="space-y-2">
              {product.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[hsl(var(--accent))] mr-2">—</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border border-gray-300">
              <button
                onClick={decrementQuantity}
                className="px-3 py-2 hover:bg-gray-100"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="px-3 py-2 hover:bg-gray-100"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>

            <motion.button
              className="px-6 py-3 bg-black text-white hover:bg-[hsl(var(--accent))] transition-colors flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Add to Cart
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-3xl mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.relatedProducts.map((slug, index) => {
            const relatedProduct = relatedProductsData[slug as keyof typeof relatedProductsData]
            return (
              <motion.div key={index} className="bento-item" whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <div className="relative aspect-square">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-normal mb-2">{relatedProduct.title}</h3>
                  <p className="text-[hsl(var(--accent))] mb-4">₹{relatedProduct.price}</p>
                  <Link href={`/products/${slug}`} className="inline-block text-sm hover:text-[hsl(var(--accent))]">
                    View Product
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
