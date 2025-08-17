import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    // Layout
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'shrink-0',
    '[&_svg]:shrink-0',
    'hover:cursor-pointer',

    // Sizing & Spacing
    'rounded-md',
    'text-sm',
    'font-medium',

    // Text & Whitespace
    'whitespace-nowrap',

    // Transition & Animation
    'transition-all',

    // State: Disabled
    'disabled:pointer-events-none',
    'disabled:opacity-50',

    // SVG children
    '[&_svg]:pointer-events-none',
    "[&_svg:not([class*='size-'])]:size-4",

    // Focus & Outline
    'outline-none',
    'focus-visible:border-ring',
    'focus-visible:ring-ring/50',
    'focus-visible:ring-[3px]',

    // Validation
    'aria-invalid:ring-destructive/20',
    'dark:aria-invalid:ring-destructive/40',
    'aria-invalid:border-destructive',
  ],
  {
    variants: {
      variant: {
        default: [
          // Background & Text
          'bg-primary',
          'text-primary-foreground',
          // Shadow
          'shadow-xs',
          // Hover
          'hover:bg-primary/90',
          'hover:dark:bg-primary/90',
        ],
        destructive: [
          // Background & Text
          'bg-destructive',
          'text-white',
          // Shadow
          'shadow-xs',
          // Hover
          'hover:bg-destructive/90',
          // Focus
          'focus-visible:ring-destructive/20',
          // Dark mode
          'dark:focus-visible:ring-destructive/40',
          'dark:bg-destructive/60',
        ],
        outline: [
          // Border & Background
          'border',
          'bg-background',
          // Shadow
          'shadow-xs',
          // Hover
          'hover:bg-accent',
          'hover:text-accent-foreground',
          // Dark mode
          'dark:bg-input/30',
          'dark:border-input',
          'dark:hover:bg-input/50',
        ],
        secondary: [
          // Background & Text
          'bg-secondary',
          'text-secondary-foreground',
          // Shadow
          'shadow-xs',
          // Hover
          'hover:bg-secondary/80',
        ],
        ghost: [
          // Hover
          'hover:bg-accent',
          'hover:text-accent-foreground',
          // Dark mode
          'dark:hover:bg-accent/50',
        ],
        link: [
          // Text
          'text-primary',
          // Underline
          'underline-offset-4',
          'hover:underline',
        ],
      },
      size: {
        default: [
          'h-9',
          'px-4',
          'py-2',
          // If has svg
          'has-[>svg]:px-3',
        ],
        sm: [
          'h-8',
          'rounded-md',
          'gap-1.5',
          'px-3',
          // If has svg
          'has-[>svg]:px-2.5',
        ],
        lg: [
          'h-10',
          'rounded-md',
          'px-6',
          // If has svg
          'has-[>svg]:px-4',
        ],
        icon: ['size-9'],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
