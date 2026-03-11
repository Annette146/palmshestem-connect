import { motion } from "framer-motion";
import { Heart, Globe, Users, BookOpen, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const values = [
  { icon: Heart, title: "Inclusivity", desc: "Every girl deserves access to STEM, regardless of location or background." },
  { icon: Globe, title: "Accessibility", desc: "Resources available via web, mobile, USSD, and QR codes." },
  { icon: Users, title: "Community", desc: "Building a network of women supporting women in STEM." },
  { icon: BookOpen, title: "Quality Education", desc: "Free, high-quality learning aligned with SDG 4 & SDG 5." },
];

const team = [
  { name: "Palma Esther", role: "Founder & CEO", initials: "PE" },
  { name: "Kemi Adeyemi", role: "Head of Mentorship", initials: "KA" },
  { name: "Fatima Al-Zahra", role: "STEM Curriculum Lead", initials: "FA" },
  { name: "Grace Otieno", role: "Community Manager", initials: "GO" },
];

const About = () => (
  <div className="min-h-screen">
    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            About PALM SheHub
          </h1>
          <p className="text-primary-foreground/70 text-lg">
            Bridging the gender gap in STEM by empowering girls and women with mentorship, scholarships, and accessible education.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl font-heading font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          PALM SheHub exists to ensure every girl and woman — regardless of geography, internet access, or economic status — can pursue and thrive in STEM. We connect underserved communities with mentors, scholarships, free learning, and career opportunities.
        </p>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-heading font-bold text-center mb-10">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card text-center"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-heading font-bold text-center mb-10">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-3 text-primary-foreground font-heading font-bold text-xl">
                {member.initials}
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm">{member.name}</h4>
              <p className="text-xs text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-2xl font-heading font-bold text-center mb-8">Get in Touch</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Input placeholder="Your name" />
            <Input placeholder="Email address" type="email" />
          </div>
          <Textarea placeholder="Your message..." rows={4} />
          <Button className="w-full">Send Message</Button>
        </div>
        <div className="flex justify-center gap-6 mt-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> hello@palmshehub.org</span>
          <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Nairobi, Kenya</span>
        </div>
      </div>
    </section>
  </div>
);

export default About;
