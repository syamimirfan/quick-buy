import type { Metadata } from "next";
//change the font into Poppins
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import CartProvider from "@/provider/CartProvider";

//set it to latin and the weight for the font
//call the poppins in the className for body to start use 
const poppins = Poppins({ subsets: ["latin"],
  weight: ['400', '700']
 });

export const metadata: Metadata = {
  title: "QuickBuy",
  description: "E-Commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {`${poppins.className}
       text-slate-700`
       }>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
