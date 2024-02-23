import { motion, useAnimation } from 'framer-motion';
import type { ReactNode } from 'react';
import { useLayoutEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Contact from '@/contact/Contact';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  useLayoutEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { duration: 1 } });
    }
  }, [inView, controls]);
  return (
    // why isnt prop.title have any animation it is just on the page when i reload but everything else loads animation
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      id="Contact"
    >
      <div className="flex flex-col rounded-md bg-primary-100 p-4 text-center">
        <div className="text-4xl font-semibold">
          <div className="text-gray-900">{props.title}</div>
          <div className="text-4xl text-primary-500">{props.subtitle}</div>
        </div>
        <Contact button={props.button} />
      </div>{' '}
    </motion.div>
  );
};

export { CTABanner };
