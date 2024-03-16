import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload/types";

const Poems: CollectionConfig = {
  slug: "poems",
  labels: {
    singular: "Gedicht",
    plural: "Gedichten",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Titel",
      type: "text",
    },
    {
      name: "private",
      label: "Privé",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "body",
      label: "Body",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})] as any,
      }),
    },
    lexicalHTML("body", { name: "body_html" }),
  ],
};

export default Poems;
