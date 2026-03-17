import { motion } from "framer-motion";
import { Search, Calendar, Globe, GraduationCap, ArrowRight, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const scholarships = [
  { title: "Women in Tech ", org: "Google.org", field: "Computer Science", country: "Pan-African", deadline: "Apr 30, 2026", level: "Undergraduate" },
  { title: "Shecode Africa", org: "UNESCO", field: "Engineering", country: "Global", deadline: "May 15, 2026", level: "Masters" },
 { title: "She Leads", org: "AfriLabs", field: "Software Dev", country: "Nigeria, Kenya, Ghana", deadline: "Jun 1, 2026", level: "High School" },
  { title: "Women in Sustainable Stem Africa", org: "WHO", field: "Biomedical Sciences", country: "Global", deadline: "Jul 20, 2026",  level: "PhD" },
  { title: "Codada", org: "Microsoft", field: "Cloud Computing", country: "East Africa", deadline: "May 30, 2026",  level: "Undergraduate" },
  { title: "Women TechMakers", org: "UN Women", field: "Any STEM", country: "Global", deadline: "Aug 10, 2026", level: "Masters" },
];

const Scholarships = () => (
  <div className="min-h-screen">
    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Scholarship Finder
          </h1>
          <p className="text-primary-foreground/70 text-lg mb-8">
            Discover scholarships designed to support women and girls pursuing STEM education.
          </p>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search scholarships..." className="pl-10 bg-background/90" />
            </div>
            <Button>Search</Button>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-4">
          {scholarships.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-border bg-card shadow-card hover:border-primary/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-lg text-foreground">{s.title}</h3>
                    <Badge variant="secondary" className="text-xs">{s.level}</Badge>
                  </div>
                  <p className="text-sm text-primary font-medium mb-2">{s.org}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><GraduationCap className="h-3.5 w-3.5" />{s.field}</span>
                    <span className="flex items-center gap-1"><Globe className="h-3.5 w-3.5" />{s.country}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{s.deadline}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-heading font-bold text-foreground">{s.amount}</span>
                  <Button variant="outline" size="icon"><Bookmark className="h-4 w-4" /></Button>
                  <Button>Apply <ArrowRight className="ml-1 h-4 w-4" /></Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Scholarships;
