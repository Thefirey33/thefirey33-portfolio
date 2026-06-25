"use client";

import { useMobile } from "@/app/mobile-context";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArtInformation, GetArtReference } from "../helper";

export default function ImageViewer({ urlLink }: { urlLink: string }) {
    const [arts, setArts] = useState<ArtInformation[]>([]);
    const [currentDisplayedArt, setCurrentDisplayedArt] = useState({
        path: "",
        isDisplaying: false,
        isLoading: false,
    });

    const { isMobile } = useMobile();

    // Request all the photos from the API.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const artReference = await GetArtReference(urlLink);

                if (artReference) {
                    setArts(artReference);
                }
            } catch (error) {
                console.error("Fatal exception: ", error);
            }
        };

        // Check if the arts have been already imported, so we don't reimport them a billion times.
        if (arts.length <= 0) fetchData();
    }, [arts.length, urlLink]);

    return (
        <>
            <div
                className={`w-screen h-full flex flex-col justify-center items-center fixed bg-black/90 z-20 top-0 left-0 ${currentDisplayedArt.isDisplaying ? "scale-100" : "scale-0"} transition-all`}
            >
                {/** Fix here otherwise Next.JS starts bitching */}

                <button
                    onClick={() =>
                        setCurrentDisplayedArt({
                            isDisplaying: false,
                            path: "",
                            isLoading: false,
                        })
                    }
                    className="btn w-fit fixed top-0 left-0"
                >
                    Close
                </button>


                {currentDisplayedArt.path != "" && (
                    <Image
                        onLoad={() =>
                            setCurrentDisplayedArt({
                                isDisplaying: true,
                                path: currentDisplayedArt.path,
                                isLoading: false,
                            })
                        }
                        src={currentDisplayedArt.path}
                        className="w-fit h-auto p-4 xl:h-full border-2 border-white [image-rendering:pixelated]"
                        loading="eager"
                        alt="Peak Art"
                        width={1920}
                        height={1080}
                    />
                )}
                {currentDisplayedArt.isLoading && (
                    <div className="text-white w-screen h-screen fixed bg-black flex">
                        <p className="m-auto xl:text-4xl text-2xl">
                            Loading.. Hold your horses!
                        </p>
                    </div>
                )}
            </div>
            <div
                className={`grid xl:grid-cols-3  scrollbar-thumb-(--border-color) border-2 border-(--border-color) p-2 m-auto overflow-x-hidden xl:h-120 h-100 overflow-scroll grid-stretch items-center justify-center gap-4`}
            >
                {arts.map((entry, i) => {
                    return (
                        <button
                            key={i}
                            onClick={() => {
                                setCurrentDisplayedArt({
                                    path: entry.path,
                                    isDisplaying: true,
                                    isLoading: true,
                                });
                            }}
                            className="group flex flex-col h-50 overflow-clip w-50 justify-center self-center cursor-pointer items-center border-4 hover:border-white border-(--border-color) transition hover:scale-110 hover:rotate-2"
                        >
                            <Image
                                src={entry.path}
                                alt="Image"
                                className="w-auto mt-auto h-auto"
                                width={100}
                                height={100}
                                loading="eager"
                            />
                            <p className="text-white mb-auto">by {entry.author}</p>

                            <p
                                className={`text-white italic ${!isMobile && "not-group-hover:hidden"}`}
                            >
                                {isMobile ? "Press" : "Click"} to view it!
                            </p>
                        </button>
                    );
                })}
            </div>
        </>
    );
}
