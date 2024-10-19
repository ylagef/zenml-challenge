import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";


export const metadata: Metadata = {
  title: "ZenML Challenge - Yeray",
  description: "Coding challenge for the Senior Frontend developer role at ZenML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
