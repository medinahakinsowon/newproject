import { useSearchParams , useNavigate } from "react-router-dom"
import { account } from "../appwrite/config";

const Verify = () => {
  const [params] = useSearchParams();
  const secret = params.get('secret');
  const Id = params.get('userId');
  const Navigate = useNavigate()
  console.log(secret)
  async function update() {
    try{
      const verifyAccount = await account.updateVerification(Id,secret)
      alert('User account is verified');
      Navigate('/Login')
    }
    catch(e){
      console.log(e)
    }
  }
  update();
  return (
    <h1 className="verify_body">
      Your Account is verified, proceed to<a href='/Login'>Login</a>
    </h1>
  )
}

export default Verify;
