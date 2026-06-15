// The maximum width for the top panel before MobileMode.
export const MaxWidth = 1400;

// The maximum width for elements in the website.
export const MaxWidthWebsite = 800;

export interface FileTree {
    name: string;
    type: 'file' | 'directory';
    path: string;
    children?: FileTree[];
}