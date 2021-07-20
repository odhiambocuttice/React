import { SinglePost } from "../singlePost/SinglePost";
import "./featuredposts.css";

export const FeaturedPosts = () => {
  return (
    <div className="major-post">
      <div className="title">
        <p className="title-post">Featured Stories</p>
      </div>
      <div className="posts">
        <SinglePost />
        <SinglePost />
      </div>
    </div>
  );
};
