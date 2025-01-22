import { Fraunces } from 'next/font/google';
import Image from 'next/image';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400'] });

interface RootProps {
  children: React.ReactNode;
}

export function Root({ children }: RootProps) {
  return (
    <nav className="container mx-auto flex flex-col lg:flex-row divide-y lg:divide-y-0 px-8 lg:divide-x divide-light py-20 gap-y-16">
      {children}
    </nav>
  );
}

interface CardProps {
  avatar: string;
  name: string;
  quote: string;
  location: string;
}

export function Card({ avatar, name, quote, location }: CardProps) {
  return (
    <div className="flex flex-col gap-y-10 py-3.5 lg:first-of-type:pe-10 lg:last-of-type:ps-10 items-center flex-1">
      <Image src={avatar} alt={name} width={48} height={48} />
      <h3 className={`text-primary font-semibold text-center ${fraunces.className}`}>{quote}</h3>

      <div className="flex flex-col gap-y-0.5 items-center">
        <p className="text-primary text-sm font-medium">{name}</p>
        <p className="text-secondary text-[12px]">{location}</p>
      </div>
    </div>
  );
}
