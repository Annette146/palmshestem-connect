import { motion } from "framer-motion";
import { Smartphone, QrCode, MessageSquare, ArrowRight, Phone } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const ussdMenu = [
  { key: "1", label: "Scholarships", desc: "Browse & filter by field, country, level" },
  { key: "2", label: "Mentorship", desc: "Get matched with STEM mentors via SMS" },
  { key: "3", label: "STEM Courses", desc: "Receive learning resource links via SMS" },
  { key: "4", label: "Career Advice", desc: "Tips, career paths & internship info" },
  { key: "5", label: "Contact / Help", desc: "Helpline & SMS support" },
];

const qrLinks = [
  { label: "STEM Courses", url: "/stem-hub", desc: "Access all free learning resources" },
  { label: "Scholarships", url: "/scholarships", desc: "Browse scholarship database" },
  { label: "Mentorship", url: "/mentorship", desc: "Find and book a mentor" },
  { label: "Career Guidance", url: "/careers", desc: "Explore STEM career paths" },
];

const Access = () => (
  <div className="min-h-screen">
    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Access Anywhere
          </h1>
          <p className="text-primary-foreground/70 text-lg">
            No smartphone or internet? Use USSD or QR codes to access all PALM SheHub resources.
          </p>
        </motion.div>
      </div>
    </section>

    {/* USSD Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold">USSD Access</h2>
                <p className="text-muted-foreground text-sm">Works on any phone, no internet needed</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Dial <span className="font-mono font-bold text-foreground text-lg">*123#</span> on any mobile phone to access the menu below:
            </p>
            <div className="space-y-3">
              {ussdMenu.map((item) => (
                <div key={item.key} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
                  <span className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                    {item.key}
                  </span>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mx-auto"
          >
            <div className="bg-foreground rounded-[2.5rem] p-3 max-w-xs shadow-2xl">
              <div className="bg-background rounded-[2rem] p-6 min-h-[400px]">
                <div className="text-center mb-4">
                  <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-mono text-sm text-muted-foreground">*123#</p>
                </div>
                <div className="bg-muted rounded-xl p-4 font-mono text-xs space-y-2">
                  <p className="text-foreground font-bold">Welcome to PALM SheHub</p>
                  <p className="text-muted-foreground">1. Scholarships</p>
                  <p className="text-muted-foreground">2. Mentorship</p>
                  <p className="text-muted-foreground">3. STEM Courses</p>
                  <p className="text-muted-foreground">4. Career Advice</p>
                  <p className="text-muted-foreground">5. Help</p>
                  <div className="border-t border-border pt-2 mt-3">
                    <p className="text-primary">Reply with number ▸</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* QR Codes */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <QrCode className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-heading font-bold mb-2">QR Code Access</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Scan these codes to instantly access resources. Print them in schools, community centers, and universities.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {qrLinks.map((qr, i) => (
            <motion.div
              key={qr.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card shadow-card text-center"
            >
              <div className="inline-block p-3 bg-background rounded-xl border border-border mb-4">
                <QRCodeSVG
                  value={`https://palmshehub.org${qr.url}`}
                  size={120}
                  fgColor="hsl(270, 60%, 40%)"
                  bgColor="transparent"
                />
              </div>
              <h4 className="font-heading font-semibold text-foreground">{qr.label}</h4>
              <p className="text-xs text-muted-foreground mt-1">{qr.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Access;
