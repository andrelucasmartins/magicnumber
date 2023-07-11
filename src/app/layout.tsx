import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { GoogleAnalytics } from "@/utils/googleAnalytics";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Magic Number",
  description: "Calculadora de Açãos e FII",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <GoogleAnalytics gaMeasurementId="G-12600NPL31" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
