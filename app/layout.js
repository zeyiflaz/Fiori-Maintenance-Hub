import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <div className="p-6">{children}</div>
      </body>
    </html>
  );
}