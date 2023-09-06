import { useEffect, useRef } from "react";
import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import usePresentation from "~/hooks/usePresentation";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Next vs Remix" },
    { name: "description", content: "Uma comparação entre dois incríveis frameworks fullstack para React." },
  ];
};

export default function Presentation() {
  const { goToPrevious, goToNext } = usePresentation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.focus();
  }, [containerRef.current]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className="w-full h-full"
      onKeyDown={({ key }) => {
        if (['ArrowLeft', 'ArrowUp', 'Backspace'].includes(key)) {
          return goToPrevious()
        }
        if (['ArrowRight', 'ArrowDown', 'Enter'].includes(key)) {
          return goToNext();
        }
      }}
    >
      <Outlet />
    </div>
  );
}
