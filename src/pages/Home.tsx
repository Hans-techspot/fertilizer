import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Award, Leaf, Tractor, Star, Users, TrendingUp, Zap, Shield, CheckCircle, Globe, Heart, Play, BarChart3, Clock, MapPin, Phone, Mail } from 'lucide-react'
import Footer from '@/components/Footer'

const products = [
    {
    id: 0,
    name: 'Automotive Grade Urea',
    category: 'specialty',
    price: 'Contact Us',
    rating: 4.8,
    image: 'https://diga-as.com/wp-content/uploads/2022/10/Automotive-Grade-Urea.webp',
    description: 'Automotive Grade Urea is a special, uncoated version of the highest purity. It is the main component of urea solutions like AdBlue® or AUS40/45 which are used within SCR systems for the reason of NOx reduction.',
    features: ['Highest purity', 'Uncoated', 'SCR systems'],
    benefits: ['NOx reduction', 'Emission control', 'Environmental compliance'],
  },
    {
    id: 1,
    name: 'Diammonium Phosphate (DAP)',
    category: 'phosphorus',
    price: 'Contact Us',
    rating: 4.8,
    image: 'https://diga-as.com/wp-content/uploads/2022/10/Diammonium-Phosphate-DAP-1024x1024.jpg',
    description: 'It’s formulated in a controlled reaction of phosphoric acid with ammonia, where the hot slurry is then cooled, granulated and sieved. The standard nutrient grade of DAP is relatively high, at 18-46-0.',
    features: ['High nutrient grade', 'Granulated', 'Controlled reaction'],
    benefits: ['Phosphorus and nitrogen', 'Root development', 'Early growth'],
  },
  {
    id: 2,
    name: 'Single superphosphate(TSP)',
    category: 'phosphorus',
    price: 'Contact Us',
    rating: 4.7,
    image: 'https://diga-as.com/wp-content/uploads/2022/10/phos1-scaled-1-1024x1024.jpg',
    description: 'TSP is a solid single-nutrient phosphate fertilizer material produced from phosphate rock and phosphoric acid. TSP contains 44–46% anhydrous phosphoric acid (P2O5), more than twice the P2O5 content of normal superphosphate.',
    features: ['High P2O5 content', 'Single nutrient', 'Solid fertilizer'],
    benefits: ['Phosphorus availability', 'Soil fertility', 'Crop nutrition'],
  },
  {
    id: 3,
    name: 'Sulphate of potash (SOP)',
    category: 'potassium',
    price: 'Contact Us',
    rating: 4.9,
    image: 'https://diga-as.com/wp-content/uploads/2022/10/Sulphate-of-potash-SOP.png',
    description: 'Potassium sulfate or potassium sulphate, also called sulphate of potash, arcanite, or archaically potash of sulfur, is the inorganic compound with formula K₂SO₄, a white water-soluble solid. It is commonly used in fertilizers, providing both potassium and sulfur.',
    features: ['Chloride free', 'Sulfate source', 'Premium potassium'],
    benefits: ['Potassium nutrition', 'Sulfur supply', 'Quality crops'],
  },
  {
    id: 4,
    name: 'NPK 15-15-15',
    category: 'compound',
    price: 'Contact Us',
    rating: 4.8,
    image: 'https://diga-as.com/wp-content/uploads/2022/10/NPK-15-15-15.jpg',
    description: 'The 15-15-15 (12) complex fertilizer with sulphur is a highly-versatile fertilizer, with a perfect balance of nitrogen, phosphorus and potassium that makes it one of the most used fertilizers for use during sowing as it covers the needs of crops after sowing.',
    features: ['Balanced NPK', 'Sulfur included', 'Versatile use'],
    benefits: ['Complete nutrition', 'Sowing fertilizer', 'Crop establishment'],
  },
  {
    id: 5,
    name: 'Monoammonium phosphate (MAP)',
    category: 'phosphorus',
    price: 'Contact Us',
    rating: 4.9,
    image: 'https://diga-as.com/wp-content/uploads/2022/10/monoammonium-phosphate-map.jpg',
    description: 'Monoammonium phosphate (MAP) is a widely used source of phosphorus (P) and nitrogen (N).* It’s made of two constituents common in the fertilizer industry and contains the most phosphorus of any common solid fertilizer.',
    features: ['High phosphorus', 'Nitrogen source', 'Widely used'],
    benefits: ['Phosphorus efficiency', 'Nitrogen supply', 'Crop performance'],
  },
  {
    id: 6,
    name: 'Muriate of Potash (MOP)',
    category: 'potassium',
    price: 'Contact Us',
    rating: 4.7,
    image: 'https://diga-as.com/wp-content/uploads/2022/10/MOP-1.jpg',
    description: 'Bolder granules ensure maximum utilization efficiency of applied Potash with minimum losses. Can be applied to crops independently, based on a soil test. Better quality of produce. Reduces cost of pest management.',
    features: ['Bolder granules', 'Efficient utilization', 'Soil test based'],
    benefits: ['Potassium efficiency', 'Quality produce', 'Pest management'],
  },
  
  ]

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

