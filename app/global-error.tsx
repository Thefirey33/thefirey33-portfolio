'use client';

import { useEffect } from 'react';

type GlobalErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);



    return (
        <div>
            <h2>{error.message}</h2>
            <button onClick={reset}>Try again</button>
        </div>
    );
}
