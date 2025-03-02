import { Toaster } from "@/components/ui";
import config from "@/config";
import { ThemeProvider } from "@/providers";
import SeedGeneral from "@/seed/seedGeneralData";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title = "MD Abir Mahmud - Full-Stack Web Developer";
const siteUrl = config.next_public_site_url;
export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description:
    "Me, MD Abir Mahmud is an experienced full-stack web developer from Bangladesh, specializing in building scalable web applications using modern technologies like Next.js, TypeScript, and Node.js. With a strong foundation in JavaScript, I works across various tools and frameworks such as Redux, TailwindCSS, MongoDB, and PostgreSQL. Also has expertise in deploying and managing applications on AWS, VPS servers, and Nginx.",
  keywords: [
    "MD Abir Mahmud",
    "abirm09",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "Bangladesh",
    "JavaScript",
    "MERN Stack",
    "Web Development",
  ],
  openGraph: {
    title,
    description:
      "MD Abir Mahmud is a full-stack web developer from Bangladesh, specializing in modern web technologies.",
    url: siteUrl,
    siteName: "MD Abir Mahmud",
    images: [
      {
        url: "/images/abirmahmud/full-image.jpg", // OG image path
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Full-stack developer specializing in React, Node.js, MongoDB from Bangladesh.",
    images: ["/images/abirmahmud/full-image.jpg"], // OG image path
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl, // Website URL
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await SeedGeneral();

  metadata.title = {
    default: "Maruf",
    template: `%s | Maruf`,
  };

  // const general = await GetGeneraData();

  // metadata.title={

  // }

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
