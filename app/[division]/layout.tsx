import { getDivision } from "@/lib/divisions";
import { DivisionHeader } from "@/components/DivisionHeader";
import { DivisionFooter } from "@/components/DivisionFooter";

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
    <div className={`theme-${division.slug}`}>
      <DivisionHeader divisionSlug={division.slug} />
      <main>{children}</main>
      <DivisionFooter division={division} />
    </div>
  );
}
