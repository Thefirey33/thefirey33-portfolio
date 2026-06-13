'use client';

import { createContext, Dispatch, useContext, useState } from "react";

const MobileContext = createContext<{ isMobile: boolean, setIsMobile: Dispatch<React.SetStateAction<boolean>> } | undefined>(undefined);

export function MobileProvider({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);


    return (
        <MobileContext.Provider value={{ isMobile, setIsMobile }}>
            {children}
        </MobileContext.Provider>
    )
}

export const useMobile = () => {
    // The mobile context hook for mobile stuff.
    const context = useContext(MobileContext)

    if (context === undefined) {
        throw new Error("useMobile must be called with a Provider!")
    }

    return context;
}