'use client'

import { Suspense, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import * as gtag from '@/lib/gtag'

function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Pastikan URL terbentuk benar
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
    gtag.pageview(url)
  }, [pathname, searchParams])

  return null
}

export default function AnalyticsProvider() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTracker />
    </Suspense>
  )
}

