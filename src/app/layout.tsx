import { Toaster } from "@/components/ui";
import GetGeneraData from "@/lib/getGeneraData";
import { ThemeProvider } from "@/providers";
import SeedAdmin from "@/seed/seedAdmin";
import SeedGeneral from "@/seed/seedGeneralData";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  await SeedAdmin();
  await SeedGeneral();

  const general = await GetGeneraData();

  const title = general?.seoData?.title || "";

  // Dynamic Seo data
  metadata.title = {
    default: title,
    template: `%s | ${title}`,
  };
  metadata.description = general?.seoData?.description;
  metadata.keywords = general?.seoData?.keywords;
  metadata.openGraph = {
    title: title,
    description: general?.seoData?.openGraph?.description,
    siteName: title,
    images: [
      {
        url: general?.seoData?.openGraph?.imagesUrl || "",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  };
  metadata.twitter = {
    card: "summary_large_image",
    title: title,
    description: general?.seoData?.openGraph?.description,
    images: [general?.seoData?.openGraph?.imagesUrl || ""],
  };
  metadata.alternates = {
    canonical: general?.seoData?.siteUrl,
  };

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
