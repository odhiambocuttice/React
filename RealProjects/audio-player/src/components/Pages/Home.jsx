import "./home.css";
import { AudioPlayer } from "../audioplayer/AudioPlayer";
import { tracks } from "../../tracks";
import { Posts } from "./Posts/Posts";
import { About } from "../about/About";
import { Shows } from "../shows/Shows";

export const Home = () => {
  return (
    <div className="home">
      <section className="section">
        <AudioPlayer tracks={tracks} />
      </section>
      <section className="post-section">
        <Posts />
      </section>
      <section>
        <Shows />
      </section>
      <section>
        <About />
      </section>
    </div>
  );
};
