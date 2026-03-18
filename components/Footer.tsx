import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold text-purple-600 mb-4">
              NOVA
            </h3>
            <p className="text-sm text-slate-500">
              Building modern tools to help teams grow faster and smarter.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="#">Updates</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">
              Follow
            </h4>
            <div className="flex gap-4 text-slate-400">
              <Twitter className="hover:text-purple-600 cursor-pointer" />
              <Github className="hover:text-purple-600 cursor-pointer" />
              <Linkedin className="hover:text-purple-600 cursor-pointer" />
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
          © {year} Nova. All rights reserved.
        </div>

      </div>
    </footer>
  );
}