import { PageProps } from "@/lib/types/page";
import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

export default async function PoemPage({ params }: PageProps) {
  const id = params.id as string;
  if (!id) notFound();

  const payload = await getPayload({ config: configPromise });

  const poem = await payload.findByID({ id, collection: "poems" });
  if (!poem) notFound();

  const { title, body_html } = poem;

  return (
    <div className="flex min-h-[100dvh] items-center justify-center px-5 py-20">
      <article className="max-w-full">
        {!!title && <h1 className="text-md -ml-4 mb-2 font-serif font-bold">{title}</h1>}
        <p
          className="-ml-4 shrink-0 whitespace-pre text-wrap border-l pl-4 *:min-h-3.5"
          dangerouslySetInnerHTML={{ __html: body_html || "" }}
        />
      </article>
    </div>
  );
}
