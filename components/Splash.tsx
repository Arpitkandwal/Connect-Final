"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Link from "next/link";
import { MultiStepLoaderDemo } from "./FeatureButton";
// import { ImagesSlider } from "../ui/";

export default function ImagesSliderDemo() {
  const images = [
   "https://media.discordapp.net/attachments/1174252030534094898/1230798804060606615/frontImage.jpg?ex=6634a1b6&is=66222cb6&hm=b5c8c70c05b610544f6ddeb2b03d5f2b2b34eab8cddca795d4af806affe4bc95&=&format=webp&width=437&height=437",
   "https://media.discordapp.net/attachments/1174252030534094898/1230798804060606615/frontImage.jpg?ex=6634a1b6&is=66222cb6&hm=b5c8c70c05b610544f6ddeb2b03d5f2b2b34eab8cddca795d4af806affe4bc95&=&format=webp&width=437&height=437",
   "https://media.discordapp.net/attachments/1174252030534094898/1230798804060606615/frontImage.jpg?ex=6634a1b6&is=66222cb6&hm=b5c8c70c05b610544f6ddeb2b03d5f2b2b34eab8cddca795d4af806affe4bc95&=&format=webp&width=437&height=437",
 
  ];
  return (
    <ImagesSlider className="h-[40rem] mb-[-80px]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 max-w-[75%]">
        Empower remote teams with seamless collaboration and communication. Work smarter, together!
        </motion.p>
       <div className="flex items-center justify-center space-x-5">
       <button className="px-8 py-3 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative">
          <Link href='/home'>Join now →</Link>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        <button>
          <MultiStepLoaderDemo/>
        </button>
       </div>
      </motion.div>
    </ImagesSlider>
  );
}
