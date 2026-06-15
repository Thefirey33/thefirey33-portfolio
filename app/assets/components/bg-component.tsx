'use client';

import Image, { StaticImageData } from "next/image";

export const BackgroundComponent = ({ Background, className }: { Background: StaticImageData, className?: string }) => {


    return (
        <>
            <Image
                src={Background}
                alt="Background"
                className={`min-w-screen min-h-screen left-0 top-0 -z-20 fixed object-cover select-none ${className}`}
                loading="eager"
                style=
                {
                    {
                        imageRendering: 'pixelated'
                    }
                }
            />
        </>
    );
}