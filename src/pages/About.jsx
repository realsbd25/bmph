import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, TrendingUp, Shield, Lightbulb, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Inclusion First',
      description: 'Creating spaces where everyone belongs and can thrive in their professional journey.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building meaningful connections that empower and support career progression.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Providing resources and opportunities that accelerate professional development.'
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Fostering a supportive space where members can learn and grow without barriers.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering new approaches to address opportunity gaps in healthcare sectors.'
    },
    {
      icon: Globe,
      title: 'Diverse Perspectives',
      description: 'Celebrating and leveraging the strength of diverse backgrounds and experiences.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#FFF8F0] via-[#FDE2C7]/30 to-[#FFF8F0] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4A574] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FDE2C7] rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="bg-[#FDE2C7] text-[#3D2817] px-4 py-2 rounded-full text-sm font-semibold">
                About Us
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#3D2817] leading-tight">
              Building an Inclusive Future in
              <span className="block text-[#D4A574]">Healthcare & Beyond</span>
            </h1>
            <p className="text-xl text-[#6B5942] max-w-3xl mx-auto leading-relaxed">
              Founded in 2025, BMPH Network is on a mission to empower professionals from 
              underrepresented backgrounds across healthcare, medical, and pharmaceutical sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#3D2817] mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-[#6B5942] leading-relaxed">
                <p>
                  BMPH Network was born from a simple yet powerful observation: talented 
                  professionals from underrepresented backgrounds face unnecessary barriers 
                  in healthcare, medical, and pharmaceutical careers.
                </p>
                <p>
                  We believe that diverse perspectives and experiences strengthen these vital 
                  sectors. That's why we're building a platform that provides essential resources, 
                  meaningful connections, and tangible opportunities for career progression.
                </p>
                <p>
                  Whether you're a seasoned professional, a student just starting out, a recent 
                  graduate, or someone making a career change – BMPH Network is your community 
                  for growth and success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#FDE2C7] to-[#D4A574] p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="text-6xl font-bold text-white">2025</div>
                  <div className="text-2xl text-white/90 font-semibold">
                    A New Beginning for
                    <br />
                    Inclusive Healthcare
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-br from-[#3D2817] to-[#6B5942] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-2xl text-[#FDE2C7] leading-relaxed max-w-4xl mx-auto">
              To empower professionals from underrepresented backgrounds by providing 
              essential resources, building meaningful connections, and creating pathways 
              that close opportunity gaps across healthcare, medical, and pharmaceutical sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2817] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-[#6B5942] max-w-3xl mx-auto">
              The principles that guide everything we do at BMPH Network.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-[#FDE2C7] hover:shadow-xl transition-all group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#D4A574] to-[#C49464] rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3D2817] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#6B5942] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2817] mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-[#6B5942]">
              BMPH Network is designed for professionals at every stage of their journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Healthcare Professionals',
                description: 'Nurses, therapists, healthcare administrators, and medical staff seeking career advancement and community support.'
              },
              {
                title: 'Medical Professionals',
                description: 'Doctors, surgeons, specialists, and medical researchers looking to connect and grow in their fields.'
              },
              {
                title: 'Pharmaceutical Professionals',
                description: 'Researchers, pharmacists, and industry professionals working to advance pharmaceutical innovation.'
              },
              {
                title: 'Students & Graduates',
                description: 'Those pursuing or recently completing education in healthcare, medical, or pharmaceutical fields.'
              },
              {
                title: 'Career Changers',
                description: 'Professionals transitioning into healthcare, medical, or pharmaceutical careers from other industries.'
              },
              {
                title: 'Underrepresented Voices',
                description: 'Individuals from backgrounds historically underrepresented in healthcare sectors seeking community and opportunity.'
              }
            ].map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#FFF8F0] to-[#FDE2C7]/30 p-8 rounded-3xl border border-[#FDE2C7]"
              >
                <h3 className="text-2xl font-bold text-[#3D2817] mb-3">
                  {audience.title}
                </h3>
                <p className="text-[#6B5942] leading-relaxed">
                  {audience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#FDE2C7] to-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2817]">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-[#6B5942]">
              Be part of building a more inclusive future for healthcare professionals.
            </p>
            <motion.a
              href={window.location.origin}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#D4A574] hover:bg-[#C49464] text-white px-10 py-5 rounded-full text-lg font-semibold shadow-xl transition-all"
            >
              Join the Waitlist
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}