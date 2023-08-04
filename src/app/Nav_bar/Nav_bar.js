"use client";
import Link from "next/link";
import Image from "next/image";

const Nav_bar = () => {
  return (
    <nav className="nav">
      <div>
        <ul className="ul">
          <span className="logo__">
            <Image
              src="/logo.png"
              alt="logo"
              width= {263}
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
          <div  className="__icon_alg">
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
              <Image
                src="/save.svg"
                alt="save"
                width={20}
                height={20}
                priority
              />
              <Image
                src="/cart.svg"
                alt="cart"
                width={20}
                height={20}
                priority
              />
            </div>
          </div>
        </ul>
      </div>
      <style jsx>{`
         nav {
          display: flex;
          position: static;
          float: none;
          flex-shrink: 0;
          
          width: 100vw;
          height: 5rem;
          background: #1daece;
          box-shadow: 0px 4px 4px 0px #1e1e1e40;
        }
        ul {
          display: flex;
          width: Hug (10.625rem);
          height: Hug (1.25rem);
          gap: 1.875rem;
          padding-top: 1.875rem;
        }
        .about__US {
          width: hug(4.5rem);
          height: hug(1.1875rem);
          font-family: Work Sans;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.1875rem;
          letter-spacing: 0em;
          text-align: left;
          color: #dfdfdf;
        }
        .contact__US {
          width: hug (5.4375rem);
          height: hug (1.1875rem);
          font-family: Work Sans;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.1875rem;
          letter-spacing: 0em;
          text-align: left;
          color: #dfdfdf;
        }
        .__blog {
          width: hug(2.125rem);
          height: hug(1.1875rem);
          font-family: Work Sans;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.1875rem;
          letter-spacing: 0em;
          text-align: left;
          color: #dfdfdf;
        }
        .books__ {
          width: hug (5.0625rem);
          height: hug(1.1875rem);
          font-family: Work Sans;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.1875rem;
          letter-spacing: 0em;
          text-align: left;
          color: #dfdfdf;
        }
        .home__hm {
          width: hug(2.875rem);
          height: hug(1.1875rem);
          font-family: Work Sans;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.1875rem;
          letter-spacing: 0em;
          text-align: left;
          color: #dfdfdf;
        }
        .__page {
          display: flex;
          justify-content: space-around;
          justify-content: space-between;
          position: relative;
          margin-left: 5rem;
          grid-gap:  2rem;;
        }
        .icons_ {
          display: flex;
          width: Hug (10.625rem);
          height: Hug (1.25rem);
          gap: 1.875rem;
          margin-left :5rem;
          padding-bottom: 6.875rem;
        }
        
        .__icon_alg{
          justify-items: end;
          
        }
        .logo__ {
          position: relative;
          margin-left: 4rem;
          top: -1.875rem;
          // position: static;
          float: none;
        }
        

      `}</style>
    </nav>
  );
};

export default Nav_bar;
