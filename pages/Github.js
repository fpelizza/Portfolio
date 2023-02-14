import Link from "next/link";
import Layout from "../components/Layout";
import Error from "./_error";

const Github = ({ user, statusCode }) => {
    if (statusCode) {
        return <Error statusCode={statusCode} />;
    }

    return (
        <Layout footer={false}>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url} alt="" />
                        <p>{user.bio}</p>
                        <p>{user.location}</p>
                        <Link
                            href={user.blog}
                            target="_blank"
                            className="btn btn-secondary my-2"
                        >
                            My blog
                        </Link>
                        <Link
                            href={user.html_url}
                            target="_blank"
                            className="btn btn-secondary my-2"
                        >
                            Go to github
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export async function getServerSideProps() {
    const response = await fetch("https://api.github.com/users/fpelizza");
    const json = await response.json();

    const statusCode = response.status > 200 ? response.status : false;

    return {
        props: {
            user: json,
            statusCode: statusCode,
        },
    };
}

export default Github;
