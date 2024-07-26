/* eslint-disable react/prop-types */
 const AppBar = ({initial}) => {
    return <div className="shadow-md h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4 text-lg font-bold">
            Wallet App
        </div>        
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Welcome
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {initial? initial.toUpperCase() : "U"}
                </div>
            </div>
        </div>
    </div>
}
export default AppBar