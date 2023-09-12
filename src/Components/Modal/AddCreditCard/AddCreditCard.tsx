import { useState } from "react";
import { useForm } from "react-hook-form";
import useUser from "../../../Hooks/useUser";
import useModal from "../../../Hooks/useModal";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Form, Button } from "react-bootstrap";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { toast } from "react-toastify";

interface IFormValues {
    cvc: string;
    expiry: string;
    name: string;
    number: string;
    focused?: "name" | "number" | "expiry" | "cvc" | "";
}

const AddCreditCard = () => {
    const { toggleModal } = useModal();
    const { user, addCreditCard } = useUser();

    const schema: ZodType<IFormValues> = z.object({
        cvc: z.string().min(3).max(3),
        expiry: z.string().min(4).max(4),
        name: z.string().min(1).max(50),
        number: z.string().min(16).max(16),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>({ resolver: zodResolver(schema) });

    const onSubmit = (data: IFormValues): void => {
        addCreditCard({
            id: Math.floor(Math.random() * 1000),
            userId: user!.id,
            cvc: data.cvc,
            expirationDate: data.expiry,
            name: data.name,
            number: data.number,
        });
        toggleModal();
        toast.success("Credit card added successfully");
    };

    const [state, setState] = useState<IFormValues>({
        cvc: "",
        expiry: "",
        name: "",
        number: "",
        focused: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setState((prev) => ({ ...prev, focus: e.target.name }));
    };

    return (
        <div>
            <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focused}
            />
            <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                        {...register("number")}
                        type="number"
                        name="number"
                        placeholder="Card Number"
                        value={state.number}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        isInvalid={!!errors.number}
                        required
                    />
                    {errors.number && (
                        <Form.Text className="text-danger">
                            {errors.number.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Expiry Date (MM/YY)</Form.Label>
                    <Form.Control
                        {...register("expiry")}
                        type="number"
                        name="expiry"
                        placeholder="MM/YY"
                        value={state.expiry}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        isInvalid={!!errors.expiry}
                        required
                    />
                    {errors.expiry && (
                        <Form.Text className="text-danger">
                            {errors.expiry.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>CVC</Form.Label>
                    <Form.Control
                        {...register("cvc")}
                        type="number"
                        name="cvc"
                        placeholder="CVC"
                        value={state.cvc}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        isInvalid={!!errors.cvc}
                        required
                    />
                    {errors.cvc && (
                        <Form.Text className="text-danger">
                            {errors.cvc.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        {...register("name")}
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={state.name}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        isInvalid={!!errors.name}
                        required
                    />
                    {errors.name && (
                        <Form.Text className="text-danger">
                            {errors.name.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Card
                </Button>
            </Form>
        </div>
    );
};

export default AddCreditCard;
