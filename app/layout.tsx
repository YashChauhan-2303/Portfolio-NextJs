import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";

const poppins = Poppins({subsets: ["latin"], weight: ["100", "200", "400", "700", "900"] });


export const metadata: Metadata = {
  title: "Yash Chauhan's Portfolio",
  description: "Yash Chauhan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}