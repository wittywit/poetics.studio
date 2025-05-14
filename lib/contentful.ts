import { createClient } from "contentful"

// Initialize Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

/**
 * Get all designed objects from Contentful
 */
export async function getAllDesignedObjects() {
  const entries = await client.getEntries({
    content_type: "designedObject",
    order: "-sys.createdAt",
  })

  return entries.items.map((item) => {
    const fields = item.fields as any

    return {
      title: fields.title,
      slug: fields.slug,
      category: fields.category,
      description: fields.description,
      longDescription: fields.longDescription,
      image: fields.image?.fields?.file?.url ? `https:${fields.image.fields.file.url}` : null,
      images: fields.images?.map((img: any) => `https:${img.fields.file.url}`) || [],
      details: fields.details || [],
      relatedProducts: fields.relatedProducts?.map((related: any) => related.fields.slug) || [],
    }
  })
}

/**
 * Get a specific designed object by slug
 */
export async function getDesignedObjectBySlug(slug: string) {
  const entries = await client.getEntries({
    content_type: "designedObject",
    "fields.slug": slug,
    limit: 1,
  })

  if (entries.items.length === 0) return null

  const fields = entries.items[0].fields as any

  return {
    title: fields.title,
    slug: fields.slug,
    category: fields.category,
    description: fields.description,
    longDescription: fields.longDescription,
    image: fields.image?.fields?.file?.url ? `https:${fields.image.fields.file.url}` : null,
    images: fields.images?.map((img: any) => `https:${img.fields.file.url}`) || [],
    details: fields.details || [],
    relatedProducts: fields.relatedProducts?.map((related: any) => related.fields.slug) || [],
  }
}
