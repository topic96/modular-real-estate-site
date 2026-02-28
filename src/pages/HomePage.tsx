import Hero from '../components/Hero';
import SearchFilter from '../components/SearchFilter';
import FeaturedProperties from '../components/FeaturedProperties';
import Services from '../components/Services';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Clock } from 'lucide-react';

export default function HomePage() {
  const recentProperties = properties.slice(0, 4);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero />

      {/* Search Section */}
      <section className="py-16 bg-white -mt-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchFilter onSearch={() => {}} />
        </div>
      </section>

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* Recent Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Recent Listings
              </h2>
              <p className="text-gray-600">
                Check out our latest property additions
              </p>
            </div>
            <Link
              to="/properties"
              className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              to="/properties"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>View All Properties</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose EstateHub
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We're committed to providing the best real estate experience with cutting-edge technology and personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Trusted by Thousands',
                description: 'Join thousands of satisfied customers who found their dream homes with us.',
              },
              {
                icon: Award,
                title: 'Award Winning',
                description: 'Recognized as the best real estate platform for innovation and customer service.',
              },
              {
                icon: Clock,
                title: 'Fast & Reliable',
                description: 'Quick property searches and seamless transactions from start to finish.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="inline-flex p-4 bg-white/20 rounded-2xl mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-gray-600 mb-8">
            Start your journey today and discover properties that match your lifestyle and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Browse Properties</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="inline-flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
