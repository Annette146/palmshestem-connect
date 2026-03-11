import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, GraduationCap, BookOpen, Briefcase, QrCode, Star, ArrowRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";
import heroImage from "@/assets/hero-image.jpg";

const features = [
  {
    icon: Users,
    title: "Mentorship",
    desc: "Connect with female STEM professionals for guidance and support.",
    link: "/mentorship",
  },
  {
    icon: GraduationCap,
    title: "Scholarships",
    desc: "Discover and apply for scholarships tailored to women in STEM.",
    link: "/scholarships",
  },
  {
    icon: BookOpen,
    title: "STEM Hub",
    desc: "Free coding tutorials, science lessons, and engineering courses.",
    link: "/stem-hub",
  },
  {
    icon: Briefcase,
    title: "Careers",
    desc: "Career assessments, internship listings, and interview tips.",
    link: "/careers",
  },
];

const successStories = [
  { name: "Amina K.", role: "Software Engineer at Google", quote: "PALM SheHub connected me with a mentor who changed my career trajectory." },
  { name: "Grace M.", role: "Biomedical Researcher", quote: "I found my PhD scholarship through this platform. Life-changing!" },
  { name: "Fatima O.", role: "Data Scientist", quote: "The STEM courses gave me the confidence to switch from arts to tech." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Women in STEM collaboration" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium mb-6 backdrop-blur-sm border border-primary-foreground/10">
              🌍 Empowering 10,000+ girls across Africa
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Unlock Your Future in{" "}
              <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                STEM
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-8 leading-relaxed">
              Mentorship, scholarships, learning resources, and career guidance — accessible to every girl, even without internet.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <Link to="/mentorship">Find a Mentor <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/scholarships">Explore Scholarships</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon={Users} value="500+" label="Mentors" delay={0} />
            <StatCard icon={GraduationCap} value="1,200+" label="Scholarships" delay={0.1} />
            <StatCard icon={BookOpen} value="350+" label="Free Courses" delay={0.2} />
            <StatCard icon={Star} value="10K+" label="Girls Empowered" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
              Everything You Need to Succeed
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              One platform connecting you to mentors, funding, learning, and careers in STEM.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={f.link}
                  className="block p-6 rounded-2xl border border-border bg-card shadow-card hover:shadow-primary/10 hover:border-primary/30 transition-all group h-full"
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <f.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-card"
              >
                <p className="text-muted-foreground italic mb-4 leading-relaxed">"{story.quote}"</p>
                <div>
                  <p className="font-heading font-semibold text-foreground">{story.name}</p>
                  <p className="text-sm text-muted-foreground">{story.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USSD / Access */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl gradient-hero p-10 md:p-16 text-center">
            <Smartphone className="h-12 w-12 text-primary-foreground/70 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              No Internet? No Problem.
            </h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8 text-lg">
              Dial <span className="font-mono font-bold text-primary-foreground">*123#</span> on any phone to access scholarships, mentorship, and STEM resources via SMS.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="hero" size="lg" asChild>
                <Link to="/access">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/access">
                  <QrCode className="mr-2 h-4 w-4" /> Scan QR Codes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
