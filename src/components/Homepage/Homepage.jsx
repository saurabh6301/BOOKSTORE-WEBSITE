
const Homepage = () => {

    return (
        <div className="flex flex-col items-center justify-center lg:w-full bg-white ">
            <div className="pt-[3rem] ">

                <div className="flex flex-row items-center justify-between flex-shrink px-8 h-[5rem] mb-6">
                        <h1 className="text-black  font-bold   text-xl lg:text-2xl opacity-70
">Beware of this Shop</h1>
                        <h1 className="text-black  font-bold   text-xl lg:text-2xl opacity-70

">Only for the Student Comunity</h1>
                    <div>
                        <h1 className="font-bold   text-blue-600 text-xl lg:text-2xl


"
                        >50% Off</h1>
                    </div>
                </div>
                <div className="flex items-center justify-center bg-y relative rounded-lg p-8 pt-0 cursor-pointer w-full" >
                    <img className="w-[80rem] 3xl:w-[74rem] h-[15rem] md:h-[20rem] lg:h-[30rem] rounded-lg object object-fillS" src="/banner-books.jpg" alt="Homepage" />
                </div>
            </div>
        </div>
    )
}
export default Homepage;