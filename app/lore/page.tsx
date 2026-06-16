'use client';

import { useEffect, useState } from "react";
import { BackgroundComponent } from "../assets/components/bg-component";
import FightWallpaper from "../assets/img/wallpapers/fight-wallpaper.png";
import Link from "next/link";

export default function LorePage() {
  const [loreContent, setLoreContent] = useState("");

  useEffect(() => {
    const requestLore = async () => {
      await fetch("/content/lore.txt")
        .then(r => r.text())
        .then(r => setLoreContent(r))
        .catch(r => console.error("Failed to fetch lore", r));
    };

    if (loreContent == "")
      requestLore();
  }, [loreContent]);


  return (
    <>
      <BackgroundComponent Background={FightWallpaper} className="opacity-10" />


      <div className="xl:min-w-300 flex flex-col items-center w-80 text-white m-auto">
        <p className="text-xl flex xl:flex-row flex-col items-center gap-4 animate-pulse">
          This background is made by Niko_Solar. Please go support them!
          <Link className="btn not-xl:w-full text-center" href={"https://nikosolar.straw.page/"}>Strawpage</Link>
          <Link className="btn not-xl:w-full text-center" href={"https://bsky.app/profile/nikosolar.bsky.social"}>BlueSky</Link>
        </p>

        <div className="xl:h-160 h-120 overflow-x-hidden w-screen block overflow-scroll p-4 scrollbar-thumb-(--border-color) border-4 border-(--border-color) m-5 bg-black">
          {loreContent.split("\n").map((entry, indx) => {
            return <p key={indx}>{entry}</p>
          })}
        </div>
      </div>
    </>
  );
};
