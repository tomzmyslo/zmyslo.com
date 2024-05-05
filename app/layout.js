import Header from "components/Header";
import Footer from "components/Footer";
import { Rubik } from "next/font/google";
import "./global.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Tom Zmyslo",
    template: "Tom Zmyslo | %s",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Tom Zmyslo</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
        <meta name="theme-color" content="#1e40af" />
        <meta name="description" content="Personal website of Tom Zmyslo." />
        <meta
          name="keywords"
          content="software engineer, ruby, javascript, swift, code"
        />
      </head>
      <body className={`${rubik.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
