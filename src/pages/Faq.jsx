import React  from "react";
import '../styles/faq.css'
const faq = ()=> {
    return ( 
      <section class="faq section" id="faq">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-title">
                <h3 class="wow zoomIn" data-wow-delay=".2s">
                  Faq
                </h3>
                <h2 class="wow fadeInUp" data-wow-delay=".4s">
                  frequently asked questions
                </h2>
                <p class="wow fadeInUp" data-wow-delay=".6s">
                The art of programming is the skill of controlling complexity.
                </p>
              </div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-lg-6 col-md-12 col-12">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="false"
                      aria-controls="collapse1"
                    >
                      <span class="title">
                      What technologies do you specialize in as a full-stack developer? 
                      </span>
                      <i class="lni lni-plus"></i>
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                      I specialize in a range of technologies across the full-stack spectrum, allowing me to deliver comprehensive solutions for web and mobile development projects. On the front-end, I am proficient in React.js, Next.js, and React Native, enabling me to create dynamic and interactive user interfaces with ease. For the back-end, I have expertise in Node.js, providing scalable and efficient server-side logic. 
                      </p>
                      <p>
                      Additionally, I am skilled in Python-based frameworks such as Django and Flask, allowing me to build robust back-end systems and APIs. With this versatile skill set, I am equipped to handle various aspects of software development, from designing user experiences to implementing complex business logic.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading2">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      <span class="title">How many years of experience do you have in software engineering?</span>
                      <i class="lni lni-plus"></i>
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading2"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                      I have 1 year of experience in software engineering, during which I have gained valuable skills and knowledge in developing robust and efficient software solutions. 
                      </p>
                      <p>
                      Despite my relatively short tenure, I am dedicated to continuous learning and growth in the field, striving to deliver high-quality work and exceed expectations in every project I undertake.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading3">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      <span class="title">
                      Can you provide examples of projects as a full-stack developer?
                      </span>
                      <i class="lni lni-plus"></i>
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading3"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                      Certainly! In the Projects section of my portfolio, you'll find a showcase of some of the exciting projects I've had the opportunity to work on as a full-stack developer. These projects demonstrate my versatility in handling both front-end and back-end development tasks, utilizing technologies such as React.js, Node.js, Django, and more. Feel free to explore these projects to get a better understanding of my skills and capabilities in action.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12 xs-margin">
              <div class="accordion" id="accordionExample2">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading11">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse11"
                      aria-expanded="false"
                      aria-controls="collapse11"
                    >
                      <span class="title">
                      What programming languages are you proficient in?
                      </span>
                      <i class="lni lni-plus"></i>
                    </button>
                  </h2>
                  <div
                    id="collapse11"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading11"
                    data-bs-parent="#accordionExample2"
                  >
                    <div class="accordion-body">
                      <p>
                      Programming languages: C++, JavaScript, PHP, Python, Java, Swift, Kotlin.
                      </p>
                      
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading22">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse22"
                      aria-expanded="false"
                      aria-controls="collapse22"
                    >
                      <span class="title">What frameworks and libraries are you familiar with?</span>
                      <i class="lni lni-plus"></i>
                    </button>
                  </h2>
                  <div
                    id="collapse22"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading22"
                    data-bs-parent="#accordionExample2"
                  >
                    <div class="accordion-body">
                      <p>
                      Frameworks and libraries: React.js, Next.js, React Native, Node.js, Django, Flask.
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading33">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse33"
                      aria-expanded="false"
                      aria-controls="collapse33"
                    >
                      <span class="title">How do you approach problem-solving and software development?</span>
                      <i class="lni lni-plus"></i>
                    </button>
                  </h2>
                  <div
                    id="collapse33"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading33"
                    data-bs-parent="#accordionExample2"
                  >
                    <div class="accordion-body">
                      <p>
                      I approach problem-solving and software development methodically by breaking down complex issues into manageable tasks, researching best practices and solutions, collaborating with team members, and continuously iterating and testing to ensure optimal results and user satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-12 col-12">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse7"
                      aria-expanded="false"
                      aria-controls="collapse7"
                    >
                      <span class="title">
                      Are you available for freelance or contract work?
                      </span>
                      <i class="lni lni-plus"></i>
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading7"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                      Yes, I'm available for freelance or contract work.
                      </p>
                     
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading2">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse8"
                      aria-expanded="false"
                      aria-controls="collapse8"
                    >
                      <span class="title">Can you explain your workflow and development process?</span>
                      <i class="lni lni-plus"></i>
                    </button>
                  </h2>
                  <div
                    id="collapse8"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading8"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                      My workflow starts with thorough planning and task breakdown. I then proceed to coding, ensuring clean and efficient implementation. Testing is integral to validate functionality and identify any issues. I iterate based on feedback and continue refining until achieving the desired outcome. This iterative process ensures a high-quality end product.
                      </p>
                     
                    </div>
                  </div>
                </div>
                {/* <div class="accordion-item">
                  <h2 class="accordion-header" id="heading3">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      <span class="title">
                      Can you provide examples of projects as a full-stack developer?
                      </span>
                      <i class="lni lni-plus"></i>
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading3"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                      Certainly! In the Projects section of my portfolio, you'll find a showcase of some of the exciting projects I've had the opportunity to work on as a full-stack developer. These projects demonstrate my versatility in handling both front-end and back-end development tasks, utilizing technologies such as React.js, Node.js, Django, and more. Feel free to explore these projects to get a better understanding of my skills and capabilities in action.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12 xs-margin">
              <div class="accordion" id="accordionExample2">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1_1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1_1"
                      aria-expanded="false"
                      aria-controls="collapse1_1"
                    >
                      <span class="title">
                      Do you have experience working in Agile methodologies? 
                      </span>
                      <i class="lni lni-plus"></i>
                    </button>
                  </h2>
                  <div
                    id="collapse1_1"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1_1"
                    data-bs-parent="#accordionExample2"
                  >
                    <div class="accordion-body">
                      <p>
                      How do you ensure the security of the applications you develop?
                      </p>
                      
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading2_2">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2_2"
                      aria-expanded="false"
                      aria-controls="collapse2_2"
                    >
                      <span class="title">How do you ensure the security of the applications you develop?</span>
                      <i class="lni lni-plus"></i>
                    </button>
                  </h2>
                  <div
                    id="collapse2_2"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading2_2"
                    data-bs-parent="#accordionExample2"
                  >
                    <div class="accordion-body">
                      <p>
                      I prioritize security at every stage of development, implementing best practices and standards. This includes data encryption, input validation, and secure authentication methods. Regular security audits and testing help identify and address vulnerabilities. Additionally, I stay updated on security trends and patches to ensure ongoing protection. Ultimately, robust security measures are integral to delivering safe and reliable applications.
                      </p>
                    
                    </div>
                  </div>
                </div>
                {/* <div class="accordion-item">
                  <h2 class="accordion-header" id="heading33">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse33"
                      aria-expanded="false"
                      aria-controls="collapse33"
                    >
                      <span class="title">How do you approach problem-solving and software development?</span>
                      <i class="lni lni-plus"></i>
                    </button>
                  </h2>
                  <div
                    id="collapse33"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading33"
                    data-bs-parent="#accordionExample2"
                  >
                    <div class="accordion-body">
                      <p>
                      I approach problem-solving and software development methodically by breaking down complex issues into manageable tasks, researching best practices and solutions, collaborating with team members, and continuously iterating and testing to ensure optimal results and user satisfaction.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default faq;