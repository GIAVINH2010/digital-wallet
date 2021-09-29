import React from "react";
import { InputAdornment, TextField, IconButton } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router";

type Inputs = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors }
  } = useForm<Inputs>();

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    localStorage.setItem("TOKEN", JSON.stringify(new Date()))
    history.push("/")
  }; // your form submit function which will invoke after successful validation

  // console.log(watch("password")); // you can watch individual input by pass the name of the input

  return (
    <form className="my-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="username">Username</label>
        <TextField
          size="small"
          fullWidth
          hiddenLabel
          id="username"
          variant="outlined"
          error={errors.username && true}
          {...register("username", { required: true })}
        />
        {errors.username && <p className="validate-text">This field is required</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <TextField
          size="small"
          fullWidth
          hiddenLabel
          id="password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>,
          }}
          variant="outlined"
          error={errors.password && true}
          {...register("password", { required: true })}
        />
        {errors.password && <p className="validate-text">This field is required</p>}
      </div>
      <div className="py-3">
        <button className="block mx-auto btn btn-blue" type="submit" >Unlock</button>
      </div>
    </form>
  );
}

export default LoginForm