"use client";

import { useShowContent } from "@/hooks/layout-hooks";

const ContentHider = ({ children }: { children: React.ReactNode }) => {
  const showContent = useShowContent();

  if (showContent) {
    return <div className="relative z-998">{children}</div>;
  }

  if (!showContent) {
    return (
      <div className="border border-yellow-500 h-screen w-screen fixed select-none pointer-events-none bg-black z-999"></div>
    );
  }
};

export default ContentHider;
