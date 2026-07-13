import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Dispatch",
  description:
    "Request a walk-through or book service across Metro Vancouver. A Woola coordinator responds within one business day; 24/7 emergency line for contracted clients.",
  alternates: { canonical: "https://woola.ca/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
