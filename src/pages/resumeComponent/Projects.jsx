import React,{useState} from 'react';
import { Fade,Zoom } from 'react-awesome-reveal'; // Import the Fade animation from react-awesome-reveal
import '../../styles/resumeComponent.css';
import img1 from '../../Assests/Images/food1.png'
import img2 from '../../Assests/Images/food2.png'
import img3 from '../../Assests/Images/food3.png'
import img4 from '../../Assests/Images/food4.png'
import img5 from '../../Assests/Images/food5.png'
import img6 from '../../Assests/Images/food6.png'
import e1 from '../../Assests/Images/e1.jpeg'
import e2 from '../../Assests/Images/e2.jpeg'
import e3 from '../../Assests/Images/e3.jpeg'
import edu1 from '../../Assests/Images/edu1.png'
import edu2 from '../../Assests/Images/edu2.png'
import edu3 from '../../Assests/Images/edu3.png'
import d from '../../Assests/Images/d4.png'
import d1 from '../../Assests/Images/d1.png'
import d2 from '../../Assests/Images/d2.png'
import Modal from 'react-modal';

// Make sure to bind modal to your app
Modal.setAppElement('#root');
const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
   const [modal_IsOpen, setModal_IsOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [stacksUsed, setStacksUsed] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectImages, setProjectImages] = useState([]);
  const [userName,setUserName]=useState('')
  const [password,setPassword]=useState('')

  const openAddProjectModal = () => {
    setModal_IsOpen(true);
  };
    const closeAddProjectModal = () => {
    setModal_IsOpen(false);
  };
 const openModal=()=>{
     setModalIsOpen(true)
 }
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleStacksUsedChange = (e) => {
    setStacksUsed(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };
   const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
     const handlePassowordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const selectedImages = files.slice(0, 5); // Limit to 5 images
    setProjectImages(selectedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log({
      projectName,
      stacksUsed,
      projectDescription,
      projectImages,
    });
    closeModal();
  };
const handle_Submit=(e)=>{
   e.preventDefault();
     console.log({
      userName,
      password,
    });
    closeModal();
}


  const handleWClick = () => {
    const whatsappNumber = '+923078761165'; // WhatsApp number with country code
    // Constructing the WhatsApp API URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  };
const handleLogin=()=>{
  openAddProjectModal()
}
  return (
    <div className="projects-container" >
      <div className="row">
        {/* Left column for project details */}
        <div className='col-md-6'>
        <Fade direction="up" cascade triggerOnce>
            <div className="project-item">
              <div className="project-details">
                <h2>Food Ordering App </h2>
                <p>Technologies Used: React.js, Redux Toolkit,ReactStrap,CSS,Bootstrap</p>
                <p>"CraveHub: A specialized food delivery web application crafted with React.js, Redux, and Redux Toolkit, focusing on burger, pizza, and bread orders. </p>
              </div>
              <div className="project-year">
                <span>2021-2022</span>
              </div>
            </div>
            </Fade>
        </div>
        <div className='col-md-6'>
        <div >
          
          <div className="ImageContainer" >
         <Zoom> <img src={img1} className="Image mb-4" alt="Project 1" /></Zoom>
         <Zoom> <img src={img2} className="Image mb-4" /></Zoom>
        <Zoom>  <img src={img3} className="Image mb-4" /></Zoom>
         <Zoom> <img src={img4} className="Image mb-4" /></Zoom>
         <Zoom> <img src={img5} className="Image mb-4" /></Zoom>
        <Zoom>  <img src={img6} className="Image mb-4" /></Zoom>
          </div>
          <a target='_blank' href='https://github.com/123Muamil/CraveHub' class="github-btn"><i class="fab fa-github"></i></a>
          <a target='_blank' href='https://fooddeliveryapp1.netlify.app/' class="link-btn"><i class="fas fa-external-link-alt"></i></a>
          </div>
        </div>
        <div className='col-md-6'>
        <Fade direction="up" cascade triggerOnce>
        <div className="project-item">
              <div className="project-details">
                <h2>E-Learnify</h2>
                <p>Technologies Used: React.js,CSS,Bootstrap5</p>
                <p>Your gateway to a world of knowledge. Explore diverse courses, engage with interactive content, and enhance your skills with our comprehensive e-learning platform. Empower yourself with E-Learnify, your ultimate educational website."</p>
              </div>
              <div className="project-year">
                <span>2021-2022</span>
              </div>
            </div>
            </Fade>
        </div>
        <div className='col-md-6'>
        <div   style={{marginTop:'30px'}}>
           <div className="ImageContainer" >
          <Zoom> <img src={e1} className="Image mb-4" alt="Project 1" /></Zoom>
          <Zoom> <img src={e2} className="Image mb-4" /></Zoom>
        <Zoom>   <img src={e3} className="Image mb-4" /></Zoom>

           </div>
           <a target='_blank' href='https://github.com/123Muamil/ThreadsHub' class="github-btn"><i class="fab fa-github"></i></a>
           <a target='_blank' href='https://full-stack-ecommerce-clothing-web.vercel.app/' class="link-btn"><i class="fas fa-external-link-alt"></i></a>
           </div>
        </div>
        <div className='col-md-6'>
        <Fade direction="up" cascade triggerOnce>
        <div className="project-item">
              <div className="project-details">
                <h2>E-Commerce Site</h2>
                <p>Technologies Used:Next js,CSS</p>
                <p>This project is a full stack e-commerce website built with Next js. I created this project as an exercise to develop my web development skills, especially to learn about Next js.</p>
              </div>
              <div className="project-year">
                <span>2021-2022</span>
              </div>
            </div>
            </Fade>
        </div>
        <div className='col-md-6'>
      
        <div   style={{marginTop:'30px'}}>
           <div className="ImageContainer" >
         <Zoom>  <img src={edu1} className="Image mb-4" alt="Project 1" /></Zoom>
          <Zoom> <img src={edu2} className="Image mb-4" /></Zoom>
          <Zoom> <img src={edu3} className="Image mb-4" />
</Zoom>
           </div>
           <a target='_blank' href='https://github.com/123Muamil/E-Learnify' class="github-btn"><i class="fab fa-github"></i></a>
           <a target='_blank' href='https://educational-website-reactjs.netlify.app/' class="link-btn"><i class="fas fa-external-link-alt"></i></a>
           </div>
        </div>

        {/* end of details */}
        <div className="col-md-6">
          <Fade direction="up" cascade triggerOnce>
            <div className="project-item">
              <div className="project-details">
                <h2>SocializeHub</h2>
                <p>Technologies Used: React.js,Typescript,Vite,CSS,Bootstrap5</p>
                <p>Streamline your social media management with our all-in-one admin dashboard. Handle user and manager management, support desk, payment processing, content templates, analytics, settings, and more. Simplify your social strategy with SocializeHub.</p>
              </div>
              <div className="project-year">
                <span>2021-2022</span>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-md-6" >
           <div   style={{marginTop:'30px'}}>
           <div className="ImageContainer" >
         <Zoom>  <img src={d} className="Image mb-4" alt="Project 1" /></Zoom>
          <Zoom> <img src={d1} className="Image mb-4" /></Zoom>
          <Zoom> <img src={d2} className="Image mb-4" /></Zoom>

           </div>
           <a target='_blank' href='https://github.com/123Muamil/SocializeHub' class="github-btn"><i class="fab fa-github"></i></a>
           <a target='_blank' href='https://social-media-admin-dashboard.netlify.app/' class="link-btn"><i class="fas fa-external-link-alt"></i></a>
           </div>
        </div>
        <div className="col-md-12 text-end">
                    <button className='add_project' onClick={openModal}> <i class="fas fa-plus" style={{marginRight:10}}></i> Add New Project</button>
                    <div>
      {/*Add Password Model*/}
      <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    className="modal-dialog Login_model"
    overlayClassName="modal-overlay"
    contentLabel="Add Project Modal"
>
    <div className="modal-content modal-professional">
        <div className="modal-header loginmodal-header ">
            <h5 className="modal-title">Please Log In to Add a Project</h5>
            <button type="button" className="btn-close closeButton" onClick={closeModal}>
            <i class="fas fa-times"></i>
            </button>
        </div>
        <div className="modal-body loginmodal-body">
            <form onSubmit={handle_Submit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={userName} onChange={handleUserNameChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={handlePassowordChange} />
                </div>
                <button type="submit" className="LoginButton" onClick={handleLogin}>Login</button>
            </form>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn developerButton" onClick={handleWClick}>Contact with Developer</button>
        </div>
    </div>
</Modal>

      {/* Add New Project Model */}
      <Modal
        isOpen={modal_IsOpen}
        onRequestClose={closeAddProjectModal}
        className="modal-dialog "
        overlayClassName="modal-overlay"
        contentLabel="Add Project Modal"
      >
        <div className="modal-content projectModal">
          {/* <div className="modal-header">
            <h5 className="modal-title">Add Project</h5>
            <button type="button" className="btn-close" onClick={closeAddProjectModal}></button>
          </div> */}
          <div className="modal-body ">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="projectName" className="form-label">Project Name:</label>
                <input type="text" className="form-control" id="projectName" value={projectName} onChange={handleProjectNameChange} />
              </div>
              <div className="mb-2">
                <label htmlFor="stacksUsed" className="form-label">Stacks Used:</label>
                <input type="text" className="form-control" id="stacksUsed" value={stacksUsed} onChange={handleStacksUsedChange} />
              </div>
              <div className="mb-2">
                <label htmlFor="projectDescription" className="form-label">Project Description:</label>
                <textarea className="form-control" id="projectDescription" rows="3" value={projectDescription} onChange={handleProjectDescriptionChange}></textarea>
              </div>
              <div className="mb-2">
                <label htmlFor="projectImages" className="form-label">Project Images (1 to 5 images):</label>
                <input type="file" className="form-control" id="projectImages" accept="image/*" multiple onChange={handleImageChange} />
              </div>
              <div class="mb-2">
          <label for="url" class="form-label">URL</label>
          <input type="url" class="form-control" id="url" name="url" required/>
        </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeAddProjectModal}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
                </div>
      </div>
      {/* <button className='add_project'>Add New Project</button> */}
    </div>
  );
}

export default Projects;
