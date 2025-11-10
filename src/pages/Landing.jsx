import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Sparkles, ArrowRight } from 'lucide-react';
import Hero3D from '../components/Hero3D';
import WaitlistForm from '../components/WaitlistForm';

export default function Landing() {
  const features = [
    {
      icon: Users,
      title: 'Diverse Community',
      description: 'Connect with professionals from underrepresented backgrounds'
    },
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Access resources designed to accelerate your professional development'
    },
    {
      icon: Sparkles,
      title: 'Close Gaps',
      description: 'Bridge opportunity gaps across healthcare, medical, and pharmaceutical sectors'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-[#FDE2C7]/30 to-[#FFF8F0]">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Hero3D />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block">
                <span className="bg-[#FDE2C7] text-[#3D2817] px-4 py-2 rounded-full text-sm font-semibold">
                  Launching 2025
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-[#3D2817] leading-tight">
                Empowering
                <span className="block text-[#D4A574]">Diverse Futures</span>
              </h1>

              <p className="text-xl text-[#6B5942] leading-relaxed max-w-xl">
                Join BMPH Network – a community platform dedicated to advancing careers 
                for underrepresented professionals in healthcare, medical, and pharmaceutical sectors.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#waitlist"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-[#D4A574] hover:bg-[#C49464] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right: Waitlist Form */}
            <motion.div
              id="waitlist"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <WaitlistForm />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#D4A574] rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#D4A574] rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2817] mb-4">
              Why Join BMPH Network?
            </h2>
            <p className="text-xl text-[#6B5942] max-w-3xl mx-auto">
              We're building a platform that empowers professionals, students, graduates, 
              and career changers to thrive in their careers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#FFF8F0] to-[#FDE2C7]/30 p-8 rounded-3xl border border-[#FDE2C7] hover:shadow-xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D4A574] rounded-2xl mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3D2817] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6B5942] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-[#3D2817] to-[#6B5942] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { number: '2025', label: 'Founded' },
              { number: '100%', label: 'Dedicated to Inclusion' },
              { number: '3', label: 'Key Sectors' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl font-bold text-[#FDE2C7] mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-[#FDE2C7]/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2817]">
              Ready to Shape Your Future?
            </h2>
            <p className="text-xl text-[#6B5942]">
              Be among the first to join our community when we launch.
            </p>
            <motion.a
              href="#waitlist"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#D4A574] hover:bg-[#C49464] text-white px-10 py-5 rounded-full text-lg font-semibold shadow-xl transition-all"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}