import axios from 'axios'
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    card_id : '', 
    name : '',
    lastname : '',
    email : '',
    password : '',
    phone : ''
    

  })


  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      
      const rs = await axios.post('http://localhost:8889/auth/register', input)
      console.log(rs)
      if(rs.status === 200) {
        alert('Register Successful')
        navigate('/login')
      }
    }catch(err) {
      console.log( err.message)
    }

  }

  return (
    <div className="p-5 border w-4/6 min-w-[100px] mx-auto rounded mt-5 bg-gradient-to-br from-pink-200 to-red-300 max-w-[30vw]">
  <div className="flex items-center justify-center">
  <img src="1.7.jpg" className="w-20 h-20 rounded-full border-2 border-pink-500" alt="1.7" />
</div>

  <form className="flex flex-col gap-4" onSubmit={hdlSubmit}>
    <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-pink-700">Card_id</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="card_id"
            value={input.card_id}
            onChange={ hdlChange }
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-pink-700">Name</span>
          </div>
          <input
            type="name"
            className="input input-bordered w-full max-w-xs"
            name="name"
            value={input.name}
            onChange={ hdlChange }
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-pink-700">Last_name</span>
          </div>
          <input
            type="lastname"
            className="input input-bordered w-full max-w-xs"
            name="lastname"
            value={ input.lastname }
            onChange={ hdlChange }
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-pink-700">Email</span>
          </div>
          <input
            type="email"
            className="input input-bordered w-full max-w-xs"
            name="email"
            value={ input.email }
            onChange={ hdlChange }
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-pink-700">Password</span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
            name="password"
            value={input.password}
            onChange={ hdlChange }
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-pink-700">Phone</span>
          </div>
          <input
            type="phone"
            className="input input-bordered w-full max-w-xs"
            name="phone"
            value={input.phone}
            onChange={ hdlChange }
          />
        </label>
        <div className="flex gap-5 ">
          <button type="submit" className="btn btn-outline btn-pink text-white border-pink-500 hover:bg-pink-500 focus:ring-pink-500 focus:border-pink-500 active:bg-pink-700">Submit</button>
          <button type="reset" className="btn btn-outline btn-pink text-white border-pink-500 hover:bg-pink-500 focus:ring-pink-500 focus:border-pink-500 active:bg-pink-700">Reset</button>
        </div>
      </form>
    </div>
  );
}