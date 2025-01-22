import React from 'react';

interface RootProps extends React.ComponentPropsWithoutRef<'a'> {
  children: React.ReactNode;
}

export function Root(props: RootProps) {
  return (
    <a
      className="shadow-component-inner text-primary inset-ring-alpha-strong hover:bg-secondary-hover active:bg-secondary-active focus:shadow-focus inline-flex h-8 cursor-pointer items-center rounded-full bg-white ps-2.5 pe-3 text-sm font-medium whitespace-nowrap inset-ring transition-colors outline-none focus:inset-ring-0"
      {...props}
    />
  );
}

interface IconProps {
  icon: React.ReactElement;
}

export function Icon({ icon }: IconProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return React.cloneElement(icon, { className: 'size-4 text-secondary mr-2' } as any);
}
