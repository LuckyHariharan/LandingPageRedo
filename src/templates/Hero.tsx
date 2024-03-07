import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useLayoutEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link as ScrollLink } from 'react-scroll';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useLayoutEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { duration: 1 } });
    }
  }, [inView, controls]);
  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}>
      <div className="h-screen md:h-full flex flex-col bg-[url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA')]">
        <Background color={''}>
          <Section yPadding="md:py-0">
            <NavbarTwoColumns
              logo={<Logo xl />}
              // eslint-disable-next-line react/no-children-prop
              children={
                <>
                  <li>
                    <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link href="/">Sign in</Link>
                  </li>
                </>
              }
            ></NavbarTwoColumns>
          </Section>

          <Section yPadding="py-44">
            <HeroOneButton
              title={
                <>
                  {'Android Engineer\n'}
                  <br />
                  <span className="text-primary-500">
                    at{' '}
                    <a className=" hover:underline" href="https://skillify.ca/">
                      Skillify
                    </a>
                  </span>
                </>
              }
              description=""
              button={
                <ScrollLink
                  to="ProjectWork"
                  smooth={true}
                  duration={500}
                  offset={-30}
                >
                  <Button xl>See My Portfolio</Button>
                </ScrollLink>
              }
            />
          </Section>
        </Background>
      </div>
    </motion.div>
  );
};

export { Hero };
