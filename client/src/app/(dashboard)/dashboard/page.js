"use client";
import { useRef, useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  BarChart,
  TrendingUp,
  Zap,
  Wind,
  Factory,
  TreePine,
  Car,
  Calendar,
  Activity,
  Sparkles,
} from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Ripple } from "@/components/magicui/ripple";
import { BoxReveal } from "@/components/magicui/box-reveal";

const pollutants = [
  "Ozone",
  "Nitrogen Dioxide",
  "Carbon Monoxide",
  "Sulphur Dioxide",
  "Particulate Matter",
  "Benzene",
];

const pollutantIcons = {
  Ozone: "🌫️",
  "Nitrogen Dioxide": "🏭",
  "Carbon Monoxide": "🚗",
  "Sulphur Dioxide": "⚡",
  "Particulate Matter": "💨",
  Benzene: "🧪",
};

const Homepage = () => {
  const today = new Date().toISOString().slice(0, 10);
  const [predictions, setPredictions] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [cityList, setCityList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(today);
  const [loading, setLoading] = useState(false);
  const [T, setT] = useState(0);
  const [I, setI] = useState(0);
  const [C, setC] = useState(0);
  const [G, setG] = useState(0);
  const [P, setP] = useState(0);

  const containerRef = useRef(null);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:5000/cities")
      .then((res) => res.json())
      .then((data) => setCityList(data.cities))
      .catch((err) => console.error("❌ City list fetch failed:", err));
  }, []);

  useEffect(() => {
    if (!selectedCity || !selectedDate) return;

    const encodedCity = encodeURIComponent(selectedCity);
    const url = `http://localhost:5001/predict?city=${encodedCity}&date=${selectedDate}&T=${T}&I=${I}&C=${C}&G=${G}&P=${P}`;
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPredictions({ ...data });
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Prediction fetch failed:", err);
        setLoading(false);
      });

    fetch("http://localhost:5001/metrics")
      .then((res) => res.json())
      .then((data) => setAccuracy(data))
      .catch((err) => console.error("❌ Metrics fetch failed:", err));
  }, [selectedCity, selectedDate, T, I, C, G, P]);

  const getPollutionStatus = (parameter, value) => {
    const statusMap = {
      Ozone: [3, 6, 9, 12],
      "Nitrogen Dioxide": [5, 10, 20, 30],
      "Carbon Monoxide": [300, 500, 1000, 2000],
      "Sulphur Dioxide": [5, 10, 20, 30],
      "Particulate Matter": [8, 15, 30, 60],
      Benzene: [0.5, 1, 2, 3],
    };

    const levels = statusMap[parameter];
    if (!levels) return { variant: "default", text: "Unknown" };

    if (value <= levels[0]) return { variant: "success", text: "Good" };
    if (value <= levels[1]) return { variant: "warning", text: "Satisfactory" };
    if (value <= levels[2]) return { variant: "yellow", text: "Moderate" };
    if (value <= levels[3]) return { variant: "destructive", text: "Poor" };

    return {
      variant: "destructive",
      text: "Severe",
      style: { backgroundColor: "#800000" },
    };
  };

  const getSliderIcon = (type) => {
    switch (type) {
      case "T":
        return <Car className="w-4 h-4" />;
      case "I":
        return <Factory className="w-4 h-4" />;
      case "C":
        return <Zap className="w-4 h-4" />;
      case "G":
        return <TreePine className="w-4 h-4" />;
      case "P":
        return <Wind className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900 relative ">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      <BlurFade duration={0.8} inView className="relative">
        <Ripple className="absolute inset-0 z-0 opacity-20" />
        <div ref={containerRef} className="relative z-10 p-4 md:p-8 space-y-8">
          
          {/* Quantum Header Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-blue-400/10" />
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
            
            <div className="relative z-10 p-8 text-center">
              <div ref={fromRef} className="mb-6">
                <BoxReveal boxColor="#10b981" duration={0.5}>
                  <h1 className="text-4xl md:text-7xl font-black text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text mb-4 tracking-tight">
                    QuantAir Dashboard
                  </h1>
                </BoxReveal>
              </div>
              
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl mx-auto leading-relaxed">
                  Quantum & AI Powered Air Quality Prediction & Analysis
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <div className="group px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full text-white font-semibold border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      XGBoost
                    </div>
                  </div>
                  <div className="group px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full text-white font-semibold border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4" />
                      QBoost
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quantum Controls Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Location & Date Selection */}
            <MagicCard className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 via-emerald-900/30 to-slate-800/50 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10 p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Location & Date</h3>
                </div>
                
                <div className="space-y-4">
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="w-full h-12 bg-white/10 backdrop-blur-sm border-white/20 rounded-xl shadow-sm text-white hover:bg-white/15 transition-all duration-300">
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800/95 backdrop-blur-xl border-white/20">
                      {cityList.map((city) => (
                        <SelectItem key={city} value={city} className="text-white hover:bg-white/10">
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-400" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full h-12 pl-12 pr-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 hover:bg-white/15 focus:bg-white/20 focus:border-emerald-400/50 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </MagicCard>

            {/* Policy Impact Controls */}
            <MagicCard className="lg:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 via-cyan-900/30 to-slate-800/50 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10 p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Policy Impact Controls</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { key: "T", label: "Traffic Volume Reduction", value: T, setter: setT, color: "from-red-500 to-red-400" },
                    { key: "I", label: "Industrial Emission Control", value: I, setter: setI, color: "from-orange-500 to-orange-400" },
                    { key: "C", label: "Construction Activity Cut", value: C, setter: setC, color: "from-yellow-500 to-yellow-400" },
                    { key: "G", label: "Green Cover Increase", value: G, setter: setG, color: "from-green-500 to-green-400" },
                    { key: "P", label: "Public Transport Uptake", value: P, setter: setP, color: "from-blue-500 to-blue-400" },
                  ].map(({ key, label, value, setter, color }) => (
                    <div key={key} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center shadow-md`}>
                            {getSliderIcon(key)}
                          </div>
                          <span className="text-sm font-medium text-white">{label}</span>
                        </div>
                        <div className={`px-3 py-1 bg-gradient-to-r ${color} rounded-full text-white font-bold text-sm shadow-md`}>
                          {value}%
                        </div>
                      </div>
                      
                      <div className="relative">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={value}
                          onChange={(e) => setter(+e.target.value)}
                          className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer slider backdrop-blur-sm"
                          style={{
                            background: `linear-gradient(to right, #10b981 0%, #10b981 ${value}%, rgba(255,255,255,0.1) ${value}%, rgba(255,255,255,0.1) 100%)`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MagicCard>
          </div>

          <div ref={toRef} />

          {/* XGBoost Predictions */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                XGBoost Model Predictions
              </h2>
            </div>

            <MagicCard className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-emerald-400/20 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <AnimatedList>
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                  {pollutants.map((pollutant, index) => (
                    <div
                      key={`xgb-${pollutant}`}
                      className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl hover:border-emerald-400/40 transition-all duration-500 hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-3xl filter drop-shadow-lg">{pollutantIcons[pollutant]}</span>
                          <span className="text-sm font-semibold text-white/90">{pollutant}</span>
                        </div>
                        
                        <div className="flex items-end justify-between">
                          <div>
                            <div className="text-3xl font-black text-white mb-1">
                              {loading ? (
                                <div className="animate-pulse bg-gradient-to-r from-emerald-400 to-cyan-400 h-8 w-16 rounded-lg" />
                              ) : (
                                predictions?.xgboost?.[pollutant]?.toFixed(2) ?? "--"
                              )}
                            </div>
                            <div className="text-xs text-white/70 font-medium">µg/m³</div>
                          </div>
                          
                          {predictions?.xgboost && (
                            <Badge
                              variant={getPollutionStatus(pollutant, predictions.xgboost[pollutant]).variant}
                              style={getPollutionStatus(pollutant, predictions.xgboost[pollutant]).style}
                              className="text-xs font-bold shadow-lg backdrop-blur-sm"
                            >
                              {getPollutionStatus(pollutant, predictions.xgboost[pollutant]).text}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedList>
            </MagicCard>
          </div>

          {/* QBoost Predictions */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                QBoost Model Predictions
              </h2>
            </div>

            <MagicCard className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-emerald-500/10 backdrop-blur-xl border border-cyan-400/20 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <AnimatedList>
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                  {pollutants.map((pollutant, index) => (
                    <div
                      key={`qboost-${pollutant}`}
                      className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl hover:border-cyan-400/40 transition-all duration-500 hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-3xl filter drop-shadow-lg">{pollutantIcons[pollutant]}</span>
                          <span className="text-sm font-semibold text-white/90">{pollutant}</span>
                        </div>
                        
                        <div className="flex items-end justify-between">
                          <div>
                            <div className="text-3xl font-black text-white mb-1">
                              {loading ? (
                                <div className="animate-pulse bg-gradient-to-r from-cyan-400 to-blue-400 h-8 w-16 rounded-lg" />
                              ) : (
                                predictions?.qboost?.[pollutant]?.toFixed(2) ?? "--"
                              )}
                            </div>
                            <div className="text-xs text-white/70 font-medium">µg/m³</div>
                          </div>
                          
                          {predictions?.qboost && (
                            <Badge
                              variant={getPollutionStatus(pollutant, predictions.qboost[pollutant]).variant}
                              style={getPollutionStatus(pollutant, predictions.qboost[pollutant]).style}
                              className="text-xs font-bold shadow-lg backdrop-blur-sm"
                            >
                              {getPollutionStatus(pollutant, predictions.qboost[pollutant]).text}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedList>
            </MagicCard>
          </div>

          {/* Analytics Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <BarChart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
                Model Performance & Trends
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Accuracy Metrics */}
              <MagicCard className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 backdrop-blur-xl border border-green-400/20 shadow-2xl hover:shadow-green-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <BarChart className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Accuracy Metrics</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-lg">
                      <div className="text-sm text-emerald-400 font-semibold mb-3">XGBoost Performance</div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-white/70">MAE:</span>
                          <span className="text-sm font-bold text-white">{accuracy?.xgboost?.mae ?? "--"}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-white/70">RMSE:</span>
                          <span className="text-sm font-bold text-white">{accuracy?.xgboost?.rmse ?? "--"}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-lg">
                      <div className="text-sm text-cyan-400 font-semibold mb-3">QBoost Performance</div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-white/70">MAE:</span>
                          <span className="text-sm font-bold text-white">{accuracy?.qboost?.mae ?? "--"}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-white/70">RMSE:</span>
                          <span className="text-sm font-bold text-white">{accuracy?.qboost?.rmse ?? "--"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MagicCard>

              {/* QBoost Trends */}
              <MagicCard className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-emerald-500/10 backdrop-blur-xl border border-cyan-400/20 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10 p-6">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-cyan-400" />
                    QBoost Trends
                  </h3>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10">
                    <iframe
                      src={`http://localhost:5001/graphs/qboost_trends?city=${selectedCity}&date=${selectedDate}`}
                      className="w-full h-[350px] border-0"
                      title="QBoost Trends"
                    />
                  </div>
                </div>
              </MagicCard>

              {/* XGBoost Trends */}
              <MagicCard className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-400/20 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10 p-6">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    XGBoost Trends
                  </h3>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10">
                    <iframe
                      src={`http://localhost:5001/graphs/xgboost_trends?city=${selectedCity}&date=${selectedDate}`}
                      className="w-full h-[350px] border-0"
                      title="XGBoost Trends"
                    />
                  </div>
                </div>
              </MagicCard>
            </div>
          </div>

          {/* Spatial Pollution Map */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                Spatial Pollution Map of India
              </h2>
            </div>

            <MagicCard className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-emerald-400/20 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10 p-6">
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    src="http://127.0.0.1:5000/map?lat=22.9734&lon=78.6569&zoom=5"
                    className="w-full h-[600px] border-0"
                    title="Pollution Map"
                  />
                  
                  {/* Enhanced Legend */}
                  <div className="absolute bottom-6 left-6 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl text-white p-6 rounded-2xl shadow-2xl border border-white/20 max-w-xs">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <MapPin className="w-3 h-3 text-white" />
                      </div>
                      <h4 className="font-bold text-lg text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                        PM10 Levels
                      </h4>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-lg" />
                        <span className="text-white/90">≤ 50 (Good)</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg" />
                        <span className="text-white/90">51–100 (Satisfactory)</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full shadow-lg" />
                        <span className="text-white/90">101–250 (Moderate)</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg" />
                        <span className="text-white/90">251–350 (Poor)</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="w-4 h-4 bg-gradient-to-r from-red-800 to-red-900 rounded-full shadow-lg" />
                        <span className="text-white/90">≥ 351 (Severe)</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-xs text-white/70">
                        Real-time pollution data visualization powered by quantum analytics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MagicCard>
          </div>

          {/* Footer Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <MagicCard className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl border border-emerald-400/20 shadow-xl hover:shadow-emerald-500/30 transition-all duration-500 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">Real-time</div>
                <div className="text-sm text-white/70">Data Processing</div>
              </div>
            </MagicCard>

            <MagicCard className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-400/20 shadow-xl hover:shadow-cyan-500/30 transition-all duration-500 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">AI-Powered</div>
                <div className="text-sm text-white/70">Predictions</div>
              </div>
            </MagicCard>

            <MagicCard className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 to-emerald-500/10 backdrop-blur-xl border border-blue-400/20 shadow-xl hover:shadow-blue-500/30 transition-all duration-500 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">Advanced</div>
                <div className="text-sm text-white/70">Analytics</div>
              </div>
            </MagicCard>

            <MagicCard className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl border border-emerald-400/20 shadow-xl hover:shadow-emerald-500/30 transition-all duration-500 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">Global</div>
                <div className="text-sm text-white/70">Coverage</div>
              </div>
            </MagicCard>
          </div>

        </div>
      </BlurFade>

      {/* Custom Styles for Quantum Effects */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #10b981, #06d6a0);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.6);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #10b981, #06d6a0);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        /* Floating animation for particles */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-10px) translateX(5px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) translateX(-5px);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-15px) translateX(10px);
            opacity: 0.6;
          }
        }

        .absolute.w-1.h-1 {
          animation: float 15s ease-in-out infinite;
        }

        /* Quantum glow effect */
        @keyframes quantum-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(6, 214, 160, 0.5);
          }
        }

        .group:hover .shadow-emerald-500\/20 {
          animation: quantum-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Homepage;