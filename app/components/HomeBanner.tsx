import Image from "next/image";

const HomeBanner = () => {
    return ( 
        <div className="relative bg-gradient-to-r mb-8 from-yellow-300 to-yellow-500">
            <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
                <div className="mb-8 md:mb-0 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">QuickBuy Home</h1>
                    <p className="text-lg md:text-xl text-white mb-2 ">Enjoy faster delivery and discounts on sales</p>
                    <p className="text-2xl md:text-5xl font-bold text-blue-900">Get Your Items</p>
                </div>
                <div className="w-full md:w-1/3 relative aspect-video">
                  <Image className="object-contain" src="/assets/banner-home.png" alt="banner-home.png" fill /> 
                </div>
            </div>
        </div>
     );
}
 
export default HomeBanner