import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header() {

  return (
    <header>
      <ul className="list">
        <li className="element">
          <a className="link" href="#"><GiHamburgerMenu /></a>
        </li>
        <li className="element">
          <span className="span" >Logo</span>
        </li>
        <li className="element">
          <a className="span" href="#">Logout</a>
        </li>
      </ul>
    </header>
  )
}
