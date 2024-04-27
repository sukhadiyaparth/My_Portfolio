import React from "react";
import "./A1.css";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faCode, faPlane, faFilm, faFutbol } from '@fortawesome/free-solid-svg-icons'




export default function Ab() {
  return (
    <section className={styles.container} id="about">
     
        <div className="c3-sm">
          <h2 className={`${styles.title} `}>About</h2>
        </div>
       
      <div className="content co-md co-sm" >

        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={`${styles.aboutImage} " img1"`}
          width="30%"
        />


        <div className="r1 r1-md r1-sm">

          <p className={`${styles.Intro} si-m`}>
            Equipped with a BTech degree in Computer Enginnering from C.k Pithawalla Engineering and Technology, I'm eager to immerse myself in the dynamic realm of full stack development, blending my academic foundation with practical expertise to create innovative web solutions</p>
        </div>


      </div>
      <h1 className="t2 t2-md">My intrest</h1>
      <div className="my-intresey my-intresey-md my-intresey-sm my-intresey-xsm">
        <li className="my-intresey-li"><i className="icofont-music-note">    music <FontAwesomeIcon icon={faMusic} /> </i></li>
        <li className="my-intresey-li">travel  <FontAwesomeIcon className="I1" icon={faPlane} /></li>
        <li className="my-intresey-li">movie  <FontAwesomeIcon icon={faFilm} /></li>
        <li className="my-intresey-li">coding  <FontAwesomeIcon icon={faCode} /> </li>
        <li className="my-intresey-li">sport <FontAwesomeIcon icon={faFutbol} /></li>
      </div>



    </section>
  )
}

// import React from "react";


// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faMusic, faPlane, faLaptopCode, faBasketballBall } from '@fortawesome/free-solid-svg-icons';
//  function Ab() {
//   return (
//     <div className="About-me">
//       <div>
//         <h1>About-me</h1>
//       </div>
//       <div className="container">
//         <div className="img-me">
//           <img src={img} alt="hero-img" width='100%'height='100%' />
//         </div>
//         <div className="containt-2">
//           <div className="Name">
//             <h2>Parth Sukhadiya</h2>
//           </div>
//           <div className="Profesion">
//             <h4>Full Stack Developer</h4>
//           </div>
//           <div className="Intro">
//             I am a skilled web designer with over 3 years of experience in the
//             industry. My passion lies in creating captivating website designs
//             and implementing them through frontend development. take pride in
//             staying up-to-date with current design trends and leveraging my
//             creativity to produce visually appealing and user-friendly websites.
//             Throughout my career, I have developed a deep understanding of user
//             experience (UX) and user interface (UI) principles. By putting
//             myself in the shoes of the end-users, I strive to create intuitive
//             and seamless browsing experiences. I believe that a well-designed
//             website should not only look visually appealing but also provide a
//             smooth and enjoyable interaction for visitors. When starting a new
//             project, I thoroughly research and analyze the target audience and
//             the client's specific requirements. This enables me to tailor my
//             designs to meet their expectations and deliver a unique online
//             presence that aligns with their brand identity..
//           </div>

//           {/* <div className="intrest">
//             <div className="">
//               <h1>intrest</h1>
//             </div>
//             <div className="my-intresey">
//               <li>music <span>{<FontAwesomeIcon icon={faMusic}  style={{ color: 'white' }}/>}</span></li>
//               <li>travel{<FontAwesomeIcon icon={faPlane} />}</li>
//               <li>move{<FontAwesomeIcon icon={faLaptopCode} />}</li>
//               <li>coding  <FontAwesomeIcon icon={faBasketballBall} /></li>
//               <li>sport</li>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Ab;