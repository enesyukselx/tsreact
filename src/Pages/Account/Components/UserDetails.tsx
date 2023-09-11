import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import useUser from "../../../Hooks/useUser";

const UserDetails = () => {
    const { user } = useUser();

    return (
        <>
            <h3>Welcome, {user?.name}</h3>
            <hr />
            <h4>User Details</h4>
            <ListGroup variant="flush">
                <ListGroup.Item variant="dark">
                    <span className="fw-bold">Email: </span>
                    {user?.email}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                    <span className="fw-bold">Age: </span>
                    {user?.details?.age}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                    <span className="fw-bold">City: </span>
                    {user?.details?.city}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                    <span className="fw-bold">Country: </span>
                    {user?.details?.country}
                </ListGroup.Item>
            </ListGroup>
            <div className="d-grid gap-2 mt-3">
                <Button variant="primary" size="lg">
                    Edit Details
                </Button>
            </div>
            <hr />
        </>
    );
};

export default UserDetails;
