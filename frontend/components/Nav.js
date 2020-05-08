import React from 'react';
import Link from 'next/link';

function Nav() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/bookAppointment">
        <a>Book Now</a>
      </Link>
    </div>
  );
}

export default Nav;
