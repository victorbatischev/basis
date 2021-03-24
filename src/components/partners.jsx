export const Partners = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Аккредитованные ЦСО</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className='col-sm-6 col-md-4 col-lg-4'
                  >
                    <div className='portfolio-item'>
                      <div className='hover-bg'>
                        <a
                          href={d.link}
                          title={d.title}
                          data-lightbox-gallery='gallery1'
                        >
                          <div className='hover-text'>
                            <h4>{d.text}</h4>
                          </div>
                          <img
                            src={d.link}
                            className='img-responsive'
                            alt={d.title}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              : 'Загрузка...'}
          </div>
        </div>
      </div>
    </div>
  )
}
