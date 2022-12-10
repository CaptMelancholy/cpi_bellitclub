import React, { Component } from 'react'
import { Card, Image, Badge, Toast, ToastHeader, Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <>
            <div className='d-flex justify-content-center'>
                <Card pill className='border border-5 bg-light' style={{ width: '36rem' }}>
                    <Card.Header>
                        О Портале
                    </Card.Header>
                    <Card.Body>
                        Данный портал посвящен авторам Беларуси, наслаждайтесь.
                    </Card.Body>
                </Card>
            </div>
            <div className='d-flex justify-content-evenly'>
                <Card pill className='border border-5 bg-light' style={{ width: '18rem' }} >
                    <Card.Header>
                        <Badge pill bg="secondary">Trainee Front-End Developer</Badge>
                    </Card.Header>
                    <Card.Body>
                        <Toast>
                            <ToastHeader closeButton={false}>
                                <Image className='border border-2 me-auto' variant='top' src="https://avatars.githubusercontent.com/u/92041432?v=4" roundedCircle='true' width={30} height={30} />
                                <strong className="me-auto">Artyom Dan'ko</strong>
                            </ToastHeader>
                            <Toast.Body>
                                Hello, world! This is text about me.
                            </Toast.Body>
                        </Toast>
                    </Card.Body>
                    <Card.Footer className='d-flex justify-content-center' >
                        <Card.Link className="mb-2 text-muted" href="https://github.com/CaptMelancholy" style={{ textDecoration: 'none' }}>
                            <Button className='d-flex align-items-center btn btn-light border border-5' style={{ width: '15rem'}}  >
                                <Image className='me-auto' width={22} height={20} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png">
                                </Image>
                                <span className='me-auto text-secondary'>CaptMelancholy</span>
                                
                            </Button>
                        </Card.Link>
                    </Card.Footer>
                </Card>
                <Card pill className='border border-5 bg-light' style={{ width: '18rem' }} >
                    <Card.Header>
                        <Badge pill bg="secondary">Trainee Front-End Developer</Badge>
                    </Card.Header>
                    <Card.Body>
                        <Toast>
                            <ToastHeader closeButton={false}>
                                <Image className='border border-2 me-auto' variant='top' src="https://avatars.githubusercontent.com/u/83921009?v=4" roundedCircle='true' width={30} height={30} />
                                <strong className="me-auto">Andrew</strong>
                            </ToastHeader>
                            <Toast.Body>
                                Hello, world! This is text about me.
                            </Toast.Body>
                        </Toast>
                    </Card.Body>
                    <Card.Footer className='d-flex justify-content-center' >
                        <Card.Link className="mb-2 text-muted" href="https://github.com/4ndreSha" style={{ textDecoration: 'none' }}>
                            <Button className='d-flex align-items-center btn btn-light border border-5' style={{ width: '15rem'}}  >
                                <Image className='me-auto' width={22} height={20} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png">
                                </Image>
                                <span className='me-auto text-secondary'>4ndreSha</span>
                                
                            </Button>
                        </Card.Link>
                    </Card.Footer>
                </Card>
            </div>
            </>
        )
    }
}
