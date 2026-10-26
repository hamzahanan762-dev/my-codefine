export const dynamic = "force-dynamic";
export default async function Page({ params }: { params: any }) {
  const resolvedParams = await params;
  const slugs = resolvedParams.id;
  return <div>{slugs}</div>;
}
