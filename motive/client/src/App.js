import './index.css';
import * as Pages from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div id="app" className="container">
      <main>
        {/* <NavBar /> */}

        <Routes>
          <Route path="/" element={<Pages.LandingPage />} />
          <Route path="/user" element={<Pages.UserPage />} />

          <Route path="/motive" element={<Pages.MotivePage />} />
          <Route path="/food" element={<Pages.FoodPage />} />
          <Route path="/drink" element={<Pages.DrinkPage />} />
          <Route path="/venues" element={<Pages.VenuesPage />} />
          {/* <Route path="/friends" element={<Pages.FriendsPage />} /> */}
          <Route path="/review/:name" element={<Pages.ReviewPage />} />

          <Route path="*" element={<Pages.NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
