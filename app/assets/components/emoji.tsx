import Image, { StaticImageData } from "next/image";

export default function Emoji({ href }: { href: string | StaticImageData }) {
    return <Image src={href} alt="Emoji" width={32} height={32} />
};