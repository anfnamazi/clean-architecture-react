import { routes } from "libs/config/constructors";
import AppProvider from "libs/providers/App.provider";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages Directory
import * as Pages from "pages";

function App() {
  return (
    <AppProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={routes.root.path}>Home</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path={routes.root.path} element={<Pages.Home />} />
            <Route
              path={`${routes.details.path}/:id`}
              element={<Pages.Details />}
            />
            <Route path="/*" element={<Pages.NotFound />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
