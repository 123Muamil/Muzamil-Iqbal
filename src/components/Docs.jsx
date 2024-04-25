import React, { useState } from 'react';

const DocumentationPage = () => {
  const [activeTab, setActiveTab] = useState('react');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Documentation Page</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'html' ? 'active' : ''}`} onClick={() => handleTabChange('html')}>HTML</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'css' ? 'active' : ''}`} onClick={() => handleTabChange('css')}>CSS3</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'bootstrap' ? 'active' : ''}`} onClick={() => handleTabChange('bootstrap')}>Bootstrap 5</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'javascript' ? 'active' : ''}`} onClick={() => handleTabChange('javascript')}>JavaScript</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'react' ? 'active' : ''}`} onClick={() => handleTabChange('react')}>ReactJS</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'nextjs' ? 'active' : ''}`} onClick={() => handleTabChange('nextjs')}>Next.js</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'reactnative' ? 'active' : ''}`} onClick={() => handleTabChange('reactnative')}>React Native</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'python' ? 'active' : ''}`} onClick={() => handleTabChange('python')}>Python Frameworks</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'nodejs' ? 'active' : ''}`} onClick={() => handleTabChange('nodejs')}>Node.js</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'expressjs' ? 'active' : ''}`} onClick={() => handleTabChange('expressjs')}>Express.js</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'angular' ? 'active' : ''}`} onClick={() => handleTabChange('angular')}>Angular</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'angularjs' ? 'active' : ''}`} onClick={() => handleTabChange('angularjs')}>AngularJS</a>
        </li>
      </ul>

      <div className="tab-content mt-4">
        <div className={`tab-pane fade ${activeTab === 'html' ? 'show active' : ''}`}>
          <iframe src="https://www.w3schools.com/html/" title="HTML Documentation" className="w-100 border-0" height="600"></iframe>
        </div>
        <div className={`tab-pane fade ${activeTab === 'css' ? 'show active' : ''}`}>
          <iframe src="https://developer.mozilla.org/en-US/docs/Web/CSS" title="CSS Documentation" className="w-100 border-0" height="600"></iframe>
        </div>
        <div className={`tab-pane fade ${activeTab === 'bootstrap' ? 'show active' : ''}`}>
          <iframe src="https://getbootstrap.com/docs/5.1/getting-started/introduction/" title="Bootstrap Documentation" className="w-100 border-0" height="600"></iframe>
        </div>
        <div className={`tab-pane fade ${activeTab === 'javascript' ? 'show active' : ''}`}>
          <iframe src="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript Documentation" className="w-100 border-0" height="600"></iframe>
        </div>
        <div className={`tab-pane fade ${activeTab === 'react' ? 'show active' : ''}`}>
          <iframe src="https://reactjs.org/docs/getting-started.html" title="React Documentation" className="w-100 border-0" height="600"></iframe>
        </div>
        <div className={`tab-pane fade ${activeTab === 'nextjs' ? 'show active' : ''}`}>
          <iframe src="https://nextjs.org/docs/getting-started" title="Next.js Documentation" className="w-100 border-0" height="600"></iframe>
        </div>
        <div className={`tab-pane fade ${activeTab === 'reactnative' ? 'show active' : ''}`}>
          <iframe src="https://reactnative.dev/docs/getting-started" title="React Native Documentation" className="w-100 border-0" height="600"></iframe>
        </div>
        <div className={`tab-pane fade ${activeTab === 'python' ? 'show active' : ''}`}>
          <iframe src="https://docs.python.org/3/" title="Python Documentation" className="w-100 border-0" height="600"></iframe>
        </div>
        <div className={`tab-pane fade ${activeTab === 'nodejs' ? 'show active' : ''}`}>
          <iframe src="https://nodejs.org/en/docs/" title="Node.js Documentation" className="w-100 border-0" height="600"></iframe>
        </div>
        <div className={`tab-pane fade ${activeTab === 'expressjs' ? 'show active' : ''}`}>
          <iframe src="https://expressjs.com/en/5x/api.html" title="Express.js Documentation" className="w-100 border-0" height="600"></iframe>
        </div>
        <div className={`tab-pane fade ${activeTab === 'angular' ? 'show active' : ''}`}>
          <iframe src="https://angular.io/docs" title="Angular Documentation" className="w-100 border-0" height="600"></iframe>
        </div>
        <div className={`tab-pane fade ${activeTab === 'angularjs' ? 'show active' : ''}`}>
          <iframe src="https://docs.angularjs.org/api" title="AngularJS Documentation" className="w-100 border-0" height="600"></iframe>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
