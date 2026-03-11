import { motion } from "framer-motion";
import { Code, Microscope, Cpu, Wrench, PlayCircle, FileText, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const categories = [
  { icon: Code, label: "Coding", count: 85, color: "from-purple-500 to-indigo-500" },
  { icon: Microscope, label: "Science", count: 62, color: "from-blue-500 to-cyan-500" },
  { icon: Cpu, label: "Technology", count: 48, color: "from-pink-500 to-rose-500" },
  { icon: Wrench, label: "Engineering", count: 55, color: "from-amber-500 to-orange-500" },
];

const courses = [
  { title: "Python for Beginners", category: "Coding", level: "Beginner", duration: "6 hours", type: "Video", lessons: 24 },
  { title: "Introduction to Biology", category: "Science", level: "Beginner", duration: "4 hours", type: "PDF + Video", lessons: 16 },
  { title: "Web Development Bootcamp", category: "Coding", level: "Intermediate", duration: "12 hours", type: "Video", lessons: 48 },
  { title: "Electronics & Circuits", category: "Engineering", level: "Beginner", duration: "5 hours", type: "Video", lessons: 20 },
  { title: "Data Science with R", category: "Technology", level: "Advanced", duration: "10 hours", type: "Video", lessons: 36 },
  { title: "Robotics Fundamentals", category: "Engineering", level: "Intermediate", duration: "8 hours", type: "PDF + Video", lessons: 30 },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-blue-100 text-blue-700",
  Advanced: "bg-purple-100 text-purple-700",
};

const StemHub = () => (
  <div className="min-h-screen">
    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            STEM Learning Hub
          </h1>
          <p className="text-primary-foreground/70 text-lg">
            Free coding tutorials, science lessons, engineering courses, and more. From beginner to advanced.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card shadow-card text-center cursor-pointer hover:border-primary/30 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mx-auto mb-3`}>
                <cat.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">{cat.label}</h3>
              <p className="text-sm text-muted-foreground">{cat.count} courses</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Courses */}
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-heading font-bold mb-8">Popular Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card shadow-card overflow-hidden hover:border-primary/30 transition-all"
            >
              <div className="h-32 gradient-card flex items-center justify-center">
                <PlayCircle className="h-12 w-12 text-primary/40" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">{course.category}</Badge>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${levelColors[course.level]}`}>{course.level}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{course.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
                  <span className="flex items-center gap-1"><FileText className="h-3.5 w-3.5" />{course.lessons} lessons</span>
                </div>
                <Button className="w-full" variant="outline">
                  Start Learning <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default StemHub;
