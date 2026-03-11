import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

const StatCard = ({ icon: Icon, value, label, delay = 0 }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="text-center p-6"
  >
    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-card mb-4">
      <Icon className="h-7 w-7 text-primary" />
    </div>
    <div className="text-3xl font-heading font-bold text-foreground">{value}</div>
    <div className="text-sm text-muted-foreground mt-1">{label}</div>
  </motion.div>
);

export default StatCard;
