import Image from "next/image";
import { BackgroundComponent } from "./assets/components/bg-component";
import OneShotParallaxBackground from "./assets/img/wallpapers/refuge.png";
import frontPageImage from "./assets/img/other/frontPageImage.png";
import { TimeZoneDisplay } from "./assets/components/time-zone-shower";

export default function Home() {

    return (
        <>
            <BackgroundComponent Background={OneShotParallaxBackground} />

            <div className="bg-black/80 min-w-30 h-fit m-auto p-8 border-4 flex flex-col items-center gap-4">
                <div className="flex flex-row items-center gap-4">
                    <Image src={frontPageImage} alt="firey but plushiee" draggable={false} className="md:w-40 md:h-40 w-20 h-20" loading="eager" />
                    <h1 className={"text-white text-center md:text-7xl text-2xl select-none"}>Thefirey33</h1>
                </div>

                {/** Timezone stuff. */}
                <hr className="border-white w-full" />
                <p className="text-white md:text-xl">turkish full-stack programmer, artist and game designer!</p>
                <TimeZoneDisplay />
            </div>

        </>
    )
}
