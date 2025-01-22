import { RiArrowDownSLine } from '@remixicon/react';

interface RootProps extends React.ComponentPropsWithRef<'form'> {
  children: React.ReactNode;
}

export function Root(props: RootProps) {
  return <form className="flex flex-1 flex-col gap-y-6" {...props} />;
}

interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  isRequired?: boolean;
  children: React.ReactNode;
}

export function Label({ isRequired, children, ...props }: LabelProps) {
  return (
    <label className="text-primary text-[13px] font-medium" {...props}>
      {children}
      {isRequired && <span className="text-destructive ml-1">*</span>}
    </label>
  );
}

interface ErrorProps {
  children: React.ReactNode;
}

export function Error({ children }: ErrorProps) {
  return <p className="text-destructive text-[13px] first-letter:uppercase">{children}</p>;
}

interface FieldProps {
  children: React.ReactNode;
}

export function Field({ children }: FieldProps) {
  return <div className="flex w-full flex-col gap-y-2">{children}</div>;
}

type InputProps = React.ComponentPropsWithoutRef<'input'>;

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="border-alpha-strong shadow-component-inner placeholder:text-tertiary text-primary focus:shadow-focus data-[error=true]:shadow-destructive h-10 rounded-lg border bg-white px-3 text-sm outline-none focus:border-transparent data-[error=true]:border-transparent"
    />
  );
}

type SelectProps = React.ComponentPropsWithoutRef<'select'>;

export function Select(props: SelectProps) {
  return (
    <div className="relative">
      <select
        {...props}
        className="border-alpha-strong shadow-component-inner placeholder:text-tertiary text-primary focus:shadow-focus data-[error=true]:shadow-destructive h-10 w-full appearance-none rounded-lg border bg-white px-3 text-sm outline-none focus:border-transparent data-[error=true]:border-transparent"
      />

      <RiArrowDownSLine className="text-tertiary pointer-events-none absolute top-2.5 right-2 size-5" />
    </div>
  );
}

type TextareaProps = React.ComponentPropsWithoutRef<'textarea'>;

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      {...props}
      className="border-alpha-strong shadow-component-inner placeholder:text-tertiary text-primary focus:shadow-focus data-[error=true]:shadow-destructive rounded-lg border bg-white px-3 py-2.5 text-sm outline-none focus:border-transparent data-[error=true]:border-transparent"
    />
  );
}
