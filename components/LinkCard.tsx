import Link from 'next/link'
import { ReactNode } from 'react'

interface LinkCardProps {
  title: string
  description: string
  href: string
  external?: boolean
  icon?: ReactNode
}

export default function LinkCard({ title, description, href, external = false, icon }: LinkCardProps) {
  const content = (
    <div className="p-6 bg-pa-bg-secondary border border-pa-border rounded-lg hover:border-pa-blue transition-colors group">
      <div className="flex items-start gap-4">
        {icon && <div className="text-pa-blue">{icon}</div>}
        <div className="flex-1">
          <h3 className="font-semibold text-pa-light mb-2 group-hover:text-pa-blue transition-colors">
            {title}
          </h3>
          <p className="text-sm text-pa-light-muted">{description}</p>
        </div>
        {external && (
          <svg
            className="w-4 h-4 text-pa-light-muted group-hover:text-pa-blue transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        )}
      </div>
    </div>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className="block">
      {content}
    </Link>
  )
}
