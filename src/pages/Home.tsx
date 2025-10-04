import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import { Award, Leaf, Tractor, Star, Users, TrendingUp, Zap, Shield, CheckCircle, Globe, Heart, Play, BarChart3, Clock, MapPin, Phone, Mail } from 'lucide-react'
import Footer from '@/components/Footer'

const Home = (): JSX.Element => {
  const [scrollY, setScrollY] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  }

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  }

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  }

  const products = [
  {
    id: 1,
    name: 'Sodium Molybdate',
    category: 'micronutrients',
    price: 'Contact Us',
    rating: 4.8,
    image: 'https://diga-as.com/wp-content/uploads/2023/03/Sodium-Molybdate.jpg',
    description: 'Top quality fertilizer for sale. Sodium Molybdate, Dihydrate is used in the manufacturing of inorganic and organic pigments, as a corrosion inhibitor, as a bath additive for finishing metals finishing, as a reagent for alkaloids, and as an essential micronutrient for plants and animal.',
    features: ['High purity', 'Essential micronutrient', 'Industrial applications'],
    benefits: ['Improved plant health', 'Enhanced chlorophyll production', 'Better nitrogen fixation'],
  },
  {
    id: 2,
    name: 'Copper(II) Sulfate Pentahydrate',
    category: 'micronutrients',
    price: 'Contact Us',
    rating: 4.9,
    image: 'https://diga-as.com/wp-content/uploads/2023/03/CopperII-Sulfate-Pentahydrate.jpg',
    description: 'Copper(II) sulfate, also known as copper sulphate, is an inorganic compound with the chemical formula CuSO4. It forms hydrates CuSO4·nH2O, where n can range from 1 to 7. The pentahydrate (n = 5), a bright blue crystal, is the most commonly.',
    features: ['Bright blue crystals', 'Multiple hydrates', 'Versatile applications'],
    benefits: ['Disease prevention', 'Enzyme activation', 'Soil amendment'],
  },
  {
    id: 3,
    name: 'Zinc Sulfate Heptahydrate',
    category: 'micronutrients',
    price: 'Contact Us',
    rating: 4.7,
    image: 'https://diga-as.com/wp-content/uploads/2023/03/zinc-sulfate-heptahydrate.webp',
    description: 'Fertiliser for sale. Zinc Sulfate Heptahydrate is a moderately water and acid soluble Zinc source for uses compatible with sulfates. Sulfate compounds are salts or esters of sulfuric acid formed by replacing one or both of the hydrogens with a metal.',
    features: ['Water soluble', 'Acid compatible', 'Sulfate source'],
    benefits: ['Zinc deficiency correction', 'Plant growth enhancement', 'Improved crop quality'],
  },
  {
    id: 4,
    name: 'Manganese(II) Sulfate Monohydrate',
    category: 'micronutrients',
    price: 'Contact Us',
    rating: 4.6,
    image: 'https://diga-as.com/wp-content/uploads/2023/03/manganeseii-sulfate-monohydrate.jpeg',
    description: 'This is due to the formation of MnSO4 during the reaction which acts as a catalyst for the same reaction. Thus, MnSO4 is an ” auto catalyst ” for this reaction. This is an example of auto catalyst.',
    features: ['Auto catalyst', 'Reaction intermediate', 'Industrial applications'],
    benefits: ['Catalytic properties', 'Reaction acceleration', 'Process efficiency'],
  },
  {
    id: 5,
    name: 'Boric Acid',
    category: 'micronutrients',
    price: 'Contact Us',
    rating: 4.8,
    image: 'https://diga-as.com/wp-content/uploads/2023/03/boric-acid.jpg',
    description: 'Boric acid is a water-soluble compound containing oxygen, boron, and hydrogen. It’s a white substance that comes in powder or crystal form. Researchers believe boric acid has antifungal and antibacterial properties.',
    features: ['Water soluble', 'Antifungal properties', 'Antibacterial effects'],
    benefits: ['Disease control', 'Plant health improvement', 'Yield enhancement'],
  },
  {
    id: 6,
    name: 'Ferric DTPA',
    category: 'chelates',
    price: 'Contact Us',
    rating: 4.9,
    image: 'https://diga-as.com/wp-content/uploads/2023/03/Ferric-DTPA.jpg',
    description: 'Ferric DTPA is a pure liquid Iron fertilizer. Iron DTPA is adviced for hydroponics. Our product is a stable, translucent solution and is recommended at different phenological stages. The high level of Iron in our formula improves the production of chlorophyll.',
    features: ['Liquid iron fertilizer', 'Hydroponics suitable', 'Stable solution'],
    benefits: ['Chlorophyll production', 'Iron deficiency correction', 'Plant vitality'],
  },
  
];


  const testimonials = [
    {
      name: 'John Farmer',
      role: 'Corn Farmer, Iowa',
      content: 'TAT GLOBAL fertilizers increased my corn yield by 30% this season. The quality is unmatched!',
      rating: 5,
      image: 'https://api.a0.dev/assets/image?text=John Farmer&aspect=1:1&seed=john',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Vineyard Owner, Spain',
      content: 'Their sustainable solutions helped us achieve organic certification while maintaining productivity.',
      rating: 5,
      image: 'https://api.a0.dev/assets/image?text=Maria Rodriguez&aspect=1:1&seed=maria',
    },
    {
      name: 'Ahmed Hassan',
      role: 'Rice Farmer, Egypt',
      content: 'Reliable delivery and expert support. TAT GLOBAL is our go-to partner for all fertilizer needs.',
      rating: 5,
      image: 'https://api.a0.dev/assets/image?text=Ahmed Hassan&aspect=1:1&seed=ahmed',
    },
  ]

  const timeline = [
    { year: '2000', title: 'Founded', desc: 'TAT GLOBAL established with a vision for sustainable agriculture.' },
    { year: '2010', title: 'Global Expansion', desc: 'Expanded operations to 30+ countries worldwide.' },
    { year: '2015', title: 'Innovation Milestone', desc: 'Launched revolutionary slow-release fertilizer technology.' },
    { year: '2020', title: 'Sustainability Focus', desc: 'Achieved carbon-neutral production and organic certifications.' },
    { year: '2025', title: 'Future Forward', desc: 'Leading the industry with AI-powered precision agriculture.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 overflow-x-hidden relative">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://api.a0.dev/assets/image?text=Fertilizer%20Fields&aspect=16:9&seed=hero)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="relative max-w-7xl mx-auto text-center py-20 z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            TAT GLOBAL COMPANY LIMITED
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Leading provider of premium fertilizer solutions for sustainable agriculture worldwide
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('products')}
            >
              Explore Products
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Quick Quote
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Get a Quick Quote</DialogTitle>
                  <DialogDescription>
                    Tell us about your fertilizer needs and we'll provide a custom quote.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>quotes@tatglobal.com</span>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center cursor-pointer" onClick={() => scrollToSection('stats')}>
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        id="stats"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-50" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Trusted by farmers worldwide for sustainable agricultural solutions.</p>
          </motion.div>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={staggerContainer}>
            {[
              { icon: Users, value: '100K+', label: 'Happy Farmers', color: 'text-blue-600', bgColor: 'bg-blue-50' },
              { icon: TrendingUp, value: '25%', label: 'Yield Increase', color: 'text-green-600', bgColor: 'bg-green-50' },
              { icon: Globe, value: '50+', label: 'Countries Served', color: 'text-purple-600', bgColor: 'bg-purple-50' },
              { icon: Shield, value: '200+', label: 'Product Varieties', color: 'text-orange-600', bgColor: 'bg-orange-50' },
            ].map((stat, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer group relative overflow-hidden">
                  <div className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <CardContent className="pt-6 relative z-10">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 ${stat.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </motion.div>
                    <motion.div
                      className="text-4xl font-bold text-gray-900 mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose TAT GLOBAL</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We are committed to providing high-quality fertilizer products that enhance agricultural productivity and promote sustainable farming practices.</p>
          </motion.div>
          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer}>
            {[
              { icon: Award, title: 'Quality Assurance', desc: 'Our products undergo rigorous testing to ensure the highest quality standards for optimal crop yield.', color: 'from-blue-500 to-blue-600' },
              { icon: Leaf, title: 'Sustainable Solutions', desc: 'We focus on environmentally friendly fertilizers that support long-term soil health and ecosystem balance.', color: 'from-green-500 to-green-600' },
              { icon: Tractor, title: 'Global Reach', desc: 'Serving farmers and agricultural businesses across continents with reliable supply chains.', color: 'from-purple-500 to-purple-600' },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 cursor-pointer group relative overflow-hidden h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <CardHeader className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-8 h-8" />
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base">{feature.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        id="products"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our premium fertilizer range designed for maximum crop productivity.</p>
          </motion.div>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer h-full overflow-hidden">
                        <div className="relative overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge variant="secondary" className="bg-white/90 text-gray-800">{product.category}</Badge>
                          </div>
                        </div>
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm text-gray-600">{product.rating}</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg mb-2 flex-grow">{product.name}</CardTitle>
                          <CardDescription className="mb-4 flex-grow">{product.description}</CardDescription>
                          <div className="flex items-center justify-between mt-auto">
                            <span className="text-2xl font-bold text-green-600">{product.price}</span>
                            <Button size="sm" className="hover:scale-105 transition-transform">Learn More</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:scale-110 transition-transform" />
            <CarouselNext className="hover:scale-110 transition-transform" />
          </Carousel>
        </div>
      </motion.section>

      {/* Video Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={fadeInUp}
          >
            See TAT GLOBAL in Action
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Watch how our innovative fertilizer solutions are transforming agriculture worldwide.
          </motion.p>
          <motion.div
            className="relative max-w-4xl mx-auto"
            variants={scaleIn}
          >
            <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden shadow-2xl">
              {isVideoPlaying ? (
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center relative cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                  <img
                    src="https://api.a0.dev/assets/image?text=Agriculture Video&aspect=16:9&seed=video"
                    alt="Agriculture Video Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 text-gray-900 ml-1" />
                    </motion.div>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">25 years of innovation and commitment to sustainable agriculture.</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-blue-500 rounded-full" />
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-green-600 mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear from farmers who have transformed their yields with TAT GLOBAL products.</p>
          </motion.div>
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 mx-auto max-w-2xl">
                  <CardContent className="pt-8 pb-8 px-8">
                    <motion.img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 mb-6 italic">"{testimonials[activeTestimonial].content}"</blockquote>
                    <div>
                      <div className="font-bold text-lg">{testimonials[activeTestimonial].name}</div>
                      <div className="text-gray-600">{testimonials[activeTestimonial].role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === index ? 'bg-green-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive agricultural support to maximize your farming success.</p>
          </motion.div>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer}>
            {[
              { icon: Tractor, title: 'Agricultural Consulting', desc: 'Expert advice on fertilizer application and crop management.', color: 'from-blue-500 to-blue-600' },
              { icon: Shield, title: 'Custom Blending', desc: 'Tailored fertilizer blends for your specific soil and crop needs.', color: 'from-green-500 to-green-600' },
              { icon: BarChart3, title: 'Technical Support', desc: 'Ongoing support and training for optimal fertilizer usage.', color: 'from-purple-500 to-purple-600' },
              { icon: Clock, title: 'Distribution Network', desc: 'Reliable worldwide shipping and logistics services.', color: 'from-orange-500 to-orange-600' },
            ].map((service, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer h-full group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <CardHeader className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-8 h-8" />
                    </motion.div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription>{service.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Sustainable Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeft}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sustainable Agriculture for a Better Future</h2>
              <p className="text-lg text-gray-600 mb-6">
                At TAT GLOBAL, we believe in responsible farming that preserves the environment while maximizing productivity. Our sustainable practices ensure that future generations can continue to thrive.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Reduced chemical runoff by 40%</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Carbon-neutral production processes</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Support for organic farming certifications</span>
                </li>
              </ul>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg">Learn About Sustainability</Button>
            </motion.div>
            <motion.div variants={slideInRight} className="text-center">
              <motion.img
                src="https://api.a0.dev/assets/image?text=Sustainable Farming&aspect=4:3&seed=sustainable"
                alt="Sustainable Farming"
                className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Global Reach Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <Globe className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Global Reach, Local Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Serving farmers across 50+ countries with localized solutions and expert support in multiple languages.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              'North America', 'Europe', 'Asia Pacific', 'Africa',
              'South America', 'Middle East', 'Australia', 'Caribbean'
            ].map((region, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-green-300">
                  <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <span className="text-gray-700 font-medium text-sm">{region}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={fadeInUp}
          >
            Ready to Transform Your Agriculture?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-gray-100"
            variants={fadeInUp}
          >
            Join thousands of farmers worldwide who trust TAT GLOBAL for their fertilizer needs.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
                onClick={() => scrollToSection('home')}
              >
                Get Started Today
              </Button>
            </motion.div>
            <motion.div variants={scaleIn}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 hover:scale-105 transition-all duration-300 shadow-xl"
                onClick={() => scrollToSection('features')}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
        {/* Floating elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full"
          animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.section>

      <Footer />
    </div>
  )
}

export default Home