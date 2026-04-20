import { AnimatePresence, motion, useInView } from "framer-motion";

export default function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 justify-center">
      <span className="block w-8 h-px bg-gold-400" />
      <span className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase font-sans">
        {children}
      </span>
      <span className="block w-8 h-px bg-gold-400" />
    </div>
  );
}

export const SectionHeading = ({ subtitle, title, centered = true }: { subtitle: any, title?: any, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-gold-400 font-bold text-xs uppercase tracking-[0.3em] block mb-3"
    >
      {subtitle}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-serif text-white leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);