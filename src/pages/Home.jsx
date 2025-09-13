import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Wrench, Package, Star, ArrowRight } from 'lucide-react';
import bearing from "../asset/bearing_1.png";
import malee from '../asset/malee.png';
import pas from './../asset/pas.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  const features = [
    {
      icon: Package,
      title: 'Quality Products',
      description: 'Premium bearings and spare parts from trusted manufacturers worldwide.'
    },
    {
      icon: Wrench,
      title: 'Expert Installation',
      description: 'Professional installation services by certified technicians.'
    },
    {
      icon: Settings,
      title: 'Maintenance Support',
      description: 'Comprehensive maintenance programs to keep your equipment running smoothly.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Products Available' },
    { number: '500+', label: 'Happy Customers' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[url('/bg_2.png')] bg-cover bg-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Premium Bearings &amp;
              <span className="block">Spare Parts Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-green-100 max-w-xl">
              Your trusted partner for high-quality industrial components with
              professional installation and maintenance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-white text-[#149231] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 justify-center"
              >
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#149231] transition-colors duration-200 justify-center"
              >
                Get Quote
              </Link>
            </div>
          </div>
          {/* Carousel */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={3000}
              className="w-40 sm:w-56 md:w-60 lg:w-72 xl:w-80"
            >
              <div>
                <img src={bearing} alt="Bearing" />
              </div>
              <div>
                <img src={malee} alt="Malee" />
              </div>
              <div>
                <img src={pas} alt="Pas" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BearingsPro?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine quality products with exceptional service to deliver
              the best solutions for your industrial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:bg-[#149231] transition-colors duration-200">
                    <IconComponent className="h-8 w-8 text-[#149231] group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#149231] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/*<section className="py-16 bg-[#149231]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can
            help optimize your operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#149231] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>*/}
    </div>
  );
};

export default Home;