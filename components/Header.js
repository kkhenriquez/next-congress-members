import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <a className="header__link">Home</a>
      </Link>
      <Link href="/about">
        <a className="header__link">About</a>
      </Link>
    </header>
  );
};

export default Header;