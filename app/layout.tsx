import Navbar from "@/components/Navbar";
import "./styles/globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Flexxible",
  description: "showcase and discover remarkable projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
