import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AlertContent, { Alert } from '../../../components/alert/Alert';

const Login = ({props}) => {
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
  const navigate = useNavigate()
  const userNameRef = useRef()
  const passwordRef = useRef()

  console.log(props);

  const submitHandler = () => {
    axios.post(`http://192.168.30.104:9090/buxoroUZ/api/v1/auth/login`, {
      username: userNameRef.current.value,
      password: passwordRef.current.value
    }).then((res) => {
      localStorage.setItem("token", res.data)
      Alert(setAlert, "success", "Muvafoqqiyatli kirildi!")
      navigate("/admin/bosh_sahifa")
    }).catch((error) => {
      Alert(setAlert, "warning", error.response.data)
    })
  }

  const keyDown = (e) => {
    if (e.key === "Enter") {
      submitHandler();
    }
  }

  return (
    <>
      <div className="content d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>

        <form className="login-form">
          <div className="card mb-0">
            <div className="card-body">
              <div className="text-center mb-3">
                <i className="icon-reading icon-2x text-secondary border-secondary border-3 rounded-pill p-3 mb-3 mt-1"></i>
                <h5 className="mb-0">Login to your account</h5>
                <span className="d-block text-muted">Enter your credentials below</span>
              </div>

              <div className="form-group form-group-feedback form-group-feedback-left">
                <input type="text"
                  className="form-control"
                  placeholder="Username"
                  ref={userNameRef}
                  onKeyDown={keyDown}
                />
                <div className="form-control-feedback">
                  <i className="icon-user text-muted"></i>
                </div>
              </div>

              <div className="form-group form-group-feedback form-group-feedback-left">
                <input type="password"
                  className="form-control"
                  placeholder="Password"
                  ref={passwordRef}
                  onKeyDown={keyDown}
                />
                <div className="form-control-feedback">
                  <i className="icon-lock2 text-muted"></i>
                </div>
              </div>

              <div className="form-group">
                <button type="button"
                  className="btn btn-primary btn-block"
                  onClick={() => submitHandler()}
                >Sign in</button>
              </div>

              <div className="text-center">
                <a href="login_password_recover.html">Forgot password?</a>
              </div>
            </div>
          </div>
        </form>


      </div>
      {/* alert */}
      <AlertContent alert={alert} />
    </>

  )
}

export default Login