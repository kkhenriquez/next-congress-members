import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import MembersGrid from '../components/MembersGrid';

const Index = ({members}) => (
  <Layout>
    <h1>Members of the US House of Representatives</h1>
    <MembersGrid/>
  </Layout>
)

export default Index;