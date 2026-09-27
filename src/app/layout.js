
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
      <body className="min-h-full bg-gray-100 flex items-center justify-center flex-col">{children}</body>
    </html>
  );
}
