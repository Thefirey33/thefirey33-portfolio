import { BackgroundComponent } from "../assets/components/bg-component";
import CodeGrid from "../assets/components/code-grid";
import TitlebarDisplay from "../assets/components/titlebar-display";
import WorldMachineWallpaper from "../assets/img/wallpapers/world-machine.png";
export default function ProgrammingPage() {


    return (
        <>
            <BackgroundComponent Background={WorldMachineWallpaper} />

            <div className="bg-black lg:w-200 w-80 text-white text-xl flex flex-col gap-2 min-h-20 p-5 border-4 border-(--border-color) m-auto text-center">
                <TitlebarDisplay>Programming!</TitlebarDisplay>

                <p>
                    I&apos;ve been programming for a very long time. It&apos;s one of my
                    favorite activities to do!
                </p>

                <p>Here&apos;s a list of software, languages I use:</p>
                <CodeGrid />
                <p>Checkout all my projects on GitHub and itch.io!</p>
            </div>
        </>
    );
}
