import { Home, Search, Handshake, FileText, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Home,
    title: 'Property Search',
    description: 'Find your perfect home with our advanced search tools and extensive property listings.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Search,
    title: 'Market Analysis',
    description: 'Get detailed market insights and property valuations to make informed decisions.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Handshake,
    title: 'Expert Guidance',
    description: 'Our experienced agents provide personalized support throughout your journey.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FileText,
    title: 'Legal Assistance',
    description: 'Complete documentation support and legal guidance for smooth transactions.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: TrendingUp,
    title: 'Investment Advice',
    description: 'Professional investment strategies to maximize your real estate portfolio.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Safe and secure property transactions with verified sellers and buyers.',
    color: 'from-green-500 to-green-600',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            Our Services
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What We Offer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive real estate services designed to meet all your property needs, 
            from finding your dream home to investment opportunities.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
