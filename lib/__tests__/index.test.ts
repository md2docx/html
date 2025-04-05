import { describe, it, vi } from "vitest";
import { toDocx } from "@m2d/core"; // Adjust path based on your setup
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import fs from "fs";
import { htmlPlugin } from "../src";

const markdown = fs.readFileSync("../sample.md", "utf-8");

describe.concurrent("toDocx", () => {
  const mdast = unified().use(remarkParse).use(remarkGfm).parse(markdown);

  it("should handle html", async ({ expect }) => {
    const docxBlob = await toDocx(mdast, {}, { plugins: [htmlPlugin()] });
    expect(docxBlob).toBeInstanceOf(Blob);
  });

  /**
   * Check if all the console.log are removed
   */
  it("should not have any console.log", async ({ expect }) => {
    const consoleSpy = vi.spyOn(console, "log");
    await toDocx(mdast, {}, { plugins: [htmlPlugin()] });
    expect(consoleSpy).not.toHaveBeenCalled();
  });
});
