# EcoValue Chain – Landing Page

EcoValue Chain is a youth-led social enterprise transforming water hyacinth—one of Bangladesh’s most invasive aquatic plants—into sustainable natural fiber for climate‑resilient products and community livelihoods.

This repository contains the marketing/landing website built with React on top of the [Landy React Template][web:184].

---

## ✨ Features

- **Mission storytelling**  
  Clearly explains EcoValue Chain’s vision, problem statement, and “Pollution to Purpose” solution using structured content blocks.

- **Product metrics card**  
  A dedicated product section for *Water Hyacinth Fiber Sheets* that shows:
  - Unit price  
  - Current stock  
  - Total sold  

- **Eco branding & theming**  
  - Custom EcoValue Chain logo and favicon (`ecovaluechain-logo.svg`).  
  - Phthalo green and bone palette for a calm, nature‑inspired UI.

- **Contact & mail integration**  
  Contact form that opens the user’s mail client pre‑filled with name, email, and message for quick outreach.

- **Social link**  
  Intro section includes a Facebook icon linking to the official EcoValue Chain share page.

---

## 🧱 Tech Stack

- **React** (CRA)  
- **TypeScript**  
- **Ant Design** for grid/layout (`Row`, `Col`, `Drawer`)  
- **styled-components** for styling  
- **react-awesome-reveal** for subtle animations  
- **react-i18next** for text translation support

---

## 📂 Project Structure (high level)

- `public/`
  - `ecovaluechain-logo.svg` – site favicon and primary logo  
  - `img/svg/` – hero/section images, product image, social icons (e.g. `Product.jpeg`, `facebook-svgrepo-com.svg`, `Abouteco.jpeg`)

- `src/content/`
  - `IntroContent.json` – hero section text and buttons  
  - `MiddleBlockContent.json` – “Pollution to Purpose” block  
  - `AboutContent.json`, `MissionContent.json`, `ProductContent.json`, `ContactContent.json` – main sections  
  - `SolutionProduct.ts` – data for the product metrics card

- `src/components/`
  - `Header/` – top navigation with EcoValue Chain logo and anchors  
  - `ContentBlock/` – reusable section layout (image + text + CTA / services / product card)  
  - `MiddleBlock/` – centered text block used for the solution/problem narrative  
  - `ContactForm/` – contact section with validation and mailto integration  
  - `common/` – shared `Button`, `Input`, `TextArea`, `SvgIcon`, and layout helpers

- `src/pages/Home/`
  - `index.tsx` – assembles all sections into the single‑page layout (Intro, About, Mission, Product, Contact)

---

