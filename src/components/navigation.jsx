import logo from '../assets/img/1083.png'

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            <span className='sr-only'>Переключить навигацию</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <a className='page-scroll' href='#page-top'>
            <img src={logo} width={120} height={60} alt='БАЗИС' />
          </a>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                О нас
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Продукция
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Партнёры
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Контакты
              </a>
            </li>
            <li>
              <div className='phoneLink'>
                Отдел продаж:
                <a className='nopadding' href='tel:071-123-45-67'>
                  071-123-45-67
                </a>
              </div>
            </li>
            <li>
              <div className='phoneLink'>
                Сервисный центр:
                <a className='nopadding' href='tel:071-123-45-67'>
                  071-123-45-67
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
