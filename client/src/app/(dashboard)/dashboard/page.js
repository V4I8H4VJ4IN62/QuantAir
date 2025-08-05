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
    <div className="min-h-screen">
      <BlurFade duration={0.8} inView className="relative">
        <Ripple className="absolute inset-0 z-0 opacity-5" />
        <div ref={containerRef} className="relative z-10 p-4 md:p-8 space-y-8">
          {/* Header Section */}
          <div className="relative flex justify-center overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-400 via-white to-cyan-400 p-8 shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 text-center">
              <div ref={fromRef} className="mb-4">
                <BoxReveal boxColor="#000000" duration={0.5}>
                  <h1 className="text-4xl justify-center md:text-6xl font-bold text-black mb-2">
                    QuantAir Dashboard
                  </h1>
                </BoxReveal>
              </div>
              <p className="text-xl text-gray-800 font-medium">
                Quantum & AI Powered Air Quality Prediction & Analysis
              </p>
              <div className="flex justify-center mt-4 space-x-2">
                <div className="px-4 py-2 bg-black/15 backdrop-blur-sm rounded-full text-black font-medium border border-black/20">
                  XGBoost
                </div>
                <div className="px-4 py-2 bg-black/15 backdrop-blur-sm rounded-full text-black font-medium border border-black/20">
                  QBoost
                </div>
              </div>
            </div>
          </div>

          {/* Controls Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* City and Date Selection */}
            <MagicCard className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  Location & Date
                </div>
                <div className="space-y-3">
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="w-full h-12border-2  dark:border-gray-600 rounded-xl shadow-sm">
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cityList.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full h-12 pl-12 pr-4 border-2  dark:border-gray-600 rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </MagicCard>

            {/* Control Sliders */}
            <MagicCard className="lg:col-span-2 p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Policy Impact Controls
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      key: "T",
                      label: "Traffic Volume Reduction",
                      value: T,
                      setter: setT,
                      color: "text-red-500",
                    },
                    {
                      key: "I",
                      label: "Industrial Emission Control",
                      value: I,
                      setter: setI,
                      color: "text-orange-500",
                    },
                    {
                      key: "C",
                      label: "Construction Activity Cut",
                      value: C,
                      setter: setC,
                      color: "text-yellow-500",
                    },
                    {
                      key: "G",
                      label: "Green Cover Increase",
                      value: G,
                      setter: setG,
                      color: "text-green-500",
                    },
                    {
                      key: "P",
                      label: "Public Transport Uptake",
                      value: P,
                      setter: setP,
                      color: "text-blue-500",
                    },
                  ].map(({ key, label, value, setter, color }) => (
                    <div key={key} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={color}>{getSliderIcon(key)}</span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {label}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                          {value}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={value}
                        onChange={(e) => setter(+e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${value}%, #e5e7eb ${value}%, #e5e7eb 100%)`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </MagicCard>
          </div>

          <div ref={toRef} />

          {/* XGBoost Predictions */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-2xl font-bold ">XGBoost Model Predictions</h2>
            </div>

            <MagicCard className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-0 shadow-lg">
              <AnimatedList>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                  {pollutants.map((pollutant) => (
                    <div
                      key={`xgb-${pollutant}`}
                      className="group relative overflow-hidden rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 dark:border-gray-700"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl">
                            {pollutantIcons[pollutant]}
                          </span>
                          <span className="text-sm font-medium ">
                            {pollutant}
                          </span>
                        </div>
                        <div className="flex items-end justify-between">
                          <div>
                            <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                              {loading ? (
                                <div className="animate-pulse bg-gray-300 h-8 w-16 rounded"></div>
                              ) : (
                                predictions?.xgboost?.[pollutant]?.toFixed(2) ??
                                "--"
                              )}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              µg/m³
                            </div>
                          </div>
                          {predictions?.xgboost && (
                            <Badge
                              variant={
                                getPollutionStatus(
                                  pollutant,
                                  predictions.xgboost[pollutant]
                                ).variant
                              }
                              style={
                                getPollutionStatus(
                                  pollutant,
                                  predictions.xgboost[pollutant]
                                ).style
                              }
                              className="text-xs font-medium"
                            >
                              {
                                getPollutionStatus(
                                  pollutant,
                                  predictions.xgboost[pollutant]
                                ).text
                              }
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
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Wind className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                QBoost Model Predictions
              </h2>
            </div>

            <MagicCard className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-0 shadow-lg">
              <AnimatedList>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                  {pollutants.map((pollutant) => (
                    <div
                      key={`qboost-${pollutant}`}
                      className="group relative overflow-hidden rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 dark:border-gray-700"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl">
                            {pollutantIcons[pollutant]}
                          </span>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {pollutant}
                          </span>
                        </div>
                        <div className="flex items-end justify-between">
                          <div>
                            <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                              {loading ? (
                                <div className="animate-pulse bg-gray-300 h-8 w-16 rounded"></div>
                              ) : (
                                predictions?.qboost?.[pollutant]?.toFixed(2) ??
                                "--"
                              )}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              µg/m³
                            </div>
                          </div>
                          {predictions?.qboost && (
                            <Badge
                              variant={
                                getPollutionStatus(
                                  pollutant,
                                  predictions.qboost[pollutant]
                                ).variant
                              }
                              style={
                                getPollutionStatus(
                                  pollutant,
                                  predictions.qboost[pollutant]
                                ).style
                              }
                              className="text-xs font-medium"
                            >
                              {
                                getPollutionStatus(
                                  pollutant,
                                  predictions.qboost[pollutant]
                                ).text
                              }
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
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <BarChart className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Model Performance & Trends
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Accuracy Metrics */}
              <MagicCard className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-0 shadow-lg">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart className="w-5 h-5 text-green-500" />
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Accuracy Metrics
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl border dark:border-gray-700 shadow-sm">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        XGBoost Performance
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">MAE:</span>
                          <span className="text-sm font-medium">
                            {accuracy?.xgboost?.mae ?? "--"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">RMSE:</span>
                          <span className="text-sm font-medium">
                            {accuracy?.xgboost?.rmse ?? "--"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl border dark:border-gray-700 shadow-sm">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        QBoost Performance
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">MAE:</span>
                          <span className="text-sm font-medium">
                            {accuracy?.qboost?.mae ?? "--"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">RMSE:</span>
                          <span className="text-sm font-medium">
                            {accuracy?.qboost?.rmse ?? "--"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MagicCard>

              {/* QBoost Trends */}
              <MagicCard className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-0 shadow-lg">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    QBoost Trends
                  </h3>
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">
                    <iframe
                      src={`http://localhost:5001/graphs/qboost_trends?city=${selectedCity}&date=${selectedDate}`}
                      className="w-full h-[350px] border-0"
                      title="QBoost Trends"
                    />
                  </div>
                </div>
              </MagicCard>

              {/* XGBoost Trends */}
              <MagicCard className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-0 shadow-lg">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    XGBoost Trends
                  </h3>
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">
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

          {/* Map Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Spatial Pollution Map of India
              </h2>
            </div>

            <MagicCard className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-0 shadow-lg">
              <div className="p-6">
                <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">
                  <iframe
                    src="http://127.0.0.1:5000/map?lat=22.9734&lon=78.6569&zoom=5"
                    className="w-full h-[600px] border-0"
                    title="Pollution Map"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm text-gray-800 dark:text-gray-200 p-4 rounded-xl shadow-lg text-sm space-y-2 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold text-base mb-2">
                      PM10 Levels (µg/m³)
                    </h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span>≤ 50 (Good)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                        <span>51–100 (Satisfactory)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                        <span>101–250 (Moderate)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                        <span>251–350 (Poor)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-900 rounded-full"></div>
                        <span>≥ 351 (Severe)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MagicCard>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default Homepage;
