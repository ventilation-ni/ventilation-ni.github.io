import { clsx } from 'clsx';

interface RootProps extends React.ComponentPropsWithoutRef<'section'> {
  children: React.ReactNode;
}

export function Root({ children, ...props }: RootProps) {
  return (
    <section className="container mx-auto flex min-h-[332px] items-center px-8" {...props}>
      <div className="flex w-full flex-col gap-y-4">{children}</div>
    </section>
  );
}

interface LabelProps {
  children: React.ReactNode;
  color: 'lime' | 'purple';
}

export function Label({ color, children }: LabelProps) {
  return (
    <p
      className={clsx('text-sm font-medium', {
        'text-lime-500': color === 'lime',
        'text-brand': color === 'purple',
      })}
    >
      {children}
    </p>
  );
}

interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return <h2 className="text-primary text-[40px] font-semibold">{children}</h2>;
}

interface DescriptionProps {
  children: React.ReactNode;
}

export function Description({ children }: DescriptionProps) {
  return <p className="text-secondary w-full text-base text-pretty lg:w-1/2">{children}</p>;
}
