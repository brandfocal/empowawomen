import * as React from "react";
import { motion } from "framer-motion";
interface ROIMetric {
  label: string;
  value: string;
  description?: string;
}
interface ROIMetricBlockProps {
  title: string;
  metrics: ROIMetric[];
  icon?: "trend" | "target" | "chart" | "users";
  variant?: "gold" | "dark";
}
export const ROIMetricBlock: React.FC<ROIMetricBlockProps> = ({
  title,
  metrics
}) => {
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "clamp(24px, 3vw, 40px)",
    height: "100%"
  }}>
      {/* Section title */}
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }}>
        <div style={{
        width: "3px",
        height: "28px",
        backgroundColor: "#D97706",
        flexShrink: 0
      }} />
        <h3 style={{
        fontFamily: "Figtree",
        fontSize: "18px",
        fontWeight: 700,
        color: "#FFFFFF",
        margin: 0,
        letterSpacing: "-0.01em"
      }}>
          {title}
        </h3>
      </div>

      {/* Metric cards grid */}
      <div className="roi-metrics-grid" style={{
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "clamp(16px, 2.5vw, 32px)",
      flex: 1
    }}>
        {metrics.map((metric, idx) => <motion.div key={metric.label} whileInView={{
        opacity: 1,
        y: 0
      }} initial={{
        opacity: 0,
        y: 24
      }} viewport={{
        once: true,
        margin: "-80px"
      }} transition={{
        duration: 0.6,
        delay: idx * 0.1
      }} style={{
        backgroundColor: "#111118",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 0,
        padding: "clamp(20px, 3vw, 32px)",
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>
            {/* Top accent line */}
            <div style={{
          height: "2px",
          width: "32px",
          backgroundColor: "#D97706",
          marginBottom: "12px",
          flexShrink: 0
        }} />

            {/* Category label */}
            <span style={{
          fontFamily: "Figtree",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#D97706",
          marginBottom: "8px",
          lineHeight: 1.3
        }}>
              {metric.label}
            </span>

            {/* Large display value */}
            <span style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(36px, 6vw, 64px)",
          color: "#FFFFFF",
          letterSpacing: "-0.04em",
          lineHeight: 1.0
        }}>
              {metric.value}
            </span>

            {/* Descriptor */}
            {metric.description && <p style={{
          fontFamily: "Figtree",
          fontSize: "clamp(13px, 1.5vw, 15px)",
          color: "rgba(255,255,255,0.50)",
          lineHeight: 1.6,
          maxWidth: "240px",
          margin: 0
        }}>
                {metric.description}
              </p>}
          </motion.div>)}
      </div>

      <style>{`
        /* ROI metrics: 1 col mobile, 2 col sm, 4 col lg (when used in wide context) */
        .roi-metrics-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 480px) {
          .roi-metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>;
};