import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ai' | 'cloud' | 'devops' | 'security'
}

const badgeVariants: Record<string, string> = {
  default:   'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
  secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
  destructive:'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
  outline:   'text-foreground',

  /* coloured project pills (optional) */
  ai:        'border-transparent bg-violet-100  text-violet-800  dark:bg-violet-900  dark:text-violet-100',
  cloud:     'border-transparent bg-teal-100    text-teal-800    dark:bg-teal-900    dark:text-teal-100',
  devops:    'border-transparent bg-orange-100  text-orange-800  dark:bg-orange-900  dark:text-orange-100',
  security:  'border-transparent bg-red-100     text-red-800     dark:bg-red-900     dark:text-red-100',
  data:      'border-transparent bg-blue-100    text-blue-800    dark:bg-blue-900    dark:text-blue-100',
  mobile:    'border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100',
  desktop:   'border-transparent bg-slate-100   text-slate-800   dark:bg-slate-900   dark:text-slate-100',
  database:  'border-transparent bg-amber-100   text-amber-800   dark:bg-amber-900   dark:text-amber-100',
  architecture:'border-transparent bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100',
}


function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div 
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        badgeVariants[variant],
        className
      )} 
      {...props} 
    />
  )
}

export { Badge }