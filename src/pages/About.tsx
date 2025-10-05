import React, { useEffect, useState, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Award, Users, Target, Globe } from 'lucide-react'
import { useInView } from 'framer-motion'

const About = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('mission')

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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About TAT GLOBAL</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Leading the fertilizer industry with innovation, sustainability, and a commitment to global agricultural excellence.</p>
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
                      { name: 'Dr. Sarah Johnson', role: 'CEO & Founder', image: 'https://api.a0.dev/assets/image?text=SJ&aspect=1:1&seed=1' },
                      { name: 'Michael Chen', role: 'Chief Technology Officer', image: 'https://api.a0.dev/assets/image?text=MC&aspect=1:1&seed=2' },
                      { name: 'Dr. Elena Rodriguez', role: 'Head of Research', image: 'https://api.a0.dev/assets/image?text=ER&aspect=1:1&seed=3' },
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
    </div>
  )
}

export default About
