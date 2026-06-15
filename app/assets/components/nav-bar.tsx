'use client';
import Link from "next/link";
import Image from "next/image";
import Favicon from "../../favicon.ico";
import EriNichibotsuEasterEgg from "../img/other/eriNichibotsuEasterEgg.png";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LinkButton } from "./lnk-button";
import { useMobile } from "@/app/mobile-context";

// All the icons required by the top navigation bar.
import AboutIcon from "../img/icon/about.png";
import CodingIcon from "../img/icon/coding.png";
import SocialsIcon from "../img/icon/socials.png";
import ArtIcon from "../img/icon/art.png";
import GamesIcon from "../img/icon/games.png";
import LoreIcon from "../img/icon/lore.png";

import { MaxWidth } from "../config";

function Logo() {

    const isRootPath = usePathname() === '/';
    // The amount of times you have to click on the button before the easter egg appears.
    const easterEggMaxCount = 300;
    // Easter Egg Count. Before the easterEggMaxCount is reached, this counts up.
    const [easterEggCount, setEasterEggCount] = useState(0);

    return (
        <Link href="/" onClick={() => {
            setEasterEggCount(Math.min(easterEggMaxCount, easterEggCount + 1));
        }}
            className={`text-2xl w-fit select-none active:translate-y-1 flex gap-4 ${isRootPath ? "bg-white text-black" : "hover:bg-white hover:text-black text-white active:bg-white"} transition items-center p-2`}
            transitionTypes={['nav-forward']}>
            {
                easterEggCount < easterEggMaxCount
                    ?
                    <Image src={Favicon} alt="firey the very cool nikosona!" width={40} height={40} loading="eager" />
                    :
                    <Image src={EriNichibotsuEasterEgg} alt="totally me being eri" width={40} height={40} className="w-15 h-15" loading="eager" />
            }
            <p>{easterEggCount < easterEggMaxCount ? "Thefirey33" : "Eri Nichibotsu"}</p>
        </Link>
    )
}

function PanelButton({ isMobileMode, setIsOpen, isOpen }: {
    isMobileMode: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    isOpen: boolean
}) {
    return <>
        {
            isMobileMode &&
            <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"
                    fill="#e3e3e3">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
            </button>
        }
    </>
}

function TopBarLinks({ isMobileMode, setIsOpen, isOpen }: {
    isMobileMode: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    isOpen: boolean
}) {
    return <>
        <div className="flex flex-row gap-4 items-center">
            <PanelButton isMobileMode={isMobileMode} setIsOpen={setIsOpen} isOpen={isOpen} />
            <Logo />
        </div>

        {
            isMobileMode &&
            <hr className="border-white" />
        }

        <LinkButton href={"/about"} icon={AboutIcon}>About</LinkButton>
        <LinkButton href={"/socials"} icon={SocialsIcon}>Socials</LinkButton>
        <LinkButton href={"/coding"} icon={CodingIcon}>Programming/Projects</LinkButton>
        <LinkButton href={"/lore"} icon={LoreIcon}>Lore</LinkButton>
        <LinkButton href={"/art"} icon={ArtIcon}>Thefirey33 Art</LinkButton>
        <LinkButton href={"/games"} icon={GamesIcon}>Games!</LinkButton>
    </>
}


export const NavBar = () => {

    // Handle the flyout menu for mobiles

    const { isMobile, setIsMobile } = useMobile();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        function handleWindowResizing() {
            setIsMobile(window.innerWidth < MaxWidth)
        }

        window.addEventListener("resize", handleWindowResizing);

        return () => window.removeEventListener("resize", handleWindowResizing);
    })

    useEffect(() => {

        setIsMobile(window.innerWidth < MaxWidth);

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsLoading(false);

    }, [setIsMobile])

    const [isOpen, setIsOpen] = useState(false)


    return <div
        className="bg-black w-full min-h-20 border-(--border-color) border-b-5 p-3 flex flex-row items-center gap-4">
        {isLoading ?
            <p className="text-white text-center m-auto">Loading... Hold tight!</p> :
            <>
                {
                    isMobile
                        ?
                        <>
                            <div className="flex flex-row gap-4">
                                <PanelButton isMobileMode={isMobile} setIsOpen={setIsOpen} isOpen={isOpen} />
                                <Logo />
                            </div>
                            <div
                                className={`fixed ${isOpen ? "translate-x-0" : "-translate-x-full"} left-0 transition-all bg-black min-w-50 flex flex-col gap-2 p-5 h-full z-20 top-0 border-r-3 border-(--border-color)`}>
                                <TopBarLinks isMobileMode={isMobile} setIsOpen={setIsOpen} isOpen={isOpen} />
                            </div>
                        </>
                        :
                        <TopBarLinks isMobileMode={isMobile} setIsOpen={setIsOpen} isOpen={isOpen} />
                }
            </>}
    </div>
};