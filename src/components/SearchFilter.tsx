import { useState } from 'react';
import { Search, Filter, MapPin, Home, Bed, Bath, Square } from 'lucide-react';
import { PropertyType, propertyTypes } from '../data/properties';

interface SearchFilterProps {
  onSearch: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  location: string;
  type: PropertyType | 'all';
  minPrice: number;
  maxPrice: number;
  minBedrooms: number;
  minBathrooms: number;
  minSqft: number;
}

const defaultFilters: SearchFilters = {
  location: '',
  type: 'all',
  minPrice: 0,
  maxPrice: 2000000,
  minBedrooms: 0,
  minBathrooms: 0,
  minSqft: 0,
};

export default function SearchFilter({ onSearch }: SearchFilterProps) {
  const [filters, setFilters] = useState<SearchFilters>(defaultFilters);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInputChange = (field: keyof SearchFilters, value: string | number) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  const handleReset = () => {
    setFilters(defaultFilters);
    onSearch(defaultFilters);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
      {/* Main Search Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Location Search */}
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by location..."
            value={filters.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        {/* Property Type */}
        <div className="relative min-w-[150px]">
          <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            value={filters.type}
            onChange={(e) => handleInputChange('type', e.target.value as PropertyType | 'all')}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer"
          >
            <option value="all">All Types</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button
          onClick={() => onSearch(filters)}
          className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Search className="w-5 h-5" />
          <span>Search</span>
        </button>
      </div>

      {/* Advanced Filters Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 mt-4 font-medium transition-colors"
      >
        <Filter className="w-4 h-4" />
        <span>{isExpanded ? 'Hide' : 'Show'} Advanced Filters</span>
      </button>

      {/* Advanced Filters */}
      {isExpanded && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100 animate-fadeIn">
          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => handleInputChange('minPrice', Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => handleInputChange('maxPrice', Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="2000000"
            />
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Bed className="w-4 h-4 inline mr-1" />
              Min Bedrooms
            </label>
            <input
              type="number"
              value={filters.minBedrooms}
              onChange={(e) => handleInputChange('minBedrooms', Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="0"
            />
          </div>

          {/* Bathrooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Bath className="w-4 h-4 inline mr-1" />
              Min Bathrooms
            </label>
            <input
              type="number"
              value={filters.minBathrooms}
              onChange={(e) => handleInputChange('minBathrooms', Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="0"
            />
          </div>

          {/* Square Footage */}
          <div className="col-span-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Square className="w-4 h-4 inline mr-1" />
              Min Square Footage
            </label>
            <input
              type="number"
              value={filters.minSqft}
              onChange={(e) => handleInputChange('minSqft', Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="0"
            />
          </div>

          {/* Reset Button */}
          <div className="col-span-2 md:col-span-2 flex justify-end">
            <button
              onClick={handleReset}
              className="px-6 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors font-medium"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
