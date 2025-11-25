import { Route, Router } from "wouter";
import { Nav } from "@/components/nav/Nav";
import { Home } from "@/components/pages/Home";
import { CV } from "@/components/pages/CV";
import { Lab } from "@/components/pages/Lab";

export const App = () => {
  return (
    <Router>
      <Nav />
      <Route path="/" component={Home} />
      <Route path="/cv" component={CV} />
      <Route path="/lab" component={Lab} />
    </Router>
  );
};
