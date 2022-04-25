import { useState, useEffect } from "react";
import { FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMemebar: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { loading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, password, isMemebar } = values;
    if (!email || !password || (!isMemebar && !name)) {
      return toast.error("provide all values");
    }
    if (isMemebar) {
      return dispatch(loginUser({ email, password }));
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMemebar: !values.isMemebar });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMemebar ? "Login" : "Register"}</h3>

        {/* name field */}
        {!values.isMemebar && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            labelText="Name"
          />
        )}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          labelText="Email"
        />

        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          labelText="Password"
        />

        <button type="submit" className="btn btn-block" disabled={loading}>
          submit
        </button>
        <p>
          {values.isMemebar ? "Not A Member Yet?" : "Already Member?"}
          <button type="Button" onClick={toggleMember} className="member-btn">
            {values.isMemebar ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
