import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Bloopha",
    description: "Bloopha's Terms of Service outlining the rules and regulations for the use of our website and services.",
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
