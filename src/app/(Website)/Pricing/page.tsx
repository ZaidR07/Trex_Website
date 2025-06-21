"use client";
import React, { useState } from 'react';
import { Check, Star, Zap, Crown, Shield, Rocket } from 'lucide-react';
import Navbar from '@/app/(cms)/components/Navbar';

const Page = () => {
  const [activeService, setActiveService] = useState('hosting');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const services = [
    { id: 'hosting', label: 'Hosting', icon: '🌐' },
    { id: 'server', label: 'Server', icon: '🖥️' },
    { id: 'database', label: 'Database', icon: '🗄️' },
    { id: 'emails', label: 'Emails', icon: '📧' },
    { id: 'sms', label: 'SMS', icon: '📱' }
  ];

  const servicePlans = {
    hosting: [
      {
        id: 'starter',
        name: 'Starter',
        icon: <Rocket className="w-6 h-6" />,
        description: 'Perfect for small websites and blogs.',
        price: 79,
        originalPrice: 159,
        popular: false,
        features: [
          '1 Website',
          '5 GB SSD Storage',
          '50 GB Bandwidth',
          'Free SSL Certificate',
          '24/7 Basic Support',
          'cPanel Access',
          '99.9% Uptime',
          'Daily Backups'
        ]
      },
      {
        id: 'regular',
        name: 'Regular',
        icon: <Shield className="w-6 h-6" />,
        description: 'Great for business websites.',
        price: 149,
        originalPrice: 299,
        popular: true,
        features: [
          '10 Websites',
          '25 GB SSD Storage',
          '200 GB Bandwidth',
          'Free Domain (1 Year)',
          'Priority Support',
          'Advanced cPanel',
          '99.95% Uptime',
          'Weekly Backups'
        ]
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        icon: <Zap className="w-6 h-6" />,
        description: 'Everything for enterprise hosting.',
        price: 299,
        originalPrice: 599,
        popular: false,
        features: [
          'Unlimited Websites',
          '100 GB NVMe Storage',
          'Unlimited Bandwidth',
          'Free Premium Domain',
          '24/7 Premium Support',
          'Advanced Security',
          '99.99% Uptime',
          'Real-time Backups'
        ]
      },
      {
        id: 'premium',
        name: 'Premium',
        icon: <Crown className="w-6 h-6" />,
        description: 'Ultimate hosting solution.',
        price: 599,
        originalPrice: 1199,
        popular: false,
        features: [
          'Unlimited Everything',
          '500 GB NVMe Storage',
          'Global CDN',
          'Multiple Free Domains',
          'Dedicated Support',
          'Advanced Analytics',
          '99.999% Uptime',
          'Custom Solutions'
        ]
      }
    ],
    server: [
      {
        id: 'starter',
        name: 'Starter',
        icon: <Rocket className="w-6 h-6" />,
        description: 'Basic server for small applications.',
        price: 199,
        originalPrice: 399,
        popular: false,
        features: [
          '1 vCPU Core',
          '2 GB RAM',
          '25 GB SSD Storage',
          '1 TB Bandwidth',
          'Basic Monitoring',
          'SSH Access',
          'Linux/Windows OS',
          '24/7 Basic Support'
        ]
      },
      {
        id: 'regular',
        name: 'Regular',
        icon: <Shield className="w-6 h-6" />,
        description: 'Balanced server performance.',
        price: 399,
        originalPrice: 799,
        popular: true,
        features: [
          '2 vCPU Cores',
          '4 GB RAM',
          '50 GB NVMe Storage',
          '2 TB Bandwidth',
          'Advanced Monitoring',
          'Root Access',
          'Multiple OS Options',
          'Priority Support'
        ]
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        icon: <Zap className="w-6 h-6" />,
        description: 'High-performance server solution.',
        price: 799,
        originalPrice: 1599,
        popular: false,
        features: [
          '4 vCPU Cores',
          '8 GB RAM',
          '100 GB NVMe Storage',
          '5 TB Bandwidth',
          'Real-time Monitoring',
          'Full Server Control',
          'Custom OS Installation',
          '24/7 Premium Support'
        ]
      },
      {
        id: 'premium',
        name: 'Premium',
        icon: <Crown className="w-6 h-6" />,
        description: 'Ultimate server performance.',
        price: 1499,
        originalPrice: 2999,
        popular: false,
        features: [
          '8 vCPU Cores',
          '16 GB RAM',
          '500 GB NVMe Storage',
          'Unlimited Bandwidth',
          'Enterprise Monitoring',
          'Dedicated Resources',
          'Custom Server Setup',
          'Dedicated Support Team'
        ]
      }
    ],
    database: [
      {
        id: 'starter',
        name: 'Starter',
        icon: <Rocket className="w-6 h-6" />,
        description: 'Perfect for small applications.',
        price: 99,
        originalPrice: 199,
        popular: false,
        features: [
          '1 Database Instance',
          '5 GB Storage',
          '100 Connections',
          'Daily Backups',
          'MySQL/PostgreSQL',
          'Basic Monitoring',
          '99.5% Uptime',
          'Email Support'
        ]
      },
      {
        id: 'regular',
        name: 'Regular',
        icon: <Shield className="w-6 h-6" />,
        description: 'Great for growing applications.',
        price: 249,
        originalPrice: 499,
        popular: true,
        features: [
          '3 Database Instances',
          '25 GB Storage',
          '500 Connections',
          'Automated Backups',
          'Multiple DB Types',
          'Performance Insights',
          '99.9% Uptime',
          'Priority Support'
        ]
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        icon: <Zap className="w-6 h-6" />,
        description: 'Enterprise-grade database solution.',
        price: 599,
        originalPrice: 1199,
        popular: false,
        features: [
          '10 Database Instances',
          '100 GB Storage',
          '2000 Connections',
          'Point-in-time Recovery',
          'Advanced Security',
          'Query Optimization',
          '99.95% Uptime',
          '24/7 Premium Support'
        ]
      },
      {
        id: 'premium',
        name: 'Premium',
        icon: <Crown className="w-6 h-6" />,
        description: 'Ultimate database performance.',
        price: 1299,
        originalPrice: 2599,
        popular: false,
        features: [
          'Unlimited Instances',
          '1 TB Storage',
          'Unlimited Connections',
          'Real-time Replication',
          'Enterprise Security',
          'Custom Optimization',
          '99.99% Uptime',
          'Dedicated DBA Support'
        ]
      }
    ],
    emails: [
      {
        id: 'starter',
        name: 'Starter',
        icon: <Rocket className="w-6 h-6" />,
        description: 'Basic email solution for small teams.',
        price: 49,
        originalPrice: 99,
        popular: false,
        features: [
          '5 Email Accounts',
          '5 GB Storage/Account',
          '1000 Emails/Month',
          'Basic Spam Protection',
          'IMAP/POP3 Support',
          'Webmail Interface',
          'Mobile App Access',
          'Basic Support'
        ]
      },
      {
        id: 'regular',
        name: 'Regular',
        icon: <Shield className="w-6 h-6" />,
        description: 'Professional email for businesses.',
        price: 149,
        originalPrice: 299,
        popular: true,
        features: [
          '25 Email Accounts',
          '15 GB Storage/Account',
          '5000 Emails/Month',
          'Advanced Spam Filter',
          'Calendar Integration',
          'Custom Domain',
          'Team Collaboration',
          'Priority Support'
        ]
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        icon: <Zap className="w-6 h-6" />,
        description: 'Enterprise email solution.',
        price: 299,
        originalPrice: 599,
        popular: false,
        features: [
          '100 Email Accounts',
          '50 GB Storage/Account',
          '25000 Emails/Month',
          'Enterprise Security',
          'Advanced Analytics',
          'API Integration',
          'Compliance Features',
          '24/7 Premium Support'
        ]
      },
      {
        id: 'premium',
        name: 'Premium',
        icon: <Crown className="w-6 h-6" />,
        description: 'Ultimate email platform.',
        price: 599,
        originalPrice: 1199,
        popular: false,
        features: [
          'Unlimited Accounts',
          'Unlimited Storage',
          'Unlimited Emails',
          'Advanced Threat Protection',
          'Custom Integrations',
          'White-label Solution',
          'Dedicated Infrastructure',
          'Dedicated Support Team'
        ]
      }
    ],
    sms: [
      {
        id: 'starter',
        name: 'Starter',
        icon: <Rocket className="w-6 h-6" />,
        description: 'Basic SMS service for small needs.',
        price: 99,
        originalPrice: 199,
        popular: false,
        features: [
          '1000 SMS/Month',
          'Basic API Access',
          'Delivery Reports',
          'Simple Dashboard',
          'Text Messages Only',
          'Basic Analytics',
          'Email Support',
          '95% Delivery Rate'
        ]
      },
      {
        id: 'regular',
        name: 'Regular',
        icon: <Shield className="w-6 h-6" />,
        description: 'Professional SMS solution.',
        price: 249,
        originalPrice: 499,
        popular: true,
        features: [
          '5000 SMS/Month',
          'Advanced API',
          'Two-way Messaging',
          'Custom Sender ID',
          'Bulk Messaging',
          'Detailed Analytics',
          'Priority Support',
          '98% Delivery Rate'
        ]
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        icon: <Zap className="w-6 h-6" />,
        description: 'Enterprise SMS platform.',
        price: 599,
        originalPrice: 1199,
        popular: false,
        features: [
          '25000 SMS/Month',
          'Enterprise API',
          'Multi-channel Support',
          'Global Delivery',
          'Template Management',
          'Real-time Analytics',
          '24/7 Premium Support',
          '99% Delivery Rate'
        ]
      },
      {
        id: 'premium',
        name: 'Premium',
        icon: <Crown className="w-6 h-6" />,
        description: 'Ultimate SMS solution.',
        price: 1299,
        originalPrice: 2599,
        popular: false,
        features: [
          'Unlimited SMS',
          'Custom Integration',
          'Voice Messages',
          'Worldwide Coverage',
          'AI-powered Analytics',
          'Dedicated Infrastructure',
          'Dedicated Account Manager',
          '99.9% Delivery Rate'
        ]
      }
    ]
  };

  return (
    <>
      <Navbar />
      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 xl:mt-16 via-purple-900 to-indigo-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h1 className="text-4xl font-bold text-white">T-rexinfotech</h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-4">
              Launch online: Affordable plans and services
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your software development and digital marketing needs
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border cursor-pointer transition-all duration-300 transform hover:scale-105 ${activeService === service.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-purple-600 shadow-lg'
                    : 'bg-gray-800/70 backdrop-blur-sm border-purple-400 hover:bg-purple-800/50 text-purple-300'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-lg">{service.icon}</span>
                <span className="font-medium">{service.label}</span>
              </div>
            ))}
          </div>

          {/* Active Service Title */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white capitalize">
              {activeService} Plans & Pricing
            </h3>
            <p className="text-gray-300 mt-2">
              Choose the perfect {activeService} plan for your business needs
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {servicePlans[activeService].map((plan, index) => (
              <div
                key={plan.id}
                className={`relative bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${plan.popular
                    ? 'border-purple-500 ring-4 ring-purple-400/30'
                    : 'border-gray-600 hover:border-purple-400'
                  } ${hoveredPlan === plan.id ? 'rotate-1' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'bg-purple-100 text-purple-600'
                      }`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-gray-400 text-lg">₹</span>
                      <span className="text-4xl font-bold text-white">{plan.price.toFixed(2)}</span>
                      <span className="text-gray-400 text-lg">/mo</span>
                    </div>
                    <div className="text-purple-400 text-sm font-medium mb-2">+3 months free</div>
                    <div className="text-xs text-gray-400">
                      Renews at ₹{plan.originalPrice.toFixed(2)}/mo for a year. Cancel anytime.
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 mb-6 ${plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105'
                      : 'bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 border-2 border-purple-500 hover:border-purple-400'
                    }`}>
                    Choose plan
                  </button>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3 animate-slide-in"
                        style={{ animationDelay: `${(index * 150) + (featureIndex * 50)}ms` }}
                      >
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center">
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-6 border border-purple-500">
              <h3 className="text-xl font-bold text-white mb-2">Need a custom solution?</h3>
              <p className="text-gray-300 mb-4">
                Contact our team to discuss enterprise-level solutions tailored to your specific needs.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <a href="9022389465">Contact Sales</a>

              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
      </div>
    </>
  );
};

export default Page;