import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import useUser from "../../../Hooks/useUser";
import useModal from "../../../Hooks/useModal";
import AddCreditCard from "../../../Components/Modal/AddCreditCard/AddCreditCard";

const UserDetails = () => {
    const { user, getUserCreditCards } = useUser();
    const creditCards = getUserCreditCards(user!.id);

    const { setContent, setTitle } = useModal();

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
                        {c.cvc}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <div className="d-grid gap-2 mt-2">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                        if (setTitle && setContent) {
                            setTitle("Add Credit Card");
                            setContent(<AddCreditCard />);
                        }
                    }}
                >
                    Add Credit Card
                </Button>
            </div>
        </>
    );
};

export default UserDetails;
