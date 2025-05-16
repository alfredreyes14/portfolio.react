const ReviewCard = ({ review }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mx-auto max-w-3xl">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-gray-300 dark:bg-gray-700 mb-4 overflow-hidden">
          {/* Placeholder for reviewer image */}
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-500">{review.name.charAt(0)}</span>
          </div>
          {/* Uncomment when you have actual images */}
          {/* <Image 
            src={review.image} 
            alt={review.name}
            width={80}
            height={80}
            className="object-cover"
          /> */}
        </div>
        
        <div className="mb-4">
          {/* Star Rating */}
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon 
                key={i} 
                filled={i < review.rating} 
              />
            ))}
          </div>
        </div>
        
        <blockquote className="text-foreground mb-6 italic">
          "{review.review}"
        </blockquote>
        
        <div>
          <h4 className="font-bold text-lg">{review.name}</h4>
          <p className="text-muted">{review.position}</p>
        </div>
      </div>
    </div>
  );
};

const StarIcon = ({ filled }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      className={`w-5 h-5 ${filled ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`}
      fill="currentColor"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
};

export default ReviewCard;