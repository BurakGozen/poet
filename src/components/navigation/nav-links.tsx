"use client";

import { paths } from "@/config/paths";
import { cn } from "@/lib/utils/classnames";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function NavLinks() {
  const currentSegment = useSelectedLayoutSegment();

  return (
    <ul className="flex flex-col gap-8 py-20">
      {paths.map(({ label, href, segment }, index) => (
        <li key={index}>
          <Link
            href={href}
            className={cn(
              "block text-5xl font-bold underline",
              currentSegment === segment && "text-red-500",
            )}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
