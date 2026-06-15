import Image from "next/image";
import { BackgroundComponent } from "./assets/components/bg-component";
import OneShotParallaxBackground from "./assets/img/wallpapers/refuge.png";
import frontPageImage from "./assets/img/other/frontPageImage.png";
import TenTrillionSquare from "./assets/img/other/tenTrillion.png";
import { TimeZoneDisplay } from "./assets/components/time-zone-shower";
import Link from "next/link";

export default function Home() {


    return (
        <>
            <BackgroundComponent Background={OneShotParallaxBackground} />

            <div className="bg-black/80 xl:max-w-200 not-xl:w-80 h-fit m-auto p-8 border-4 flex flex-col items-center gap-4">
                <div className="flex flex-row items-center gap-4">
                    <Image src={frontPageImage} alt="firey but plushiee" draggable={false} className="xl:w-40 xl:h-40 w-20 h-20" loading="eager" />
                    <h1 className={"text-white text-center xl:text-7xl text-2xl select-none"}>Thefirey33</h1>
                </div>

                {/** Timezone stuff. */}
                <p className="text-white md:text-xl">turkish full-stack programmer, artist and game designer!</p>
                <div className="border border-white p-5 text-white flex flex-col gap-3">
                    <p className="lg:text-xl">My most important project is the TenTrillion Game Engine. An extremely optimized VULKAN, OPENGL, SOFTWARE game engine, that gives you everything you need. It&apos;s my most ambitious project yet...</p>
                    <Link href={"https://github.com/tentrillion-game-engine/tentrillion-game-engine"} className="btn group items-center w-fit m-auto animate-pulse text-center flex flex-row gap-4">
                        <Image src={TenTrillionSquare} alt="TenTrillion Image" className="group-hover:border-white border-black p-[2] border-2 transition" width={30} height={30} />
                        Check it out!
                    </Link>
                </div>
                <TimeZoneDisplay />
            </div>

        </>
    )
}
