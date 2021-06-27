import "./shows.css";
import alex from "../../assets/showsPosters/alex.jpg";
import alexandreg from "../../assets/showsPosters/alexandreh.jpg";
import glen from "../../assets/showsPosters/glen.jpg";
import malena from "../../assets/showsPosters/malena.jpg";
import romain from "../../assets/showsPosters/romain.jpg";

export const Shows = () => {
  const movies = [alex, alexandreg, glen, malena, romain];

  return (
    <>
      <div className="container">
        {movies.map((src) => (
          <div
            key={src}
            className="card"
            style={{
              backgroundImage: `url(${src})`,
            }}
          />
        ))}
      </div>
    </>
  );
  // return (
  //   <div className="menu">
  //     <div className="shows">
  //       <img src={alex} alt="" className="showposters" />
  //       <img src={alexandreg} alt="" className="showposters" />
  //       <img src={glen} alt="" className="showposters" />
  //       <img src={malena} alt="" className="showposters" />
  //       <img src={romain} alt="" className="showposters" />
  //     </div>
  //     <div className="nav">
  //       <button className="prev-poster">Prev</button>
  //       <button className="next-poster">Next</button>
  //     </div>
  //   </div>
  // );
};
