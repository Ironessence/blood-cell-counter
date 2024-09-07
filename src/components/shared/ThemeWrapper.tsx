'use client'
import { ThemeProvider } from 'next-themes'
import { ThemeToggle } from './ThemeToggle'

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <header className="container mx-auto p-4">
          <ThemeToggle />
        </header>
        {children}
      </div>
    </ThemeProvider>
  )
}