const Home = (): JSX.Element => {
  const navigate = useNavigate()
  const [scrollY, setScrollY] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [productImageLoading, setProductImageLoading] = useState<boolean[]>(() =>
    Array(products.length).fill(true)
  );

  const handleProductImageLoad = (index: number) => {
    setProductImageLoading((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  const [galleryImageLoading, setGalleryImageLoading] = useState<boolean[]>(() =>
    Array(6).fill(true)
  );

  const handleGalleryImageLoad = (index: number) => {
    setGalleryImageLoading((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

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
              onClick={() => navigate('/products')}
            >
              Explore Products
            </Button>
            <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
              <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => setIsQuoteModalOpen(true)}
                >
                  Quick Quote
                </Button>
              <DialogContent className="bg-white">
                <Card>
                  <CardHeader>
                    <CardTitle>Get a Quick Quote</CardTitle>
                    <CardDescription>
                      Tell us about your fertilizer needs and we'll provide a custom quote.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>quotes@tatglobal.com</span>
                    </div>
                  </CardContent>
                </Card>
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
              <motion.div key={index} variants={fadeInUp}>
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
              {products.map((product, index) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer h-full overflow-hidden">
                        <div className="relative overflow-hidden">
                          {productImageLoading[index] && <Skeleton className="w-full h-48" />}
                          <img
                            src={product.image}
                            alt={product.name}
                            className={`w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 ${productImageLoading[index] ? 'opacity-0' : 'opacity-100'}`}
                            onLoad={() => handleProductImageLoad(index)}
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
                            <Button size="sm" className="hover:scale-105 transition-transform" onClick={() => navigate('/products')}>Learn More</Button>
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
 {/* Gallery Section */}
      <motion.section
        id="gallery"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our journey and impact through vivid moments from the field.
            </p>
          </motion.div>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[1,2,3,4,5,6].map((num, idx) => (
                <CarouselItem key={num} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    className="p-2 h-full"
                    initial={{
                      opacity: 0,
                      x: idx % 3 === 0 ? -80 : idx % 3 === 1 ? 0 : 80,
                      y: idx % 2 === 0 ? 30 : -30
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0
                    }}
                    transition={{
                      duration: 0.7,
                      delay: idx * 0.1
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-lg group h-72 flex items-center justify-center bg-white">
                      {galleryImageLoading[idx] && <Skeleton className="w-full h-full" />}
                      <img
                        src={`/${num}.jpg`}
                        alt={`Gallery image ${num}`}
                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 ${galleryImageLoading[idx] ? 'opacity-0' : 'opacity-100'}`}
                        style={{ minHeight: 270, maxHeight: 340 }}
                        onLoad={() => handleGalleryImageLoad(idx)}
                      />
                      <motion.div
                        className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"
                        whileHover={{ backgroundColor: "rgba(0,0,0,0.35)" }}
                      >
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 rounded-full border-2 border-white px-5 py-2 bg-white/80 text-gray-800 text-lg font-semibold shadow-lg transition-all"
                          initial={{ y: 30, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                        >
                          View
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
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
                  src="https://lzuknbfbvpuscpammwzg.supabase.co/storage/v1/object/public/projects/projects/Nourishing%20the%20World%20Together-VEED%20(1).mp4"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center relative cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                  <img
                    src="https://api.a0.dev/assets/image?text=TAT Global&aspect=16:9&seed=video"
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
                variants={fadeInUp}
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
              <motion.div key={index} variants={fadeInUp}>
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
              <Button size="lg" className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg" onClick={() => navigate('/about')}>Learn About Sustainability</Button>
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
                variants={fadeInUp}
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
                onClick={() => setIsQuoteModalOpen(true)}
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