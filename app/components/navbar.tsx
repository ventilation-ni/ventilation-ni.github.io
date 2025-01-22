import Link from 'next/link';

interface RootProps extends React.ComponentPropsWithoutRef<'nav'> {
  children: React.ReactNode;
}

export function Root({ children, ...props }: RootProps) {
  return (
    <nav className="h-16 w-full px-8" {...props}>
      <div className="container mx-auto flex h-full items-center justify-end gap-x-2">
        {children}
      </div>
    </nav>
  );
}

interface ItemProps {
  href: string;
  children: React.ReactNode;
}

export function Item({ href, children }: ItemProps) {
  return (
    <Link
      href={href}
      className="text-secondary hover:bg-ghost-hover active:bg-ghost-active inline-flex h-10 items-center justify-center rounded-md px-4 text-[13px] font-medium"
    >
      {children}
    </Link>
  );
}
