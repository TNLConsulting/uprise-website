'use client'
import dynamic from 'next/dynamic'
import { QueryClientWrapper } from '@/components/QueryClientWrapper'
import { TooltipProvider } from '@/components/ui/tooltip'
const Toaster = dynamic(() => import('@/components/ui/toaster').then(m => ({ default: m.Toaster })), { ssr: false })
const Sonner = dynamic(() => import('@/components/ui/sonner').then(m => ({ default: m.Toaster })), { ssr: false })
export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientWrapper>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </QueryClientWrapper>
  )
}
