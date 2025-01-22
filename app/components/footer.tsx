import { RiFacebookFill } from '@remixicon/react';

export function Root() {
  return (
    <div className="bg-secondary-hover">
      <div className="container mx-auto flex items-center justify-between px-10 py-6">
        <span className="text-secondary text-[13px]">
          © {new Date().getFullYear()} Hunter Home Ventilation. All rights reserved.
        </span>

        <div className="flex gap-x-4">
          <a
            href="https://www.facebook.com/hunterhomeventilation"
            target="_blank"
            className="text-secondary hover:text-primary"
            aria-label="Facebook"
          >
            <RiFacebookFill className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
