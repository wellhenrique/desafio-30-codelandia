
export function ImagePresentation() {

  return (
    <div className="h-[450px] w-full relative flex justify-start">
      <div className="absolute z-[-1] h-full bg-cover">
        <img src="/rddback.png" className="max-h-[450px] h-full max-w-full w-full bg-center bg-nature bg-cover" />
      </div>

      <div className="flex items-center h-full w-full pl-[372px] relative">
        <span className="bg-gradient-to-l from-dark-1 via-dark-4 to-dark-7 h-[450px] absolute left-0 w-full"></span>
        <div className="absolute ml-[-100px] bg-cover h-full mb-[240px]  top-[15%]">
          <img className="h-[90px] w-[240px] bg-cover" src="/diesel-product.png" />
          <h3 className="w-[361px] h-[125px] text-white mt-8 font-medium text-lg ">Estados Unidos, 1899. O fim da era do velho oeste começou, e as autoridades estão caçando as últimas gangues de fora da lei que restam. Os que não se rendem, nem sucumbem, são mortos.</h3>
          <button className="w-[229px] h-[55px] rounded bg-blue-500 hover:bg-blue-600 active:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 mt-9 text-white font-bold text-base ">COMPRE AGORA</button>
        </div>
      </div>
    </div >
  )
}