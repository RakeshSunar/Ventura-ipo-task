import "./font.css";
import "./globals.css";

export const metadata = {
  title: "Ventura IPO",
  description: "Ventura IPO task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
