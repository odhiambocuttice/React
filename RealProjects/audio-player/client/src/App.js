import { Home } from "./components/Pages/Home";
// import { TopBar } from "./components/TopBar/TopBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AllStories } from "./components/Pages/AllStories/AllStories";
import { WriteStory } from "./components/Pages/writePost/WriteStory";
import { OneStory } from "./components/Pages/OneStory/OneStory";
import { TopBar } from "./components/TopBar/TopBar";

const App = () => {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stories">
          <AllStories />
        </Route>
        <Route path="/oneStory/:storyid">
          <OneStory />
        </Route>
        <Route exact path="/writestory">
          <WriteStory />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
