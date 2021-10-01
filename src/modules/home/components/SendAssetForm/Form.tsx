import { useState, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { TextField, IconButton, Dialog, DialogTitle, DialogContent, InputAdornment } from '@mui/material';
import { Close } from '@mui/icons-material'
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import AssetItem from "core/components/Assets/AssetItem";
import usd from 'assets/icons/currencies/usd.png'
import yen from 'assets/icons/currencies/yen.png'
import eur from 'assets/icons/currencies/eur.png'
import layerIcon from 'assets/icons/layer-icon.svg'

import { RootState } from 'store/store';
import { getWallet, sendWalletFund } from 'modules/home/store/actions';

type Inputs = {
  toAdr: number;
  currencyId: string;
  amount: number;
};

type ChosenAsset = {
  currencyId: string
  name: string
  balance: number
}

const SendAssetForm = () => {
  const history = useHistory();

  const [chosenAsset, setChosenAsset] = useState<ChosenAsset>({
    currencyId: "",
    name: "",
    balance: 0
  });
  const [openAssetDialog, setOpenAssetDialog] = useState<boolean>(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState<boolean>(false);

  const wallet = useSelector((state: RootState) => state.home.wallet)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Inputs>();


  const handleClickCancle = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    history.goBack()
  }

  const handleClickAsset = async () => {
    setOpenAssetDialog(true)
    await getWallet()
  }

  const handleChooseAsset = (currencyId: string, name: string, balance: number) => {
    setValue("currencyId", currencyId, { shouldValidate: true }) // setValue and trigger validation again
    setOpenAssetDialog(false)
    setChosenAsset({ currencyId, name, balance })
  }

  const handleClickMax = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (chosenAsset.balance === 0) return true
    setValue("amount", chosenAsset.balance, { shouldValidate: true })
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const params = {
      fromAdr: Number(wallet.walletAddress),
      toAdr: Number(data.toAdr),
      currencyId: data.currencyId,
      amount: Number(data.amount)
    }
    const result = await sendWalletFund(params)
    if (result) {
      setOpenSuccessDialog(true)

    }

  }; // your form submit function which will invoke after successful validation

  const assetIcon = (name: string) => {
    switch (name) {
      case "USD":
        return <img width={30} src={usd} alt="icon" />
      case "EUR":
        return <img width={30} src={eur} alt="icon" />
      case "YEN":
        return <img width={30} src={yen} alt="icon" />
      default:
        return <></>
    }
  }

  return (
    <>
      <form className="my-3 px-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="from">From</label>
          <TextField
            size="small"
            fullWidth
            hiddenLabel
            disabled
            id="from"
            variant="outlined"
            defaultValue={wallet.walletAddress}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="to">To</label>
          <TextField
            size="small"
            type="number"
            fullWidth
            hiddenLabel
            id="to"
            variant="outlined"
            error={errors.toAdr && true}
            {...register("toAdr", { required: true })}
          />
          {errors.toAdr && <p className="validate-text">This field is required</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="asset">Asset</label>
          <TextField
            size="small"
            fullWidth
            hiddenLabel
            id="asset"
            variant="outlined"
            onClick={handleClickAsset}
            value={chosenAsset.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {assetIcon(chosenAsset.name)}
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  <img width={30} src={layerIcon} alt="icon" />
                </InputAdornment>
              ),
              readOnly: true,
            }}
            error={errors.currencyId && true}
          // {...register("asset", { required: true })}
          />
          <input hidden {...register("currencyId", { required: true })} />
          {errors.currencyId && <p className="validate-text">This field is required</p>}
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center">
            <label htmlFor="amount">Amount</label>
            {chosenAsset.currencyId !== "" ? <span className="mr-2 text-gray-500 font-semibold text-xs uppercase">Available: {chosenAsset.balance} {chosenAsset.name}</span> : <></>}
          </div>
          <TextField
            size="small"
            fullWidth
            hiddenLabel
            type="number"
            id="amount"
            variant="outlined"
            error={errors.amount && true}
            {...register("amount", { required: true, min: 0, max: chosenAsset.balance })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <button onClick={handleClickMax} className="btn-adorment">Max</button>
                </InputAdornment>
              ),
            }}
          />
          {errors.amount && <p className="validate-text">This field is required</p>}
        </div>

        <div className="py-5 grid grid-cols-2 gap-4">
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
          {
            wallet.assets && wallet.assets.map((asset, key) => <AssetItem key={key} asset={asset} onClick={handleChooseAsset} />)
          }
        </DialogContent>
      </Dialog>

      <Dialog
        open={openSuccessDialog}
        maxWidth="xs"
        fullWidth={true}
      >
        <DialogContent>
          <p className="text-center text-xl font-bold py-3">Successfully sent</p>
          <div className="py-5">
            Your <span className="font-bold">{chosenAsset.name}</span> has been sent! <br />
            Thank you for using our service
          </div>
          <button onClick={() => history.goBack()} className="btn btn-blue w-full">OK</button>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default SendAssetForm