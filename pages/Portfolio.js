import Layout from "../components/Layout";
import { projects } from "../profile";

const Portfolio = () => {
    return (
        <Layout footer={false}>
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-secondary">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center bg-secondary">
                                    Portfolio
                                </h1>
                            </div>
                            {projects.map(
                                ({ name, description, image }, index) => (
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
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Portfolio;
