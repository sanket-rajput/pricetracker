import { Metadata } from "next";
import { Html, Head, Main, NextScript } from "next/document";



export const metadata: Metadata = {
  
  title: 'Price tracker',
  description: 'Track prices effortlessly, save money smartly, with real-time notifications ',
}


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
