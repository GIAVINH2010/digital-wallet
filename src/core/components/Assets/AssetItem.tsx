import eur from 'assets/icons/currencies/eur.png'
import yen from 'assets/icons/currencies/yen.png'
import usd from 'assets/icons/currencies/usd.png'

import { Asset } from 'modules/home/store/types'
import currencyFormatter from 'core/utils/helpers/currencyFormatter'

interface AssetItemProps {
  asset: Asset,
  onClick: any
}

const AssetItem = ({ asset, onClick }: AssetItemProps) => {
  const { balance, currency: { name, exchangeRate } } = asset

  const assetIcon = (name: string) => {
    switch (name) {
      case "USD":
        return <img width={40} src={usd} alt="icon" />
      case "EUR":
        return <img width={40} src={eur} alt="icon" />
      case "YEN":
        return <img width={40} src={yen} alt="icon" />
      default:
        return <img width={40} src={usd} alt="icon" />
    }
  }

  return (
    <div className="cursor-pointer w-full mb-2" onClick={() => onClick(name, balance)}>
      <div className="flex items-center rounded-lg bg-blue-50 hover:bg-blue-100 px-3 py-3">
        <div className="mx-2">
          {assetIcon(name)}
        </div>
        <div className="ml-2 w-full">
          <div className="flex flex-col">
            <span className="font-semibold text-left text-sm">{currencyFormatter(balance)} {name}</span>
            <span className="text-left text-sm text-gray-500">{currencyFormatter(balance * exchangeRate)} VND</span>
          </div>
        </div>
      </div>
    </div >
  )
}
export default AssetItem

