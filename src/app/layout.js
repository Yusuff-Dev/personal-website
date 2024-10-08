import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.className}`}>
      <body className="flex flex-col min-h-screen justify-between">
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
