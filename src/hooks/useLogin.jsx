import { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosHttp } from "../helpers";
import { addUserAction } from "../redux/user/actions";
import { useHistory } from "react-router-dom";

const useLogin = () => {
  const [serverError, setServerError] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const login = async (values) => {
    setServerError(false);
    try {
      let api = axiosHttp();
      const url = `${process.env.REACT_APP_SERVER_URI}/users/login`;
      const options = {
        data: {
          email: values.email,
          password: values.password,
        },
      };
      const info = await api.post(url, options);

      localStorage.setItem("token", await info.token);
      localStorage.setItem("id", info.user._id);

      dispatch(addUserAction(info.user));
      if (info) history.push("/home");
    } catch (error) {
      if (error) setServerError(true);
    }
  };
  return { login };
};

export default useLogin;
