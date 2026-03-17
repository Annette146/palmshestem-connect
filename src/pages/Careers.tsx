import { motion } from "framer-motion";
import { Briefcase, FileText, Target, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const careerPaths = [
  { title: "Software Engineer", demand: "Very High", salary: "$60K–$150K", growth: "+25%", skills: ["Python", "JavaScript", "System Design"] },
  { title: "Data Scientist", demand: "High", salary: "$70K–$140K", growth: "+36%", skills: ["Statistics", "Machine Learning", "SQL"] },
  { title: "Backend Developer", demand: "High", salary: "$65K–$120K", growth: "+10%", skills: ["Node.js", "MySQL", "MongoDB"] },
  { title: "Cybersecurity Analyst", demand: "Very High", salary: "$65K–$130K", growth: "+35%", skills: ["Networking", "Security", "Risk Assessment"] },
  { title: "UX/UI Designer", demand: "High", salary: "$55K–$110K", growth: "+13%", skills: ["Figma", "User Research", "Prototyping"] },
  { title: "Blockchain Developer", demand: "Very High", salary: "$60K–$100K", growth: "+4%", skills: ["Blockchain", "Smart Contracts", "Cryptography"] },
];

const tips = [
  "Tailor your resume to each job application",
  "Practice coding challenges on LeetCode or HackerRank",
  "Build a portfolio of projects on GitHub",
  "Network at STEM conferences and meetups",
  "Prepare STAR-method answers for behavioral interviews",
  "Research the company culture before your interview",
];

const Careers = () => (
  <div className="min-h-screen">
    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Career Guidance Center
          </h1>
          <p className="text-primary-foreground/70 text-lg">
            Explore STEM careers, take assessments, find internships, and get expert advice for your journey.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Quick tools */}
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Target, label: "Career Quiz", desc: "Find your ideal path" },
            { icon: FileText, label: "Resume Builder", desc: "Stand out from the crowd" },
            { icon: Briefcase, label: "Internships", desc: "Gain real experience" },
            { icon: Building2, label: "Programs", desc: "University recommendations" },
          ].map((tool, i) => (
            <motion.div
              key={tool.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card shadow-card text-center cursor-pointer hover:border-primary/30 hover:shadow-primary/10 transition-all"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-3">
                <tool.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm">{tool.label}</h3>
              <p className="text-xs text-muted-foreground mt-1">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Career Paths */}
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-heading font-bold mb-8">Explore STEM Careers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((career, i) => (
            <motion.div
              key={career.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-border bg-card shadow-card"
            >
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{career.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="text-xs">Demand: {career.demand}</Badge>
                <Badge variant="outline" className="text-xs">Growth: {career.growth}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Salary range: <span className="font-semibold text-foreground">{career.salary}</span></p>
              <div className="flex flex-wrap gap-1.5">
                {career.skills.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Tips */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl font-heading font-bold mb-8 text-center">Resume & Interview Tips</h2>
        <div className="space-y-3">
          {tips.map((tip) => (
            <div key={tip} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Careers;
