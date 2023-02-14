import exp from "constants";
import Link from "next/link";
import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";

const Index = () => (
    <Layout>
        {/** Header card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src="Perfil.jpg"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-8">
                            <h1>Fermin Pelizza</h1>
                            <h3>Software Developer</h3>
                            <h5>
                                I am an advanced student of systems engineering
                                (UNICEN). I consider myself an active person,
                                good at soft skills and excel at socializing. I
                                am eager to work and learn{" "}
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
                <div className="card bg-secondary">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {skills
                            .sort((a, b) => b.percentage >= a.percentage)
                            .map(({ skill, percentage }, index) => (
                                <div className="py-3" key={index}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            style={{
                                                width: `${percentage}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-secondary">
                    <div className="card-body">Experience</div>
                    <ul>
                        {experiences.map(
                            (
                                { title, company, description, from, to },
                                index
                            ) => (
                                <li key={index}>
                                    <h2>{title}</h2>
                                    <h5>
                                        {company} ({from}-{to})
                                    </h5>
                                    <p>{description}</p>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
        {/** Portfolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">
                                Portfolio
                            </h1>
                        </div>
                        {projects.map(({ name, description, image }, index) => (
                            <div className="col-md-4 p-2" key={index}>
                                <div className="card h-100 bg-secondary">
                                    <div className="overflow">
                                        <img
                                            className="card-img-top"
                                            src={`/${image}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h3>{name}</h3>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default Index;
