import React from "react";
import "./comics.css";
import Navbar from "./navbar";
import Footer from "./footer";
import SwordKing from "../extras/SwordKing.png";

const comics = () => {
  return (
    <>
      <Navbar />
      <div className="comicsPage">
        <div className="comicsSection">
          <div className="comicsHeading">
            <h1>Comics</h1>
          </div>

          <div className="comicsGenre">
            {/* <div className="genreHeader"><h2>Genre</h2></div> */}

            <div className="genreParent">
              <div className="genreChildren">Action</div>
              <div className="genreChildren">Adventure</div>
              <div className="genreChildren">Romance</div>
              <div className="genreChildren">Slice of Life</div>
            </div>

            <div id="line">
              <hr />
            </div>
          </div>

          <div className="comicsContainer">
            <div className="comicsContianerHeding">
              <h2>Latest Updates</h2>
            </div>

            <div className="mainContainer">
              <div className="container">
                <img src={SwordKing} alt="SwordKing" />

                <div className="containerContents">
                  <div className="containerTitle">
                    <h5>Rebirth of Sword King</h5>
                  </div>

                  <div className="contentsInfo">
                    {/* <p>Author's Name</p> */}
                    <p>Genre</p>
                  </div>
                </div>
              </div>

              <div className="container">
                <img src={SwordKing} alt="SwordKing" />

                <div className="containerContents">
                  <div className="containerTitle">
                    <h5>Rebirth of Sword King</h5>
                  </div>

                  <div className="contentsInfo">
                    {/* <p>Author's Name</p> */}
                    <p>Genre</p>
                  </div>
                </div>
              </div>

              <div className="container">
                <img src={SwordKing} alt="SwordKing" />

                <div className="containerContents">
                  <div className="containerTitle">
                    <h5>Rebirth of Sword King</h5>
                  </div>

                  <div className="contentsInfo">
                    {/* <p>Author's Name</p> */}
                    <p>Genre</p>
                  </div>
                </div>
              </div>

              <div className="container">
                <img src={SwordKing} alt="SwordKing" />

                <div className="containerContents">
                  <div className="containerTitle">
                    <h5>Rebirth of Sword King</h5>
                  </div>

                  <div className="contentsInfo">
                    {/* <p>Author's Name</p> */}
                    <p>Genre</p>
                  </div>
                </div>
              </div>
              <div className="container">
                <img src={SwordKing} alt="SwordKing" />

                <div className="containerContents">
                  <div className="containerTitle">
                    <h5>Rebirth of Sword King</h5>
                  </div>

                  <div className="contentsInfo">
                    {/* <p>Author's Name</p> */}
                    <p>Genre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default comics;
