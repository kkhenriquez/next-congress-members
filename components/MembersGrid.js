import React, { Component } from 'react';
import Link from 'next/link';

class MembersGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      search: '',
      members: [],
    }
  }

  async componentDidMount() {
    const res = await fetch('https://api.propublica.org/congress/v1/116/house/members.json', {
      method: 'GET',
      headers: {
        'X-API-Key': 'Q38PfmdlAd0KohAiBlCESyIgGhpMpJ5bmoQFK8s3'
      }
    });
    const data = await res.json();
    const members = data.results[0].members;

    this.setState({
      isLoading: false,
      members,
    })
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0,20)
    });
  }

  render() {
    let filteredMembers = this.state.members.filter(
      (member) => {
        let matchGender = false, matchParty = false;
        const search = this.state.search.toLowerCase();
        const matchName = member.first_name.toLowerCase().indexOf(search) !== -1;
        const matchLastName = member.last_name.toLowerCase().indexOf(search) !== -1;
        if ('republican'.indexOf(search) !== -1) {
          matchParty = member.party === 'R';
        } else if ('democrat'.indexOf(search) !== -1) {
          matchParty = member.party === 'D';
        } else if ('female'.indexOf(search) === 0) {
          matchGender = member.gender === 'F';
        } else if ('male'.indexOf(search) === 0) {
          matchGender = member.gender === 'M';
        }
        
        return matchName || matchLastName || matchParty || matchGender;
      }
    );

    return (
      <div>
        {this.state.isLoading
        ? <span>Loading...</span>
        : <div>
            <input type="text"
              className="search-input"
              value={this.state.search}
              onChange={(e) => this.updateSearch(e)}
              aria-label="Search"
              placeholder="Search name, democrat, female, etc..."/>
            <ul className="members-grid">
              {filteredMembers.map(member => (
                <li key={`${member.id}-${member.party}`}>
                  <Link href="/member/[id]" as={`/member/${member.id}`}>
                    <a className="members-grid__item">
                      <span>{`${member.first_name} ${member.last_name}`}</span>
                      <span className={`badge party-badge party-badge--${member.party}`}>
                        {member.party}
                      </span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>}
      </div>
    );
  }
}

export default MembersGrid;