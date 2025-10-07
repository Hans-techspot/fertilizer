import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Tractor, Shield, BarChart3, Clock } from 'lucide-react'
import Footer from '@/components/Footer'
import { useNavigate } from 'react-router-dom'

const Services = (): JSX.Element => {
  const navigate = useNavigate()

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: Tractor,
      title: 'Agricultural Consulting',
      desc: 'Expert advice on fertilizer application, crop management, and soil health to optimize your yield and sustainability.',
      details: [
        'Personalized crop nutrition plans',
        'Soil and water analysis',
        'Pest and disease management strategies',
        'Precision agriculture implementation'
      ]
    },
    {
      icon: Shield,
      title: 'Custom Blending',
      desc: 'Tailored fertilizer blends to meet the specific needs of your soil and crops, ensuring optimal nutrient delivery.',
      details: [
        'Micronutrient and macronutrient balancing',
        'Organic and conventional blend options',
        'Slow-release and controlled-release formulations',
        'Compatibility testing with other inputs'
      ]
    },
    {
      icon: BarChart3,
      title: 'Technical Support',
      desc: 'Ongoing support and training from our team of agronomists to ensure you get the most out of our products.',
      details: [
        'On-site and remote consultations',
        'Application equipment calibration',
        'Performance monitoring and analysis',
        'Educational workshops and webinars'
      ]
    },
    {
      icon: Clock,
      title: 'Distribution & Logistics',
      desc: 'Reliable and efficient worldwide shipping and logistics to ensure you get the products you need, when you need them.',
      details: [
        'Global supply chain network',
        'Flexible delivery options (bulk, bagged, liquid)',
        'Real-time order tracking',
        'Warehousing and inventory management'
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive agricultural support to maximize your farming success from field to harvest.</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <service.icon className="w-12 h-12 text-green-600" />
                  <div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="bg-green-600 text-white rounded-lg p-8 text-center"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Yield?</h2>
          <p className="text-xl mb-6">Contact our specialists today to discuss your needs and find the perfect solution for your farm.</p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-600"
            onClick={() => navigate('/contact')}
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
