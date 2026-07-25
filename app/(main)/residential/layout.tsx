import { ResidentialSubnav } from "@/components/ResidentialSubnav";

export default function ResidentialLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ResidentialSubnav />
      {children}
    </>
  );
}
