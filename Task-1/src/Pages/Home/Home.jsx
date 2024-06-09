import React from "react";
import "./Home.css";


const Home = () => {
  return (
    <>
      <div className="main">
        <div className="left">
          <div className="title">
            Pagerland is offers a great, smooth looking and fast landing page
            templates built on Gatsby and React.
          </div>
          <div className="para">
            Original designs crafted in Figma suits perfectly for marketing,
            startups and all creative needs. Pagerland main theme can be easily
            customized by users.
          </div>
          <button className="btn">View demos</button>
        </div>
        <div className="right">
          <div className="image">
            <img
              src="https://pager.land/static/96b18dd2d0296ea8524f59d65e916c97/43dcf/hero.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
