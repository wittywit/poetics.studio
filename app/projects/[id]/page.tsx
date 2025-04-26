import { Metadata } from 'next'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  return {
    title: `Project ${params.id} - Studio Poetics`,
  }
}

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' }
  ]
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <div className="container-custom py-24">
      <h1 className="heading-xl mb-8">Project {params.id}</h1>
      <div className="prose prose-lg">
        <p>This is a sample project page that will be generated statically at build time.</p>
      </div>
    </div>
  )
}
