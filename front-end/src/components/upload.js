// import React, { useState } from 'react'

// const Upload = () => {

//     const [userRegistration, setUserRegistration] = useState({
//         name: "",
//         checkbox: ""
//     });

//     const [records, setRecords] = useState([]);

//     const handleInput = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         console.log(name, value);

//         setUserRegistration({...userRegistration, [name] : value})
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // const name = e.target.name;
//         // const value = e.target.value;

//         const newRecord = { ...userRegistration,checkbox: e.target.checkbox.checked , id: new Date().getTime().toString() };

//         setRecords({...records, newRecord});
//         setUserRegistration({...userRegistration, name: "", checkbox:""})

//         console.log(records);
//     };

//   return (
//     <>
//         <form className="formData" action="" onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="name">Name</label>
//                 <input type="text" autoComplete="off"

//                 value={userRegistration.name}
//                 onChange={handleInput}
//                  name="name" id="name" />
//             </div>
//             <div>
//                 <label htmlFor="checkbox">Checkbox</label>
//                 <input type="checkbox"

//                 value={userRegistration.checkbox}
//                 onChange={handleInput}
//                 name="checkbox" id="checkbox" />
//             </div>

//             <button type="submit">Submit</button>
//         </form>
//     </>
//   )
// }

// export default Upload

import React, { useState } from "react";
import Navbar from "./navbar";
import "./upload.css";

const Upload = () => {
  // const [userRegistration, setUserRegistration] = useState({
  //     name: "",
  //     checkbox: false
  // });

  // const [records, setRecords] = useState([]);

  // const handleInput = (e) => {
  //     const name = e.target.name;
  //     const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  //     setUserRegistration({...userRegistration, [name] : value});
  //     console.log(name, value);

  // };

  // const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
  //     setRecords([...records, newRecord]);

  //     console.log(records);

  //     setUserRegistration({...userRegistration, name: "", checkbox: false});
  // };

  return (
    <>
      {/* <Navbar/> */}
      <form className="formData">
        <div className="uploadForm">
            <div className="leftContainer">
                <div className="coverContainer">
                  <label> Comic's cover image
                    <input type="file" />
                  </label>
                </div>
            </div>

            <div className="rightContainer">

                <div className="comicNameContainer">
                  <label> Comic's Name &nbsp; &nbsp;</label>
                  <input type="text" name="comicName" />
                </div>

                <div className="authorNameContainer">
                  <label> Authors's Name &nbsp;</label>
                  <input type="text" name="authorName" />
                </div>

                <div className="checkboxes">
                  <div>
                    <input type="checkbox" name="genre" value="Action" />
                    <label htmlFor=""> Action &nbsp;</label>
                  </div>

                  <div>
                    <input type="checkbox" name="genre" value="Adventure" />
                    <label htmlFor=""> Adventure &nbsp;</label>
                  </div>

                  <div>
                    <input type="checkbox" name="genre" value="Slice of Life" />
                    <label htmlFor=""> Slice of Life &nbsp;</label>
                  </div>

                  <div>
                    <input type="checkbox" name="genre" value="Comedy" />
                    <label htmlFor=""> Comedy &nbsp;</label>
                  </div>

                  <div>
                    <input type="checkbox" name="genre" value="Xinxia" />
                    <label htmlFor=""> Xinxia &nbsp;</label>
                  </div>

                  <div>
                    <input type="checkbox" name="genre" value="Murim" />
                    <label htmlFor=""> Murim &nbsp;</label>
                  </div>          
                </div>   

                <div className="coverContainer">
                  <div>
                    <label> Chapter Image 1
                      <input type="file" />
                    </label>
                  </div>

                  <div>
                    <label> Chapter Image 2  
                      <input type="file" />
                    </label>              
                  </div>

                  <div>
                    <label> Chapter Image 3
                      <input type="file" />
                    </label> 
                  </div>

                  <div>
                    <label> Chapter Image 4
                       <input type="file" />
                    </label>
                  </div>

                  <div>
                    <label> Chapter Image 5
                      <input type="file" />
                    </label>
                  </div>

                  <div>
                    <label> Chapter Image 6
                      <input type="file" />
                    </label>
                  </div>

                  <div>
                    <label> Chapter Image 7
                      <input type="file" />
                    </label>
                  </div>

                  <div>
                    <label> Chapter Image 8
                      <input type="file" />
                    </label>
                  </div>

                  <div>
                    <label> Chapter Image 9
                      <input type="file" />
                    </label>
                  </div>
                </div>     

                <div className="comicNameContainer">
                  <label> Chapter Number &nbsp; &nbsp;</label>
                  <input type="number" name="chapterNumber" />
                </div>

                <div className="submitButton">
                  <input type="submit" />
                </div>  

            </div>
        </div>
        {/* onSubmit={handleSubmit} */}
        {/* <div>
                <label htmlFor="name">Name</label>
                <input type="text" autoComplete="off"
                    value={userRegistration.name}
                    onChange={handleInput}
                    name="name" id="name" />
            </div>
            <div>
                <label htmlFor="checkbox">Checkbox</label>
                <input type="checkbox" 
                    checked={userRegistration.checkbox}
                    onChange={handleInput}
                    name="checkbox" id="checkbox" />
            </div>

            <button type="submit">Submit</button> */}
      </form>
    </>
  );
};

export default Upload;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Upload = () => {

//   const [userRegistration, setUserRegistration] = useState({
//     name: "",
//     checkbox: false
//   });

//   const handleInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
//     setUserRegistration({...userRegistration, [name] : value});
//     console.log(name, value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.post('/api/comics', userRegistration)
//       .then(response => {
//         console.log(response);
//         setUserRegistration({...userRegistration, name: "", checkbox: false});
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   return (
//     <>
//       <form className="formData" action="" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input type="text" autoComplete="off"
//             value={userRegistration.name}
//             onChange={handleInput}
//             name="name" id="name" />
//         </div>
//         <div>
//           <label htmlFor="checkbox">Checkbox</label>
//           <input type="checkbox"
//             checked={userRegistration.checkbox}
//             onChange={handleInput}
//             name="checkbox" id="checkbox" />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </>
//   )
// }

// export default Upload;
