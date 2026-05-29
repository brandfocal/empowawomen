import * as React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Target, BarChart3, Users } from "lucide-react";
interface ROIMetricBlockProps {
  title: string;
  metrics: {
    label: string;
    value: string;
    description?: string;
  }[];
  icon?: "trend" | "target" | "chart" | "users";
  variant?: "gold" | "dark";
}
const IconMap = {
  trend: <TrendingUp size={20} />,
  target: <Target size={20} />,
  chart: <BarChart3 size={20} />,
  users: <Users size={20} />
};
export const ROIMetricBlock: React.FC<ROIMetricBlockProps> = ({
  title,
  metrics,
  icon = "trend",
  variant = "dark"
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 24
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: "-60px"
  }} transition={{
    duration: 0.6,
    ease: "easeOut"
  }} style={{
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderTop: "2px solid #FF2D87",
    padding: "clamp(24px, 3vw, 36px)",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    transition: "border-color 300ms, background-color 300ms",
    cursor: "default"
  }} whileHover={{
    scale: 1.01
  }} onMouseEnter={e => {
    (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(255,45,135,0.05)";
    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,45,135,0.25)";
    (e.currentTarget as HTMLDivElement).style.borderTopColor = "#FF2D87";
  }} onMouseLeave={e => {
    (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(255,255,255,0.03)";
    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
    (e.currentTarget as HTMLDivElement).style.borderTopColor = "#FF2D87";
  }}>
      {/* Icon + label */}
      <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
        <div style={{
        width: "40px",
        height: "40px",
        borderRadius: "8px",
        backgroundColor: "rgba(255,45,135,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FF2D87",
        flexShrink: 0
      }}>
          {IconMap[icon]}
        </div>
        <span style={{
        fontFamily: "Figtree",
        fontSize: "10px",
        fontWeight: 600,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.30)"
      }}>
          ROI Parameters
        </span>
      </div>

      {/* Title */}
      <h3 style={{
      fontFamily: "Figtree",
      fontWeight: 600,
      fontSize: "clamp(16px, 2vw, 20px)",
      color: "#FFFFFF",
      margin: 0,
      lineHeight: 1.3
    }}>
        {title}
      </h3>

      {/* Metrics */}
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        {metrics.map((metric, idx) => <div key={`m-${idx}`}>
            <div style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: "6px"
        }}>
              <span style={{
            fontFamily: "Figtree",
            fontSize: "13px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.02em"
          }}>
                {metric.label}
              </span>
              <span style={{
            fontFamily: "Figtree",
            fontSize: "18px",
            fontWeight: 700,
            color: "#FF2D87",
            letterSpacing: "-0.02em"
          }}>
                {metric.value}
              </span>
            </div>
            {metric.description && <p style={{
          fontFamily: "Figtree",
          fontSize: "13px",
          fontWeight: 300,
          color: "rgba(255,255,255,0.40)",
          margin: 0,
          lineHeight: 1.55
        }}>
                {metric.description}
              </p>}
            {idx < metrics.length - 1 && <div style={{
          marginTop: "16px",
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.06)"
        }} />}
          </div>)}
      </div>
    </motion.div>;
};