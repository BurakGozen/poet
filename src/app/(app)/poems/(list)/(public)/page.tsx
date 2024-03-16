import { PoemCard } from "@/components/poems/poem-card";
import configPromise from "@payload-config";
import { getPayload } from "payload";

export default async function PoemsPage() {
  const payload = await getPayload({ config: configPromise });

  const { docs } = await payload.find({
    collection: "poems",
    where: { private: { equals: false } },
    limit: 100,
  });

  return docs.map((poem, index) => <PoemCard key={index} poem={poem} />);
}
