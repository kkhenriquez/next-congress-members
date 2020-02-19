import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';

const Member = ({member, role}) => (
  <Layout>
    <div className="measure">
      <h1>{`${role.short_title} ${member.first_name} ${member.last_name}`} <small className="o-80">[{role.state}]</small></h1>
      <div className="flex items-center">
        <div className={`badge party-badge party-badge--${member.current_party}`}>{member.current_party}</div>
        {member.in_office && <div className="ml4 badge badge--green">In office</div>}
      </div>
      <div className="mt5">
        <a href={`${member.url}`}>{member.url}</a> {member.twitter_account && <span>&middot; <a href={`https://twitter.com/${member.twitter_account}`}>{`@${member.twitter_account}`}</a></span>}
      </div>
      <div className="switcher mt5">
        <div>
          <div className="stack vote-info">
            <span className="vote-info__tag o-80">Votes with party</span>
            <span className="vote-info__number">{role.votes_with_party_pct}%</span>
          </div>
          <div className="stack vote-info">
            <span className="vote-info__tag o-80">Votes againts party</span>
            <span className="vote-info__number">{role.votes_against_party_pct}%</span>
          </div>
          <div className="stack vote-info">
            <span className="vote-info__tag o-80">Total votes</span>
            <span className="vote-info__number">{role.total_votes}</span>
          </div>
        </div>
      </div>
      <div className="mt5">
        <Link href="/">
          <a className="button">Back</a>
        </Link>
      </div>
    </div>
  </Layout>
);

Member.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.propublica.org/congress/v1/members/${id}.json`, {
    method: 'GET',
    headers: {
      'X-API-Key': 'Q38PfmdlAd0KohAiBlCESyIgGhpMpJ5bmoQFK8s3'
    }
  });
  const member = await res.json();

  return { 
    member: member.results[0],
    role: member.results[0].roles[0]
  };
};

export default Member;