import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Bloopha",
    description: "Learn about Bloopha's mission to redefine digital experiences. We combine strategy, design, and technology to build brands that lead.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
