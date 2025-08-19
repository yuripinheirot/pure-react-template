import { type PropsWithChildren } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

export const typography = cva('font-sans', {
  variants: {
    variant: {
      h1: 'text-[36px] max-md:text-[24px]',
      h2: 'text-[32px] max-md:text-[20px]',
      h3: 'text-[24px] max-md:text-[16px]',
      h4: 'text-[20px] max-md:text-[14px]',
      body1: 'text-[16px] max-md:text-[14px]',
      body2: 'text-[14px] max-md:text-[12px]',
      body3: 'text-[12px] max-md:text-[10px]',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
    color: {
      default: 'text-foreground',
      error: 'text-destructive',
      success: 'text-primary',
      disabled: 'text-gray-400',
      primary: 'text-primary',
      black: 'text-black',
      white: 'text-white',
    },
  },
  defaultVariants: {
    variant: 'body1',
    weight: 'normal',
    color: 'default',
  },
})

export type TypographyProps = PropsWithChildren<
  VariantProps<typeof typography> & {
    children?: React.ReactNode
    className?: string
    error?: boolean
    asChild?: boolean
  }
>

export const Typography = (props: TypographyProps) => {
  const { children, className, error, asChild, ...variants } = props
  const Comp = asChild ? Slot : 'p'

  return (
    <Comp
      className={cn(typography(variants), className, error && 'line-through')}
    >
      {children}
    </Comp>
  )
}
