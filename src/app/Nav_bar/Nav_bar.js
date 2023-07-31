"use client";
import Link from "next/link";
import Image from "next/image";

const Nav_bar = () => {
  return (
    <nav className="nav">
      <div >
        <ul className="ul">
          <span className="logo__">
            <Image
              src="/logo.png"
              alt="logo"
              width={263}
              height={80}
              priority
            />
          </span>
          <div className="__page"> 
            <span className="home__hm ">
              <Link href="/">Home</Link>
            </span>
            <span className="books__ ">
              <Link href="/Our_Books">Our Books</Link>
            </span>
            <span className="__blog">
              <Link href="/Blog">Blog</Link>
            </span>
            <span className="about__US ">
              <Link href="/About_Us">About Us</Link>
            </span>
            <span className="contact__US">
              <Link href="/Contact_Us">Contact Us</Link>
            </span>
          </div>
          <div className="icons_">
            <Image
              src="/search.svg"
              alt="search"
              width={20}
              height={20}
              priority
            />
            <Image
              src="/profile.svg"
              alt="profile"
              width={20}
              height={20}
              priority
            />
            <Image src="/save.svg" alt="save" width={20} height={20} priority />
            <Image src="/cart.svg" alt="cart" width={20} height={20} priority />
          </div>
        </ul>
      </div>
      <style jsx>{`
        nav {
           overflow :hidden:
          width: 1440px;
          height: 80px;
          background: #1daece;
          box-shadow: 0px 4px 4px 0px #1e1e1e40;
        }
        ul {
          display: flex;
          width: Hug (170px);
          height: Hug (20px);
          gap: 30px;
          padding-top: 30px;

        }
        .about__US {
          width: 72px;
          height: 19px;

          left: 808px;
          font-family: Work Sans;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          letter-spacing: 0em;
          text-align: left;
          color: #dfdfdf;
        }
        .contact__US {
          width: 87px;
          height: 19px;

          left: 920px;
          font-family: Work Sans;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          letter-spacing: 0em;
          text-align: left;
          color: #dfdfdf;
        }
        .__blog {
          width: 34px;
          height: 19px;

          left: 734px;
          font-family: Work Sans;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          letter-spacing: 0em;
          text-align: left;
          color: #dfdfdf;
        }
        .books__ {
          width: 81px;
          height: 19px;
          top: 30px;
          left: 613px;
          font-family: Work Sans;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          letter-spacing: 0em;
          text-align: left;
          color: #dfdfdf;
        }
        .home__hm {
        
          width: 46px;
          height: 19px;
          margin-left :527px
          font-family: Work Sans;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          letter-spacing: 0em;
          text-align: left;
          color: #dfdfdf;
        }
        .icons_{
            display:flex;
            width: Hug (170px);
            height: Hug (20px);
            gap: 30px;
            margin-left :220px;
            padding-bottom :110px;
            
        }
        .logo__{
           
            position : relative;
            left :80px;
            top :-30px
            
        }
        .__page{
            display : flex;
            justify-content: space-around; 
            justify-content:space-between;
            position : relative;
            left:180px;
            grid-gap:30px;
             
           
        }
      `}</style>
    </nav>
  );
};

export default Nav_bar;
