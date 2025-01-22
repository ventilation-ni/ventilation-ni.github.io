'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { mergeProps } from 'react-aria';

export const button = cva(
  'px-3.5 rounded-full font-medium text-sm h-10 shadow-component-inner cursor-pointer transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-hover active:bg-primary-active',
        secondary:
          'bg-white text-primary inset-ring inset-ring-alpha-strong hover:bg-secondary-hover active:bg-secondary-active',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

type RootProps = VariantProps<typeof button> & React.ComponentPropsWithoutRef<'button'>;

export function Root({ variant, ...props }: RootProps) {
  return <button {...mergeProps({ className: button({ variant }) }, props)} />;
}
