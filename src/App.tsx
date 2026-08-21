import React, { Component, ErrorInfo, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Layout } from './components/UniversalLayout';

// Lazily load route components to enable code splitting
const EmpowaWomenHome = React.lazy(() => import('./components/EmpowaWomenHomePage').then(m => ({ default: m.EmpowaWomenHome })));
const EmpowaWomenAboutPage = React.lazy(() => import('./components/EmpowaWomenAboutUs').then(m => ({ default: m.EmpowaWomenAboutPage })));
const EmpowaWomenContact = React.lazy(() => import('./components/EmpowaWomenContactUs').then(m => ({ default: m.EmpowaWomenContact })));
const EmpowaHerAcademy = React.lazy(() => import('./components/EmpowaWomenEmpowaHerAcademy').then(m => ({ default: m.EmpowaHerAcademy })));
const EnhancedEmpowaHerAcademy = React.lazy(() => import('./components/EnhancedEmpowaHerAcademy').then(m => ({ default: m.EnhancedEmpowaHerAcademy })));
const EmpowaWomenPartnerships = React.lazy(() => import('./components/EmpowaWomenPartnerships').then(m => ({ default: m.EmpowaWomenPartnerships })));
const ExecutiveIndustrySeries = React.lazy(() => import('./components/EmpowaWomenExecutiveIndustrySeries').then(m => ({ default: m.ExecutiveIndustrySeries })));
const LeadershipAwardsGala = React.lazy(() => import('./components/EmpowaWomenBubblesNibblesAwards').then(m => ({ default: m.LeadershipAwardsGala })));
const SummitsHub = React.lazy(() => import('./components/EmpowaWomenExecutiveSummits').then(m => ({ default: m.SummitsHub })));
const IWDSummitDetail = React.lazy(() => import('./components/EmpowaWomenIWDSummit').then(m => ({ default: m.IWDSummitDetail })));
const ProvincialSummitSeries = React.lazy(() => import('./components/EmpowaWomenProvincialSummits'));
const GreenEconomyPillar = React.lazy(() => import('./components/EmpowaWomenGreenEconomyPillar').then(m => ({ default: m.GreenEconomyPillar })));
const InfrastructurePropertyPillar = React.lazy(() => import('./components/EmpowaWomenInfrastructurePropertyPillar').then(m => ({ default: m.InfrastructurePropertyPillar })));
const AgricultureManufacturingPillar = React.lazy(() => import('./components/EmpowaWomenAgricultureManufacturingPillar').then(m => ({ default: m.AgricultureManufacturingPillar })));
const CreativeEconomyPillar = React.lazy(() => import('./components/EmpowaWomenCreativeEconomyPillar').then(m => ({ default: m.CreativeEconomyPillar })));
const BeautyFashionWellnessPillar = React.lazy(() => import('./components/BeautyFashionWellnessPillar').then(m => ({ default: m.BeautyFashionWellnessPillar })));
const EntrepreneurshipFundingPillar = React.lazy(() => import('./components/EmpowaWomenEntrepreneurshipFundingPillar').then(m => ({ default: m.EntrepreneurshipFundingPillar })));
const WholesaleRetailManufacturingPillar = React.lazy(() => import('./components/EmpowaWomenWholesaleRetailManufacturingPillar').then(m => ({ default: m.WholesaleRetailManufacturingPillar })));
const LeadershipGovernanceBoardStage = React.lazy(() => import('./components/EmpowaWomenLeadershipGovernanceBoardsPillar').then(m => ({ default: m.LeadershipGovernanceBoardStage })));
const CommunicationsPillarPage = React.lazy(() => import('./components/EmpowaWomenCommunicationsMediaPillar').then(m => ({ default: m.CommunicationsPillarPage })));
const MediaPage = React.lazy(() => import('./components/EmpowaWomenMediaPage').then(m => ({ default: m.MediaPage })));
const EmpowaWomenSummitPage = React.lazy(() => import('./components/EmpowaWomenSummitPage').then(m => ({ default: m.EmpowaWomenSummitPage })));
const PrivacyPage = React.lazy(() => import('./components/EmpowaWomenPrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = React.lazy(() => import('./components/EmpowaWomenTermsPage').then(m => ({ default: m.TermsPage })));
const LeadershipSummit2026Absa = React.lazy(() => import('./components/EmpowaWomenLeadershipSummit2026Absa').then(m => ({ default: m.EmpowaWomenLeadershipSummit2026Absa })));
const LeadershipSummit2026Jpc = React.lazy(() => import('./components/EmpowaWomenLeadershipSummit2026Jpc').then(m => ({ default: m.EmpowaWomenLeadershipSummit2026Jpc })));
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

const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    backgroundColor: '#0A0A0F',
    color: '#FFFFFF'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      border: '3px solid rgba(255, 45, 135, 0.1)',
      borderTopColor: '#FF2D87',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={
              <React.Suspense fallback={<PageLoader />}>
                <Outlet />
              </React.Suspense>
            }>
              <Route index element={<EmpowaWomenHome />} />
              <Route path="about" element={<EmpowaWomenAboutPage />} />
              <Route path="contact" element={<EmpowaWomenContact />} />
              <Route path="academy" element={<EmpowaHerAcademy />} />
              <Route path="academy-enhanced" element={<EnhancedEmpowaHerAcademy />} />
              <Route path="partnerships" element={<EmpowaWomenPartnerships />} />
              <Route path="executive-industry-series" element={<ExecutiveIndustrySeries />} />
              <Route path="leadership-awards-gala" element={<LeadershipAwardsGala />} />
              <Route path="what-we-do" element={<SummitsHub />} />
              <Route path="iwd-summit" element={<IWDSummitDetail />} />
              <Route path="provincial-summits" element={<ProvincialSummitSeries />} />
              <Route path="green-economy" element={<GreenEconomyPillar />} />
              <Route path="infrastructure-property" element={<InfrastructurePropertyPillar />} />
              <Route path="agriculture-manufacturing" element={<AgricultureManufacturingPillar />} />
              <Route path="creative-economy" element={<CreativeEconomyPillar />} />
              <Route path="beauty-fashion-wellness" element={<BeautyFashionWellnessPillar />} />
              <Route path="entrepreneurship-funding" element={<EntrepreneurshipFundingPillar />} />
              <Route path="wholesale-retail-manufacturing" element={<WholesaleRetailManufacturingPillar />} />
              <Route path="leadership-governance-boards" element={<LeadershipGovernanceBoardStage />} />
              <Route path="communications-media" element={<CommunicationsPillarPage />} />
              <Route path="media" element={<MediaPage />} />
              <Route path="summit" element={<EmpowaWomenSummitPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="empowawomen-leadership-summit-2026-absa" element={<LeadershipSummit2026Absa />} />
              <Route path="empowawomen-leadership-summit-2026-jpc" element={<LeadershipSummit2026Jpc />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
