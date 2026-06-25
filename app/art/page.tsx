import { BackgroundComponent } from "../assets/components/bg-component";
import BookClubWallpaper from "../assets/img/wallpapers/book-club.png";
import TitlebarDisplay from "../assets/components/titlebar-display";
import ImageViewer from "../assets/components/img-viewer";

export default function ArtPage() {

  return (
    <>
      <BackgroundComponent Background={BookClubWallpaper} />


      <div className="bg-black xl:w-200 w-80 flex flex-col gap-2 min-h-20 p-5 border-4 border-(--border-color) m-auto text-center">
        <TitlebarDisplay>Thefirey33 Art</TitlebarDisplay>

        <p className="text-white md:text-xl">I really appreciate all the art that anyone makes for me! Everyone deserves their hard-work displayed, so this is where i&apos;ll put it :3</p>
        <p className="text-white md:text-xl">If you made any art of me/my characters, don&apos;t be afraid! Tell me and i&apos;ll immediately put it here!! :3</p>

        <ImageViewer urlLink="main" />
      </div>
    </>
  );

};
