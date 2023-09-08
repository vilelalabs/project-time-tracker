export const metadata = {
  title: 'Project Timer Tracker | Login',
  description: 'Login to Project Timer Tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body>{children}</body>
    </html>
  )
}
