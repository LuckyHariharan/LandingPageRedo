import { motion, useAnimation } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useLayoutEffect(() => {
    if (inView) {
      const animatePage = async () => {
        await controls.start({ opacity: 1 });
      };

      animatePage();
    }
  }, [inView, controls]);

  return (
    <motion.div
      className="text-gray-600 antialiased"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <Meta title={AppConfig.title} description={AppConfig.description} />

      <Hero />

      <VerticalFeatures />
      <Banner />

      <Footer />
    </motion.div>
  );
};

export { Base };
