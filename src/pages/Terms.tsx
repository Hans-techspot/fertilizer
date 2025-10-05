import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Download } from 'lucide-react'

const Terms = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Please review our terms and conditions carefully. For detailed company information and registration details, please refer to our official documentation.</p>
        </div>

        {/* PDF Document Section */}
        <div className="mb-16">
          <Card className="shadow-lg max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Company Documentation</CardTitle>
              <CardDescription>
                Download our official company document containing detailed information about TAT GLOBAL, including registration numbers, company details, and legal information.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">DED.pdf</h3>
                <p className="text-gray-600 mb-4">Official company documentation with registration details and legal information.</p>
                <Button 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => window.open('/DED.pdf', '_blank')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Document Preview</h3>
                <div className="bg-white border rounded-lg p-4 h-96 overflow-hidden">
                  <iframe 
                    src="/DED.pdf" 
                    className="w-full h-full border-0"
                    title="Company Documentation"
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                By accessing and using TAT GLOBAL's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Use License</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Permission is granted to temporarily download one copy of the materials on TAT GLOBAL's website for personal, non-commercial transitory viewing only.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                The materials on TAT GLOBAL's website are provided on an 'as is' basis. TAT GLOBAL makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Limitations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                In no event shall TAT GLOBAL or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TAT GLOBAL's website, even if TAT GLOBAL or a TAT GLOBAL authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Accuracy of Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                The materials appearing on TAT GLOBAL's website could include technical, typographical, or photographic errors. TAT GLOBAL does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Links</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                TAT GLOBAL has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by TAT GLOBAL of the site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Modifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                TAT GLOBAL may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Terms
