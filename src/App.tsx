import React, { Component, ErrorInfo, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { EmpowaWomenHome } from './components/EmpowaWomenHomePage';
import { EmpowaWomenAboutPage } from './components/EmpowaWomenAboutUs';
import { EmpowaWomenContact } from './components/EmpowaWomenContactUs';
import { EmpowaHerAcademy } from './components/EmpowaWomenEmpowaHerAcademy';
import { EmpowaWomenPartnerships } from './components/EmpowaWomenPartnerships';
import { Layout } from './components/UniversalLayout';
import { ExecutiveIndustrySeries } from './components/EmpowaWomenExecutiveIndustrySeries';
import { LeadershipAwardsGala } from './components/EmpowaWomenBubblesNibblesAwards';
import { SummitsHub } from './components/EmpowaWomenExecutiveSummits';
import { IWDSummitDetail } from './components/EmpowaWomenIWDSummit';
import ProvincialSummitSeries from './components/EmpowaWomenProvincialSummits';
import { GreenEconomyPillar } from './components/EmpowaWomenGreenEconomyPillar';
import { InfrastructurePropertyPillar } from './components/EmpowaWomenInfrastructurePropertyPillar';
import { AgricultureManufacturingPillar } from './components/EmpowaWomenAgricultureManufacturingPillar';
import { CapitalLeadershipPillar } from './components/EmpowaWomenCapitalLeadershipPillar';
import { BeautyFashionWellnessPillar } from './components/BeautyFashionWellnessPillar';
import { EntrepreneurshipFundingPillar } from './components/EmpowaWomenEntrepreneurshipFundingPillar';
import { WholesaleRetailManufacturingPillar } from './components/EmpowaWomenWholesaleRetailManufacturingPillar';
import { LeadershipGovernanceBoardStage } from './components/EmpowaWomenLeadershipGovernanceBoardsPillar';
import { MediaPage } from './components/EmpowaWomenMediaPage';
import { EmpowaWomenSummitPage } from './components/EmpowaWomenSummitPage';
import { PrivacyPage } from './components/EmpowaWomenPrivacyPage';
import { TermsPage } from './components/EmpowaWomenTermsPage';
import './App.css';

class ErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean, error: Error | null}> {
  state = { hasError: false, error: null as Error | null };
  static getDerivedStateFromError(error: Error) { return { hasError: true, error }; }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) { console.error(error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{padding: '40px', color: '#ff8a8a', backgroundColor: '#1a1a1a', minHeight: '100vh', fontFamily: 'monospace'}}>
          <h1>Application Error</h1>
          <pre style={{whiteSpace: 'pre-wrap', backgroundColor: '#2a2a2a', padding: '20px', borderRadius: '8px', fontSize: '14px'}}>
            {this.state.error?.toString()}
          </pre>
          <p style={{marginTop: '20px'}}>Please copy this error message and send it to me!</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<EmpowaWomenHome />} />
            <Route path="about" element={<EmpowaWomenAboutPage />} />
            <Route path="contact" element={<EmpowaWomenContact />} />
            <Route path="academy" element={<EmpowaHerAcademy />} />
            <Route path="partnerships" element={<EmpowaWomenPartnerships />} />
            <Route path="executive-industry-series" element={<ExecutiveIndustrySeries />} />
            <Route path="leadership-awards-gala" element={<LeadershipAwardsGala />} />
            <Route path="what-we-do" element={<SummitsHub />} />
            <Route path="iwd-summit" element={<IWDSummitDetail />} />
            <Route path="provincial-summits" element={<ProvincialSummitSeries />} />
            <Route path="green-economy" element={<GreenEconomyPillar />} />
            <Route path="infrastructure-property" element={<InfrastructurePropertyPillar />} />
            <Route path="agriculture-manufacturing" element={<AgricultureManufacturingPillar />} />
            <Route path="capital-leadership" element={<CapitalLeadershipPillar />} />
            <Route path="beauty-fashion-wellness" element={<BeautyFashionWellnessPillar />} />
            <Route path="entrepreneurship-funding" element={<EntrepreneurshipFundingPillar />} />
            <Route path="wholesale-retail-manufacturing" element={<WholesaleRetailManufacturingPillar />} />
            <Route path="leadership-governance-boards" element={<LeadershipGovernanceBoardStage />} />
            <Route path="media" element={<MediaPage />} />
            <Route path="summit" element={<EmpowaWomenSummitPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
