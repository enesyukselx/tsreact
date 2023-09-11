import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import useUser from "../../../Hooks/useUser";
import useModal from "../../../Hooks/useModal";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";

interface IFormValues {
    email: string;
    age: number;
    city: string;
    country: string;
}

const EditDetails = () => {
    const schema: ZodType<IFormValues> = z.object({
        email: z.string().email(),
        age: z.number().min(1).max(3),
        city: z.string().min(1).max(50),
        country: z.string().min(1).max(50),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>({ resolver: zodResolver(schema) });

    const { user, updateUser } = useUser();
    const { toggleModal } = useModal();

    const onSubmit = (data: IFormValues): void => {
        updateUser({
            id: user!.id,
            name: user!.name,
            email: data.email,
            password: user!.password,
            details: {
                age: data.age,
                city: data.city,
                country: data.country,
            },
        });

        toast.success("User updated successfully");
        toggleModal();
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    {...register("email")}
                    defaultValue={user?.email}
                    type="email"
                    placeholder="name@example.com"
                    isInvalid={!!errors.email}
                    required
                />
                {errors.email && (
                    <Form.Text className="text-danger">
                        {errors.email.message}
                    </Form.Text>
                )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Age</Form.Label>
                <Form.Control
                    {...register("age")}
                    placeholder="Age"
                    defaultValue={user?.details.age}
                    isInvalid={!!errors.age}
                    required
                />
                {errors.age && (
                    <Form.Text className="text-danger">
                        {errors.age.message}
                    </Form.Text>
                )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>City</Form.Label>
                <Form.Control
                    {...register("city")}
                    defaultValue={user?.details.city}
                    type="text"
                    placeholder="City"
                    isInvalid={!!errors.city}
                    required
                />
                {errors.city && (
                    <Form.Text className="text-danger">
                        {errors.city.message}
                    </Form.Text>
                )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Country</Form.Label>
                <Form.Control
                    {...register("country")}
                    defaultValue={user?.details.country}
                    type="country"
                    placeholder="Country"
                    isInvalid={!!errors.country}
                    required
                />
                {errors.country && (
                    <Form.Text className="text-danger">
                        {errors.country.message}
                    </Form.Text>
                )}
            </Form.Group>
            <Button variant="primary" type="submit">
                Update
            </Button>
        </Form>
    );
};

export default EditDetails;
