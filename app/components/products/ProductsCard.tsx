// This file is client component
"use client"
import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateTexts";
import Rating from "@mui/material/Rating/Rating";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    data: any
}

const ProductCard:React.FC<ProductCardProps> = ({data}) => {

    const router = useRouter();

    const productRating = data.reviews.reduce((acc : number, item: any) => item.rating + acc, 0) / data.reviews.length
    return ( 
        <div 
         onClick={() => router.push(`/product/${data.id}`)}
         className="col-span-1 cursor-pointer border-[1px] border-slate-200 bg-slate-50 
         rounded-md m-2 pb-2 transition hover:scale-105 text-center text-sm">
            <div className="flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image className="w-full h-full object-contain p-4" src={data.images[0].image} 
                    alt={data.name} fill />
                </div>
                <div> <Rating value={productRating} readOnly/></div>
                <div className="mt-2 text-sm">{truncateText(data.name)}</div>
                <div className="">{data.reviews.length} reviews</div>
                <div className="">{formatPrice(data.price)}</div>
            </div>
        </div>
     );
}
 
export default ProductCard;