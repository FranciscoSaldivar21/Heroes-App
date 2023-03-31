import { useNavigate } from "react-router-dom";


export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
      navigate('/DcPage', {replace: true})
  }

  return (
    <div className="containter mt-5">
      <h1>LogIn</h1>
      <hr/>

      <button className="btn btn-primary-outline" onClick={ onLogin }>
        LogIn
      </button>
    </div>
  )
}
