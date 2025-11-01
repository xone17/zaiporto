import './globals.css'

export const metadata = {
  title: 'Filmporto',
  description: 'Converted Next.js 14 - Final'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
