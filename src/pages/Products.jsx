import React, { useState } from 'react';
import { Package, Search, Grid, List } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  // Product categories - easily configurable
  const categories = [
    { id: 'all', name: 'All Products', count: 150 },
    { id: 'ball-bearings', name: 'Ball Bearings', count: 45 },
    { id: 'roller-bearings', name: 'Roller Bearings', count: 38 },
    { id: 'thrust-bearings', name: 'Thrust Bearings', count: 25 },
    { id: 'linear-bearings', name: 'Linear Bearings', count: 20 },
    { id: 'seals-gaskets', name: 'Seals & Gaskets', count: 32 },
    { id: 'lubricants', name: 'Lubricants', count: 18 },
    { id: 'tools-equipment', name: 'Tools & Equipment', count: 15 }
  ];

  // Sample products - easily expandable
  const products = [
    {
      id: 1,
      name: 'Deep Groove Ball Bearing 6200 Series',
      category: 'ball-bearings',
      price: 'From $15.99',
      description: 'High-quality deep groove ball bearings suitable for various industrial applications.',
      specifications: ['Inner Diameter: 10-50mm', 'Outer Diameter: 30-90mm', 'Width: 9-20mm'],
      applications: ['Electric Motors', 'Pumps', 'Gearboxes']
    },
    {
      id: 2,
      name: 'Cylindrical Roller Bearing NU Series',
      category: 'roller-bearings',
      price: 'From $45.99',
      description: 'Single-row cylindrical roller bearings designed for high radial loads.',
      specifications: ['Inner Diameter: 20-100mm', 'Outer Diameter: 47-180mm', 'Width: 14-34mm'],
      applications: ['Machine Tools', 'Compressors', 'Conveyor Systems']
    },
    {
      id: 3,
      name: 'Axial Thrust Ball Bearing 51100 Series',
      category: 'thrust-bearings',
      price: 'From $25.99',
      description: 'Single-direction axial thrust ball bearings for pure axial loads.',
      specifications: ['Inner Diameter: 10-45mm', 'Outer Diameter: 24-85mm', 'Height: 9-28mm'],
      applications: ['Automotive', 'Marine Equipment', 'Vertical Shafts']
    },
    {
      id: 4,
      name: 'Linear Ball Bearing LM Series',
      category: 'linear-bearings',
      price: 'From $35.99',
      description: 'Precision linear ball bearings for smooth linear motion applications.',
      specifications: ['Shaft Diameter: 6-50mm', 'Length: 19-165mm', 'Load Rating: 50-2000N'],
      applications: ['CNC Machines', 'Automation', 'Medical Equipment']
    },
    {
      id: 5,
      name: 'Nitrile Rubber Oil Seals',
      category: 'seals-gaskets',
      price: 'From $8.99',
      description: 'High-performance oil seals for various industrial applications.',
      specifications: ['Inner Diameter: 10-200mm', 'Temperature: -40°C to 120°C', 'Material: NBR'],
      applications: ['Hydraulics', 'Automotive', 'Industrial Machinery']
    },
    {
      id: 6,
      name: 'Premium Industrial Grease',
      category: 'lubricants',
      price: 'From $12.99',
      description: 'Multi-purpose lithium complex grease for bearing lubrication.',
      specifications: ['Temperature Range: -30°C to 150°C', 'NLGI Grade: 2', 'Base Oil: Mineral'],
      applications: ['General Industrial', 'Automotive', 'Marine']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#149231] to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover our comprehensive range of premium bearings, spare parts, and industrial 
              components from leading manufacturers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#149231] focus:border-transparent"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#149231]' : 'text-gray-600'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm text-[#149231]' : 'text-gray-600'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-[#149231] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.name}</span>
                        <span className={`text-sm ${
                          selectedCategory === category.id ? 'text-green-200' : 'text-gray-400'
                        }`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} products
                {selectedCategory !== 'all' && (
                  <span> in {categories.find(c => c.id === selectedCategory)?.name}</span>
                )}
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <Package className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                      <p className="text-[#149231] font-semibold text-lg mb-4">{product.price}</p>
                      <button className="w-full bg-[#149231] text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Package className="h-12 w-12 text-gray-400" />
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-3">{product.description}</p>
                        <div className="mb-3">
                          <h4 className="font-medium text-gray-900 mb-1">Specifications:</h4>
                          <ul className="text-sm text-gray-600">
                            {product.specifications.map((spec, index) => (
                              <li key={index}>• {spec}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Applications:</h4>
                          <p className="text-sm text-gray-600">{product.applications.join(', ')}</p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between">
                        <p className="text-[#149231] font-semibold text-xl mb-4">{product.price}</p>
                        <button className="bg-[#149231] text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search terms or filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;