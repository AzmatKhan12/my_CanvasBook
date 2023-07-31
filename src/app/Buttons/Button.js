

const Button = (props) => {
    const {children,onClick,style}=props
  return (
    <>
        <div className=" button__">

             <button className=" btn_btn"  onClick={onClick}>{children}</button>
          
        </div>
       <style> jsx{`
                        
            .button__bg{
                width: 588px;
                margin: 20vh;
                padding: 4rem;
                height: fit-content;
                background: #fff;
            }

            .btn_btn{
                padding: 10px 15px;
                width: 100%;
                font-family: 'Poppins', sans-serif;
                font-size: 18px;
                border: 1px solid #1DAECE;
                border-radius: 8px;
                color: #1DAECE;
            }

       `}</style>
    </>
  )
}

export default Button;