import { Link } from 'react-router-dom';
import { Heart, Bed, Bath, Square, MapPin, Home } from 'lucide-react';
import { Property } from '../data/properties';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badge */}
        {property.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}

        {/* Type Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 capitalize">
          <Home className="w-4 h-4 inline mr-1" />
          {property.type}
        </div>

        {/* Heart Button */}
        <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Price */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-2xl font-bold text-blue-600">{formatPrice(property.price)}</p>
            <p className="text-sm text-gray-500 flex items-center mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {property.location}
            </p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {property.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Features */}
        <div className="flex justify-between items-center py-4 border-t border-gray-100">
          <div className="flex items-center text-gray-600">
            <Bed className="w-5 h-5 mr-2 text-blue-500" />
            <span className="text-sm font-medium">{property.bedrooms}</span>
            <span className="text-xs ml-1">beds</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Bath className="w-5 h-5 mr-2 text-blue-500" />
            <span className="text-sm font-medium">{property.bathrooms}</span>
            <span className="text-xs ml-1">baths</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Square className="w-5 h-5 mr-2 text-blue-500" />
            <span className="text-sm font-medium">{property.sqft.toLocaleString()}</span>
            <span className="text-xs ml-1">sqft</span>
          </div>
        </div>

        {/* View Property Button */}
        <Link
          to={`/properties/${property.id}`}
          className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
        >
          View Property
        </Link>
      </div>
    </motion.div>
  );
}
