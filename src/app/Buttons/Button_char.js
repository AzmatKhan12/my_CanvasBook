import React from 'react'

const Button_char = (props) => {

   const {children,onClick}= props
  return (
    <>
        <div >
           <button className='btn_btn'>{children}</button>
        </div>
         <style jsx>
         {`
         

        .btn_btn{
            padding: 10px 15px;
            width: 100%;
            font-family: 'Poppins', sans-serif;
            font-size: 18px;
            border: 1px solid #1DAECE;
            border-radius: 8px;
            color:  #fff;
            background:#1DAECE ;
            margin-top : 10px;
         `}
         </style>
    </>
  )
}

export default Button_char