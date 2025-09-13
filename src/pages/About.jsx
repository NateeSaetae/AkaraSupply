import React from 'react';
import { Users, Award, Target, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We source only the highest quality bearings and parts from certified manufacturers.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our certified technicians bring decades of experience to every project.'
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Your success is our priority. We tailor solutions to meet your specific needs.'
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: '24/7 support and quick response times to minimize your downtime.'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About BearingsPro</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With over 15 years of experience in the industry, we've built our reputation 
              on delivering quality products and exceptional service to businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2009, BearingsPro began as a small family business with a simple mission: 
                to provide reliable, high-quality bearings and spare parts to industrial companies 
                across the region.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've grown into a trusted partner for hundreds of businesses, 
                expanding our product range and services while maintaining our commitment to 
                quality and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve a diverse range of industries, from manufacturing 
                and automotive to aerospace and energy, providing not just products but 
                comprehensive solutions that keep our clients' operations running smoothly.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#149231] to-green-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-green-100 mb-6">
                To be the leading provider of premium bearings and spare parts, delivering 
                exceptional value through quality products, expert services, and unmatched 
                customer support.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-green-100">
                To empower businesses worldwide by providing the most reliable industrial 
                components and services, helping them achieve operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our 
              relationships with customers, suppliers, and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center group hover:shadow-md transition-shadow duration-200">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:bg-[#149231] transition-colors duration-200">
                    <IconComponent className="h-8 w-8 text-[#149231] group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who lead our company and drive our success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Mitchell',
                role: 'CEO & Founder',
                bio: '25+ years in industrial equipment and mechanical engineering.'
              },
              {
                name: 'Sarah Johnson',
                role: 'Head of Operations',
                bio: 'Expert in supply chain management and quality assurance processes.'
              },
              {
                name: 'Mike Rodriguez',
                role: 'Technical Director',
                bio: 'Certified engineer specializing in bearing technology and applications.'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#149231] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;