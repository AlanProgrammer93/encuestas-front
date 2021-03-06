import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Card, Spinner } from 'react-bootstrap'
import { registerUser } from '../services/UserService'

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<any>({});
    const [sendingData, setSendingData] = useState(false);

    const register = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            setSendingData(true);
            await registerUser(name, email, password);
            setSendingData(false);
        } catch(errors: any) {
            setErrors(errors.response.data.errors);
            setSendingData(false);
        }
        
    }

  return (
    <Container>
        <Row>
            <Col lg="5" md="10" sm="10" className='mx-auto'>
                <Card className='mt-5'>
                    <Card.Body>
                        <h4>Crear Cuenta</h4><hr />
                        <Form onSubmit={register}>
                            <Form.Group className='mb-3' controlId='name'>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control 
                                    isInvalid={!!errors?.name}
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    type='text' 
                                    placeholder='e.g John Doe'
                                ></Form.Control>
                                <Form.Control.Feedback type='invalid'>
                                    { errors?.name }
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='email'>
                                <Form.Label>Correo Electronico</Form.Label>
                                <Form.Control 
                                    isInvalid={!!errors?.email}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type='email' 
                                    placeholder='e.g JohnDoe@gmail.com'
                                ></Form.Control>
                                <Form.Control.Feedback type='invalid'>
                                    { errors?.email }
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='password'>
                                <Form.Label>Contrase??a</Form.Label>
                                <Form.Control 
                                    isInvalid={!!errors?.password}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type='password' 
                                    placeholder='********'
                                ></Form.Control>
                                <Form.Control.Feedback type='invalid'>
                                    { errors?.password }
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button type='submit'>
                                {
                                    sendingData ? 
                                                    <>
                                                        <Spinner 
                                                            animation='border' 
                                                            as="span" 
                                                            size='sm'
                                                            role="status"
                                                            aria-hidden="true"
                                                        ></Spinner>&nbsp;
                                                        <span>
                                                            Creando Usuario...
                                                        </span>
                                                    </>
                                                : "Crear Cuenta"
                                }
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Register