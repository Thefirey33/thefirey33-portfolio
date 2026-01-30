import type { PageServerLoad } from './$types';
import catchphraseJsonData from '$lib/assets/json/catchphrases.json';
export const load = (async () => {
    let randomValueIfTrue = Math.random() * 2 >= 1.8;
    return {
        randomValue: randomValueIfTrue,
        catchphrase: randomValueIfTrue ? 'CMake is the worst build system ever made.' : catchphraseJsonData[Math.floor(Math.random() * catchphraseJsonData.length)]
    };
}) satisfies PageServerLoad;
