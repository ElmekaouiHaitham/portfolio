"use client";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/haitham_icon.svg" sizes="any" />
      </head>
      <ThemeProvider enableSystem={true} attribute="class">
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
