import type { Metadata } from "next";
import Header from "./components/Header";
import { Providers } from "./providers";
// import "./globals.css";

export const metadata: Metadata = {
  title: "AR-chat",
  description: "chat with AR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>


      </body>
    </html >
  );
}
