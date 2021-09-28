import eur from 'assets/icons/currencies/eur.png'
// import yen from 'assets/icons/currencies/yen.png'
// import usd from 'assets/icons/currencies/usd.png'

const Currency = () => {
  return (
    <div className="cursor-pointer w-full" >
      <div className="flex items-center rounded bg-blue-50 hover:bg-blue-100 px-3 py-2">
        <div className="mx-2">
          <img width={40} src={eur} alt="icon"/>
        </div>
        <div className="ml-2 w-full">
          <div className="flex flex-col">
            <span className="font-semibold text-left text-sm">50 EUR</span>
            <span className="text-left text-sm text-gray-500">1,531,972 VND</span>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Currency

