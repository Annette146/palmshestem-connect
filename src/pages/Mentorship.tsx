import { motion } from "framer-motion";
import { Search, MapPin, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const mentors = [
  { name: "Nancy Maina", field: "Artificial Intelligence", location: "Meru", experience: "5 years", rating: 7.9, avatar: "NM" },
  { name: "Grace Ngari", field: "Data Science", location: "Nairobi", experience: "3 years", rating: 7.8, avatar: "GN" },
  { name: "Dr. Mary Mwadulo", field: "Computer Science", location: "Nanyuki", experience: "8 years", rating: 7.9, avatar: "MM" },
  { name: "Asunta Mary", field: "Information Technology", location: "Isiolo", experience: "10 years", rating: 7.9, avatar: "AM" },
  { name: "Dr.Bundi Dorothy", field: "Cybersecurity", location: "Machakos", experience: "7 years", rating: 7.8, avatar: "BD" },
];

const Mentorship = () => (
  <div className="min-h-screen">
    {/* Header */}
    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Find Your STEM Mentor
          </h1>
          <p className="text-primary-foreground/70 text-lg mb-8">
            Connect with experienced women professionals who'll guide your journey in science, technology, engineering, and mathematics.
          </p>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by field, name, or location..." className="pl-10 bg-background/90" />
            </div>
            <Button>Search</Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Mentors grid */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-border bg-card shadow-card hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg shrink-0">
                  {mentor.avatar}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{mentor.name}</h3>
                  <p className="text-sm text-primary font-medium">{mentor.field}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{mentor.location}</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{mentor.experience}</span>
                <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />{mentor.rating}</span>
              </div>
              <Button className="w-full" variant="outline">
                Book a Session <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Mentorship;
