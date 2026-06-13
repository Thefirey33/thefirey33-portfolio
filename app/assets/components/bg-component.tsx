'use client';

import Image, { StaticImageData } from "next/image";

export const BackgroundComponent = ({ Background }: { Background: StaticImageData }) => {


    console.log("Component OK")

    return (
        <Image
            src={Background}
            alt="Background"
            className={`w-screen h-screen left-0 top-0 -z-20 fixed object-cover`}

            style=
            {
                {
                    imageRendering: 'pixelated'
                }
            }
        />
    );
}