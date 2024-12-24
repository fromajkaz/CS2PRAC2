"use client"
import Image from "next/image";
import Link from "next/link";;
import BlurBackground from "@/components/BlurBackground";
import { useScroll ,useSpring, motion} from "framer-motion";
import Nav from "@/components/Header/Header";
import Homepage from "./homepage/page";

export default function Home() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });

  return (
    <>
    <BlurBackground/>
    {/* <motion.div className="fixed top-0 left-0 bottom-0 right-0 h-2 bg-customPink origin-[0%] z-50" style={{ scaleX }} /> */}
    <main className="max-w-7xl mx-auto p-10 ">
      <Homepage/>
    </main>
    </>
  );
}
