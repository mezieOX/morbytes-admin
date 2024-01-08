import "./globals.css";

import { IMetaData, IRootLayout } from "@/interfaces";
import { logo } from "@/constant/imgs";

export const metadata: IMetaData = {
  title: "Morbytes Admin Dashboard",
  description:
    "Download now to embark on a refined journey through the online realm, where sophisticated features converge to redefine the way you interact with the web. Seamless, secure, and effortlessly efficient, Morbytes sets the standard for modern browsing. Elevate your online presence – your digital voyage starts here",
  image: logo,
};

export default function RootLayout({
  children,
  title,
  className,
}: Readonly<IRootLayout>) {
  const pageTitle =
    title !== undefined
      ? `${title} - Morbytes Admin Dashboard`
      : metadata.title;

  return (
    <html lang="en">
      <head>
        <title>{String(pageTitle)}</title>
      </head>
      <body className={`font-poppins bg-dark ${className}`}>{children}</body>
    </html>
  );
}
