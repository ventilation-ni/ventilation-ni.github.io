import Image from 'next/image';
import * as Button from './button';

interface RootProps {
  children: React.ReactNode;
  onRequestSurvey?: () => void;
  onGetDrimaster?: () => void;
}

export function Root({ children, onRequestSurvey, onGetDrimaster }: RootProps) {
  return (
    <div className="container mx-auto flex h-[739px] flex-col items-center justify-center px-8 text-center">
      <Image
        alt="background"
        src="./background.png"
        fill
        className="absolute -z-10 max-h-[793px] object-cover"
      />

      {children}

      <div className="mb-12 flex flex-col gap-y-6 md:mb-0">
        <div className="flex gap-x-2">
          <Button.Root variant="primary" onClick={onGetDrimaster}>
            Get a Drimaster
          </Button.Root>
          <Button.Root variant="secondary" onClick={onRequestSurvey}>
            Request survey
          </Button.Root>
        </div>

        <p className="text-secondary text-[13px]">Surveys are free, with no obligation</p>
      </div>
    </div>
  );
}

export function Title({ children }: React.PropsWithChildren) {
  return <h1 className="text-primary mb-4 text-5xl font-semibold">{children}</h1>;
}

export function Description({ children }: React.PropsWithChildren) {
  return <p className="text-secondary mb-8 max-w-lg text-base">{children}</p>;
}
