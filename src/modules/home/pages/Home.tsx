import profileIcon from 'assets/images/profile-icon.svg'
import copyIcon from 'assets/icons/copy-icon.svg'
import sendIcon from 'assets/icons/send-icon.svg'
import ronin from 'assets/images/ronin-white.svg'
import { useHistory } from "react-router-dom";
import CurrencyItem from 'core/components/Assets/Currency'

const Home = () => {
  const history = useHistory();

  return (
    <>
      <div className="bg-home-ronin mt-8 mb-4">
        <div className="flex flex-row justify-between mb-2">
          <div className="flex flex-row items-center">
            <span className="block w-2 h-2 bg-blue-500 rounded m-2"></span>
            Ronin Wallet
          </div>
          <img src={profileIcon} />
        </div>
        <div className="p-5 my-5 shadow-2xl rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 divide-y divide-blue-200">
          <div className="flex flex-row justify-between mb-3">
            <div className="text-white">
              My Wallet
              &nbsp;
              (<span>7300 3777 3888 3334</span>)
            </div>
            <img className="cursor-pointer p-1 rounded hover:bg-blue-600" src={copyIcon} />
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-white mt-3">
              <h1 className="mb-2">
                1,000 USD
              </h1>
              <div>
                23,046,000 VND
              </div>
            </div>

            <img className="self-end" src={ronin} />
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
          <CurrencyItem />
        </div>
      </div>
    </>
  )
}

export default Home