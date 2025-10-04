import React from 'react'
import Footer from '@/components/Footer'

const Terms = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Please review our terms and conditions document for important company information and registration details.</p>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="aspect-[4/3] w-full">
            <iframe
              src="/DED.pdf"
              width="100%"
              height="100%"
              style={{ border: 'none', borderRadius: '8px' }}
              title="TAT GLOBAL Terms & Conditions"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">If the document doesn't load properly, you can download it directly:</p>
            <a
              href="/DED.pdf"
              download="TAT_GLOBAL_Terms_Conditions.pdf"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Terms