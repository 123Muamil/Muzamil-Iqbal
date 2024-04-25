import React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { UseDimensions } from "../Sidebar/UseDimention";
import { Link } from "react-scroll";
import '../Sidebar/Style.css'
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};
const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};
const variants1 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = UseDimensions(containerRef);
  return (
    <motion.nav
      className="sidebar"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}>
      <motion.div className="background" variants={sidebar} />
     
      <button className="sidebar-button" onClick={()=>toggleOpen()} >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
  <div>
  <motion.ul className="sidebar-list" variants={variants1}>
  <motion.li
      className="sidebar-list-items"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
  <div ><Link to="home" className="navbar-link" onClick={()=>toggleOpen()}><i className="fa-solid fa-house-user navbar-icons"></i>Home</Link></div>
    </motion.li>
    <motion.li
    className="sidebar-list-items"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
  <div >
    <Link to="about" className="navbar-link" onClick={()=>toggleOpen()}><i className="fa-solid fa-computer navbar-icons"></i>About Me</Link></div>
    </motion.li>
    <motion.li
    className="sidebar-list-items"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
  <div >
    <Link to="pro" className="navbar-link" onClick={()=>toggleOpen()}><i className="fa-solid fa-computer navbar-icons"></i>Projects</Link></div>
    </motion.li>
    <motion.li
    className="sidebar-list-items"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
  <div ><Link to="resume" className="navbar-link" onClick={()=>toggleOpen()} ><i className="fa-solid fa-crown navbar-icons"></i>Resume</Link></div>
    </motion.li>
    <motion.li
    className="sidebar-list-items"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
  <div ><Link to="testimonial" className="navbar-link" onClick={()=>toggleOpen()}><i className="fa-solid fa-star navbar-icons"></i>Testimonial</Link></div>
    </motion.li>
    <motion.li
    className="sidebar-list-items"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
  <div ><Link to="contact" className="navbar-link" onClick={()=>toggleOpen()}><i className="fa-solid fa-star navbar-icons"></i>Contact US</Link></div>
    </motion.li>
  </motion.ul>
     
    </div>
    
    </motion.nav>
  );
};