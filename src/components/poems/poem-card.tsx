import { cn } from "@/lib/utils/classnames";
import { MaximizeIcon } from "lucide-react";
import Link from "next/link";
import { Poem } from "payload-types";
import { HTMLAttributes } from "react";
import { buttonVariants } from "../ui/button";

export type PoemCardProps = HTMLAttributes<HTMLDivElement> & {
  poem: Poem;
};

export function PoemCard({ poem, className, ...props }: PoemCardProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative flex h-[100dvh] shrink-0 snap-start items-center px-8 md:justify-center",
        className,
      )}
    >
      <div className="relative flex h-[70dvh] max-h-[70dvh] basis-full items-center justify-center md:max-w-[70vw] md:basis-auto">
        <article className="max-h-full w-full overflow-y-auto px-4">
          {poem.title && <h1 className="text-md -ml-4 mb-2 font-serif font-bold">{poem.title}</h1>}
          <div
            className="-ml-4 shrink-0 whitespace-pre-wrap text-wrap border-l pl-4 *:min-h-3.5"
            dangerouslySetInnerHTML={{ __html: poem.body_html || "" }}
          />
          <div className="h-5 w-full" />
        </article>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <Link
        href={`/poems/${poem.id}`}
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "absolute bottom-5 right-5 rounded-full opacity-30",
        )}
      >
        <MaximizeIcon className="h-5 w-5" />
      </Link>
    </div>
  );
}
