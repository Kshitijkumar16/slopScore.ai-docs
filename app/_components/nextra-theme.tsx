import type { PageMapItem } from "nextra";
import { version } from "nextra/package.json";
import type { FC, ReactNode } from "react";

export const NextraTheme: FC<{
  children: ReactNode;
  pageMap: PageMapItem[];
}> = ({ children, pageMap }) => {
  return (
    <>
      <h1 className="text-black dark:text-white">
        Custom theme demo for <strong>Nextra {version}</strong>
      </h1>
      <p className="text-black dark:text-white"></p>
    </>
  );
};
