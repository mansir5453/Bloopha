import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Bloopha",
    description: "Read Bloopha's Privacy Policy to understand how we collect, use, and protect your information.",
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
