import { GlobalStyle } from './globalStyles'
import { ProfileCardComponentPage, OrderSummaryComponentPage, StatsPreviewCardPage, ThreeColumnPreviewCardComponentPage } from './pages'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <ProfileCardComponentPage /> */}
      {/* <OrderSummaryComponentPage /> */}
      {/* <StatsPreviewCardPage /> */}
      <ThreeColumnPreviewCardComponentPage />
    </div>
  );
}

export default App;
