> [!IMPORTANT]
> ### 📦 This repository has moved!
>
> Active development and maintenance of **`@m2d/html`** has moved to the unified **[md2docx](https://github.com/md2docx/md2docx)** monorepo.
>
> - 🏠 **Monorepo:** [github.com/md2docx/md2docx](https://github.com/md2docx/md2docx)
> - 📂 **Package Source:** [`packages/html`](https://github.com/md2docx/md2docx/tree/main/packages/html)
> - 📖 **Documentation:** [md2docx.js.org/docs/html](https://md2docx.js.org/docs/html)
> - 💬 **Issues & Pull Requests:** Please submit all new issues, feedback, and PRs in the [md2docx issue tracker](https://github.com/md2docx/md2docx/issues).
>
> *This standalone repository is now archived and retained for historical reference only. Releases and npm updates continue from the monorepo.*

---

# `@m2d/html` <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" height="40"/>

[![test](https://github.com/md2docx/html/actions/workflows/test.yml/badge.svg)](https://github.com/md2docx/html/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/md2docx/html/graph/badge.svg)](https://codecov.io/gh/md2docx/html)
[![Version](https://img.shields.io/npm/v/@m2d/html?color=green)](https://www.npmjs.com/package/@m2d/html)
![Downloads](https://img.shields.io/npm/d18m/@m2d/html)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@m2d/html)

> Parses embedded **HTML** into extended **MDAST nodes** to unlock full HTML-to-DOCX conversion support.

---

## 📦 Installation

```bash
npm install @m2d/html
```

```bash
pnpm add @m2d/html
```

```bash
yarn add @m2d/html
```

---

## 🚀 Overview

The `@m2d/html` plugin for [`mdast2docx`](https://github.com/mayankchaudhari/mdast2docx) enables the parsing and transformation of **embedded raw HTML** inside Markdown into **extended MDAST**. This unlocks the ability to support features like images, tables, checkboxes, styles, and more — using HTML tags directly inside your Markdown documents.

---

## ⚠️ Important

> **This plugin must be registered early in the plugin pipeline.**  
> It transforms raw HTML into extended MDAST nodes, which are then handled by other `@m2d/*` plugins (such as `@m2d/image`, `@m2d/table`, etc).  
> If used after other plugins, the HTML content, e.g, images, tables, or lists may be ignored or lost in the DOCX output.

---

## 🛠️ Usage

```ts
import { htmlPlugin } from "@m2d/html";

const plugins = [
  htmlPlugin(), // ✅ Must come first
  imagePlugin(),
  tablePlugin(),
];
```

---

## 🧩 How It Works

1. Parses raw embedded HTML using the DOM.
2. Converts DOM nodes to extended MDAST nodes.
3. Other `@m2d/*` plugins or the `@m2d/core` package consume these extended nodes to generate DOCX output.

> This plugin enriches the AST to enable other plugins and core engine to convert it to docx.

---

## ✅ Supported Elements

| HTML Element              | MDAST Node        | Notes                                |
| ------------------------- | ----------------- | ------------------------------------ |
| `<img>`                   | `image`           | Supports styles and attributes       |
| `<br>`                    | `break`           | Line breaks                          |
| `<strong>`, `<b>`         | `strong`          | Bold text                            |
| `<em>`, `<i>`             | `emphasis`        | Italics                              |
| `<del>`, `<s>`            | `delete`          | Strike-through                       |
| `<a>`                     | `link`            | Hyperlinks                           |
| `<table>`                 | `table`, `row`    | Basic tables supported               |
| `<input type="checkbox">` | `checkbox`        | Readonly checkboxes                  |
| `<hr>`                    | `thematicBreak`   | Horizontal line                      |
| `<blockquote>`            | `blockquote`      | Blockquotes                          |
| Others                    | `paragraph`, etc. | Styled or inline nodes with rich AST |

---

## 🎨 Style Support

- `text-align`, `color`, `background-color`
- `font-weight`, `font-style`, `text-decoration`
- `text-transform`
- `border`, `border-left`, etc.
- `display: inline-block` and similar behaviors

---

## ⚠️ Limitations

- External `<style>` tags or CSS files are not supported.
- Complex or deeply nested HTML may be simplified.
- Table `rowSpan` and `colSpan` are not yet supported.
- Script tags and non-visual elements are ignored.

---

## 🧪 Production Ready

While this plugin was originally experimental, it is now **stable and production-ready**.  
It powers the rich HTML support in `mdast2docx`, including checkboxes, tables, and styled images.

> 🧵 **Contributions, ideas, and feedback are welcome!** Open an issue or PR anytime.

---

## 🔌 Related Plugins/Packages

| Plugin                                               | Purpose                                |
| ---------------------------------------------------- | -------------------------------------- |
| [`@m2d/core`](https://npmjs.com/package/@m2d/core)   | Converts extended MDAST to DOCX        |
| [`@m2d/image`](https://npmjs.com/package/@m2d/image) | Renders image nodes to DOCX            |
| [`@m2d/table`](https://npmjs.com/package/@m2d/table) | Renders table nodes to DOCX            |
| [`@m2d/list`](https://npmjs.com/package/@m2d/list)   | Enhanced list support (tasks, bullets) |

---

## ⭐ Support Us

If you find this useful:

- ⭐ Star [mdast2docx](https://github.com/tiny-md/mdast2docx) on GitHub
- ❤️ Consider [sponsoring](https://github.com/sponsors/mayank1513)

---

## 🧾 License

MIT © [Mayank Chaudhari](https://github.com/mayankchaudhari)

<p align="center">Made with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
