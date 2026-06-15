'use client';

import { useMobile } from "@/app/mobile-context";
// This is here so the general DOM could be loaded via the server, but the actual content is loaded via the client's request.

import CodingInformation from "../data/programming-details.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function CodeGrid() {

    const [contextInformation, setContextInformation] = useState({
        text: "",
        isShown: false
    });

    const { isMobile } = useMobile();

    return (
        <>
            <div className={`w-screen h-screen fixed bg-black/70 top-0 left-0 flex ${contextInformation.isShown ? 'scale-100' : 'scale-0'} transition-all`}>
                <div className="bg-black min-w-80 border-4 border-(--border-color) m-auto flex flex-col gap-4 p-3">
                    <p className="text-left">What&apos;s this?</p>

                    <p>{contextInformation.text}</p>
                    <button className="btn text-xl" onClick={() => setContextInformation({ text: contextInformation.text, isShown: false })}>Ok</button>
                </div>
            </div>

            {isMobile && <p className="text-xs italic">Press your finger and hold any language to know what it is!</p>}
            <span className="grid grid-cols-3 select-none [-webkit-touch-callout: none] [-webkit-user-select: none] gap-2 m-2 xl:max-h-120 max-h-80 p-2 scroll-smooth scrollbar-thumb-(--border-color) overflow-x-hidden overflow-scroll ring-2 ring-(--border-color)">
                {CodingInformation.map((data, i) => {
                    return (
                        <Link href={data.learn_more || "#"} onContextMenu={(e) => {
                            if (!isMobile) return;

                            e.preventDefault();

                            setContextInformation({
                                text: data.name,
                                isShown: true
                            });
                        }} key={i} className="xl:min-w-30 min-h-20 flex flex-row gap-4 content-evenly justify-center items-center p-2 btn group">
                            <Image src={`/code/${data.identifier}.png`} className="w-8 h-auto" alt="Image" width={25} height={25} />
                            <p className="not-xl:hidden">{data.name}</p>
                        </Link>
                    );
                })}
            </span>
        </>
    );
}