import "./globals.css";
import {Roboto_Mono} from "next/font/google"
import { Orbitron } from "next/font/google";
import Nav from "@/components/Nav";
import BlurBackground from "@/components/BlurBackground";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ['400',"500",'700','300']
});
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ['900']
});

export const metadata = {
  title: "CS2",
  description: "asd",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <BlurBackground/>
        <Nav/>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
