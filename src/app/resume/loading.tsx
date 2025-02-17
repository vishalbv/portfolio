import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <Skeleton className="h-12 w-48" />
        <Skeleton className="h-10 w-36" />
      </div>
      <div className="flex justify-center bg-muted rounded-lg p-4">
        <Skeleton className="h-[1000px] w-full max-w-4xl" />
      </div>
    </section>
  );
}
