import ModalImage from 'react-modal-image'

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
                    className='col-sm-4 col-md-4 col-lg-4'
                  >
                    <div className='portfolio-item hover-bg'>
                      <ModalImage small={d.link} large={d.link} alt={d.title} />
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
