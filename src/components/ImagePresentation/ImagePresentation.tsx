
export function ImagePresentation() {

  return (
    <div className="h-[500px] relative flex justify-start">
      <div className="absolute z-[-1] h-full">
        <img src="./public/rddback.png" className="max-h-[500px] h-full" />
      </div>

      <div className="flex items-center h-full w-full pl-[352px] shadow-2xl shadow-black z-20">
        <img className="max-h-[90px] w-[240px] h-full" src="./public/diesel-product.png" />
      </div>
    </div >
  )
}