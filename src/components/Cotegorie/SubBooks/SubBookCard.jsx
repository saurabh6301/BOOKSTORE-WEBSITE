import { Link } from "react-router-dom";
import "./SubBookCard.css";

export default function SubBookCard({ carddata }) {
  return (
    <Link to={carddata.href} className="SubBookCard w-[10rem] m-3 transition-all cursor-pointer">
      <div className="p-2">
        <img src={carddata.imageUrl} />
      </div>
      <div className="textPart bg-white pt-2">
        <div>
          <div className="flex">
            <p className="font-bold opacity-60">{carddata.name}</p>
            <span>-</span>
            <p className="font-bold text-green-800">{carddata.class}</p>
          </div>
          <p>{carddata.publication}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{carddata.price}</p>
          <p className="line-through opacity-50">₹1999</p>
          <p className="text-green-600 font-semibold">70% off</p>
        </div>
      </div>
    </Link>
  );
}
