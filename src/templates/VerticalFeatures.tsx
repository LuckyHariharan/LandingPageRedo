import { Disclosure } from '@headlessui/react';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

// Define a TypeScript interface for the props
interface CollapsibleFeatureProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  github: string;
}

// Define the CollapsibleFeature component with the correct return type
const CollapsibleFeature: React.FC<CollapsibleFeatureProps> = ({
  title,
  description,
  image,
  imageAlt,
  link,
  github,
}) => {
  return (
    <Disclosure>
      <VerticalFeatureRow
        title={title}
        description={description}
        image={image}
        imageAlt={imageAlt}
        link={link}
        github={github}
      />
    </Disclosure>
  );
};

const VerticalFeatures = () => (
  <div id="ProjectWork">
    <Section
      yPadding="py-8"
      title="Portfolio of Projects"
      description="Frontend and Android Apps"
    >
      <div className="space-y-8">
        {' '}
        <CollapsibleFeature
          title="Skillify Android App"
          description="Scoped and fully built the Skillify Android app. Developed essential components such as the lesson screen, badges screen, and a coaches screen. Distributed APK to students through the Skillify student portal."
          image="/assets/images/background3.png"
          imageAlt="Third feature alt text"
          link="https://skillify.ca/"
          github="https://github.com/skillify-ca/skillify-android"
        />
        <CollapsibleFeature
          title="AI Diary Android App"
          description="Developed a personal AI Diary using GeminiAI, to encourage self-reflection, growth, and a space to process emotions. Used Kotlin, Jetpack Compose, and Jetpack Navigation for Android, and Nodejs, React, TypeScript for the web app."
          image="/assets/images/background4.png"
          imageAlt="Third feature alt text"
          link="https://diary-ai.vercel.app/"
          github="https://github.com/LuckyHariharan/DiaryAI-NativeAndroid"
        />
        <CollapsibleFeature
          title="Actuarial Illustator  Extension"
          description="Actuarial Illustrator is a chrome extension that calculates policy values for any given age, gender, or smoking status. In V1.03 update users can upload their own actuarial tables for precise policy values."
          image="/assets/images/background1.png"
          imageAlt="First feature alt text"
          link="https://chrome.google.com/webstore/detail/actuarial-present-value/dkpjafmjabacmgmjkogfmepbbkghenll"
          github="https://github.com/LuckyHariharan/chrome-extension"
        />
        <CollapsibleFeature
          title="Career in Tech Personality Quizzes"
          description="Take our career in tech personality quiz to find your ideal career path, from a Selection of 12 Careers in tech. Just select  your preferred skills, tasks, and educational background."
          image="/assets/images/background2.png"
          imageAlt="Second feature alt text"
          link="https://skillify.ca/resources/quizzes/careerQuiz"
          github="https://github.com/skillify-ca/skillify-web/tree/main/pages/resources/quizzes/careerQuiz"
        />
      </div>
    </Section>
  </div>
);

export { VerticalFeatures };
