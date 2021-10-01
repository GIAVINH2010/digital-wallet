import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import profileIcon from 'assets/images/profile-icon.svg'
import copyIcon from 'assets/icons/copy-icon.svg'
import sendIcon from 'assets/icons/send-icon.svg'
import ronin from 'assets/images/ronin-white.svg'
import { useHistory } from "react-router-dom";
import AssetItem from 'core/components/Assets/AssetItem'

import currencyFormatter from 'core/utils/helpers/currencyFormatter';

import { RootState } from 'store/store'
import { Asset } from 'modules/home/store/types'
import { logout } from 'modules/auth/store/actions'
import { getWallet } from 'modules/home/store/actions'

const Home = () => {
  const history = useHistory();

  const wallet = useSelector((state: RootState) => state.home.wallet);

  const usdAsset = wallet.assets?.find((asset: Asset) => asset.currency.name === "USD")
  const assets = wallet.assets?.filter((asset: Asset) => asset.currency.name !== "USD")

  useEffect(() => {
    (async () => {
      await getWallet()
    })()
  }, [])

  const handleClickLogout = () => {
    logout()
  }

  return (
    <>
      <div className="bg-home-ronin mt-8 mb-4 px-3">
        <div className="flex flex-row justify-between mb-2">
          <div className="flex flex-row items-center">
            <span className="block w-2 h-2 bg-blue-500 rounded m-2"></span>
            Ronin Wallet
          </div>
          <button onClick={handleClickLogout}>
            <img className="mx-auto p-1 rounded-lg hover:bg-blue-100" src={profileIcon} alt="profile-icon" />
          </button>
        </div>
        <div className="p-5 my-5 shadow-2xl rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 divide-y divide-blue-200">
          <div className="flex flex-row justify-between mb-3">
            <div className="text-white">
              My Wallet
              &nbsp;
              (<span>{wallet.walletAddress}</span>)
            </div>
            <img className="cursor-pointer p-1 rounded hover:bg-blue-600" src={copyIcon} alt="copy-icon" />
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-white mt-3">
              <h1 className="mb-2">
                {usdAsset?.balance ? currencyFormatter(usdAsset?.balance) : 0} USD
              </h1>
              <div>
                {usdAsset?.currency.exchangeRate ? currencyFormatter(usdAsset?.balance * usdAsset?.currency.exchangeRate) : 0} VND
              </div>
            </div>

            <img className="self-end" src={ronin} alt="ronin" />
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <button onClick={() => history.push("/send")}>
            <img className="mx-auto p-3 rounded-xl hover:bg-blue-100" src={sendIcon} alt="" />
            <span className="text-xs text-center">Send</span>
          </button>
        </div>
        <h2 className="font-semibold my-2">Assets</h2>
        <div className="flex flex-col">
          {assets?.map((asset, key) => <AssetItem key={key} asset={asset} onClick={() => { }} />)}
        </div>
      </div>
    </>
  )
}

export default Home