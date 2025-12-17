import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export const metadata = {
  title: "Travel Guide Website",
  description: "Explore the world with our travel guide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-screen h-screen bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
