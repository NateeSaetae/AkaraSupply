import React from 'react';
import { Wrench, Settings, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Professional Installation',
      description: 'Expert installation services for all types of bearings and mechanical components.',
      features: [
        'Certified technician installation',
        'Precision alignment and fitting',
        'Quality testing and verification',
        'Installation documentation',
        'Post-installation support'
      ]
    },
    {
      icon: Settings,
      title: 'Maintenance & Repair',
      description: 'Comprehensive maintenance programs to extend equipment life and prevent failures.',
      features: [
        'Preventive maintenance scheduling',
        'Condition monitoring services',
        'Emergency repair services',
        'Equipment health assessments',
        'Maintenance reporting and analytics'
      ]
    }
  ];

  const benefits = [
    'Reduce equipment downtime',
    'Extend component lifespan',
    'Improve operational efficiency',
    'Lower total cost of ownership',
    'Ensure safety compliance',
    'Access to expert knowledge'
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We assess your needs and provide expert recommendations for your specific application.'
    },
    {
      step: '02',
      title: 'Custom Solution Design',
      description: 'Our engineers design a tailored solution that meets your performance and budget requirements.'
    },
    {
      step: '03',
      title: 'Professional Implementation',
      description: 'Our certified technicians execute the installation or maintenance with precision and care.'
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'We provide continuous support, monitoring, and maintenance to ensure optimal performance.'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#149231] to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Professional installation and maintenance services delivered by certified 
              technicians with decades of experience in industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mr-4">
                        <IconComponent className="h-8 w-8 text-[#149231]" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#149231] mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="h-64 bg-gray-300 rounded-lg mb-4"></div>
                    <p className="text-sm text-gray-600 text-center">
                      Professional {service.title.toLowerCase()} services
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our professional services deliver measurable benefits that improve your 
              operations and bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-center hover:shadow-md transition-shadow duration-200">
                <CheckCircle className="h-6 w-6 text-[#149231] mr-4 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure every project is completed 
              to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#149231] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Phone className="h-8 w-8 text-red-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  24/7 Emergency Services
                </h3>
                <p className="text-gray-600">
                  Equipment breakdown? Our emergency response team is available around the clock 
                  to get your operations back online quickly.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Emergency Contact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#149231]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Schedule a Service?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact our service team today to discuss your requirements and schedule 
            your installation or maintenance service.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#149231] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Schedule Service
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;