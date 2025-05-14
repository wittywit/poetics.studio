"use client"

import { useEffect } from "react"
import { useSession, signIn } from "next-auth/react"
import dynamic from "next/dynamic"

// Dynamically import the CMS component to avoid SSR issues
const CMS = dynamic(
  () =>
    import("decap-cms-app").then((cms) => {
      // Configure the CMS
      cms.init({
        config: {
          backend: {
            name: "github",
            repo: "yourusername/your-repo-name", // Replace with your GitHub repo
            branch: "main", // Replace with your branch name
            auth_scope: "repo", // Permission to access repo
          },
          media_folder: "public/images",
          public_folder: "/images",
          collections: [
            // Collection for designed objects
            {
              name: "designedObjects",
              label: "Designed Objects",
              folder: "content/designed-objects",
              create: true,
              slug: "{{slug}}",
              fields: [
                { label: "Title", name: "title", widget: "string" },
                { label: "Slug", name: "slug", widget: "string" },
                {
                  label: "Category",
                  name: "category",
                  widget: "select",
                  options: ["ceramic", "textile", "wood", "glass", "paper"],
                },
                { label: "Description", name: "description", widget: "text" },
                { label: "Long Description", name: "longDescription", widget: "markdown" },
                { label: "Featured Image", name: "image", widget: "image" },
                {
                  label: "Additional Images",
                  name: "additionalImages",
                  widget: "list",
                  field: { label: "Image", name: "image", widget: "image" },
                },
                {
                  label: "Details",
                  name: "details",
                  widget: "list",
                },
                {
                  label: "Related Products",
                  name: "relatedProducts",
                  widget: "list",
                  field: { label: "Product Slug", name: "slug", widget: "string" },
                },
              ],
            },
            // Add more collections for other content types
          ],
        },
      })
      return cms.default
    }),
  { ssr: false },
)

export default function AdminPage() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  useEffect(() => {
    // If the user is not authenticated, redirect to sign in
    if (!session && !loading) {
      signIn("github")
    }
  }, [session, loading])

  // Show loading state while checking authentication
  if (loading || !session) {
    return <div className="flex items-center justify-center min-h-screen">Loading CMS...</div>
  }

  // If authenticated, render the CMS
  return <CMS />
}
