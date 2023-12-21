import "./normalize.css";
import "./globals.css";
import { barlow } from "./fonts";

export const metadata = {
  title: "Space Tourism Website",
  description:
    "See some information about space travel. This is a solution to a Frontend Mentor challenge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
