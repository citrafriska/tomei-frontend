import React, { useState } from "react";
import { connect } from "react-redux";
import { userSignup } from "./../store/actions/userAction";

function SignUpForm({ userSignup }) {
  const [data, setData] = useState({
    avatar: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.onloadend = () => {
        setData({
          ...data,
          imagePreview: reader.result,
          avatar: file,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const formValidation = (e) => {
    e.preventDefault();
    let invalid = 0;
    for (let k in data) {
      if (k !== "imagePreview") {
        const input = document.forms["form"][k];
        const span = input.nextElementSibling;
        span.style.opacity = 0;

        if (data[k] == "") {
          span.style.opacity = 1;
          invalid = invalid + 1;
        } else {
          if (data.password != "" && data.password.length < 6) {
            const inputCPwd = document.forms["form"]["password"];
            inputCPwd.nextElementSibling.innerHTML = "At least 6 characters.";
            inputCPwd.nextElementSibling.style.opacity = 1;
          } else if (data.password != data.confirmPassword) {
            const inputCPwd = document.forms["form"]["confirmPassword"];
            inputCPwd.nextElementSibling.innerHTML = "Password doesn't match.";
            inputCPwd.nextElementSibling.style.opacity = 1;
            invalid = invalid + 1;
          }
          if (data.email) {
            var mailformat = /^\S.*@\S+$/;
            const emailCheck = mailformat.test(data.email);
            if (emailCheck == false) {
              const inputEmail = document.forms["form"]["email"];
              inputEmail.nextElementSibling.innerHTML = "Email is invalid.";
              inputEmail.nextElementSibling.style.opacity = 1;
              invalid = invalid + 1;
            }
          }
        }
      }
    }

    if (invalid > 0) {
      return false;
    } else {
      return true;
    }
    invalid = 0;
  };

  const submitForm = (e) => {
    const validation = formValidation(e);
    if (validation) {
      userSignup(data);
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <div className="form-header">
          <h3>CREATE YOUR ACCOUNT</h3>
        </div>

        <div className="form-body">
          <div className="form-notice">
            <p>
              Because there will be documents that you need to prepare to apply
              for the loan, let's start off by creating password so that you can
              login to your account once you have these document ready.
            </p>
          </div>

          <form className="form-input" name="form">
            <div className="input-avatar">
              <div
                className="avatar-wrapper"
                style={{
                  backgroundImage: `url(${
                    !data.imagePreview
                      ? require("./../assets/Avatar.png").default
                      : data.imagePreview
                  })`,
                }}
              ></div>
              <label for="avatar">
                <p>Upload</p>
              </label>
              <br />
              <input
                type="file"
                id="avatar"
                accept=".png, .jpg, .jpeg"
                name="avatar"
                onChange={(e) => onImageChange(e)}
              />
              <span name="avatar" id="avatar-span">
                Please upload your avatar.
              </span>
            </div>
            <div className="input-details">
              <div className="input-row">
                <div className="input">
                  <label>NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                  <span name="name">Please input your name.</span>
                </div>

                <div className="input">
                  <label>EMAIL</label>
                  <input
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                  <span name="email">Please input your email.</span>
                </div>
              </div>

              <div className="input-row">
                <div className="input">
                  <label>PASSWORD</label>
                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                  />
                  <span name="password">Please input your password.</span>
                </div>

                <div className="input">
                  <label>CONFIRM PASSWORD</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={(e) =>
                      setData({ ...data, confirmPassword: e.target.value })
                    }
                  />
                  <span name="confirmPassword">
                    Please input your password.
                  </span>
                </div>
              </div>

              <button onClick={(e) => submitForm(e)}>
                <p>SAVE & NEXT</p>{" "}
                <img src={require("./../assets/arrow-right.png").default} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default connect(null, { userSignup })(SignUpForm);
