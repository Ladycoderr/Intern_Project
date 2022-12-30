import React from 'react';
import './index.css'
function Card(props) {
console.log(props.data);
return (<>
      <div className="cards">
      <img src={`https://avatars.dicebear.com/v2/avataaars/{${props.data.username}}.svg?options[mood][]=happy`} class="card-img-top" alt="..."/>
        <div className="card-body text-center">
            <h3  className='username fw-bolder'>{props.data.username}</h3>
            <h4 className="card-title fw-bold">{props.data.name}</h4>
            <h5 className=''>{props.data.email}</h5>
            <h5 className=''>{props.data.phone}</h5>
            <h5 className=''>{props.data.website}</h5>
            <h6 className='text-secondary'>{`${props.data.address.street} ${props.data.address.suite}, ${props.data.address.city}, ${props.data.address.zipcode}`}</h6>
            <h6 className='text-secondary'>{`${props.data.company.name}, ${props.data.company.catchPhrase}`}</h6>
        </div>
      </div>
    </>

)
}
export default Card ;