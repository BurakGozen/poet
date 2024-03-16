import { LayoutProps } from "@/lib/types/page";

export default async function PoemsPage({ children }: LayoutProps) {
  return (
    <main className="flex max-h-[100dvh] snap-y snap-mandatory flex-col overflow-y-scroll py-10">
      {children}
    </main>
  );
}
