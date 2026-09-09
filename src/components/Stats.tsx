import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Globe, Users, Award, HeartHandshake } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface StatItemProps {
  end: number;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  delay?: number;
}

const AnimatedCounter: React.FC<StatItemProps> = ({
  end,
  suffix = '',
  label,
  sublabel,
  icon,
  delay = 0,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-blue-500/30 transition-all duration-300 group shadow-lg shadow-black/20"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
          {icon}
        </div>
        <div className="w-2 h-2 rounded-full bg-blue-500/30 group-hover:bg-blue-400 transition-colors" />
      </div>

      <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-2 flex items-baseline">
        <span>{count}</span>
        <span className="text-blue-400 ml-0.5">{suffix}</span>
      </div>

      <div className="text-base font-semibold text-slate-200 mb-1">
        {label}
      </div>
      <div className="text-xs text-slate-400">
        {sublabel}
      </div>
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  const { settings } = usePortfolio();

  const statsData = [
    {
      end: settings.websitesBuilt || 50,
      suffix: '+',
      label: 'Websites Built',
      sublabel: 'Custom web solutions deployed worldwide',
      icon: <Globe className="w-6 h-6" />,
    },
    {
      end: settings.happyClients || 30,
      suffix: '+',
      label: 'Happy Clients',
      sublabel: 'Small businesses, startups & enterprises',
      icon: <Users className="w-6 h-6" />,
    },
    {
      end: settings.yearsExperience || 3,
      suffix: '+',
      label: 'Years Experience',
      sublabel: 'Mastering modern full-stack web stacks',
      icon: <Award className="w-6 h-6" />,
    },
    {
      end: 100,
      suffix: '%',
      label: 'Client Focused',
      sublabel: 'Direct communication & transparent delivery',
      icon: <HeartHandshake className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative py-16 border-y border-white/[0.06] bg-[#090d16]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <AnimatedCounter
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              icon={stat.icon}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
