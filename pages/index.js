import exp from "constants";
import Link from "next/link";
import Layout from "../components/Layout";
import {
  skills,
  experiences,
  projects,
  softSkills,
  languages,
  extraStudies,
} from "../profile";

const Index = () => (
  <Layout>
    {/** Header card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary">
          <div className="row">
            <div className="col-md-3 profile-img-container">
              <img src="Perfil.jpg" alt="" className="profile-img" />
            </div>
            <div className="col-md-8 header-info">
              <h1>Fermin Pelizza</h1>
              <h3>Software Developer</h3>
              <h5>
                I am an advanced student of systems engineering (UNICEN). I
                consider myself an active person, good at soft skills and great
                at socializing. I am eager to work and learn{" "}
              </h5>
              <Link
                href="https://mail.google.com/mail/u/0/?fs=1&to=ferminpelizza1976@gmail.com&su=JOB&tf=cm"
                type="button"
                className="btn btn-dark btn-lg"
              >
                Contact me!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/** Skills section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card card-body bg-secondary nav-bar-section">
          <h1 className="nav-bar-section__title">Technical skills</h1>
          <ul className="nav-bar-section__technical-skill ">
            {skills.map(({ skill }, index) => (
              <li key={index} className="nav-bar-section__technical-skills">
                <h3>{skill}</h3>
              </li>
            ))}
          </ul>
        </div>
        <div className="card card-body bg-secondary nav-bar-section">
          <h1 className="nav-bar-section__title">Softs skills</h1>
          <ul className="nav-bar-section__soft-skills">
            {softSkills.map(({ name, description }, index) => (
              <li key={index} className="nav-bar-section__soft-skill">
                <h3>{name}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-secondary nav-bar-section">
          <div className="card-body nav-bar-section__title">Experience</div>
          <ul>
            {experiences.map(
              ({ title, company, description, from, to }, index) => (
                <li key={index} className="nav-bar-section__skill">
                  <h3>{title}</h3>
                  <h5>
                    {company} ({from}-{to})
                  </h5>
                  <p>{description}</p>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="card bg-secondary mt-2 nav-bar-section">
          <div className="card-body nav-bar-section__title">Languages</div>
          <ul>
            {languages.map(({ name, level }, index) => (
              <li key={index}>
                <h4>
                  {name} - {level}
                </h4>
              </li>
            ))}
          </ul>
        </div>
        <div className="card bg-secondary mt-2">
          <div className="card-body nav-bar-section__title nav-bar-section">
            Extra studies
          </div>
          <ul>
            {extraStudies.map(
              (
                { name, author, credential, start, end, description },
                index
              ) => (
                <li key={index}>
                  <Link href={credential}>
                    <h4>{name}</h4>
                  </Link>
                  <h5>By: {author}</h5>
                  <p>
                    {start} - {end}
                  </p>
                  <p>{description}</p>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
