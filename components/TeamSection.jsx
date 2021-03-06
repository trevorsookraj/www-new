import { Component } from 'react';
import team_data from '../static/data/team';

const TeamMember = ({ teamMember }) => (
  <div className="team-column">
    <div className="team-card-container">
      <div className="team-card">
        <img
          src={`/static/img/team_compressed/${teamMember.imageFileName}`}
          className="team-card-image"
        />
        <div className="card-text team-card-text">
          <h5 className="team-card-name">{teamMember.name}</h5>
          <div className="team-card-school">{teamMember.school}</div>
          <div className="team-card-bio">{teamMember.miniBio}</div>
        </div>
      </div>
    </div>
  </div>
);

export default class TeamSection extends Component {
  render() {
    return (
      <div className="team-wrapper">
        <h1 className="team-divider-title">HQ</h1>
        <hr className="team-divider" />
        <div className="team-grid-container">
          <div className="team-grid" data-column="3">
            {team_data['national'].map((teamMember) => (
              <TeamMember teamMember={teamMember} key={teamMember.name} />
            ))}
          </div>
        </div>
        <h1 className="team-divider-title">Investment</h1>
        <hr className="team-divider" />
        <h4 className="team-divider-subtitle">Boston</h4>
        <div className="team-grid-container">
          <div className="team-grid" data-column="3">
            {team_data['boston'].map((teamMember) => (
              <TeamMember teamMember={teamMember} key={teamMember.name} />
            ))}
          </div>
        </div>
        <hr className="team-divider" />
        <h4 className="team-divider-subtitle">New York</h4>
        <div className="team-grid-container">
          <div className="team-grid" data-column="3">
            {team_data['newYork'].map((teamMember) => (
              <TeamMember teamMember={teamMember} key={teamMember.name} />
            ))}
          </div>
        </div>
        <hr className="team-divider" />
        <h4 className="team-divider-subtitle">Philly</h4>
        <div className="team-grid-container">
          <div className="team-grid" data-column="3">
            {team_data['philly'].map((teamMember) => (
              <TeamMember teamMember={teamMember} key={teamMember.name} />
            ))}
          </div>
        </div>
        <hr className="team-divider" />
        <h4 className="team-divider-subtitle">San Francisco</h4>
        <div className="team-grid-container">
          <div className="team-grid" data-column="3">
            {team_data['bayArea'].map((teamMember) => (
              <TeamMember teamMember={teamMember} key={teamMember.name} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
