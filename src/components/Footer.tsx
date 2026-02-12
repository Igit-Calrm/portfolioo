export default function Footer() {
  return (
    <footer className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-md py-8 border-t border-white/20 dark:border-white/5 mt-20">
      <div className="container mx-auto px-6 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p className="font-medium">© {new Date().getFullYear()} Carl Vincent Maloles. All rights reserved.</p>
        <p className="mt-2 opacity-80">Built with Next.js, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  );
}
