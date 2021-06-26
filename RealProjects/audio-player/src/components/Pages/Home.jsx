import "./home.css";
import { AudioPlayer } from "./audioplayer/AudioPlayer";
import { tracks } from "../../tracks";
import { About } from "./about/About";

export const Home = () => {
  return (
    <div className="home">
      <section className="section">
        <AudioPlayer tracks={tracks} />
      </section>

      <section>
        <About />
      </section>
    </div>
  );
};
