# Page Studio

A schema-driven landing page builder built with **Next.js App Router**, **TypeScript**, **Redux Toolkit**, and **Contentful**.

The application enables authorized users to preview, edit, and publish landing pages using a lightweight WYSIWYG editor while following a registry-based architecture.

---

# Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Redux Toolkit
- Contentful CMS
- Tailwind CSS
- shadcn/ui
- Zod
- dnd-kit
- Vitest
- Playwright
- GitHub Actions

---

# Features

## Schema Driven Rendering

- Registry-based section rendering
- Dynamic component lookup
- Zod schema validation
- Graceful fallback for unsupported sections
- Error-safe rendering

Supported sections:

- Hero
- Feature Grid
- Testimonial
- CTA

---

## Contentful Integration

Content is loaded from Contentful through a dedicated adapter layer.

Responsibilities are separated as follows:

```
UI
    ↓
Adapter
    ↓
Contentful SDK
```

This ensures no Contentful-specific logic exists inside UI components.

Supports:

- Published Content
- Preview Content

---

## Studio (WYSIWYG Lite)

Studio provides:

- Live Preview
- Property Editing
- Add Section
- Reorder Sections
- Draft Persistence
- Registry-driven editing

Supported property editing:

- Hero
- CTA
- Feature Grid
- Testimonial

State is managed entirely through Redux Toolkit.

---

# Redux Slice Responsibilities

## draftPage

Responsible for:

- Current draft page
- Section updates
- Add section
- Reorder sections
- Dirty state

---

## ui

Responsible for:

- Selected section
- Sidebar state
- Loading/Error UI

---

## publish

Responsible for:

- Publish status
- Current version
- Publish summary

---

# Architecture

```
Contentful

      │

      ▼

Adapter

      │

      ▼

Redux Draft

      │

      ▼

Section Registry

      │

      ▼

Dynamic Renderer

      │

      ▼

Preview
```

The application follows a registry pattern where each section defines:

- Component
- Editor
- Schema
- Default Props

Adding a new section only requires updating the registry.

---

# Content Model

```
Page

pageId

slug

title

sections[]

Section

id

type

props
```

Section types:

- hero
- featureGrid
- testimonial
- cta

---

# Publish Flow

Publishing follows the following pipeline:

```
Draft Page

↓

Schema Validation

↓

Published Page

↓

Diff Engine

↓

SemVer Decision

↓

Snapshot Generation

↓

Release JSON
```

---

# SemVer Logic

| Change                 | Version |
| ---------------------- | ------- |
| Text / Property Change | Patch   |
| Section Added          | Minor   |
| Section Removed        | Major   |
| Section Type Changed   | Major   |

---

# Immutable Releases

Each successful publish generates an immutable snapshot.

Example:

```
releases/

home/

1.0.0.json

1.0.1.json

1.1.0.json
```

Each snapshot contains:

- Version
- Timestamp
- Change Summary
- Complete Page Schema

---

# RBAC

Supported roles:

### Viewer

- Preview only
- Cannot access Studio

### Editor

- Can edit pages
- Cannot publish

### Publisher

- Full access
- Can publish releases

Route protection is implemented using Next.js Middleware.

---

# Accessibility

The application has been developed following WCAG-oriented practices.

Implemented:

- Keyboard navigable UI
- Focus states
- Semantic headings
- Accessible forms
- Color contrast using Tailwind defaults

---

# Folder Structure

```
app/

components/

features/

hooks/

lib/

registry/

schemas/

store/

types/

releases/

tests/
```

---

# Running Locally

Clone the repository

```
git clone <repository-url>
```

Install dependencies

```
npm install
```

Configure environment variables

```
CONTENTFUL_SPACE_ID=

CONTENTFUL_ACCESS_TOKEN=

CONTENTFUL_PREVIEW_ACCESS_TOKEN=

CONTENTFUL_ENVIRONMENT=
```

Run development server

```
npm run dev
```

Open

```
http://localhost:3000
```

---

# Scripts

```
npm run dev

npm run build

npm run lint

npm run test

npm run playwright
```

---

# Trade-offs & Assumptions

- Local filesystem is used for release snapshots for simplicity.
- Authentication is mocked using role cookies for RBAC demonstration.
- Section editing currently supports the predefined section types.
- The application focuses on architecture, maintainability, and separation of concerns over advanced visual editing.

---

# Future Improvements

- Full authentication
- Contentful publish integration
- Rich text editor
- Advanced drag-and-drop interactions
- Undo / Redo
- Version history UI
- Snapshot rollback
- Expanded test coverage
- Automated CI accessibility reporting

---

# Author

**Shreyas Kallurkar**

Frontend / Full Stack Developer

Email: [kshreyas495@gmail.com](mailto:kshreyas495@gmail.com)

LinkedIn: https://linkedin.com/in/shreyaskallurkar
