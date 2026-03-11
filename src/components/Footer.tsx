import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-heading font-bold mb-4">
            <span className="text-gradient">PALM</span> SheHub
          </h3>
          <p className="text-background/60 text-sm leading-relaxed">
            Empowering girls and women in STEM through mentorship, scholarships, and accessible learning.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Platform</h4>
          <div className="space-y-2 text-sm text-background/60">
            <Link to="/mentorship" className="block hover:text-background">Mentorship</Link>
            <Link to="/scholarships" className="block hover:text-background">Scholarships</Link>
            <Link to="/stem-hub" className="block hover:text-background">STEM Hub</Link>
            <Link to="/careers" className="block hover:text-background">Careers</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Access</h4>
          <div className="space-y-2 text-sm text-background/60">
            <Link to="/access" className="block hover:text-background">USSD Access</Link>
            <Link to="/access" className="block hover:text-background">QR Codes</Link>
            <span className="block">Dial *123#</span>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Connect</h4>
          <div className="space-y-2 text-sm text-background/60">
            <Link to="/about" className="block hover:text-background">About Us</Link>
            <a href="#" className="block hover:text-background">Twitter</a>
            <a href="#" className="block hover:text-background">LinkedIn</a>
            <a href="mailto:hello@palmshehub.org" className="block hover:text-background">Contact</a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/40">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart className="h-4 w-4 text-destructive fill-destructive" /> for girls everywhere
        </p>
        <p className="mt-1">© 2026 PALM SheHub. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
