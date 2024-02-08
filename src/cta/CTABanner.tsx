import type { ReactNode } from 'react';

import Contact from '@/contact/Contact';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-md bg-primary-100 p-4 text-center">
    <div className="text-4xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-2xl text-primary-500">{props.subtitle}</div>
    </div>
    <Contact button={props.button} />
  </div>
);

export { CTABanner };
