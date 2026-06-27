
import { BackgroundComponent } from "../assets/components/bg-component";
import TitlebarDisplay from "../assets/components/titlebar-display";
import NavigateWallpaper from "../assets/img/wallpapers/navigate.png";
import Emoji from "../assets/components/emoji";
import FireyYay from "../assets/img/other/firey_yay.webp"
import ImageViewer from "../assets/components/img-viewer";

export default function BirthdayPage() {

    return (
        <>
            <BackgroundComponent Background={NavigateWallpaper} />

            <div className="bg-black xl:w-200 w-80 flex flex-col gap-2 min-h-20 p-5 border-4 border-(--border-color) m-auto text-center">
                <TitlebarDisplay>Birthday Arts! (24.06.2026)</TitlebarDisplay>

                <section className="text-white xl:text-xl">
                    <p className="xl:text-2xl text-xl">Thanks to everyone who wished me a happy birthday!</p>
                    <p className="text-white xl:text-xl flex flex-row gap-4 items-center justify-center">I love y&apos;all! /p <Emoji href={FireyYay} /></p>
                </section>

                <ImageViewer urlLink="bday" />

                <section className="text-white xl:text-xl">
                    <p>Thanks to sudoker0 and karll0424 for gifting me DELTARUNE!</p>
                    <p>Also, thanks to sudoker0 for gifting me Rivals of Aether!</p>
                    <p className="font-extrabold">Thanks to Mari for gifting TONS of games!!!</p>
                </section>


            </div>
        </>
    );
}
