import "./onestory.css";
import post from "../../../assets/showsPosters/post.jpg";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { TopBar } from "../../TopBar/TopBar";
import { About } from "../../about/About";

export const OneStory = () => {
  return (
    <>
      <TopBar />
      <div className="single-story">
        <div className="singleStoryWrapper">
          <h1 className="singleStoryTitle">
            Lorem ipsum dolor sit amet, consectetur adip.
          </h1>

          <img className="singleStoryImg" src={post} alt="" />
          <div className="singleStoryIcon">
            <EditIcon className="singleStoryEdit" />
            <DeleteIcon className="singleStoryDelete" />
          </div>
          <div className="singlePostWriter">
            <span className="singleStoryAuthor">
              Author: <b>Kenya</b>
            </span>
            <span className="singlePostDate">8 Hours Ago</span>
          </div>
        </div>
        <div className="singleStoryDesc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure
            saepe adipisci, quaerat quasi expedita amet! Facere laboriosam
            tempora maiores autem, iusto corporis quis consequatur ratione,
            magnam maxime quidem iure.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam iure saepe adipisci, quaerat quasi expedita
            amet! Facere laboriosam tempora maiores autem, iusto corporis quis
            consequatur ratione, magnam maxime quidem iure.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Veniam iure saepe adipisci,
            quaerat quasi expedita amet! Facere laboriosam tempora maiores
            autem, iusto corporis quis consequatur ratione, magnam maxime quidem
            iure. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veniam iure saepe adipisci, quaerat quasi expedita amet! Facere
            laboriosam tempora maiores autem, iusto corporis quis consequatur
            ratione, magnam maxime quidem iure.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veniam iure saepe adipisci, quaerat
            quasi expedita amet! Facere laboriosam tempora maiores autem, iusto
            corporis quis consequatur ratione, magnam maxime quidem iure.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Veniam iure saepe
            adipisci, quaerat quasi expedita amet! Facere laboriosam tempora
            maiores autem, iusto corporis quis consequatur ratione, magnam
            maxime quidem iure.
          </p>
        </div>
      </div>
      {/* <About /> */}
    </>
  );
};
