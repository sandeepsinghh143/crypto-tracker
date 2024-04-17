import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto Tracker",
  description: "Track Crypto Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" storageKey = 'theme'>
        <Header/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
