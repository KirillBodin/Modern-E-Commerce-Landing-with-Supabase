// components/Footer.tsx
import { Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-2">BrandName</h3>
          <p className="text-sm">
            Modern E-Commerce platform to discover and sell digital goods. Pay once, use forever.
          </p>
        </div>

        {/* Links */}
        <div className="flex space-x-8 justify-center">
          <div>
            <h4 className="text-white font-medium mb-2">Product</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#about" className="hover:text-white">About us</a></li>
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-white font-medium mb-2">Follow us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs">
        © {new Date().getFullYear()} BrandName. All rights reserved.
      </div>
    </footer>
  );
}
