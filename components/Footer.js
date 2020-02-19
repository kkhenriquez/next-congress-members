const Social = ({name, link}) => (
  <span>
    <a href={link}>{name}</a>
  </span>
)

const Footer = () => {
  return (
    <footer className="footer">
      &copy; 2020 &middot; Kevin Henriquez &middot; <Social name="Twitter" link="https://twitter.com/kkhenriquez"/> &middot; <Social name="Github" link="https://github.com/kkhenriquez"/>
    </footer>
  );
};

export default Footer;