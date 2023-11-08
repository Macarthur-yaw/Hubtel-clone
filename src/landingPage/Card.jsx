
const Card = ({title,content,img}) => {
    
    return ( 
        <div className="flex flex-row items-center gap-2  border-2 border-l-[4px] border-l-white bg-white rounded-md hover:border-l-[4px] hover:border-l-[#fb5858]  border-white shadow-lg cursor-pointer p-4"> 
            <img src={img} className="w-[48px] h-[48px]"/>

<div>
    
<h1 className="font-bold text-[20px]">
    {title}
</h1>

<h3 className="font-semibold text-[16px]">
    {content}
</h3>

</div>

        </div>
     );
}
 
export default Card;