import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full px-4 py-8 bg-gradient-to-t from-black/80 via-black/60 to-black/20 backdrop-blur-md border-t border-white/10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo or Name (optional) */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/10 text-white font-semibold flex items-center justify-center">
            Yash 
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-white">
          <a
            href="https://github.com/YashChauhan-2303"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-chauhan-465644274/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:yashchauhan.2303@gmail.com"
            className="hover:text-purple-400 transition"
          >
            <Send className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
