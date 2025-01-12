import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

// Pages Directory
import { Link } from "react-router-dom";
import { routes } from "./libs/constructors";
import Providers from "./libs/Providers";
import * as Pages from "./pages";

function App() {
  return (
    <Providers>
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
    </Providers>
  );
}

export default App;
