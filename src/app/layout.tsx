import type { Metadata } from "next";
import siteData from "@/data.json";
import "@/styles/style.scss";
import Header from "@/components/Header";
import Footer from "./Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteData.siteTitle,
  description: siteData.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
            <body>
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
  );
}
