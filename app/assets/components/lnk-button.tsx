'use client';

import { Url } from "next/dist/shared/lib/router/router";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export const LinkButton = ({ href, icon, children }: { href: Url, icon?: StaticImageData, children: ReactNode }) => {
    const isPathNameEqual = usePathname() === href;

    return (
        <Link className={`btn gap-4 ${isPathNameEqual ? 'bg-(--border-color) text-black' : ''} group text-center flex flex-row justify-center items-center justify-center`} href={href}>
            {
                icon &&
                <Image src={icon} width={20} height={20} className={`group-hover:invert ${isPathNameEqual ? 'invert' : ''} transition`} alt="Icon" />
            }
            {children}
        </Link>

    );
}