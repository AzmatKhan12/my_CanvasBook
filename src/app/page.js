"use client";
import { useState } from "react";
import Nav_bar from "./Nav_bar/Nav_bar";
import styles from "./Styles/Home.module.css";
import Button from "./Buttons/Button";
import Button_char from "./Buttons/Button_char";
import { Margarine } from "next/font/google";

const Home = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const genderOptions = ["Male", "Female"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Gender:", gender);
  };
  return (
    <>
      <Nav_bar />
      <section >
        <div className={styles.character_box}>
          <form onSubmit={handleSubmit}>
            <div className={styles.__label}>Create Your Character</div>
            <div>
              <span>
                <input
                  type="text"
                  id="name"
                  placeholder="Character Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </span>
            </div>
            <div className={`flex justify-between border-solid  items-center `}>
              <div className="mr-5 ">
                <span>
                  <input
                    type="number"
                    id="age"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </span>
              </div>
              <div
                className={`flex justify-center items-center  ${styles.home_div}`}
              >
                <input className="mx-0" type="radio" name="gender" id="" /> Male
                <input type="radio" name="gender" id="" /> Female
              </div>
            </div>
            <div className="mt -1.5">
              <Button>Upload a picture</Button>
            </div>
            <div >
              <Button_char>Create Your Character</Button_char>
            </div>
              <div className={`hr `}>
                 <hr className="hr"/>
                 or
                 <hr className="hr"/>
              </div>
            <div>
              <Button_char>Generate a random Character</Button_char>
            </div>
          </form>
        </div>

        <style jsx>{`
          input {
            padding: .625rem 1rem;
            width: 100%;
            font-family: "Poppins", sans-serif;
            font-size: 1.125rem;
            border: 1px solid #1daece;
            border-radius: .5rem;
            margin: .25rem;
            color: #1daece;
            letter-spacing: 1px;
            text-align: center;
            cursor: pointer;
          }

          input:focus {
            outline: none !important;
          }

          ::placeholder {
            color: #1daece;
          }
          .hr{
              display: flex;
              width:  20rem;
              height: 2.125rem;
              gap: .625rem;
              background-color: #fff;
              margin: .5rem;
              padding-left : 5rem;
              color: #1DAECE;
              font-weight: 1000;
              text-align: center;
          }
          div:hover{
            
            border-color: #1DAECE ;
          
          }
         
        `}</style>
      </section>
    </>
  );
};

export default Home;
