export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Продукция</h2>
          <p></p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4 card2'>
                  <img src={d.icon} alt={d.name} style={{ width: '60%' }} />
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text.substring(0, 100)}...</p>
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
