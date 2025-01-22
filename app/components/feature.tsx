/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface ListProps {
  children: React.ReactNode;
}

export function List({ children }: ListProps) {
  return (
    <section className="container mx-auto pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">{children}</div>
    </section>
  );
}

interface CardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <div className="border-light -m-[0.5px] flex flex-col gap-y-3 border p-10">
      {React.cloneElement(icon, { className: 'size-[22px] text-lime-500' } as any)}
      <h3 className="text-primary text-base font-semibold">{title}</h3>
      <p className="text-secondary text-sm">{description}</p>
    </div>
  );
}
