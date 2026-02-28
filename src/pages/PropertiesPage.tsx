import { useState, useMemo } from 'react';
import PropertyCard from '../components/PropertyCard';
import SearchFilter, { SearchFilters } from '../components/SearchFilter';
import { properties } from '../data/properties';
import { motion } from 'framer-motion';
import { LayoutGrid, List } from 'lucide-react';

export default function PropertiesPage() {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    type: 'all',
    minPrice: 0,
    maxPrice: 2000000,
    minBedrooms: 0,
    minBathrooms: 0,
    minSqft: 0,
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Location filter
      if (filters.location) {
        const locationMatch = property.location
          .toLowerCase()
          .includes(filters.location.toLowerCase());
        if (!locationMatch) return false;
      }

      // Type filter
      if (filters.type !== 'all' && property.type !== filters.type) {
        return false;
      }

      // Price filter
      if (property.price < filters.minPrice || property.price > filters.maxPrice) {
        return false;
      }

      // Bedrooms filter
      if (property.bedrooms < filters.minBedrooms) {
        return false;
      }

      // Bathrooms filter
      if (property.bathrooms < filters.minBathrooms) {
        return false;
      }

      // Square footage filter
      if (property.sqft < filters.minSqft) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Browse Properties
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100"
          >
            Find your perfect home from our extensive collection
          </motion.p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchFilter onSearch={setFilters} />
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredProperties.length} Properties Found
              </h2>
              <p className="text-gray-600">
                {filters.location && `In "${filters.location}"`}
                {filters.type !== 'all' && ` • ${filters.type}`}
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Properties Grid/List */}
          {filteredProperties.length > 0 ? (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
              }
            >
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <LayoutGrid className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No properties found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters to see more results.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
