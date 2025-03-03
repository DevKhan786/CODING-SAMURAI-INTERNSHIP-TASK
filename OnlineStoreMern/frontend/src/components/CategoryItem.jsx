import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <div className="relative overflow-hidden h-96 w-full rounded-xl group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <Link to={"/category" + category.href}>
        <div className="w-full h-full cursor-pointer border-2 border-black rounded-lg">
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
          
          {/* Image with smoother transition */}
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-full h-full object-cover transform transition-all duration-500 ease-cubic-bezier(0.4, 0, 0.2, 1) group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Text container with backdrop blur */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 space-y-2">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 inline-block">
              <h3 className="text-white text-2xl font-bold tracking-tight drop-shadow-xl">
                {category.name}
              </h3>
              <p className="text-gray-200 text-sm mt-1 flex items-center gap-1.5">
                Shop now
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </p>
            </div>
          </div>
          
          {/* Hover border effect */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-400/30 transition-all duration-300 rounded-xl" />
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;