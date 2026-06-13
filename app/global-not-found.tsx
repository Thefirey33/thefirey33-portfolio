import './globals.css'
import { Metadata } from "next";
import BarrensWallpaper from "./assets/img/wallpapers/barrens.png";
import Image from 'next/image';

// It is quite nice that you can customize the Not Found page as much as you want,
// But it's stupid that i have to write the entire DOM tree all over again.

export const metadata: Metadata = {
    title: "Thefirey33's Portfolio But You Entered The Wrong Route!",
    description: "A portfolio for Thefirey33's Projects and other silly things :3",
    openGraph: {
        title: "Thefirey33's Portfolio But You Entered The Wrong Route!",
        description: "A portfolio for Thefirey33's Projects and other silly things :3",
        url: 'https://thefirey33.vercel.app',
        siteName: "Thefirey33's Portfolio But You Entered The Wrong Route!",
        images: [{ url: 'https://thefirey33.vercel.app/content/siteBannerImage.png' }]
    },
};

export default function GlobalNotFound() {
    return (
        <html lang="en">
            <body className={`min-h-full flex flex-col vc-init overflow-hidden`}>
                <Image
                    src={BarrensWallpaper}
                    width={1920}
                    height={1080}
                    className='w-screen h-screen bg-repeat-round object-cover select-none fixed'
                    draggable={false}
                    alt='Background'
                    style=
                    {
                        {
                            imageRendering: `pixelated`
                        }
                    }
                >
                </Image>
            </body>
        </html >
    );
}