export type StackGroup = "frontend" | "backend" | "iot-embedded";

export type Technology = {
  name: string;
  category: string;
  stackGroup: StackGroup;
  icon?: string;
  fallback?: string;
  color: string;
};

export const STACK_GROUPS: {
  id: StackGroup;
  label: string;
  color: string;
}[] = [
  { id: "frontend", label: "Frontend", color: "#61DAFB" },
  { id: "backend", label: "Backend", color: "#009688" },
  { id: "iot-embedded", label: "IoT & Embedded", color: "#FF6B6B" },
];

export const TECHNOLOGIES: Technology[] = [
  { name: "React", category: "UI Framework", stackGroup: "frontend", icon: "react", color: "#61DAFB" },
  { name: "HTML5", category: "Markup", stackGroup: "frontend", icon: "html5", color: "#E34C26" },
  { name: "CSS3", category: "Styling", stackGroup: "frontend", icon: "css3", color: "#1572B6" },
  { name: "Tailwind CSS", category: "Styling", stackGroup: "frontend", icon: "tailwindcss", color: "#06B6D4" },
  { name: "JavaScript", category: "Language", stackGroup: "frontend", icon: "javascript", color: "#F7DF1E" },
  { name: "TypeScript", category: "Language", stackGroup: "frontend", icon: "typescript", color: "#3178C6" },
  { name: "Framer Motion", category: "Animation", stackGroup: "frontend", icon: "framer", color: "#0055FF" },
  { name: "Three.js", category: "3D Graphics", stackGroup: "frontend", icon: "threedotjs", color: "#FFFFFF" },
  { name: "Python", category: "Language", stackGroup: "backend", icon: "python", color: "#3776AB" },
  { name: "C++", category: "Language", stackGroup: "backend", icon: "cplusplus", color: "#00599C" },
  { name: "Node.js", category: "Runtime", stackGroup: "backend", icon: "nodedotjs", color: "#339933" },
  { name: "Express.js", category: "Framework", stackGroup: "backend", icon: "express", color: "#FFFFFF" },
  { name: "MySQL", category: "Database", stackGroup: "backend", icon: "mysql", color: "#4479A1" },
  { name: "MongoDB", category: "Database", stackGroup: "backend", icon: "mongodb", color: "#13AA52" },
  { name: "REST APIs", category: "Architecture", stackGroup: "backend", fallback: "API", color: "#00D4FF" },
  { name: "Git", category: "Version Control", stackGroup: "backend", icon: "git", color: "#F05032" },
  { name: "Arduino", category: "Microcontroller", stackGroup: "iot-embedded", icon: "arduino", color: "#00979D" },
  { name: "Raspberry Pi", category: "SBC", stackGroup: "iot-embedded", fallback: "RPi", color: "#A22334" },
  { name: "IoT Cloud", category: "Cloud Platform", stackGroup: "iot-embedded", fallback: "IoT", color: "#FF6B6B" },
  { name: "MQTT", category: "Protocol", stackGroup: "iot-embedded", fallback: "MQTT", color: "#660066" },
  { name: "Embedded Systems", category: "Systems", stackGroup: "iot-embedded", fallback: "Embedded", color: "#FF6B6B" },
  { name: "Computer Vision", category: "AI Domain", stackGroup: "iot-embedded", icon: "opencv", color: "#5C3EE8" },
  { name: "Machine Learning", category: "AI Domain", stackGroup: "iot-embedded", fallback: "ML", color: "#FF6B6B" },
  { name: "Sensors & IoT", category: "Hardware", stackGroup: "iot-embedded", fallback: "Sensors", color: "#FF6B6B" },
];

export function getTechnologiesByGroup(group: StackGroup): Technology[] {
  return TECHNOLOGIES.filter((tech) => tech.stackGroup === group);
}

export const CAROUSEL_COUNT = TECHNOLOGIES.length;
export const CAROUSEL_STEP = (Math.PI * 2) / CAROUSEL_COUNT;
