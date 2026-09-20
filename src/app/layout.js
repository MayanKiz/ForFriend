import "./globals.css"

export const metadata = {
  title: "Interactive Memory Celebration",
  description: "An animated New Year and friendship celebration experience that combines a memory game with guided visual storytelling.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black`}>{children}</body>
    </html>
  )
}
