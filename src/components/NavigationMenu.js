import { Link } from 'react-router-dom'

function NavigationMenu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/lesson'>Session Details</Link>
          </li>
          <li>
            <Link to='/plan'>Schedule and Fees</Link>
          </li>
          <li>
            <Link to='/studio'>Location</Link>
          </li>
          <li>
            <Link to='/faq'>Policy</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
        <div>
          <Link to='/blog'>Blog</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavigationMenu
