import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-6">ZenX Web Solutions</h3>
          <p className="text-gray-700 font-semibold mb-4">Stay up to date</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button className="bg-[#6633d4] hover:opacity-90 transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zenx-text-gray">
          {/* Language Dropdown */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <select
              className="appearance-none border border-gray-300 rounded px-3 py-2 text-base bg-white text-gray-800 dark:bg-zinc-900 dark:text-white"
              defaultValue="en"
              onChange={(e) => {
                const selectedLang = e.target.value;
                console.log("Selected language:", selectedLang);
              }}
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="bn">বাংলা</option>
            </select>
          </div>

          {/* Copyright */}
          <div className="text-center text-base font-semibold">
            <p>© 2025 ZenX Web Solutions.</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5 hover:text-blue-500" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 hover:text-gray-800" />
            </a>
            <a
              href="https://linkedin.com/company/zenx-web-solutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:text-blue-700" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
