import { GlobalStyle } from './globalStyles'
import { ProfileCardComponentPage, OrderSummaryComponentPage } from './pages'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <ProfileCardComponentPage /> */}
      <OrderSummaryComponentPage />
    </div>
  );
}

export default App;
