import React, { useEffect } from "react";
import videoimg1 from '../Assests/Images/shape1.svg'
import videoimg2 from '../Assests/Images/shape2.svg'
import GLightbox from "glightbox";
import '../styles/introvedio.css'
import '../styles/animate.css'
// import intro from '../Assests/Apis/intro.mp4'
const IntroVideo= ()=>{
  // "https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
   useEffect(()=>{
    GLightbox({
      href: "",
      type: "video",
      source: "local", //vimeo, youtube or local
      width: 900,
      autoplayVideos: true,
    });
   })
    return(
        <section class="intro-video-area section">
<div class="container">
<div class="row">
<div class="col-12">
<div class="inner-content-head">
<div class="inner-content">
<img class="shape1" src={videoimg1} alt="#"/>
<img class="shape2" src={videoimg2} alt="#"/>
<div class="section-title">
<span class="wow zoomIn" data-wow-delay=".2s">Crafting unique experiences</span>
{/* Create your own experience */}
<h2 class="wow fadeInUp" data-wow-delay=".4s">Watch My intro video</h2>
<p class="wow fadeInUp" data-wow-delay=".6s">The best way to predict the future is to invent it.</p>
</div>
<div class="intro-video-play">
<div class="play-thumb wow zoomIn" data-wow-delay=".2s">
<a href={intro} class="glightbox video"><i class="lni lni-play"></i></a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

    )
}
export default IntroVideo;
