import fs from "fs"
import path from "path"

/**
 * Get all designed objects from the JSON data file
 */
export function getAllDesignedObjects() {
  const filePath = path.join(process.cwd(), "content", "designed-objects.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  const data = JSON.parse(fileContents)

  return data.objects
}

/**
 * Get a specific designed object by slug
 */
export function getDesignedObjectBySlug(slug: string) {
  const objects = getAllDesignedObjects()
  return objects.find((object) => object.slug === slug) || null
}
