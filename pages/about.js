import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <h1>About the project</h1>
      <p>This is a little project that uses the Propublica <a href="https://projects.propublica.org/api-docs/congress-api/">Congress API</a>.</p>
      <p>It's made with Next.js and the repo is hosted on Github.</p>
    </Layout>
  );
};

export default About;