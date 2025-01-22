import clsx from 'clsx';

interface RootProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  description: string;
  variant: 'success' | 'error';
}

export function Root({ title, description, variant, ...props }: RootProps) {
  return (
    <div
      className={clsx(
        'inset-ring-alpha-strong border-alpha-strong shadow-component-inner flex items-center gap-x-3 rounded-lg px-3 py-2.5 inset-ring',
        {
          'bg-semantic-positive-50': variant === 'success',
          'bg-semantic-destructive-50': variant === 'error',
        },
      )}
      {...props}
    >
      <div
        className={clsx('h-full min-h-5 w-1 flex-none rounded-full', {
          'bg-semantic-positive-500': variant === 'success',
          'bg-semantic-destructive-500': variant === 'error',
        })}
      ></div>
      <p className="text-secondary flex-1 text-[13px]">
        <span className="text-primary font-medium">{title}: </span>
        {description}
      </p>
    </div>
  );
}
