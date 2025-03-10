import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const studioSans = localFont({
  src: "./fonts/StudioSans.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-studioSans",
});

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "AlumniLink",
  description: "졸업생 커뮤니티",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${studioSans.variable} ${pretendard.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
