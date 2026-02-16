import logo from '../assets/dr-shells-logo-no-circle- background.png'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="dr shells soul food logo" className="logo" />
      <h1>Timesheet</h1>
    </header>
  )
}

export default Header