import React, { useEffect, useState, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Award, Users, Target, Globe } from 'lucide-react'
import { useInView } from 'framer-motion'
import Footer from '@/components/Footer'

const About = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('mission')

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

  const stats = [
    { label: 'Years of Experience', value: 25, suffix: '+' },
    { label: 'Countries Served', value: 50, suffix: '+' },
    { label: 'Happy Farmers', value: 100000, suffix: 'K+' },
    { label: 'Product Varieties', value: 200, suffix: '+' },
  ]

  // Animated Counter Component
  const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
      if (isInView) {
        const duration = 2000 // 2 seconds
        const steps = 60
        const increment = value / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= value) {
            setCount(value)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)
        return () => clearInterval(timer)
      }
    }, [isInView, value])

    return <span ref={ref}>{count}{suffix}</span>
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 relative bg-cover bg-center py-20 rounded-lg" style={{backgroundImage: 'url(https://api.a0.dev/assets/image?text=About%20Us&aspect=16:9&seed=about)'}}>
          <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
          <div className="relative">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About TAT GLOBAL</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">Leading the fertilizer industry with innovation, sustainability, and a commitment to global agricultural excellence.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'mission', label: 'Our Mission', icon: Target },
              { id: 'values', label: 'Our Values', icon: Award },
              { id: 'team', label: 'Our Team', icon: Users },
              { id: 'impact', label: 'Global Impact', icon: Globe },
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'outline'}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2"
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </Button>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              {activeTab === 'mission' && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-gray-600 mb-4">To revolutionize agriculture by providing innovative, sustainable fertilizer solutions that maximize crop yields while preserving the environment for future generations.</p>
                  <p className="text-gray-600">We strive to empower farmers worldwide with cutting-edge products and expert knowledge, fostering food security and sustainable development across the globe.</p>
                </div>
              )}
              {activeTab === 'values' && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Innovation:</strong> Continuously developing new technologies and products</li>
                    <li><strong>Sustainability:</strong> Committed to environmental stewardship and eco-friendly practices</li>
                    <li><strong>Quality:</strong> Uncompromising standards in all our products and services</li>
                    <li><strong>Integrity:</strong> Building trust through transparency and ethical business practices</li>
                    <li><strong>Collaboration:</strong> Working together with farmers, partners, and communities</li>
                  </ul>
                </div>
              )}
              {activeTab === 'team' && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Our Leadership Team</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { name: 'Dr. Sarah Johnson', role: 'CEO & Founder', image: 'https://api.a0.dev/assets/image?text=Dr. Sarah Johnson&aspect=1:1&seed=sarah' },
                      { name: 'Michael Chen', role: 'Chief Technology Officer', image: 'https://api.a0.dev/assets/image?text=Michael Chen&aspect=1:1&seed=michael' },
                      { name: 'Dr. Elena Rodriguez', role: 'Head of Research', image: 'https://api.a0.dev/assets/image?text=Dr. Elena Rodriguez&aspect=1:1&seed=elena' },
                    ].map((member, index) => (
                      <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="pt-6">
                          <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                          <h4 className="font-semibold">{member.name}</h4>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 'impact' && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Global Impact</h3>
                  <p className="text-gray-600 mb-4">TAT GLOBAL has made significant contributions to global agriculture:</p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• Increased crop yields by an average of 25% for our clients</li>
                    <li>• Reduced chemical runoff by 40% through sustainable formulations</li>
                    <li>• Trained over 50,000 farmers in modern agricultural techniques</li>
                    <li>• Supported food security initiatives in 30+ developing countries</li>
                  </ul>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800 font-semibold">"Together, we're building a more sustainable future for agriculture."</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Timeline Section */}
        <div className="py-20">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-blue-500 rounded-full" />
            {[
              { year: '2000', title: 'The Genesis', desc: 'TAT GLOBAL was founded with a clear mission: to revolutionize the fertilizer industry through sustainable and innovative solutions. We started with a small team of passionate agronomists and scientists.' },
              { year: '2005', title: 'First Breakthrough', desc: 'We launched our first patented slow-release fertilizer, significantly reducing nutrient runoff and improving crop yields for our initial partners in North America.' },
              { year: '2010', title: 'Global Expansion', desc: 'Recognizing the growing demand for sustainable agriculture, we expanded our operations to Europe and Asia, establishing key partnerships and distribution channels.' },
              { year: '2015', title: 'Innovation Milestone', desc: 'Our R&D team developed a groundbreaking bio-fertilizer, harnessing the power of microbes to enhance soil health and plant resilience. This marked a new era of eco-friendly products.' },
              { year: '2020', title: 'Sustainability & Digitalization', desc: 'We achieved carbon-neutral production across all our facilities and launched a digital platform to provide farmers with real-time data and precision agriculture advice.' },
              { year: '2025', title: 'Future Forward', desc: 'Today, TAT GLOBAL is a leader in the agricultural sector, serving over 100,000 farmers in 50+ countries. We continue to push the boundaries of science and technology to create a sustainable future for all.' },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
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
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does TAT GLOBAL ensure product quality?</AccordionTrigger>
              <AccordionContent>
                We maintain rigorous quality control processes throughout our production chain, from raw material sourcing to final packaging. All products undergo extensive laboratory testing and meet international standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What makes our fertilizers sustainable?</AccordionTrigger>
              <AccordionContent>
                Our sustainable formulations use advanced technologies to minimize environmental impact while maximizing nutrient efficiency. We focus on slow-release nutrients, organic compounds, and precision agriculture solutions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer custom fertilizer blends?</AccordionTrigger>
              <AccordionContent>
                Yes, we provide custom blending services tailored to specific soil conditions, crop requirements, and farming goals. Our experts work closely with clients to develop optimal nutrient solutions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow with Us?</h2>
          <p className="text-xl text-green-100 mb-8">Explore our innovative fertilizer solutions or get in touch with our team of experts to find the perfect product for your needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => window.location.href='/products'}
            >
              Explore Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => window.location.href='/contact'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About