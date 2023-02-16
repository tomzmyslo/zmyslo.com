import Header from "components/Header";
import Footer from "components/Footer";
import { Inter } from "@next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Tom Zmyslo</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="description" content="Personal website of Tom Zmyslo." />
        <meta
          name="keywords"
          content="software engineer, ruby, javascript, swift, code"
        />
      </head>
      <body
        className={`${inter.className} antialiased flex flex-col justify-between items-center h-screen bg-slate-900`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
