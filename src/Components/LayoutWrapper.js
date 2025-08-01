'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import Navbar from './Navbar'
import Footer from './Footer'

export default function LayoutWrapper({ children }) {
  const pathname = usePathname()

  const noLayoutRoutes = ['/Connect', '/fullscreen']
  const showLayout = !noLayoutRoutes.includes(pathname)

  return (
    <>
      {showLayout && <Navbar />}
      {children}
      {showLayout && <Footer />}

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  )
}
