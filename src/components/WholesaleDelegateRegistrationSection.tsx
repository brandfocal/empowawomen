import * as React from "react";
import { DelegateRegistrationSection } from "./DelegateRegistrationSection";

export const WholesaleRegistrationSection: React.FC = () => {
  return (
    <DelegateRegistrationSection
      stageName="Wholesale, Retail & Manufacturing Stage™"
      includes={[
        "Full-day Wholesale, Retail & Manufacturing Stage access",
        "Premium executive programme (9 sessions)",
        "Industrial networking & procurement matchmaking",
        "Delegate resource pack & recordings"
      ]}
    />
  );
};

export const WholesaleDelegateRegistrationSection = WholesaleRegistrationSection;
