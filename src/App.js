import { GlobalStyle } from './globalStyles'
import { ProfileCardComponentPage, OrderSummaryComponentPage, StatsPreviewCardPage, ThreeColumnPreviewCardComponentPage, FAQAccordionCardPage, SocialProofSectionPage } from './pages'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <ProfileCardComponentPage /> */}
      {/* <OrderSummaryComponentPage /> */}
      {/* <StatsPreviewCardPage /> */}
      {/* <ThreeColumnPreviewCardComponentPage /> */}
      <FAQAccordionCardPage />
      {/* <SocialProofSectionPage /> */}
    </div>
  );
}

export default App;
