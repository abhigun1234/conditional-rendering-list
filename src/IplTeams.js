import React from 'react';

function IplTeams(props) {
    const IplTeamsList=[{name:'Chenai super kings',owner:'abc'},
    {name:'Mumbai Indians',owner:'bhg'},{name:'Rajesthan royals',owner:'uuu'},
    {name:'panjab kings',owner:'yyyy'}]
    return (
        <div>
            {

IplTeamsList.map(team=><h1>{team.owner}</h1>)
            }
        </div>
    );
}

export default IplTeams;