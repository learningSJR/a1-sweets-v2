import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
export const buttonVariants=cva('inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 disabled:opacity-50',{variants:{variant:{default:'bg-red text-white hover:bg-navy',outline:'border border-navy text-navy hover:bg-navy hover:text-white',light:'bg-yellow text-navy hover:bg-white'}},defaultVariants:{variant:'default'}})
export const Button=React.forwardRef<HTMLButtonElement,React.ButtonHTMLAttributes<HTMLButtonElement>&VariantProps<typeof buttonVariants>>(({className,variant,...props},ref)=><button ref={ref} className={cn(buttonVariants({variant}),className)} {...props}/>);Button.displayName='Button'
