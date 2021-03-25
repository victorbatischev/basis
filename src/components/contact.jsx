import { useState } from 'react'
import emailjs from 'emailjs-com'
import { Map } from './map'

const initialState = {
  name: '',
  email: '',
  message: ''
}

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name, email, message)

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-5'>
            <div className='row'>
              <div className='section-title'>
                <h2>Контакты</h2>
                <p>
                  Пожалуйста, заполните форму ниже чтобы отправить нам
                  электронное письмо. Мы свяжемся с вами при первой возможности.
                </p>
              </div>
              <form name='sentMessage' validate='true' onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6 form-group'>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='form-control'
                      placeholder='Ваше имя'
                      required
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='col-md-6 form-group'>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='form-control'
                      placeholder='Email'
                      required
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Введите сообщение'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Контактные данные</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Адрес
                </span>
                {props.data ? props.data.address : 'Загрузка...'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Телефон
                </span>
                {props.data ? props.data.phone : 'Загрузка...'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>
                {props.data ? props.data.email : 'Загрузка...'}
              </p>
            </div>
          </div>
          <div className='col-md-3 contact-info'>
            <Map />
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a
                      href={props.data ? props.data.facebook : '/'}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.data ? props.data.twitter : '/'}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.data ? props.data.youtube : '/'}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <p>&copy; {new Date().getFullYear()} Все права защищены</p>
                  </li>
                  <li>
                    <a
                      href='https://google.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Политика конфиденциальности
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://google.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Специальная оценка условий труда
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
