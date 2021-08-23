import { GlobalStyle } from './globalStyles'
import { ProfileCardComponentPage, OrderSummaryComponentPage, StatsPreviewCardPage } from './pages'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <ProfileCardComponentPage /> */}
      {/* <OrderSummaryComponentPage /> */}
      <StatsPreviewCardPage />
    </div>
  );
}

export default App;
