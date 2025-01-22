import { RiCheckFill } from '@remixicon/react';
import clsx from 'clsx';

interface RootProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

export function Root({ children, ...props }: RootProps) {
  return (
    <div className="flex flex-col gap-y-12 px-8" {...props}>
      <div className="container mx-auto grid grid-cols-1 justify-center gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-16">
        {children}
      </div>
      <p className="text-secondary text-center text-xs">
        *Unit comes with 5 year warranty, which is extended to 7 years if filters are replaced after
        5 years.
      </p>
    </div>
  );
}

interface CardProps {
  product: string;
  description: string;
  prominent?: boolean;
  price: number;
  children: React.ReactNode;
}

export function Card({ product, description, prominent, price, children }: CardProps) {
  return (
    <div
      className={clsx(
        'flex h-[600px] flex-1 flex-col items-center gap-y-4 rounded-2xl p-8 ring shadow-sm ring-black/5',
        {
          'bg-white': !prominent,
          'bg-brand text-white': prominent,
        },
      )}
    >
      <div className="flex w-full flex-1 flex-col gap-y-6">
        <div className="flex flex-col gap-y-2">
          <h3
            className={clsx('text-xl font-semibold', {
              'text-primary': !prominent,
              'text-white': prominent,
            })}
          >
            {product}
          </h3>
          <p
            className={clsx('text-sm', {
              'text-secondary': !prominent,
              'text-white/90': prominent,
            })}
          >
            {description}
          </p>
        </div>

        <ul className="flex- flex flex-col">{children}</ul>
      </div>

      <div className="flex w-full flex-col gap-y-6">
        <div className="flex items-baseline gap-x-1">
          <p
            className={clsx('text-[40px] font-semibold', {
              'text-primary': !prominent,
              'text-white': prominent,
            })}
          >
            £{price}
          </p>
          <span
            className={clsx('text-[13px]', {
              'text-secondary': !prominent,
              'text-white/90': prominent,
            })}
          >
            per unit
          </span>
        </div>

        {/* <Button.Root variant={prominent ? 'secondary' : 'primary'} className="w-full">
          Buy now
        </Button.Root> */}
      </div>
    </div>
  );
}

interface Feature {
  children: React.ReactNode;
}

export function Feature({ children }: Feature) {
  return (
    <li className="flex h-11 items-center gap-x-2">
      <RiCheckFill className="size-5" />
      {children}
    </li>
  );
}
