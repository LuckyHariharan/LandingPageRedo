import { SkillsGridItem } from './SkillGridItem';

export const SkillsGrid = () => {
  return (
    <div className="mb-6 grid grid-cols-2 gap-12 rounded-md bg-primary-100 px-12 py-8 md:grid-cols-5 md:gap-8">
      <SkillsGridItem
        imageSrc="https://www.vectorlogo.zone/logos/android/android-icon.svg"
        title="Android"
      />
      <SkillsGridItem
        imageSrc="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg"
        title="Kotlin"
      />
      <SkillsGridItem
        imageSrc="https://www.vectorlogo.zone/logos/java/java-icon.svg"
        title="Java"
      />{' '}
      <SkillsGridItem
        imageSrc="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.linux-magazin.de%2Fwp-content%2Fuploads%2F2020%2F08%2Fjetpack-compose-icon_RGB.png&sp=1708594440T265ed10bb900f25ff417ce9620e0b41788685ca453494fa963a165b35576dc22"
        title="Compose"
      />
      <SkillsGridItem
        imageSrc="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        title="React"
      />
      <SkillsGridItem
        imageSrc="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
        title="TypeScript"
      />
      <SkillsGridItem
        imageSrc="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
        title="JavaScript"
      />
      <SkillsGridItem
        imageSrc="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
        title="Next.js"
      />
      <SkillsGridItem
        imageSrc="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
        title="Tailwind CSS"
      />
      <SkillsGridItem
        imageSrc="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fcreazilla-store.fra1.digitaloceanspaces.com%2Ficons%2F3209379%2Fgraphql-icon-md.png&sp=1708595432T1a604a56ad63dc937192a9f9bb026359eb6af2316a9f7cbee8853f5db085a517"
        title="GraphQL"
      />
    </div>
  );
};

// complete skillsgriditem react component below so it works with this component
