import axios from 'axios'
import {useState} from "react";
import useAuth from '../hooks/useAuth';



export default function LoginForm() {
  const {setUser} = useAuth()
  const [input, setInput] = useState({
    card_id : '', 
    password : ''
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      alert(555)
      // validation
      const rs = await axios.post('http://localhost:8889/auth/login', input)
      console.log(rs.data.token)
      localStorage.setItem('token', rs.data.token)
      const rs1 = await axios.get('http://localhost:8889/auth/me', {
        headers : { Authorization : `Bearer ${rs.data.token}` }
      })
      console.log(rs1.data)
      setUser(rs1.data)
      
    }catch(err) {
      console.log( err.message)
    }
  }

  return (
    
    <div className="p-5 border w-2/6 min-w-[100px] mx-auto rounded mt-5 bg-gradient-to-br from-pink-200 to-red-300 shadow-lg">
  <div className="flex justify-center mb-4">
    <img src="1.7.jpg" className="w-20 h-20 rounded-full border-2 border-pink-500" alt="1.7" />
  </div>

  <form className="flex flex-col gap-4" onSubmit={hdlSubmit}>
    <label className="form-control w-full max-w-xs">
      <span className="label-text text-pink-700">Card ID</span>
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        name="card_id"
        value={input.card_id}
        onChange={hdlChange}
        placeholder="Enter your card ID"
      />
    </label>

    <label className="form-control w-full max-w-xs">
      <span className="label-text text-pink-700">Password</span>
      <input
        type="password"
        className="input input-bordered w-full max-w-xs"
        name="password"
        value={input.password}
        onChange={hdlChange}
        placeholder="Enter your password"
      />
    </label>

    <div className="flex justify-center">
    <button type="submit" className="btn btn-outline btn-pink text-white border-pink-500 hover:bg-pink-500 hover:text-white hover:border-pink-500">Login</button>



    </div>
  </form>
</div>

  );
}