import './globals.css'
import { Metadata } from "next";
import BarrensWallpaper from "./assets/img/wallpapers/barrens.png";
import Image from 'next/image';
import localFont from 'next/font/local';

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

const websiteFont = localFont({
    src: "./assets/font/Terminus (TTF) 500.ttf",
    variable: "--font-terminus"
})

export default function GlobalNotFound() {
    return (
        <html lang="en" className={`${websiteFont.className} h-full antialiased`}>
            <body className={`min-h-full flex flex-col vc-init`}>
                <Image
                    src={BarrensWallpaper}
                    width={1920}
                    height={1080}
                    className='w-screen h-screen bg-repeat-round object-cover select-none fixed -z-20'
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

                <div className='m-auto items-center flex flex-col text-white'>
                    <p className='text-white text-4xl'>Not found!</p>
                    <p className='text-xl'>It&apos;s only a barrens around here...</p>
                </div>
            </body>
        </html >
    );
}