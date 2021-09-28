import React from "react";
import { InputAdornment, TextField, IconButton, InputLabel } from '@mui/material';
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
        <InputLabel className="ml-2" htmlFor="username">Username</InputLabel>
        <TextField
          size="small"
          fullWidth
          hiddenLabel
          id="username"
          variant="outlined"
          {...register("username", { required: true })}
        />
        {errors.username && <p>This field is required</p>}
      </div>

      <div className="mb-3">
        <InputLabel className="ml-2" htmlFor="password">Password</InputLabel>
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
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>,
          }}
          variant="outlined"
          {...register("password", { required: true })}
        />
        {errors.password && <p>This field is required</p>}
      </div>
      <div className="py-3">
        <button className="block mx-auto btn btn-blue" type="submit" >Unlock</button>
      </div>
    </form>
  );
}

export default LoginForm