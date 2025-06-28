"use client";

import Tags from "@/components/ui/tags";
import Image from "next/image";
import dashboard from "@/assets/images/dashboard-new.png";
import Key from "@/components/ui/key";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card";
import { SparklesCore } from "@/components/magicui/sparkles";

const features = [
  "Real-time AQI Predictions",
  "Quantum vs Classical Model Insights",
  "Geo-Spatial Pollution Trends",
  "Forecast Accuracy Comparison",
  "Interactive Time Series Graphs",
  "City-wise Pollution Snapshots",
  "Data-Driven Policy Support Tools",
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Features() {
  return (
    <section
      className="relative py-24 px-4 flex items-center justify-center overflow-hidden"
      id="features"
    >
      {/*sparkles background */}
      <motion.div
        className="absolute inset-0 -z-10 blur-[1.5px] opacity-80"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <SparklesCore
          className="h-full w-full"
          particleColor="#22d3ee"
          particleDensity={100}
        />
      </motion.div>

      <div className="container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <Tags title={"Platform Features"} />
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold font-poppins text-center mt-6 max-w-3xl mx-auto">
            Quantum Meets{" "}
            <span className="text-cyan-400 italic">Urban Sustainability</span>
          </h2>
        </motion.div>

        {/* Magic Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-15"
        >
          <MagicCard className="md:col-span-2 lg:col-span-1">
            <div className="text-center p-3">
              <h3 className="text-2xl font-bold tracking-tight font-poppins mb-2">
                Quantum-Enhanced Pollution Forecasting
              </h3>
              <p className="text-md text-neutral-300 leading-relaxed font-poppins mb-4">
                Use hybrid quantum-classical models to predict PM10, NO2, and
                SO2 levels across Indian cities.
              </p>
            </div>
            <div className="aspect-video flex items-center justify-center">
              <Image
                src={dashboard}
                className="rounded-xl shadow-xl"
                height={650}
                width={650}
                alt="Quantum Forecasting Dashboard"
              />
            </div>
          </MagicCard>

          <MagicCard className="md:col-span-2 lg:col-span-1">
            <div className="text-center p-3">
              <h3 className="text-2xl font-bold tracking-tight font-poppins mb-2">
                Model Comparison & Evaluation
              </h3>
              <p className="text-md text-neutral-300 leading-relaxed font-poppins mb-4">
                Visually compare quantum models vs classical ML algorithms using
                RMSE and MAE metrics.
              </p>
            </div>
            <div className="aspect-video flex items-center justify-center">
              <p className="text-3xl font-bold text-white/20 text-center leading-relaxed">
                Classical or Quantum? <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Let the data decide.
                </span>
              </p>
            </div>
          </MagicCard>

          <MagicCard className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto">
            <div className="text-center p-3">
              <h3 className="text-2xl font-bold tracking-tight font-poppins mb-2">
                Pollution Factors Mapping
              </h3>
              <p className="text-md text-neutral-300 leading-relaxed font-poppins mb-4">
                Analyze how temporal, spatial, and meteorological variables
                influence pollution dynamics.
              </p>
            </div>
            <div className="aspect-video flex items-center justify-center relative w-full overflow-hidden min-h-[200px]">
              <OrbitingCircles radius={100}>
                <Key className="w-28 p-5 text-sm md:text-lg">Time</Key>
                <Key className="w-28 p-5 text-sm md:text-lg">Weather</Key>
                <Key className="w-28 p-5 text-sm md:text-lg">Location</Key>
              </OrbitingCircles>
            </div>
          </MagicCard>
        </motion.div>

        {/* Other Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap gap-3 justify-center"
        >
          {features.map((feature, idx) => (
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={idx}
              className="bg-neutral-900 border-white/10 inline-flex gap-3 items-center px-3 md:px-5 py-1.5 md:py-2 rounded-2xl group shadow-sm"
            >
              <span className="bg-cyan-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                &#10038;
              </span>
              <span className="font-medium md:text-lg text-white/90 font-poppins">
                {feature}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
