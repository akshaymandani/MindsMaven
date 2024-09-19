// import { addDoc, collection } from 'firebase/firestore';
// import React, { useState } from 'react';
// import CuBgImage from "../images/Contact Us Background Image.png";
// import "./contactUs.css";
// import { db } from './firebase.jsx';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("hello")

//     try {
//       const docRef = await addDoc(collection(db, 'data'), formData);
//       console.log("Document written with ID: ", docRef.id);
//       alert("Message sent successfully!");
//       setFormData({ name: '', phone: '', email: '', message: '' });
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };

//   return (
//     <div className='cu-body'>
//       <div className='cu-left'>
//         <div className='cu-left-main'>
//           <img id="main-image" src={CuBgImage} alt="Main Image" />
//           <div id="overlay" className="overlay">
//             <div className="content">
//               <h1>Our Global Presence</h1>
//               <div className='content1'>
//                 <h2>India (HQ)</h2>
//                 <p>Bangalore, Karnataka, India, 560008</p>
//                 <p>+91 8849492570</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='cu-right'>
//         <div className='cu-right-top'>
//           <h1>Get Your Free Quote Today</h1>
//         </div>
//         <div className='cu-right-content'>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="name">Full Name</label><br />
//             <input type="text" name="name" id="name" placeholder='John Doe' value={formData.name} onChange={handleChange} required /><br />
//             <label htmlFor="phone">Phone Number</label><br />
//             <input type="tel" name="phone" id="phone" placeholder='+91 123 456 789' value={formData.phone} onChange={handleChange} required /><br />
//             <label htmlFor="email">Email</label><br />
//             <input type="email" name="email" id="email" placeholder='johndoe@gmail.com' value={formData.email} onChange={handleChange} required /><br />
//             <label htmlFor="message">Message</label><br />
//             <textarea name="message" id="message" placeholder='Write your message here' value={formData.message} onChange={handleChange} required /><br />
//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;







// import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import CuBgImage from "../images/Contact Us Background Image.png";
import "./contactUs.css";
// import { db } from './firebase.jsx';

const ContactUs = () => {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxeV_zx_m6KcOYJZ329yt2UMOPd09tD4swXWzh1gHiCOQ-p-poWjwbdmmlKCSJs68IU/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <div className='cu-body'>
      <div className='cu-left'>
        <div className='cu-left-main'>
          <img id="main-image" src={CuBgImage} alt="Main Image" />
          {/* <img id="main-image" src={CuBgImage} alt="Main Image" /> */}
          <div id="overlay" className="overlay">
            <div className="content">
              <h1>Our Global Presence</h1>
              <div className='content1'>
                <h2>India (HQ)</h2>
                <p>Bangalore, Karnataka, India, 560008</p>
                <p>+91 8849492570</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='cu-right'>
        <div className='cu-right-top'>
          <h1>Get Your Free Quote Today</h1>
        </div>
        <div className='cu-right-content'>
          <form className="form" onSubmit={(e) => Submit(e)}>
            <label htmlFor="name">Full Name</label><br />
            <input type="text" name="Name" id="name" placeholder='John Doe' required /><br />
            <label htmlFor="phone">Phone Number</label><br />
            <input type="number" name="phone" id="phone" placeholder='+91 123 456 789' required /><br />
            <label htmlFor="email">Email</label><br />
            <input type="email" name="Email" id="email" placeholder='johndoe@gmail.com' required /><br />
            <label htmlFor="message">Message</label><br />
            <textarea name="Message" id="message" placeholder='Write your message here' required /><br />
            <button type="submit" name="Name">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;