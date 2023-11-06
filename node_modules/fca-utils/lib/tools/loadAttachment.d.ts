/// <reference types="node" />
import type { Readable, Duplex, Transform } from "stream";
type ReadableStream = Readable | Duplex | Transform;
export default function loadAttachment(imagesSource: string[], skipFailed: boolean): Promise<ReadableStream[]>;
export {};
//# sourceMappingURL=loadAttachment.d.ts.map