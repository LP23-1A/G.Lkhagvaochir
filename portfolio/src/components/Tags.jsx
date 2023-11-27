import Topic from "./Topic";

export default function Tags() {
  return (
    <div className="flex flex-wrap gap-2">
      <Topic text="Rect" />
      <Topic text="Next.js" />
      <Topic text="Typescript" />
      <Topic text="Nest.js" />
      <Topic text="PostgreSQL" />
      <Topic text="Tailwindcss" />
      <Topic text="Figma" />
      <Topic text="Cypress" />
      <Topic text="Storybook" />
      <Topic text="Git" />
    </div>
  );
}
