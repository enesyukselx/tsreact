import { Form, Button } from "react-bootstrap";
import { useForm, Resolver } from "react-hook-form";
import useModal from "../../../Hooks/useModal";

type FormValues = {
    email: string;
    password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.email && values.password ? values : {},
        errors: !values.email
            ? {
                  email: {
                      type: "required",
                      message: "This is required.",
                  },
              }
            : !values.password
            ? {
                  password: {
                      type: "required",
                      message: "This is required.",
                  },
              }
            : {},
    };
};

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver });

    const { toggleModal } = useModal();

    const onSubmit = async (data: FormValues) => {
        console.log(data);
        toggleModal();
    };

    return (
        <div className="login">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        {...register("email")}
                        type="email"
                        placeholder="name@example.com"
                        isInvalid={!!errors?.email}
                    />
                </Form.Group>
                {errors?.email && <p>{errors.email.message}</p>}
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        {...register("password")}
                        type="password"
                        placeholder="*********"
                        isInvalid={!!errors?.password}
                    />
                </Form.Group>
                {errors?.password && <p>{errors.password.message}</p>}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;
