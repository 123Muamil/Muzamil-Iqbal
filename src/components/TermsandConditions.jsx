import '../styles/terms.css'
const TermsandConditions = ({closeModal}) => {
    return (
      <div className='container'  >
          <div className=" flex_align_justify">
        <div className="terms_service">
            <div className="tc_item tc_head flex_align_justify">
              <div className="icon flex_align_justify">
                <i className="fas fa-file-contract"></i>
              </div>
              <div className="text">
                <h2>TERMS OF SERVICE</h2>
                <p>Last updated on September 12, 2022</p>
              </div>
            </div>
            <div className="tc_item tc_body">
              <ol>
                <li>
                  <h3>Terms of use</h3>
                  <p>As a Full Stack Developer, I uphold certain standards and expectations for those who utilize my services. By engaging with my services, you are bound by the following terms:</p>
                </li>
                <li>
                  <h3>Intellectual property rights</h3>
                  <p>All software, code, designs, and content provided through my services are my intellectual property or the property of my licensors. You are not permitted to use, reproduce, modify, distribute, or display any of my intellectual property without my explicit written consent.</p>
                </li>
                <li>
                  <h3>Prohibited activities</h3>
                  <p>You agree not to engage in any activity that may disrupt or compromise the integrity of my services. This includes, but is not limited to:
Attempting to access unauthorized parts of my systems or networks.
Decompiling, reverse engineering, or disassembling any aspect of my software.
Introducing harmful code, viruses, or malware.
Violating any applicable laws or regulations.</p>
                </li>
                <li>
                  <h3>Termination clause</h3>
                  <p>I reserve the right to terminate or suspend your access to my services at any time, without prior notice, for any reason, including but not limited to:
Breach of these terms of use.
Participation in prohibited activities.
Conduct that I deem harmful to my business or other users.</p>
                </li>
                
              </ol>
            </div>
            <div className="tc_item tc_foot flex_align">
                <button className="decline_btn" onClick={closeModal}>Decline</button>
                <button className="accept_btn">Accept</button>
            </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default TermsandConditions;
  