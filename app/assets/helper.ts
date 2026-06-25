// The maximum width for the top panel before MobileMode.
export const MaxWidth = 1400;

// The maximum width for elements in the website.
export const MaxWidthWebsite = 800;
export interface ArtInformation {
  author: string;
  path: string;
}

export interface FileTree {
  name: string;
  type: "file" | "directory";
  path: string;
  children?: FileTree[];
}

export async function GetArtReference(link: string) {
  const importedArts: ArtInformation[] = [];

  const response = await fetch(`/api/arts?imglink=${link}`);
  const result = await response.json();

  const files = result.files;
  if (files instanceof Array) {
    for (let i = 0; i < files.length; i++) {
      const fileEntryRef: FileTree = files[i];
      if (!fileEntryRef.children) return;

      for (let i = 0; i < fileEntryRef.children.length; i++) {
        const entry = fileEntryRef.children[i];

        importedArts.push({
          author: fileEntryRef.name,
          path: `/${link}/${entry.path}`,
        });
      }
    }
  }

  return importedArts;
}
