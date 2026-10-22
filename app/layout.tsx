import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE = "https://norte.vyde.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Norte Code — the AI coding agent for your terminal",
    template: "%s · Norte Code",
  },
  description:
    "Norte Code is the AI coding agent for engineering teams. It reads the repository, runs the tools, ships the work — with approvals, budgets and per-request telemetry your team can defend.",
  applicationName: "Norte Code",
  keywords: [
    "AI coding agent",
    "terminal agent",
    "software engineering AI",
    "developer tools",
    "coding assistant",
    "agentic coding",
  ],
  authors: [{ name: "Norte" }],
  creator: "Norte",
  publisher: "Norte",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Norte Code",
    locale: "en_US",
    title: "Norte Code — the AI coding agent for your terminal",
    description:
      "It reads the repository, runs the tools, ships the work. Approvals, budgets and per-request telemetry included. Install it with one command.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Norte Code, the AI coding agent for your terminal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Norte Code — the AI coding agent for your terminal",
    description:
      "It reads the repository, runs the tools, ships the work. Install it with one command.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
