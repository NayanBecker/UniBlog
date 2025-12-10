/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ParsedMultipart {
    fields: Record<string, any>;
    fileBuffer: Buffer | null;
    fileName: string | null;
}

export async function parseMultipart(request: any): Promise<ParsedMultipart> {
    const parts = request.parts();
    const fields: Record<string, any> = {};
    let fileBuffer: Buffer | null = null;
    let fileName: string | null = null;

    for await (const part of parts) {
        if (part.type === 'file') {
            fileBuffer = await part.toBuffer();
            fileName = part.filename;
        } else {
            fields[part.fieldname] = part.value;
        }
    }

    return { fields, fileBuffer, fileName };
}
