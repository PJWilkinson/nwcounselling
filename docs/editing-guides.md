# How to Edit Guide Content

A simple guide for editing the counselling guides on the NW Counselling website.

---

## What are these files?

The guides on the website (like the ADHD guide) are written in **Markdown** — a simple way to format text using plain characters. The files live in the `content/guides/` folder and end in `.md`.

---

## How to edit a guide

### Option 1: Edit on GitHub (easiest)

1. Go to [github.com/PJWilkinson/nwcounselling](https://github.com/PJWilkinson/nwcounselling)
2. Navigate to `content` → `guides` → click the file you want to edit
3. Click the **pencil icon** (top right of the file content)
4. Make your changes
5. Scroll down, add a brief description of what you changed
6. Click **"Commit changes"**

The website will automatically rebuild with your changes (takes ~1-2 minutes).

---

## Markdown Cheatsheet

Here's everything you can use in the guides:

### Headings

```
## Main Section Heading

### Smaller Sub-heading
```

Use `##` for main sections, `###` for sub-sections within those.

---

### Bold and Italic

```
This is **bold text** for emphasis.

This is *italic text* for softer emphasis.
```

**Result:**
- This is **bold text** for emphasis.
- This is *italic text* for softer emphasis.

---

### Bullet Lists

```
- First point
- Second point
- Third point
```

**Result:**
- First point
- Second point
- Third point

Start each line with a dash and a space.

---

### Paragraphs

Just write normally. Leave a blank line between paragraphs:

```
This is the first paragraph. It can be as long as you like.

This is the second paragraph. The blank line above creates the separation.
```

---

### Horizontal Lines (Section Dividers)

```
---
```

Three dashes on their own line creates a subtle dividing line between sections.

---

## Guide Structure

Each guide should follow this structure:

```
# Guide Title Goes Here

## Key takeaways

- Main point one
- Main point two
- Main point three

---

Opening paragraph that connects with the reader...

---

## First Main Section

Content here...

### Sub-section if needed

More content...

---

## Second Main Section

And so on...

---

## About the author

*Nadia Wilkinson is a BACP registered counsellor...*

---

**References:**

- Reference one
- Reference two
```

---

## Tips

1. **Preview your changes** — GitHub shows a "Preview" tab when editing
2. **Keep paragraphs short** — Easier to read on screens
3. **Use headings generously** — Helps readers scan and find sections
4. **Leave blank lines** — Between paragraphs, before/after headings, before/after lists

---

## What NOT to use

The website's markdown parser is intentionally simple. These features **won't work**:

- ❌ Links: `[text](url)` — won't render as clickable
- ❌ Images: `![alt](image.jpg)` — won't display
- ❌ Code blocks: ``` — won't format
- ❌ Tables — won't render
- ❌ Numbered lists: `1. 2. 3.` — use bullet points instead

If you need any of these features, ask a developer to add support.

---

## Need help?

If something looks wrong after editing, you can:
1. Go back to the file on GitHub
2. Click "History" to see previous versions
3. Revert to an earlier version if needed

Or just ask for help — the content is version-controlled, so nothing is ever truly lost.
