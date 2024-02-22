import { SkillsGridItem } from './SkillGridItem';

export const SkillsGrid = () => {
  return (
    <div className="my-8 grid grid-cols-2 gap-8 rounded-md bg-primary-100  px-12 py-8 md:my-4 md:grid-cols-5 md:gap-8 md:py-8">
      <SkillsGridItem imageSrc="android-icon.svg" title="Android" />
      <SkillsGridItem imageSrc="kotlin.svg" title="Kotlin" />
      <SkillsGridItem imageSrc="java-icon.svg" title="Java" />{' '}
      <SkillsGridItem imageSrc="compose.png" title="Compose" />
      <SkillsGridItem imageSrc="reactjs-icon.svg" title="React" />
      <SkillsGridItem imageSrc="typescriptlang-icon.svg" title="TypeScript" />
      <SkillsGridItem imageSrc="logo-javascript.svg" title="JavaScript" />
      <SkillsGridItem imageSrc="nextjs-icon.svg" title="Next.js" />
      <SkillsGridItem imageSrc="tailwindcss-icon.svg" title="TailwindCSS" />
      <SkillsGridItem imageSrc="graphql.png" title="GraphQL" />
    </div>
  );
};

// complete skillsgriditem react component below so it works with this component
