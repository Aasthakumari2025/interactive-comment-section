
import "./globals.css";

export const metadata = {
  title: "Interactive Comments",
  description: "Interactive comment section",
};




export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className= "h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
