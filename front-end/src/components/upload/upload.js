import React, {  useState } from "react";
import "./upload.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Upload = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const [comicData, setComicData] = useState({
    coverImage: "",
    comicName: "",
    authorName: "",
    chapterNumber: "",
    genre: [],
    comicImages: [],
    description: "",
    email: user && user.email,
  });
  const [setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_URL}/api/comics`, {
      method: "POST",
      body: JSON.stringify(comicData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setComicData({
        ...comicData,
        coverImage: "",
        comicName: "",
        authorName: "",
        chapterNumber: "",
        description: "",
      });
      navigate("/comics", { replace: true });
      console.log("New comic added:", json);
    }
  };




  const convertToBase64cover = (e) => {
    const image = e.target.files[0];
    
    if (image.size > 5000000) {
      alert("Image should be less than 5MB");
      return;
    }
  
    let reader = new FileReader();
    
    reader.readAsDataURL(image);
    
    reader.onload = () => {
      console.log(reader.result);
      const base64Image = reader.result;
      setComicData((comicData) => ({
        ...comicData,
        // comicImages: [...comicData.comicImages, base64Image],
        coverImage: base64Image,
      }));
    };
    
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  const convertToBase64 = (e) => {
    const image = e.target.files[0];
    
    if (image.size > 5000000) {
      alert("Image should be less than 5MB");
      return;
    }
  
    let reader = new FileReader();
    
    reader.readAsDataURL(image);
    
    reader.onload = () => {
      console.log(reader.result);
      const base64Image = reader.result;
      setComicData((comicData) => ({
        ...comicData,
        comicImages: [...comicData.comicImages, base64Image],
        // coverImage: base64Image,
        // {public_id: "", url: base64Image}
      }));
    };
    
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  

  return (
    <div className="uploadForm">
      <div className="uploadHeader"><h1>Upload</h1></div>
      <form className="formData" onSubmit={handleSubmit}>
        <div className="leftContainer">
          <div className="coverContainer">
            <label className="inputContainer">
              Comic's cover image
              <input
                type="file"
                accept="image/*"
                onChange={convertToBase64cover}
                className="inputCSS"
              />
            </label>
              {comicData.coverImage ? 
                  <img
                  style={{ height: "40px", width: "40px" }}
                  alt="coverImage"
                  src={comicData.coverImage}
                  className="previewImg"
                /> : null
              }
          </div>
        </div>

        <div className="rightContainer">
          <div className="comicNameContainer">
            <label> Comic's Name &nbsp; &nbsp;</label>
            <input
              type="text"
              name="comicName"
              onChange={(e) =>
                setComicData({ ...comicData, comicName: e.target.value })
              }
              value={comicData.comicName}
            />
          </div>

          <div className="authorNameContainer">
            <label> Authors's Name </label>
            <input
              type="text"
              name="authorName"
              onChange={(e) =>
                setComicData({ ...comicData, authorName: e.target.value })
              }
              value={comicData.authorName}
            />
          </div>

          <div className="checkboxes">
            <div>
              <input
                type="checkbox"
                name="genre"
                value="Action "
                onChange={(e) => {
                  const value = e.target.value;
                  const checked = e.target.checked;
                  console.log(value, checked);
                  if (checked) {
                    setComicData({
                      ...comicData,
                      genre: [...comicData.genre, value],
                    });
                  } else {
                    setComicData((comicData) => ({
                      ...comicData,
                      genre: comicData.genre.filter((e) => e !== value),
                    }));
                  }
                }}
              />
              <label> Action &nbsp;</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="genre"
                value="Adventure "
                onChange={(e) => {
                  const value = e.target.value;
                  const checked = e.target.checked;
                  console.log(value, checked);
                  if (checked) {
                    setComicData({
                      ...comicData,
                      genre: [...comicData.genre, value],
                    });
                  } else {
                    setComicData((comicData) => ({
                      ...comicData,
                      genre: comicData.genre.filter((e) => e !== value),
                    }));
                  }
                }}
              />
              <label> Adventure &nbsp;</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="genre"
                value="System "
                onChange={(e) => {
                  const value = e.target.value;
                  const checked = e.target.checked;
                  console.log(value, checked);
                  if (checked) {
                    setComicData({
                      ...comicData,
                      genre: [...comicData.genre, value],
                    });
                  } else {
                    setComicData((comicData) => ({
                      ...comicData,
                      genre: comicData.genre.filter((e) => e !== value),
                    }));
                  }
                }}
              />
              <label> System &nbsp;</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="genre"
                value="Comedy "
                onChange={(e) => {
                  const value = e.target.value;
                  const checked = e.target.checked;
                  console.log(value, checked);
                  if (checked) {
                    setComicData({
                      ...comicData,
                      genre: [...comicData.genre, value],
                    });
                  } else {
                    setComicData((comicData) => ({
                      ...comicData,
                      genre: comicData.genre.filter((e) => e !== value),
                    }));
                  }
                }}
              />
              <label> Comedy &nbsp;</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="genre"
                value="Xinxia "
                onChange={(e) => {
                  const value = e.target.value;
                  const checked = e.target.checked;
                  console.log(value, checked);
                  if (checked) {
                    setComicData({
                      ...comicData,
                      genre: [...comicData.genre, value],
                    });
                  } else {
                    setComicData((comicData) => ({
                      ...comicData,
                      genre: comicData.genre.filter((e) => e !== value),
                    }));
                  }
                }}
              />
              <label> Xinxia &nbsp;</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="genre"
                value="Murim"
                onChange={(e) => {
                  const value = e.target.value;
                  const checked = e.target.checked;
                  console.log(value, checked);
                  if (checked) {
                    setComicData({
                      ...comicData,
                      genre: [...comicData.genre, value],
                    });
                  } else {
                    setComicData((comicData) => ({
                      ...comicData,
                      genre: comicData.genre.filter((e) => e !== value),
                    }));
                  }
                }}
              />
              <label> Murim &nbsp;</label>
            </div>
          </div>

          <div className="coverContainer">
            <div>
              <label className="inputContainer">
                Chapter Image 1
                <input
                  type="file"
                  accept="image/*"
                  onChange={convertToBase64}
                  className="inputCSS"
                />
              </label>
              {comicData.comicImages[0] ? 
                  <img
                  style={{ height: "40px", width: "40px" }}
                  alt="firstPage"
                  src={comicData.comicImages[0]}
                  className="previewImg"
                /> : null
              }
            </div>

            <div>
              <label className="inputContainer">
                Chapter Image 2
                <input
                  type="file"
                  accept="image/*"
                  onChange={convertToBase64}
                  className="inputCSS"
                />
              </label>
              {comicData.comicImages[1] ? 
                  <img
                  style={{ height: "40px", width: "40px" }}
                  alt="secondPage"
                  src={comicData.comicImages[1]}
                  className="previewImg"
                /> : null
              }
            </div>

            <div>
              <label className="inputContainer">
                Chapter Image 3
                <input
                  type="file"
                  accept="image/*"
                  onChange={convertToBase64}
                  className="inputCSS"
                />
              </label>
              {comicData.comicImages[2] ? 
                  <img
                  style={{ height: "40px", width: "40px" }}
                  alt="thirdPage"
                  src={comicData.comicImages[2]}
                  className="previewImg"
                /> : null
              }
            </div>

            <div>
              <label className="inputContainer">
                Chapter Image 4
                <input
                  type="file"
                  accept="image/*"
                  onChange={convertToBase64}
                  className="inputCSS"
                />
              </label>
              {comicData.comicImages[3] ? 
                  <img
                  style={{ height: "40px", width: "40px" }}
                  alt="fourthPage"
                  src={comicData.comicImages[3]}
                  className="previewImg"
                /> : null
              }
            </div>

            <div>
              <label className="inputContainer">
                Chapter Image 5
                <input
                  type="file"
                  accept="image/*"
                  onChange={convertToBase64}
                  className="inputCSS"
                />
              </label>
              {comicData.comicImages[4] ? 
                  <img
                  style={{ height: "40px", width: "40px" }}
                  alt="fifthPage"
                  src={comicData.comicImages[4]}
                  className="previewImg"
                /> : null
              }            
            </div>

            <div>
              <label className="inputContainer">
                Chapter Image 6
                <input
                  type="file"
                  accept="image/*"
                  onChange={convertToBase64}
                  className="inputCSS"
                />
              </label>
              {comicData.comicImages[5] ? 
                  <img
                  style={{ height: "40px", width: "40px" }}
                  alt="sixthPage"
                  src={comicData.comicImages[5]}
                  className="previewImg"
                /> : null
              }     
            </div>
          </div>

          <div className="comicChapterContainer">
            <label> Chapter Number: &nbsp; </label>
            <input
              type="number"
              name="chapterNumber"
              onChange={(e) =>
                setComicData({ ...comicData, chapterNumber: e.target.value })
              }
              value={comicData.chapterNumber}
            />
            <br />
            <br />
          </div>

          <div className="comicDescriptionContainer">
            <label> Synopsis : &nbsp; </label>
            <textarea
              name="description"
              rows="5"
              cols="50"
              onChange={(e) =>
                setComicData({ ...comicData, description: e.target.value })
              }
              value={comicData.description}
            />
          </div>

          <button className="submitButton">Submit</button>


        </div>      
      </form>
    </div>
  );
};

export default Upload;
