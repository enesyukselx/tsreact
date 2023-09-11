import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import useUser from "../../../Hooks/useUser";

const UserDetails = () => {
    const { user, getUserCreditCards } = useUser();
    const creditCards = getUserCreditCards(user!.id);

    return (
        <>
            <h4>Credit Cards</h4>

            {(!creditCards || creditCards.length === 0) && (
                <Alert
                    variant="warning
                "
                >
                    No Credit Cards
                </Alert>
            )}
            <ListGroup variant="flush">
                {creditCards?.map((c) => (
                    <ListGroup.Item variant="dark" key={c.id}>
                        {c.number}
                        {" - "}
                        {c.expirationDate}
                        {" - "}
                        {c.cvv}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                    Add Credit Card
                </Button>
            </div>
        </>
    );
};

export default UserDetails;
