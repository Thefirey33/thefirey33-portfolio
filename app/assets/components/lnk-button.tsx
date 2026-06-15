'use client';

import { Url } from "next/dist/shared/lib/router/router";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export const LinkButton = ({ href, icon, enabled = true, children }: { href: Url, icon?: StaticImageData, enabled?: boolean, children: ReactNode }) => {
    const isPathNameEqual = usePathname() === href;

    return (
        <Link tabIndex={enabled ? -1 : undefined} aria-disabled={!enabled} className={`btn gap-4 ${!enabled && 'pointer-events-none opacity-50'} ${isPathNameEqual && 'bg-(--border-color) text-black'} group text-center flex flex-row justify-center items-center`} href={href}>
            {
                icon &&
                <Image src={icon} width={20} height={20} className={`group-hover:invert ${isPathNameEqual && 'invert'} transition`} alt="Icon" />
            }
            {children}
        </Link>

    );
}