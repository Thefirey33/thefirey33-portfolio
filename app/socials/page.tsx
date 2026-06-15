import { BackgroundComponent } from "../assets/components/bg-component";
import BarrensFactory from "../assets/img/wallpapers/barrensFactory.png";
import SocialsData from "../assets/data/socials.json";
import Link from "next/link";
import Image from "next/image";

export default function SocialsPage() {
    return (
        <>
            <BackgroundComponent Background={BarrensFactory} />

            <div className="bg-black md:w-200 w-80 flex flex-col gap-4 min-h-20 p-5 border-4 border-(--border-color) m-auto text-center">
                <h1 className="xl:text-5xl text-2xl text-white">Socials!</h1>
                <p className="text-white xl:text-xl text-xs italic">&quot;Where I talk and do stuff :3&quot;</p>

                <div className="grid grid-cols-2 gap-2">
                    {
                        SocialsData.map((e, i) => <Link className="text-white group btn flex flex-row items-center gap-4" href={e.href} key={i}>
                            <Image width={50} height={50} className="transition md:w-10 md:h-10 w-8 h-8 p-1 border-2 group-hover:border-white" src={`https://www.google.com/s2/favicons?domain=${e.href}&sz=32`} alt="Icon" />
                            <p className="group-hover:invert m-auto transition text-center justify-center">{e.name}</p>
                        </Link>)
                    }
                </div>
            </div>
        </>
    );
};