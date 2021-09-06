import { USER_SIGNUP } from "./types";
import axios from "axios";
import { host } from "./../../host";
import Swal from "sweetalert2";

export const userSignup = (data) => (dispatch) => {
  const formData = new FormData();
  formData.append("file", data.avatar);
  formData.append("data", JSON.stringify(data));
  axios({
    url: `${host}/users/signup`,
    method: "post",
    data: formData,
  })
    .then((res) => {
      dispatch({
        type: USER_SIGNUP,
        payload: res.data.newUser,
      });
    })
    .catch((err) => {
      const errors = err.response.data;
      Swal.fire({
        icon: "error",
        customClass: {
          confirmButton: "swal-btn",
        },
        title: errors.msg,
        confirmButtonText: `Ok`,
      });
    });
};
