import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Direitos from "@/components/Direitos";



export const metadata: Metadata = {
  title: "rotas",
  description: "criando um projeto com rotas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Direitos/>
        {children}
      </body>
    </html>
  );
}
