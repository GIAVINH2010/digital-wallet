import React from "react";
import { InputAdornment, TextField, IconButton, InputLabel, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { VisibilityOff, Visibility, Close } from '@mui/icons-material'
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Currency from "core/components/Assets/Currency";

type Inputs = {
  from: string;
  to: string;
  asset: number;
  amount: number;
};

const SendAssetForm = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  // const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [openAssetDialog, setOpenAssetDialog] = React.useState<boolean>(false);

  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword)
  // };

  const handleClickCancle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    history.goBack()
  }

  const handleFocusAsset = () => {
    setOpenAssetDialog(true)
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  // console.log(watch("password")); // you can watch individual input by pass the name of the input

  return (
    <>
      <form className="my-3 px-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <InputLabel className="ml-2" htmlFor="username">From</InputLabel>
          <TextField
            size="small"
            fullWidth
            hiddenLabel
            disabled
            id="from"
            variant="outlined"
            {...register("from", { required: true })}
          />
        </div>

        <div className="mb-4">
          <InputLabel className="ml-2" htmlFor="to">To</InputLabel>
          <TextField
            size="small"
            fullWidth
            hiddenLabel
            id="to"
            variant="outlined"
            {...register("to", { required: true })}
          />
          {errors.to && <p>This field is required</p>}
        </div>

        <div className="mb-4">
          <InputLabel className="ml-2" htmlFor="asset">Asset</InputLabel>
          <TextField
            size="small"
            fullWidth
            hiddenLabel
            id="asset"
            variant="outlined"
            disabled
            onClick={handleFocusAsset}
            {...register("asset", { required: true })}
          />
          {errors.asset && <p>This field is required</p>}
        </div>

        <div className="mb-4">
          <InputLabel className="ml-2" htmlFor="amount">Amount</InputLabel>
          <TextField
            size="small"
            fullWidth
            hiddenLabel
            type="number"
            id="amount"
            variant="outlined"
            {...register("amount", { required: true })}
          />
          {errors.amount && <p>This field is required</p>}
        </div>
        <div className="py-3 grid grid-cols-2 gap-4">
          <button onClick={handleClickCancle} className="btn text-blue-500 bg-blue-50 hover:bg-blue-100">Cancel</button>
          <button className="btn btn-blue hover:bg-gradient-to-l hover:from-blue-400 hover:via-blue-500 hover:to-blue-600" type="submit">Send</button>
        </div>
      </form>

      <Dialog
        open={openAssetDialog}
        maxWidth="xs"
        fullWidth={true}
      >
        <DialogTitle>
          <div className="text-center text-sm">
            Assets
          </div>
          <IconButton
            aria-label="close"
            onClick={() => setOpenAssetDialog(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Currency />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default SendAssetForm