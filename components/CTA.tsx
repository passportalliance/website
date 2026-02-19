import Link from 'next/link'
import { ReactNode } from 'react'

interface CTAProps {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary' | 'cta'
  className?: string
  external?: boolean
}

export default function CTA({ children, href, variant = 'primary', className = '', external = false }: CTAProps) {
  const baseClass = 'btn'
  const variantClass = variant === 'primary' ? 'btn-primary' : variant === 'cta' ? 'btn-cta' : 'btn-secondary'

  const classNames = `${baseClass} ${variantClass} ${className}`

  if (external) {
    return (
      <a href={href} className={classNames} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  )
}
