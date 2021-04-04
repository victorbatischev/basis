export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Продукция</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3'>
                  <img src={d.icon} alt={d.name} style={{ width: '60%' }} />
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <h3>{d.price} р.</h3>
                    <a
                      href='#contact'
                      className='btn btn-custom btn-lg center-block'
                    >
                      Заказать
                    </a>
                  </div>
                </div>
              ))
            : 'Загрузка...'}
        </div>
      </div>
    </div>
  )
}
