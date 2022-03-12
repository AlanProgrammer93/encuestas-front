import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap'

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<any>({});

    const login = () => {
        console.log(name, email, password);
        
    }

  return (
    <Container>
        <Row>
            <Col lg="5" md="10" sm="10" className='mx-auto'>
                <Card className='mt-5'>
                    <Card.Body>
                        <h4>Crear Cuenta</h4><hr />

                        <Form.Group className='mb-3' controlId='name'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type='text' placeholder='e.g John Doe'></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='name'>
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control type='email' placeholder='e.g JohnDoe@gmail.com'></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='name'>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type='password' placeholder='********'></Form.Control>
                        </Form.Group>

                        <Button onClick={login}>Crear Cuenta</Button>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Register