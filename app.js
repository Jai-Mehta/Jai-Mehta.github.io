import React from 'react';

class ProfilePage extends React.Component {
  render() {
    return (
      <div className="is-preload">
        {/* ... Header and Nav sections (same as before) ... */}

        <div id="main">
          {/* Introduction */}
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Skills</h2>
                </header>
                <p>
                  <ul>
                    <li>Programming Languages: Python, JavaScript, C++, C</li>
                    <li>Web Development: Django, React.js, d3.js, Flask RESTful, PHP, Flutter, HTML5, CSS3, jQuery, REST, Bootstrap</li>
                    <li>Databases: Google Cloud Platform Databases, AWS DynamoDb, MySQL, NoSQL, PostgreSQL, Firebase, IBM Db2</li>
                    <li>Cloud Computing: Google Cloud Platform, Amazon Web Services</li>
                    <li>Miscellaneous: Github, Spark, Hadoop, AWS Lambda Functions, OpenCV, Scikit-learn, Tensorflow, Android, LaTeX</li>
                  </ul>
                </p>
              </div>
              <span className="image"><img src="images/Skills.png" alt="" /></span>
            </div>
            <header className="major">
              <h2>Certifications</h2>
            </header>
            <div className="certifications">
              {/* Certification 1 */}
              <div className="certification">
                <img style={{ width: '200px' }} src="images/gcp.webp" alt="Certification 1" />
                <a href="https://google.accredible.com/8cd8040e-c5c8-4aa7-99e4-0b9c99b92487">
                  <p>Google Certified: Associate Cloud Engineer</p>
                </a>
              </div>

              {/* Certification 2 */}
              <div className="certification">
                <img style={{ width: '160px' }} src="images/deeplearn.png" alt="Certification 2" />
                <a href="https://www.coursera.org/account/accomplishments/certificate/JXADWQ8S4EQZ">
                  <p>Neural Networks and Deep Learning</p>
                </a>
              </div>

              {/* Certification 3 and 4 (Add more as needed) */}
              {/* ... */}
            </div>
          </section>

          {/* Work Experience */}
          <section id="first" className="main special">
            <header className="major">
              <h2>Work Experience</h2>
            </header>
            <div className="container-workex">
              {/* Work Experience 1 */}
              <div className="column-1-workex">
                <img style={{ width: '150px' }} src="images/deutsche_logo.png" alt="Deutsche Bank" />
              </div>
              <div className="column-2-workex">
                <p><strong>Deutsche Bank - Software Analyst Intern</strong></p>
                <ul>
                  <li>Engineered a cutting-edge, massively scalable application powered by the Flask RESTful framework, leveraging the robust database capabilities of Google Cloud Platform Datastore.</li>
                  <li>Streamlining the storage of meticulously preprocessed data extracted from both the company's newsroom pages and those of its top 5 competitors, we harnessed the Google NLP API, to perform sophisticated semantic analysis, enabling the generation of profound insights from the articles.</li>
                  <li>Demonstrated exceptional analytical and communication skills by proposing ways to improve the performance of the company in the Environment, Social, and Governance domains by 80%.</li>
                  <li><strong>Technologies:</strong> GCP Datastore, GCP IAM, Python, Flask RESTful, Github, Web Data Scraping (Beautifulsoup 4), Data Science</li>
                </ul>
              </div>
              {/* Work Experience 2 (Add more as needed) */}
              {/* ... */}
            </div>
          </section>

          {/* Education */}
          <section id="education" className="main special">
            <header className="major">
              <h2>Education</h2>
            </header>
            <div>
              <img style={{ width: '120px' }} src="images/sbu.png" alt="Stony Brook University" />
              <p style={{ marginBottom: '1px' }}><strong>Stony Brook University</strong></p>
              <p style={{ marginTop: '1px', marginBottom: '1px' }}><strong>Master of Science in Computer Science</strong> (<strong>CGPA:</strong> 3.91/4.00)<br /><strong>Expected Graduation: May 2024</strong></p>
              <p style={{ marginTop: '1px', marginBottom: '1px' }}><strong>Relevant Courses:</strong> Theory of Database Systems, Big Data Algorithms, Data Visualization, Computer Networks, Probability and Statistics</p>
            </div>
            <div>
              <img style={{ width: '120px', marginTop: '14px' }} src="images/kjsce.png" alt="K.J. Somaiya College of Engineering" />
              <p style={{ marginBottom: '1px' }}><strong>University of Mumbai (K.J. Somaiya College of Engineering)</strong></p>
              ...
                <p style={{ marginTop: '1px', marginBottom: '1px' }}>
                  <strong>Bachelor of Technology in Information Technology</strong> (<strong>CGPA:</strong> 9.10/10.00)<br />
                  <strong>August 2018 - June 2022</strong>
                </p>
                <p style={{ marginTop: '1px', marginBottom: '1px' }}>
                  <strong>Relevant Courses:</strong> Software Engineering, Object-Oriented Programming, Operating Systems, Web Development, Artificial Intelligence
                </p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="second" className="main special">
            <header className="major">
              <h2>Projects</h2>
              <p style={{ textAlign: 'justify' }}>
                This section includes key projects from my academic and professional journey. Click on the GitHub icon below each project to explore the technologies used.
              </p>
            </header>

            <div>
              <strong>Politech: Decoding US Presidential Elections</strong>
              <br /><strong>(Spring 2022)</strong>
              <ul style={{ textAlign: 'left', textAlign: 'justify' }}>
                <li>Collaborated with Professor Klaus Mueller at Stony Brook University, leveraging Akaikeru Analysis software to construct robust data pipelines for the analysis of US presidential elections.</li>
                <li>Mined patterns and correlations between voter behavior, demographics, and socio-economic factors to uncover valuable insights, contributing to ongoing research aimed at quantifying the complex dynamics behind voter preferences.</li>
                <li><strong>Technologies:</strong> Python, Akaikeru Analysis(software)</li>
              </ul>
              <footer className="major" style={{ marginTop: '-30px' }}>
                <ul className="icons">
                  <li>
                    <a href="https://github.com/Jai-Mehta/Politech-Decoding-US-Presidential-Elections" className="icon brands fa-github alt">
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
          
            {/* Continue with other projects similarly */}
            {/* ... */}

          </section>

          {/* Leadership */}
          <section id="cta" className="main special">
            <header className="major">
              <h2>Leadership</h2>
              <p>
                Served as a key leader in two student organizations, PUSH KJSCE and Rotaract Club of Mumbai Ghatkopar, contributing to the community through public relations and sports management efforts.
                Successfully raised funds for underprivileged students and oversaw scholarships for deserving students, even during challenging times such as the Covid-19 pandemic.
              </p>
            </header>
          </section>

        </div>

        {/* Footer */}
        <footer id="footer">
          <section>
            <h2>About Me</h2>
            <p>
              Few of my additional hobbies include trekking, badminton, and meditation. Until now, I have been on 13 treks, have practiced badminton professionally for 6 years, and have been practicing meditation for the past 1 year.
              I believe sports and spirituality are two wonderful ways to live a beautiful life.
            </p>
          </section>
          <section>
            <h2>Contact Information</h2>
            <dl className="alt">
              <dt>Address</dt>
              <dd>700 Health Sciences Drive, Chapin Apartments, Stony Brook, NY 11790, USA</dd>
              <dt>Phone</dt>
              <dd>+1 (914) 893-8998</dd>
              <dt>Email</dt>
              <dd><a href="#">jaimehta@cs.stonybrook.edu</a></dd>
            </dl>
            <ul className="icons">
              <li><a href="https://www.linkedin.com/in/jai-anish-mehta/" className="icon brands fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
              <li><a href="https://github.com/Jai-Mehta" className="icon brands fa-github alt"><span className="label">GitHub</span></a></li>
              <li><a href="https://docs.google.com/document/d/1vbEb61SOE1MJbX7gvOdgxnBnI3DJvEYVtzdvPolk9mY/edit?usp=sharing" className="button">Resume</a></li>
            </ul>
          </section>
        </footer>
      </div>
    );
  }
}

export default ProfilePage;

