import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ShoppingCart, Star, Truck, Shield } from 'lucide-react'
import Footer from '@/components/Footer'

const Products = (): JSX.Element => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const products = [
    {
      id: 1,
      name: 'Sodium Molybdate',
      category: 'micronutrients',
      price: 'Contact Us',
      rating: 4.8,
      image: 'https://api.a0.dev/assets/image?text=Sodium Molybdate&aspect=1:1&seed=1',
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
      image: 'https://api.a0.dev/assets/image?text=Copper Sulfate&aspect=1:1&seed=2',
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
      image: 'https://api.a0.dev/assets/image?text=Zinc Sulfate&aspect=1:1&seed=3',
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
      image: 'https://api.a0.dev/assets/image?text=Manganese Sulfate&aspect=1:1&seed=4',
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
      image: 'https://api.a0.dev/assets/image?text=Boric Acid&aspect=1:1&seed=5',
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
      image: 'https://api.a0.dev/assets/image?text=Ferric DTPA&aspect=1:1&seed=6',
      description: 'Ferric DTPA is a pure liquid Iron fertilizer. Iron DTPA is adviced for hydroponics. Our product is a stable, translucent solution and is recommended at different phenological stages. The high level of Iron in our formula improves the production of chlorophyll.',
      features: ['Liquid iron fertilizer', 'Hydroponics suitable', 'Stable solution'],
      benefits: ['Chlorophyll production', 'Iron deficiency correction', 'Plant vitality'],
    },
    {
      id: 7,
      name: 'Ferric EDTA',
      category: 'chelates',
      price: 'Contact Us',
      rating: 4.8,
      image: 'https://api.a0.dev/assets/image?text=Ferric EDTA&aspect=1:1&seed=7',
      description: 'In contact with aerated natural waters, iron salts convert to the ferric form. Near neutral pH, ferric ions form insoluble solids and are thus not bioavailable. EDTA (and other chelating agents) address this problem, by forming soluble complexes that resist formation of hydroxides.',
      features: ['Chelating agent', 'Bioavailable iron', 'pH stable'],
      benefits: ['Iron availability', 'Nutrient uptake', 'Plant health'],
    },
    {
      id: 8,
      name: 'Ammonium Nitrate',
      category: 'nitrogen',
      price: 'Contact Us',
      rating: 4.7,
      image: 'https://api.a0.dev/assets/image?text=Ammonium Nitrate&aspect=1:1&seed=8',
      description: 'Ammonium nitrate is a chemical compound with the chemical formula NH4NO3. It is a white crystalline salt consisting of ions of ammonium and nitrate. It is highly soluble in water and hygroscopic as a solid, although it does not form hydrates.',
      features: ['High nitrogen content', 'Water soluble', 'Hygroscopic'],
      benefits: ['Rapid nitrogen supply', 'Plant growth boost', 'Crop yield increase'],
    },
    {
      id: 9,
      name: 'Potassium Sulfate',
      category: 'potassium',
      price: 'Contact Us',
      rating: 4.9,
      image: 'https://api.a0.dev/assets/image?text=Potassium Sulfate&aspect=1:1&seed=9',
      description: 'Buy potassium sulfate fertilizer online. Potassium sulfate or potassium sulphate (UK), also called sulphate of potash (SOP), arcanite, or archaically potash of sulfur, is the inorganic compound with formula K2SO4, a white water-soluble solid. It is commonly used in fertilizers, providing both potassium and sulfur.',
      features: ['Dual nutrient source', 'Chloride free', 'Water soluble'],
      benefits: ['Potassium supply', 'Sulfur nutrition', 'Quality improvement'],
    },
    {
      id: 10,
      name: 'Monopotassium Phosphate',
      category: 'phosphorus',
      price: 'Contact Us',
      rating: 4.8,
      image: 'https://api.a0.dev/assets/image?text=Monopotassium Phosphate&aspect=1:1&seed=10',
      description: 'Monopotassium phosphate (MKP) is the inorganic compound with the formula KH2PO4. Together with dipotassium phosphate (K2HPO4.(H2O)x) it is often used as a fertilizer, food additive, and buffering agent. The salt often cocrystallizes with the dipotassium salt as well as with phosphoric acid.',
      features: ['High phosphorus content', 'Potassium source', 'Buffering agent'],
      benefits: ['Root development', 'Energy transfer', 'pH regulation'],
    },
    {
      id: 11,
      name: 'Magnesium Sulfate Heptahydrate',
      category: 'secondary',
      price: 'Contact Us',
      rating: 4.7,
      image: 'https://api.a0.dev/assets/image?text=Magnesium Sulfate&aspect=1:1&seed=11',
      description: 'Magnesium Sulphate Heptahydrate(mgso4.7h2o) used in agriculture fertilizer. Magnesium Sulphate Heptahydrate(mgso4.7h2o) 99.5% min application for feed additivesmIndustrial. It can be applied in paper industry, rayon and silk industry. For example, Magnesium sulfate can be used in the decolorization of the kraft pulp.',
      features: ['High purity', 'Multiple applications', 'Industrial grade'],
      benefits: ['Magnesium supply', 'Chlorophyll synthesis', 'Enzyme activation'],
    },
    {
      id: 12,
      name: 'Potassium Nitrate',
      category: 'potassium',
      price: 'Contact Us',
      rating: 4.8,
      image: 'https://api.a0.dev/assets/image?text=Potassium Nitrate&aspect=1:1&seed=12',
      description: 'Potassium nitrate is an inorganic salt with a chemical formula of KNO3. It is a natural source of nitrate and has been used as a constituent for several different purposes, including food preservatives, fertilizers, etc.',
      features: ['Natural nitrate source', 'Dual nutrient', 'Food grade'],
      benefits: ['Nitrogen and potassium', 'Quality improvement', 'Stress resistance'],
    },
    {
      id: 13,
      name: 'Agriculture Grade Urea',
      category: 'nitrogen',
      price: 'Contact Us',
      rating: 4.9,
      image: 'https://api.a0.dev/assets/image?text=Urea Fertilizer&aspect=1:1&seed=13',
      description: 'Buy Urea Fertiliser online. Urea, also known as carbamide, is an organic compound with the chemical formula CO(NH2)2. This amide has two amino groups (–NH2) joined by a carbonyl functional group (–C(=O)–).',
      features: ['High nitrogen content', 'Organic compound', 'Widely used'],
      benefits: ['Nitrogen supply', 'Protein synthesis', 'Plant growth'],
    },
    {
      id: 14,
      name: 'Diammonium Phosphate (DAP)',
      category: 'phosphorus',
      price: 'Contact Us',
      rating: 4.8,
      image: 'https://api.a0.dev/assets/image?text=DAP Fertilizer&aspect=1:1&seed=14',
      description: 'It’s formulated in a controlled reaction of phosphoric acid with ammonia, where the hot slurry is then cooled, granulated and sieved. The standard nutrient grade of DAP is relatively high, at 18-46-0.',
      features: ['High nutrient grade', 'Granulated', 'Controlled reaction'],
      benefits: ['Phosphorus and nitrogen', 'Root development', 'Early growth'],
    },
    {
      id: 15,
      name: 'Single superphosphate(TSP)',
      category: 'phosphorus',
      price: 'Contact Us',
      rating: 4.7,
      image: 'https://api.a0.dev/assets/image?text=TSP Fertilizer&aspect=1:1&seed=15',
      description: 'TSP is a solid single-nutrient phosphate fertilizer material produced from phosphate rock and phosphoric acid. TSP contains 44–46% anhydrous phosphoric acid (P2O5), more than twice the P2O5 content of normal superphosphate.',
      features: ['High P2O5 content', 'Single nutrient', 'Solid fertilizer'],
      benefits: ['Phosphorus availability', 'Soil fertility', 'Crop nutrition'],
    },
    {
      id: 16,
      name: 'Sulphate of potash (SOP)',
      category: 'potassium',
      price: 'Contact Us',
      rating: 4.9,
      image: 'https://api.a0.dev/assets/image?text=SOP Fertilizer&aspect=1:1&seed=16',
      description: 'Potassium sulfate or potassium sulphate, also called sulphate of potash, arcanite, or archaically potash of sulfur, is the inorganic compound with formula K₂SO₄, a white water-soluble solid. It is commonly used in fertilizers, providing both potassium and sulfur.',
      features: ['Chloride free', 'Sulfate source', 'Premium potassium'],
      benefits: ['Potassium nutrition', 'Sulfur supply', 'Quality crops'],
    },
    {
      id: 17,
      name: 'NPK 15-15-15',
      category: 'compound',
      price: 'Contact Us',
      rating: 4.8,
      image: 'https://api.a0.dev/assets/image?text=NPK 15-15-15&aspect=1:1&seed=17',
      description: 'The 15-15-15 (12) complex fertilizer with sulphur is a highly-versatile fertilizer, with a perfect balance of nitrogen, phosphorus and potassium that makes it one of the most used fertilizers for use during sowing as it covers the needs of crops after sowing.',
      features: ['Balanced NPK', 'Sulfur included', 'Versatile use'],
      benefits: ['Complete nutrition', 'Sowing fertilizer', 'Crop establishment'],
    },
    {
      id: 18,
      name: 'Monoammonium phosphate (MAP)',
      category: 'phosphorus',
      price: 'Contact Us',
      rating: 4.9,
      image: 'https://api.a0.dev/assets/image?text=MAP Fertilizer&aspect=1:1&seed=18',
      description: 'Monoammonium phosphate (MAP) is a widely used source of phosphorus (P) and nitrogen (N).* It’s made of two constituents common in the fertilizer industry and contains the most phosphorus of any common solid fertilizer.',
      features: ['High phosphorus', 'Nitrogen source', 'Widely used'],
      benefits: ['Phosphorus efficiency', 'Nitrogen supply', 'Crop performance'],
    },
    {
      id: 19,
      name: 'Muriate of Potash (MOP)',
      category: 'potassium',
      price: 'Contact Us',
      rating: 4.7,
      image: 'https://api.a0.dev/assets/image?text=MOP Fertilizer&aspect=1:1&seed=19',
      description: 'Bolder granules ensure maximum utilization efficiency of applied Potash with minimum losses. Can be applied to crops independently, based on a soil test. Better quality of produce. Reduces cost of pest management.',
      features: ['Bolder granules', 'Efficient utilization', 'Soil test based'],
      benefits: ['Potassium efficiency', 'Quality produce', 'Pest management'],
    },
    {
      id: 20,
      name: 'Automotive Grade Urea',
      category: 'specialty',
      price: 'Contact Us',
      rating: 4.8,
      image: 'https://api.a0.dev/assets/image?text=Automotive Urea&aspect=1:1&seed=20',
      description: 'Automotive Grade Urea is a special, uncoated version of the highest purity. It is the main component of urea solutions like AdBlue® or AUS40/45 which are used within SCR systems for the reason of NOx reduction.',
      features: ['Highest purity', 'Uncoated', 'SCR systems'],
      benefits: ['NOx reduction', 'Emission control', 'Environmental compliance'],
    },
  ]

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'nitrogen', label: 'Nitrogen' },
    { id: 'phosphorus', label: 'Phosphorus' },
    { id: 'potassium', label: 'Potassium' },
    { id: 'micronutrients', label: 'Micronutrients' },
    { id: 'chelates', label: 'Chelates' },
    { id: 'secondary', label: 'Secondary Nutrients' },
    { id: 'compound', label: 'Compound Fertilizers' },
    { id: 'specialty', label: 'Specialty Products' },
  ]

  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">HIGH QUALITY FERTILIZERS AVAILABLE</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover our comprehensive range of premium fertilizer products designed for maximum crop productivity and sustainable agriculture.</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => setSelectedProduct(product)}>
              <CardHeader className="p-0">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{product.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <CardDescription className="mb-4 line-clamp-3">{product.description}</CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  <Button size="sm" className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Product Details Dialog */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProduct.name}</DialogTitle>
                  <DialogDescription>{selectedProduct.description}</DialogDescription>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-lg" />
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-bold text-green-600">{selectedProduct.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{selectedProduct.rating}</span>
                      </div>
                    </div>
                    <Tabs defaultValue="features" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="features">Features</TabsTrigger>
                        <TabsTrigger value="benefits">Benefits</TabsTrigger>
                      </TabsList>
                      <TabsContent value="features" className="mt-4">
                        <ul className="space-y-2">
                          {selectedProduct.features.map((feature: string, index: number) => (
                            <li key={index} className="flex items-center gap-2">
                              <Shield className="w-4 h-4 text-green-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                      <TabsContent value="benefits" className="mt-4">
                        <ul className="space-y-2">
                          {selectedProduct.benefits.map((benefit: string, index: number) => (
                            <li key={index} className="flex items-center gap-2">
                              <Truck className="w-4 h-4 text-green-600" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                    </Tabs>
                    <Button className="w-full mt-6" size="lg">Contact Us for Pricing</Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <div className="bg-green-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Fertilizer Solutions?</h2>
          <p className="text-xl mb-6">Our experts can create tailored blends for your specific agricultural needs.</p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">Contact Our Specialists</Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Products