// Titlebar for each section of the stuff.

export default function TitlebarDisplay({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1 className="text-black bg-white lg:text-4xl text-2xl font-bold flex flex-row justify-center">{children}</h1>
            <hr className="border border-white" />
        </>
    );
}