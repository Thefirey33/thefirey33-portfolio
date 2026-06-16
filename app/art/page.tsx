'use client';

import { useEffect, useRef, useState } from "react";
import { BackgroundComponent } from "../assets/components/bg-component";
import BookClubWallpaper from "../assets/img/wallpapers/book-club.png";
import { FileTree } from "../assets/helper";
import Image from "next/image";
import TitlebarDisplay from "../assets/components/titlebar-display";
import { useMobile } from "../mobile-context";

export default function ArtPage() {

  interface ArtInformation {
    author: string,
    path: string
  }

  const importedArts = useRef<ArtInformation[]>([]);
  const [arts, setArts] = useState<ArtInformation[]>([]);
  const [currentDisplayedArt, setCurrentDisplayedArt] = useState({
    path: "",
    isDisplaying: false,
    isLoading: false
  })

  const { isMobile } = useMobile();

  // Request all the photos from the API.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/arts");
        const result = await response.json();

        const files = result.files;
        if (files instanceof Array) {
          for (let i = 0; i < files.length; i++) {
            const fileEntryRef: FileTree = files[i];
            if (!fileEntryRef.children) return;

            for (let i = 0; i < fileEntryRef.children.length; i++) {
              const entry = fileEntryRef.children[i];

              importedArts.current.push({
                author: fileEntryRef.name,
                path: `/art/${entry.path}`
              })

            }
          }
        }
        setArts(importedArts.current);
      }
      catch (error) {
        console.error("Fatal exception: ", error)
      }
    }

    // Check if the arts have been already imported, so we don't reimport them a billion times.
    if (arts.length <= 0)
      fetchData();
  }, [arts.length]);

  return (
    <>
      <BackgroundComponent Background={BookClubWallpaper} />

      <div className={`w-screen h-full flex flex-col justify-center items-center fixed bg-black/90 z-20 top-0 left-0 ${currentDisplayedArt.isDisplaying ? 'scale-100' : 'scale-0'} transition-all`}>
        {/** Fix here otherwise Next.JS starts bitching */}

        <button onClick={() => setCurrentDisplayedArt({
          isDisplaying: false,
          path: "",
          isLoading: false
        })} className="btn w-fit fixed top-0 left-0">Close</button>

        {currentDisplayedArt.path != "" && <Image onLoad={() => setCurrentDisplayedArt({
          isDisplaying: true,
          path: currentDisplayedArt.path,
          isLoading: false
        })} src={currentDisplayedArt.path} className="w-fit p-4 xl:h-full border-2 border-white" loading="eager" alt="Peak Art" width={1920} height={1080} />}
        {currentDisplayedArt.isLoading && <div className="text-white w-screen h-screen fixed bg-black flex">
          <p className="m-auto xl:text-4xl text-2xl">Loading.. Hold your horses!</p>
        </div>}
      </div >


      <div className="bg-black xl:w-200 w-80 flex flex-col gap-2 min-h-20 p-5 border-4 border-(--border-color) m-auto text-center">
        <TitlebarDisplay>Thefirey33 Art</TitlebarDisplay>

        <p className="text-white md:text-xl">I really appreciate all the art that anyone makes for me! Everyone deserves their hard-work displayed, so this is where i&apos;ll put it :3</p>
        <p className="text-white md:text-xl">If you made any art of me/my characters, don&apos;t be afraid! Tell me and i&apos;ll immediately put it here!! :3</p>

        {
          arts.length != 0 ?
            <div className={`grid xl:grid-cols-3  scrollbar-thumb-(--border-color) border-2 border-(--border-color) p-2 m-auto overflow-x-hidden xl:h-120 h-100 overflow-scroll grid-stretch items-center justify-center gap-4`}>
              {arts.map((entry, i) => {
                return <button key={i} onClick={() => {
                  setCurrentDisplayedArt({
                    path: entry.path,
                    isDisplaying: true,
                    isLoading: true
                  })
                }} className="group flex flex-col h-50 overflow-clip w-50 justify-center self-center cursor-pointer items-center border-4 hover:border-white border-(--border-color) transition hover:scale-110 hover:rotate-2">
                  <Image src={entry.path} alt="Image" className="w-30 mt-auto h-auto" width={100} height={100} loading="eager" />
                  <p className="text-white mb-auto">by {entry.author}</p>

                  <p className={`text-white italic ${!isMobile && 'not-group-hover:hidden'}`}>{isMobile ? "Press" : "Click"} to view it!</p>
                </button>
              })}
            </div>
            :
            <p className="text-white text-2xl">Loading...</p>}
      </div>
    </>
  );

};
