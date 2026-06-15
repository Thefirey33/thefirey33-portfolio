import { BackgroundComponent } from "../assets/components/bg-component";
import TowerWallpaper from "../assets/img/wallpapers/tower.png";
import FireyPlushieImage from "../assets/img/other/frontPageImage.png";
import Image from "next/image";
import Link from "next/link";
import TitlebarDisplay from "../assets/components/titlebar-display";


export default function AboutPage() {
    return (
        <>
            <BackgroundComponent Background={TowerWallpaper} />
            <div className="bg-black lg:w-200 w-80 flex flex-col gap-2 min-h-20 p-5 border-4 border-(--border-color) m-auto text-center">

                <TitlebarDisplay>About</TitlebarDisplay>

                <span className="text-white lg:text-xl flex m-3 flex-col gap-4">
                    <p>Hellooo!! I&apos;m a full-stack developer, artist and game designer from Izmir, Türkiye. I&apos;ve been programming for most of my life and It&apos;s my goal to make software that benefits everyone!</p>
                    <p>Appeared in the world in the 24 of June, 2009!</p>
                </span>

                <TitlebarDisplay>Copyright</TitlebarDisplay>

                <span className="text-white lg:text-xl flex m-3 flex-col gap-4">
                    <p>OneShot is owned by FutureCat LLC and Komodo Corporation. All assets related to the game &quot;OneShot&quot; belong to their respective shareholders.</p>
                    <p>All of the featured art is owned by the artists that have produced that content.</p>
                </span>

                <Link href={"https://imgur.com/a/Vh792zu"} className="text-blue-500 hover:text-blue-700 underline">Find the OneShot Wallpapers here.</Link>

                <div className="flex flex-row m-auto items-center gap-4">
                    <Image src={FireyPlushieImage} width={50} height={50} alt="Icon" />
                    <div className="flex flex-col">
                        <p className="text-white text-2xl">Thefirey33</p>
                        <p className="text-white">mrrping, {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div >
        </>
    );
};