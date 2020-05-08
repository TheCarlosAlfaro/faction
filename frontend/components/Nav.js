import Link from 'next/link';
import NavStyles from './styles/NavStyles';

function Nav() {
  return (
    <NavStyles>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/bookAppointment">
        <a>Book Now</a>
      </Link>
    </NavStyles>
  );
}

export default Nav;
