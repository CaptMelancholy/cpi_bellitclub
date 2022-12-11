import React, { Component } from 'react'
import { Card, Image, Badge, Toast, ToastHeader, Button } from 'react-bootstrap'
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <>
                <div className='d-flex justify-content-center'>
                    <Card pill className='border border-5 bg-light' style={{ width: '36rem' }}>
                        <Card.Header>
                            О Портале
                        </Card.Header>
                        <Card.Body className='text-center'>
                            Данный портал содержит информацию о писателях Беларуси. На основной странице размещена информация о писателе дня и описание команды разработчиков портала. Также портал содержит персональную страницу каждого писателя. На каждой странице имеется описание деятеля: биография, фотогалерея с его изображениями и изображениями его произведений, видео на YouTube о деятеле, место его рождения на карте.
                        </Card.Body>
                    </Card>
                </div>


                <div className='package'>
                    <div>
                        <h1>Деятель Дня</h1>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Francisak_Bahusevic.jpg/274px-Francisak_Bahusevic.jpg"
                            className='border border-4'
                            roundedCircle={true}
                        ></Image>
                        <h2>Франци́ск-Бенеди́кт Казими́рович Богуше́вич</h2>
                        <h2>21 марта 1840 - 28 апреля 1900</h2>
                        <p>Белорусский поэт, один из основоположников новой белорусской литературы. Основоположник критического реализма в белорусской литературе. </p>
                            <Button className='text-center btn btn-light border border-5' style={{ width: '15rem' }} href="https://be.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%96%D1%88%D0%B0%D0%BA_%D0%91%D0%B0%D0%B3%D1%83%D1%88%D1%8D%D0%B2%D1%96%D1%87">

                                <span className='me-auto text-secondary'>ИНФОРМАЦИЯ</span>

                            </Button>
                    </div>

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
                                <Button className='d-flex align-items-center btn btn-light border border-5' style={{ width: '15rem' }}  >
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
                                    <strong className="me-auto">Andrew Nesteruk</strong>
                                </ToastHeader>
                                <Toast.Body>
                                    Hello, world! This is text about me.
                                </Toast.Body>
                            </Toast>
                        </Card.Body>
                        <Card.Footer className='d-flex justify-content-center' >
                            <Card.Link className="mb-2 text-muted" href="https://github.com/4ndreSha" style={{ textDecoration: 'none' }}>
                                <Button className='d-flex align-items-center btn btn-light border border-5' style={{ width: '15rem' }}  >
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
