import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" flex flex-col w-screen h-screen justify-between text-center text-sm font-light text-gray-900">
          <div className=" flex flex-col">
            <Navbar></Navbar>
            {children}
          </div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
