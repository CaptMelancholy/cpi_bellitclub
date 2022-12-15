import React from 'react'
import { Card, Image, Badge, Toast, ToastHeader, Button } from 'react-bootstrap'
import './Home.css';
import { Link } from 'react-router-dom';
import arrow from '../Images/arrow.png'
import { useTranslation } from 'react-i18next';


function Home() {
    const { t } = useTranslation();
    return (
        <>
            <div className='d-flex justify-content-center'>
                <Card pill className='border border-5 bg-light' style={{ width: '36rem', margin: '40px 0 0'}}>
                    <Card.Header>
                        {t('about')}
                    </Card.Header>
                    <Card.Body className='text-center'>
                        {t('about_description')}
                    </Card.Body>
                 </Card>
            </div>

            <div className='package'>
                <div class="figure_of_the_day">
                    <h1>Деятель Дня</h1>
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Francisak_Bahusevic.jpg/274px-Francisak_Bahusevic.jpg"
                        className='border border-4'
                        roundedCircle={true}
                    ></Image>
                    <h2>Франци́ск-Бенеди́кт Казими́рович Богуше́вич</h2>
                    <h2>21 марта 1840 - 28 апреля 1900</h2>
                    <p>Белорусский поэт, один из основоположников новой белорусской литературы. Основоположник критического реализма в белорусской литературе. </p>
                    <Link to="/bogush">
                        <Button className='text-center btn btn-light border border-5' style={{ width: '15rem' }}>

                            <span className='me-auto text-secondary'>{t('inform')}</span>

                        </Button>
                    </Link>

                </div>

            </div>

            <div className='d-flex justify-content-evenly flex-wrap' style={{ gap: '20px'}}>
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
                                <Image style={{color: 'secondary'}} className='me-auto' width={22} height={20} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png">
                                </Image>
                                <span className='me-auto text-secondary'>CaptMelancholy</span>
                                <Image style={{color: 'secondary'}} className='ml-auto' width={22} height={20} src={arrow}>
                                    </Image>
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
                                <Image style={{color: 'secondary'}} className='ml-auto' width={22} height={20} src={arrow}>
                                </Image>
                            </Button>
                        </Card.Link>
                    </Card.Footer>
                </Card>

            </div>
        </>
    )
}
export default Home;