type FileResult = {
  name: string;
  handle: FileSystemDirectoryHandle | FileSystemFileHandle;
  kind: string;
};

async function listAllFilesAndDirs(
  dirHandle: FileSystemDirectoryHandle
): Promise<FileResult[]> {
  const files: FileResult[] = [];
  for await (const [name, handle] of dirHandle) {
    const { kind } = handle;
    if (handle.kind === "directory") {
      files.push({ name, handle, kind });
      files.push(...(await listAllFilesAndDirs(handle)));
    } else {
      files.push({ name, handle, kind });
    }
  }
  return files;
}

export class FileLoader {
  async selectDirectory() {
    try {
      const directoryHandle = await window.showDirectoryPicker();
      const files = await listAllFilesAndDirs(directoryHandle);
      console.log("files", files);
    } catch (e) {
      console.error(e);
    }
  }
}
