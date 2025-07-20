import React from 'react';
import './mystyles.css'
function IplTeams(props) {
    console.log("props",props)
    //let className=props.primary ? 'primary':''
    let className=props.secondry ? 'secondry':''
    const IplTeamsList=[{name:'Chenai super kings',owner:'abc'},
    {name:'Mumbai Indians',owner:'bhg'},{name:'Rajesthan royals',owner:'uuu'},
    {name:'panjab kings',owner:'yyyy'}]
    return (
        <div>
           
{/* <div className='primary'>Hi</div> */}
<div className={className}>hi</div>
<button type="button" class="btn btn-primary">Primary</button>

{/* <div className={className}>hi</div> */}

            {

IplTeamsList.map(team=><div>
    <h1>{team.name}</h1>
    <h2>{team.owner}</h2>
</div>)
            }
        </div>
    );
}

export default IplTeams;


