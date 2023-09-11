import { Container } from "react-bootstrap";
import UserDetails from "./Components/UserDetails";
import CreditCards from "./Components/CreditCards";

const Account = () => {
    return (
        <Container>
            <UserDetails />
            <CreditCards />
        </Container>
    );
};

export default Account;
