export type StackGroup = "frontend" | "backend" | "iot" | "embedded" | "cloud" | "robotics";

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
  { id: "iot", label: "IoT", color: "#FF6B6B" },
  { id: "embedded", label: "Embedded Systems", color: "#FF8C42" },
  { id: "cloud", label: "Cloud", color: "#4285F4" },
  { id: "robotics", label: "Robotics", color: "#DA552F" },
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
  { name: "Arduino", category: "Microcontroller", stackGroup: "embedded", icon: "arduino", color: "#00979D" },
  { name: "Raspberry Pi", category: "SBC", stackGroup: "embedded", fallback: "RPi", color: "#A22334" },
  { name: "IoT Cloud", category: "Cloud Platform", stackGroup: "iot", fallback: "IoT", color: "#FF6B6B" },
  { name: "Arduino IoT Cloud", category: "Cloud Platform", stackGroup: "iot", fallback: "Arduino IoT", color: "#2A9D8F" },
  { name: "NodeMCU", category: "Microcontroller", stackGroup: "embedded", fallback: "NodeMCU", color: "#0ABF53" },
  { name: "Microcontrollers", category: "Hardware", stackGroup: "embedded", fallback: "MCU", color: "#FF8C42" },
  { name: "Sensors", category: "Hardware", stackGroup: "iot", fallback: "Sensors", color: "#F59E0B" },
  { name: "Actuators", category: "Hardware", stackGroup: "iot", fallback: "Actuators", color: "#EF4444" },
  { name: "ROS2", category: "Robotics", stackGroup: "robotics", fallback: "ROS2", color: "#DA552F" },
  { name: "Gazebo", category: "Simulation", stackGroup: "robotics", fallback: "Gazebo", color: "#4C51BF" },
  { name: "RViz2", category: "Visualization", stackGroup: "robotics", fallback: "RViz2", color: "#00A3B4" },
  { name: "URDF", category: "Robotics", stackGroup: "robotics", fallback: "URDF", color: "#8B5CF6" },
  { name: "SLAM", category: "Robotics", stackGroup: "robotics", fallback: "SLAM", color: "#10B981" },
  { name: "MQTT", category: "Protocol", stackGroup: "iot", fallback: "MQTT", color: "#660066" },
  { name: "Embedded Systems", category: "Systems", stackGroup: "embedded", fallback: "Embedded", color: "#FF6B6B" },
  { name: "Computer Vision", category: "AI Domain", stackGroup: "robotics", icon: "opencv", color: "#5C3EE8" },
  { name: "Machine Learning", category: "AI Domain", stackGroup: "robotics", fallback: "ML", color: "#FF6B6B" },
  { name: "Sensors & IoT", category: "Hardware", stackGroup: "iot", fallback: "Sensors", color: "#FF6B6B" },
  { name: "GCP", category: "Cloud Platform", stackGroup: "cloud", fallback: "GCP", color: "#4285F4" },
  { name: "AWS", category: "Cloud Platform", stackGroup: "cloud", fallback: "AWS", color: "#FF9900" },
];

export function getTechnologiesByGroup(group: StackGroup): Technology[] {
  return TECHNOLOGIES.filter((tech) => tech.stackGroup === group);
}

export const CAROUSEL_COUNT = TECHNOLOGIES.length;
export const CAROUSEL_STEP = (Math.PI * 2) / CAROUSEL_COUNT;
