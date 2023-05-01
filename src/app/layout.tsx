import "./globals.css";
import { Inter } from "next/font/google";

import Providers from "@/components/Providers";
import Chat from "@/components/Chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bookscrape",
  description: "Your bookstore for fantasy & mystery novels.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  );
}
