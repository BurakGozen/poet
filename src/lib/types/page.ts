export type PageProps = {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type LayoutProps = {
  children: React.ReactNode;
  params: { [key: string]: string | string[] | undefined };
};
