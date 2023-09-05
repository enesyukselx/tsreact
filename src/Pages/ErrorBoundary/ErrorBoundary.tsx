import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <Container>
            <h1 className="mt-4">404</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
                atque et. Repellat assumenda deleniti doloribus eaque distinctio
                aspernatur aliquam hic, architecto expedita, dolorum dolor
                voluptas, ducimus a neque? Nihil, quaerat.
            </p>
            <p>Try again.</p>
            <Link to="/">Go to home page</Link>
        </Container>
    );
};

export default ErrorPage;
