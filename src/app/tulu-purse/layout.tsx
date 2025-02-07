import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Call Analytics Dashboard",
  description: "Landing Page for call analytics dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex bg-[#ededed] flex-row  h-screen  overflow-hidden">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col bg-[#0F0F0F] overflow-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Children Content with Scroll */}
            <div className="flex-1 overflow-y-auto p-6 md:px-9 pt-6 ">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
