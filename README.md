# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This template includes sections for your introduction, about, work/projects, and contact information.

## 🚀 Features

- **Modern UI/UX** with responsive design
- **Smooth scrolling** navigation
- **Project showcase** with tags and links
- **Contact form** (frontend only - needs backend integration)
- **Dark mode** ready (toggle coming soon)
- **Performance optimized** with Next.js
- **Type-safe** with TypeScript
- **Easily customizable** components

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## ✨ Customization

1. **Update your information**
   - Update your name, title, and description in `src/components/Hero.tsx`
   - Add your bio and skills in `src/components/About.tsx`
   - Add your projects in `src/components/Work.tsx`
   - Update contact information in `src/components/Contact.tsx` and `src/components/Footer.tsx`

2. **Styling**
   - Colors and spacing can be customized in the respective component files using Tailwind CSS classes
   - The primary color is set to indigo-600 throughout the site

3. **Add your own images**
   - Place your profile image in `public/images/` and update the reference in `About.tsx`
   - Update project images in the `projects` array in `Work.tsx`

## 📦 Dependencies

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Hero Icons](https://heroicons.com/) - Beautiful icons
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 🚀 Deployment

Deploy your portfolio to Vercel, Netlify, or any static hosting service:

1. **Vercel**
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/personal-website)

2. **Netlify**
   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/personal-website)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Hero Icons](https://heroicons.com/)

---

💡 **Tip**: Don't forget to update the repository URL in this README with your actual GitHub repository URL when you fork or clone this project.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
