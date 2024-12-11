import "./navbar.css";
import Logo from "../extras/Comic City.png";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Search from "./Search/search";
import { useGlobalContext } from "../Context";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout, loginWithPopup } = useAuth0();
  const { searchResults, setSearchResults } = useGlobalContext();
  // console.log(user.email);
  // console.log(user);
  const handleClick = () => {
    // navigate("upload")
    if (user) {
      // navigate("/upload", { replace: false } );
      console.log("aman");
      // window.open("/upload", "_self");
      // navigate("/upload", { replace: true });
      
    } else {
      loginWithPopup().then(() => {
        navigate("/upload", { replace: true });
      });
    }
  };

  const base_url = `${process.env.REACT_APP_URL}/api/comics`;
  const [obj, setObj] = useState({});
  const [search, setSearch] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // React.useEffect(() => {
  const doSearch = async (searchText) => {
    console.log(searchText);
    try {
      // const url = `${base_url}/search/name=${searchText}`;
      const url = `${base_url}/search/${searchText}`;
      console.log(url);
      // const data = await axios.get(url);
      const response = await axios.get(url);
      console.log(response);
      // setObj(response.data.data);
      const data = response.data.data;
      setObj(data);
      setSearchResults(data);
      // setData(data);
      console.log(data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(dataa);
  // doSearch();
  // }, [search, base_url]);

  return (
    <div className="navBody">
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo" id="logoImage" />
          {/* <i className="bx bxs-home-smile"></i>
          <span>Logo</span> */}
        </div>
        <ul className="navbar">
          <li>
            <div>
              <Search
                doSearch={doSearch}
                setSearch={(search) => setSearch(search)}
              />
            </div>
          </li>
          <Link to="/">
            <li>
              <div className="active">Home</div>
            </li>
          </Link>
          <Link>
            <li onClick={handleClick}>
              <div>Upload</div>
            </li>
          </Link>
          <Link to="/comics">
            <li>
              <div>Comics</div>
            </li>
          </Link>
          <Link to="/aboutus">
            <li>
              <div>About Us</div>
            </li>
          </Link>
        </ul>

        <div className="main">
          <div className="user" onClick={() => loginWithPopup()}>
            <i className="bx bxs-user"></i>
            {user ? user.given_name : "Sign in"}
            {/* <i class="bx bxs-user"></i>Sign In */}
          </div>

          <div
            className="register"
            onClick={() => {
              user ? logout() : loginWithPopup();
            }}
          >
            {user ? "Logout" : "Register"}
          </div>
        </div>
      </header>

      {/* Display search results */}
      {/* <div className="searchResults">
        {searchResults.map((comic) => (
          <div key={comic._id}>
            <h2>{comic.comicName}</h2> */}
      {/* <p>{comic.description}</p> */}
      {/* Display other relevant information */}
      {/* </div>
        ))}
      </div> */}
    </div>
  );
};
export default Navbar;
