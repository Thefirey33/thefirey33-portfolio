import { BackgroundComponent } from "../assets/components/bg-component";
import BarrensFactory from "../assets/img/wallpapers/barrens-factory.png";
import SocialsData from "../assets/data/socials.json";
import Link from "next/link";
import Image from "next/image";
import TitlebarDisplay from "../assets/components/titlebar-display";

export default function SocialsPage() {
    return (
        <>
            <BackgroundComponent Background={BarrensFactory} />


            <div className="bg-black xl:w-200 w-80 flex flex-col gap-2 min-h-20 p-5 border-4 border-(--border-color) m-auto text-center">
                <TitlebarDisplay>Socials</TitlebarDisplay>
                <p className="text-white m-3 xl:text-xl text-xs italic">&quot;Where I talk and do stuff :3&quot;</p>

                <div className="grid grid-cols-2 gap-2">
                    {
                        SocialsData.map((e, i) => <Link className="text-white group btn flex flex-row items-center gap-4" href={e.href} key={i}>
                            <Image width={50} height={50} className="transition xl:w-10 xl:h-10 w-8 h-8 p-1 border-2 group-hover:border-white" src={`https://www.google.com/s2/favicons?domain=${e.href}&sz=32`} alt="Icon" />
                            <p className="group-hover:invert m-auto xl:text-xl text-xs transition text-center justify-center">{e.name}</p>
                        </Link>)
                    }
                </div>

                <p className="text-white">(i don&apos;t care about some of these btw)</p>
            </div>
        </>
    );
};