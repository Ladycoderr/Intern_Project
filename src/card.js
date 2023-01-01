import React, {useState,useEffect} from 'react';
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function Card(props) {
const [heartOn, setHeartOn] = useState(false);
const data  = props.data;
const [name, setName] = useState(data.name);
const [email, setEmail] = useState(data.email);
const [phone, setPhone] = useState(data.phone);
const [website, setWebsite] = useState(data.website);
const handleDelete = props.handleDelete ;
const handleUpdate = props.handleUpdate ;
const handleSubmit = () =>{
  if(name.length === 0 || email.length === 0 || phone.length === 0 || website.length === 0){
    alert("All Fields must be filled");
    return ;
  }
  const obj = {
    name : name.trim(),
    email : email.trim() ,
    phone : phone.trim(),
    website : website.trim()
  }
  console.log(obj);
  handleUpdate(data.id,obj);
}
return (<>

      <div className="card" style={{"width":"18rem"}}>
      <img src={`https://avatars.dicebear.com/v2/avataaars/{${data.username}}.svg?options[mood][]=happy`} class="card-img-top" alt="..."/>
        <div className="card-body text-center">
            <h6 className='username fw-bolder'>{data.username}</h6>
            <h5 className="card-title fw-bold">{data.name}</h5>
       <EmailIcon/>  <span className=''>{data.email}</span><br/>
          <CallIcon/>  <span className=''>{data.phone}</span><br/>
          <LanguageIcon/>  <span className=''>{data.website}</span><br/>
         <HomeIcon/>   <span className='text-secondary'>{`${data.address.street} ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`}</span> <br/>
          <BusinessIcon/>  <span className='text-secondary'>{`${data.company.name}, ${data.company.catchPhrase}`}</span>
          

        </div>
        <div className='alldata'>
        <div class="row">
    <div class="col border">
      {!heartOn ? <FavoriteBorderIcon style={{"cursor": "pointer"}} onClick = {() => setHeartOn(true)}/> : <FavoriteIcon style={{"cursor": "pointer", "color":"red"}} onClick = {() => setHeartOn(false)}/>}
    </div>
    <div class="col border">
      <EditIcon style={{"cursor": "pointer"}} data-toggle="modal" data-target={`#modal-${data.id}`}/>
    </div>
    <div class="col border">
      <DeleteIcon style={{"cursor": "pointer"}} onClick = {() => handleDelete(data.id)}/>
    </div>
  </div>
      </div>
      </div>
 


<div class="modal fade" id={`modal-${data.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Basic Modal</h5>
        
      </div>
      <div class="modal-body">
      <form novalidate>
      <div className='row'>
        <div class="col-2">
      <label for="name">Name</label> </div>
      <div className='col-10'><input type="name" class="form-control " id="name" value={name} onChange={(e) => setName(e.target.value)} required/></div>
       </div>
        
        <div className='row'>
        <div class="col-2">
      <label for="inputEmail4">Email</label> </div>
      <div className='col-10'><input type="email" class="form-control " id="inputEmail4" value={email} onChange={(e) => setEmail(e.target.value)} required/></div>
        </div>

        <div className='row'>
        <div class="col-2">
      <label for="inputphone4">Phone</label> </div>
      <div className='col-10'><input type="phone" class="form-control " id="inputphone4" value={phone} onChange={(e) => setPhone(e.target.value)} required/></div>
        </div>

        <div className='row'>
        <div class="col-2">
      <label for="inputwebsite4">website</label> </div>
      <div className='col-10'><input type="website" class="form-control " id="inputwebsite4" value={website} onChange={(e) => setWebsite(e.target.value)} required/></div>
        </div>

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" data-dismiss="modal" onClick={handleSubmit}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>

)
}
export default Card ;