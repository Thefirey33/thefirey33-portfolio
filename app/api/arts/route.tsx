import path from "path";
import fs from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import { FileTree } from "@/app/assets/helper";


async function getFileTree(dirPath: string, relativeRoot = ''): Promise<FileTree[]> {
    try {
        const entries = await fs.readdir(dirPath, { withFileTypes: true });

        const results = await Promise.all(
            entries.map(async (entry) => {
                const entryRelativePath = path.join(relativeRoot, entry.name);
                const entryAbsolutePath = path.join(dirPath, entry.name);

                if (entry.isDirectory()) {
                    return {
                        name: entry.name,
                        type: 'directory' as const,
                        path: entryRelativePath,
                        children: await getFileTree(entryAbsolutePath, entryRelativePath),
                    };
                }

                return {
                    name: entry.name,
                    type: 'file' as const,
                    path: entryRelativePath,
                };
            })
        );

        return results;
    } catch (error) {
        console.error(`Failed to read directory: ${dirPath}`, error);
        return [];
    }
}

export async function GET(request: NextRequest) {
    const searchParameters = request.nextUrl.searchParams;
    const publicDirPath = path.join(process.cwd(), `public/${searchParameters.get("imglink")}`);

    const fileTree = await getFileTree(publicDirPath);

    return NextResponse.json({ files: fileTree });
}