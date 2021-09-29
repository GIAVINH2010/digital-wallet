
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import { useHistory } from "react-router-dom";

import SendAssetForm from '../components/SendAssetForm/Form';

const SendAsset = () => {
  const history = useHistory();

  return (
    <div className="px-3">
      <div className="relative p-3 mb-2">
        <div className="absolute left-0 top-1">
          <IconButton onClick={() => history.goBack()}>
            <ArrowBackIcon />
          </IconButton>
        </div>
        <div className="text-center">
          Send Assets
        </div>
      </div>
      <SendAssetForm />
    </div>
  )
}

export default SendAsset