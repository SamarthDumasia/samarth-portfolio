import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  ProjectFlipCard,
  type ProjectData,
} from "@/components/work/ProjectFlipCard";

const GITHUB_PROFILE = "https://github.com/samarthdumasia";

const projects: ProjectData[] = [
  {
    n: "01",
    name: "T-bot",
    tag: "ROS2 · SLAM · Robotics",
    desc: "Autonomous mapping and navigation robot built with ROS2, simulation, and sensor integration.",
    details:
      "Designed and developed T-bot as part of an advanced robotics program — implemented ROS2 nodes, sensor fusion, URDF modeling, SLAM-based mapping, and Gazebo/RViz2 simulation to validate navigation and control pipelines.",
    highlights: [
      "ROS2-based modular nodes",
      "SLAM mapping and navigation",
      "Gazebo simulation and RViz2 visualization",
    ],
    tech: ["ROS2", "SLAM", "Gazebo", "RViz2", "URDF", "C++", "Python"],
    accent: "from-[#7c3aed] to-[#0ea5ff]",
    visual: "horizon-fleet",
    github: GITHUB_PROFILE,
  },
  {
    n: "02",
    name: "Eyes On Wheels",
    tag: "IoT · Raspberry Pi · Computer Vision · Machine Learning",
    desc: "IoT-based drowsiness detection system using sensors and computer vision to enhance road safety.",
    details:
      "Engineered an innovative drowsiness detection system combining Arduino sensors, machine learning, and real-time computer vision to identify driver fatigue and trigger smart alerts for accident prevention.",
    highlights: [
      "Real-time sensor data processing",
      "ML-based pattern recognition",
      "Smart alert mechanisms for safety",
    ],
    tech: ["Raspberry Pi", "OpenCV", "Python", "ML", "IoT Sensors"],
    accent: "from-[#0ea5ff] to-[#7c3aed]",
    visual: "nerox",
    github: GITHUB_PROFILE,
  },
  {
    n: "03",
    name: "Mute's Speaker",
    tag: "IoT · Computer Vision",
    desc: "Sign language translation system enabling mute individuals to communicate through gesture recognition.",
    details:
      "Developed a gesture recognition system using computer vision algorithms to translate hand signs to text-to-speech, improving communication accessibility for individuals with speech disabilities.",
    highlights: [
      "Real-time hand gesture recognition",
      "Computer vision algorithms",
      "Text-to-speech integration",
    ],
    tech: ["Python", "OpenCV", "ML", "TTS"],
    accent: "from-[#10b981] to-[#0ea5ff]",
    visual: "collab-code",
    github: GITHUB_PROFILE,
  },
  {
    n: "04",
    name: "Smart Home Monitoring",
    tag: "IoT · Embedded Systems",
    desc: "IoT home automation system with remote monitoring, sensor integration, and voice control.",
    details:
      "Designed and implemented a comprehensive home automation platform with Arduino IoT Cloud, sensor integration, MQTT protocols, and seamless Alexa/Google Assistant voice control for hands-free operation.",
    highlights: [
      "Arduino IoT Cloud integration",
      "MQTT-based communication",
      "Voice control via Alexa/Google",
    ],
    tech: ["Arduino", "IoT Cloud", "MQTT", "Node.js"],
    accent: "from-[#f43f5e] to-[#f59e0b]",
    visual: "civic",
    github: GITHUB_PROFILE,
  },
];

function ProjectCard({ p }: { p: ProjectData }) {
  const ref = useRef<HTMLDivElement>(null);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setParallaxEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div
      ref={ref}
      className="relative grid min-h-0 items-center gap-8 border-t border-border/40 py-14 md:min-h-[65vh] md:grid-cols-12 md:gap-10 md:py-20 lg:py-24"
    >
      <motion.div style={parallaxEnabled ? { y } : undefined} className="space-y-5 md:col-span-5 md:space-y-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:text-xs sm:tracking-[0.25em] md:tracking-[0.3em]">
          {p.n} / {String(projects.length).padStart(2, "0")} — {p.tag}
        </div>
        <h3 className="font-display text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl">
          {p.name}
        </h3>
        <p className="max-w-md text-base leading-relaxed text-foreground/70">
          {p.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="glass rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          data-hover
          className="group inline-flex items-center gap-3 pt-4 text-sm uppercase tracking-[0.2em]"
        >
          View on GitHub
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all group-hover:border-electric group-hover:bg-electric/10">
            <ArrowUpRight size={16} />
          </span>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="md:col-span-7"
      >
        <ProjectFlipCard project={p} />
      </motion.div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="section-page">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-block"
        >
          <div className="section-eyebrow">
            <span className="h-px w-8 bg-muted-foreground/40" /> 004 — Selected
            Work
          </div>
          <h2 className="type-section-title">
            Products that ship, scale,{" "}
            <span className="text-electric-gradient">and think</span>.
          </h2>
          <p className="mt-4 max-w-xl font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground sm:tracking-[0.2em]">
            Tap any project card to explore details + GitHub
          </p>
        </motion.div>
        {projects.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </section>
  );
}
