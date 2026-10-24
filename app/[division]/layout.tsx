import { getDivision } from "@/lib/divisions";
import { DivisionHeader } from "@/components/DivisionHeader";
import { Footer } from "@/components/Footer";

export default function DivisionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { division: string };
}) {
  const division = getDivision(params.division);
  if (!division) return <>{children}</>;

  return (
    <div>
      <DivisionHeader divisionSlug={division.slug} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
