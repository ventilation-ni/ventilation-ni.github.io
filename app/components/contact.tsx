import { clsx } from 'clsx';

interface RootProps extends React.ComponentPropsWithoutRef<'section'> {
  children: React.ReactNode;
}

export function Root({ children }: RootProps) {
  return <div className="flex flex-col gap-y-4 flex-1">{children}</div>;
}

interface LabelProps {
  children: React.ReactNode;
  color: 'lime' | 'purple';
}

export function Label({ color, children }: LabelProps) {
  return (
    <p
      className={clsx(' text-sm font-medium', {
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
  return <h2 className="text-[40px] font-semibold text-primary">{children}</h2>;
}

interface DescriptionProps {
  children: React.ReactNode;
}

export function Description({ children }: DescriptionProps) {
  return <p className="text-secondary text-base w-full text-pretty lg:pe-24">{children}</p>;
}
