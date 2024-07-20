import type { Metadata } from "next";
import "./globals.scss";
import { outfit } from "@/libs/fonts";
import Header from "@/ui/header/header";

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
      <body className={outfit.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
