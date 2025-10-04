import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { FileText, Shield, Scale, AlertTriangle } from 'lucide-react'
import Footer from '@/components/Footer'

const Terms = (): JSX.Element => {
  const [lastUpdated] = useState('October 3, 2025')

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: FileText,
      content: 'By accessing and using TAT GLOBAL COMPANY LIMITED\'s website and services, you accept and agree to be bound by the terms and provision of this agreement.',
    },
    {
      id: 'products',
      title: 'Product Terms',
      icon: Shield,
      content: 'All fertilizer products are sold subject to our standard terms of sale. Product specifications, pricing, and availability are subject to change without notice.',
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: Scale,
      content: 'TAT GLOBAL shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our products or services.',
    },
    {
      id: 'warranty',
      title: 'Product Warranty',
      icon: AlertTriangle,
      content: 'Our products are warranted to be free from defects in material and workmanship. Warranty claims must be made within 30 days of purchase.',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-xl text-gray-600 mb-4">Please read these terms carefully before using our services.</p>
          <Badge variant="outline" className="text-sm">Last Updated: {lastUpdated}</Badge>
        </div>

        {/* Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Terms Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              These Terms and Conditions govern your use of TAT GLOBAL COMPANY LIMITED's website and the purchase and use of our fertilizer products and services.
            </p>
            <p className="text-gray-600">
              By accessing our website or purchasing our products, you agree to comply with these terms. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </CardContent>
        </Card>

        {/* Interactive Sections */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Terms</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {sections.map((section) => (
              <AccordionItem key={section.id} value={section.id} className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <section.icon className="w-5 h-5 text-green-600" />
                    <span className="font-semibold">{section.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Detailed Terms */}
        <div className="space-y-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Use of Website</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>You may use our website for lawful purposes only. You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit harmful or malicious code</li>
                <li>Interfere with the proper functioning of the website</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Purchases</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>When purchasing products from TAT GLOBAL:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>All orders are subject to acceptance and availability</li>
                <li>Prices are subject to change without notice</li>
                <li>Shipping costs and delivery times vary by location</li>
                <li>Payment terms are net 30 days for approved accounts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>All content on this website, including but not limited to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Text, graphics, logos, and images</li>
                <li>Product names and descriptions</li>
                <li>Technical specifications and data</li>
              </ul>
              <p className="mt-4">are protected by copyright and trademark laws and may not be used without permission.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Your privacy is important to us. We collect and use personal information only for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Processing orders and providing services</li>
                <li>Communicating with you about our products</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                These terms are governed by the laws of the United States. Any disputes arising from these terms shall be resolved in the courts of [Jurisdiction].
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Questions About These Terms?</h3>
            <p className="text-gray-600 mb-4">If you have any questions about these Terms and Conditions, please contact us:</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Email: legal@tatglobal.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Agriculture Way, Farmville, USA 12345</p>
            </div>
            <Button className="mt-4" variant="outline">Contact Legal Team</Button>
          </CardContent>
        </Card>

        {/* Acceptance */}
        <div className="text-center mt-8 p-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 mb-4">
            By continuing to use our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
          <Button variant="outline" size="sm">I Agree to These Terms</Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Terms