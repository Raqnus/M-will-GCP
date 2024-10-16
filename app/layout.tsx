import type { Metadata } from "next";
import Mwill from  "../public/images/Mwill logo.png"
import Image from 'next/image';

import "./globals.css";
import Footer from "@/components/footer.component";
import { Hedder } from "@/components/hedder.component";
import Menu from "@/components/parts/menu.component";

export const metadata: Metadata = {
  title: "M-will 公式ホームページ",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">

      
      
      <body className="min-h-screen bg-white mx-auto z-40">
      <header className="container justify-between">
  <div className="rozha-one-regular  flex-col md:flex-row p-2 container h-20 lg:p- lg:h-28 lg:ml-12 ml-8 border-b flex justify-between">

    <div className="flex">
      <a className="" href="/">
    <Image
    className="w-16 h-16 md:w-16 md:h-16 lg:w-24 lg:h-24"
    src={Mwill}
    alt="Mwill logo"
    >
    </Image>
    </a>

    <div className="ml-auto ">
    <Menu/>
    </div>



    </div>
    <div className="min-h-screen flex items-center justify-center">
    </div> 
  </div>
</header>
      
        {children}

        <Footer/>
        
      </body>
    </html>
  );
}
