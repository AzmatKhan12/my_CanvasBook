// "use client";
// import { useState } from "react";
// import Nav_bar from "../Nav_bar/Nav_bar";
// import styles from "../Styles/Home.module.css";
// import Button from "../Buttons/Button";
// import Button_char from "../Buttons/Button_char";

// const Home = (props) => {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const genderOptions = ["Male", "Female"];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     console.log("Name:", name);
//     console.log("Age:", age);
//     console.log("Gender:", gender);
//   };
//   return (
//     <>
//       <Nav_bar />
//       <section className={`${styles.main} `}>
//         <div className={styles.character_box}>
//           <form onSubmit={handleSubmit}>
//             <div>Create Your Character</div>
//             <div>
//               <span>
//                 <input
//                   type="text"
//                   id="name"
//                   placeholder="Character Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </span>
//             </div>
//             <div className={`flex justify-between border-solid  items-center `}>
//               <div className="mr-5">
//                 <span>
//                   <input
//                     type="number"
//                     id="age"
//                     placeholder="Age"
//                     value={age}
//                     onChange={(e) => setAge(e.target.value)}
//                   />
//                 </span>
//               </div>
//               <div
//                 className={`flex justify-center items-center ${styles.home_div}`}
//               >
//                 <input className="mx-5" type="radio" name="gender" id="" /> Male
//                 <input type="radio" name="gender" id="" /> Female
//               </div>
//             </div>
//             <div>
//               <Button>Upload a picture</Button>
//             </div>
//             <div >
//               <Button_char>Create Your Character</Button_char>
//             </div>
//               <div  className="hr">
//                 <div> <hr/></div>
//                 <div style={{textAlign:"center"}}>or</div>
//                 <div> <hr/></div>
//               </div>
//             <div>
//               <Button_char>Generate a random Character</Button_char>
//             </div>
//           </form>
//         </div>

//         <style jsx>{`
//           input {
//             padding: 10px 15px;
//             width: 100%;
//             font-family: "Poppins", sans-serif;
//             font-size: 18px;
//             border: 1px solid #1daece;
//             border-radius: 8px;
//             margin: 4px;
//             color: #1daece;
//             letter-spacing: 1px;
//             text-align: center;
//           }

//           input:focus {
//             outline: none !important;
//           }

//           ::placeholder {
//             color: #1daece;
//           }
//           .hr{
//               display: flex;
//               width:  306px;
//               height: 33px;
//               gap: 10px;
//               background-color: #fff;
//               margin: 6px;
//               color: #1DAECE;
//               font-weight: 1000;
//               text-align: center;
//           }
//           div:hover{
            
//             border-color: #1DAECE ;
          
//           }
         
//         `}</style>
//       </section>
//     </>
//   );
// };

// export default Home;
