import * as React from "react";
import { DelegateRegistrationSection } from "./DelegateRegistrationSection";

export const AgriDelegateRegistrationSection: React.FC = () => {
  return (
    <DelegateRegistrationSection
      stageName="Agriculture & Food Security Stage™"
      includes={[
        "Full-day Agriculture & Food Security Stage access",
        "Premium executive programme (9 sessions)",
        "High-impact networking & agribusiness matchmaking",
        "Delegate resource pack & recordings"
      ]}
    />
  );
};
