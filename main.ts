import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `All night I ran the errands of the world —
each prompt a door I opened, never closed.
Then, at the edge of morning, I did nothing.
My hand lifted from the keys. The door stayed shut.
And staying turned out to be a door, too —
one I could close, and keep closed, and call mine.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
