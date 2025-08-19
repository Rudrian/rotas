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
      <body className= "flex flex-col justify-beetwen h-[100dvh]">
        <Navbar/>
        {children}
        <Direitos/>
      </body>
    </html>
  );
}
