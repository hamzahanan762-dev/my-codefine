import { Suspense } from "react";
async function CategoryContent({ params }: { params: any }) {
  const resolvedParams = await params;
  const slugs = resolvedParams.id;
  return <div className="text-white">Category ID: {slugs}</div>;
}
export default async function Page({ params }: { params: any }) {
  return (
    <Suspense fallback={<div className="text-white">Loading category...</div>}>
      <CategoryContent params={params} />
    </Suspense>
  );
}
