export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Kirim event page view
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && GA_ID) {
    window.gtag('config', GA_ID, {
      page_path: url,
    })
  }
}

// Kirim event custom (misal klik tombol)
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && GA_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
