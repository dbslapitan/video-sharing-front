import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Video Sharing | Dirk Brandon Lapitan",
  description: "Created using ASP.NET Web API for backend and NextJS for frontend. Other technologies used: AWS (IAM, RDS-PostgrSQL, S3), Auth0. Functionality includes video upload.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
