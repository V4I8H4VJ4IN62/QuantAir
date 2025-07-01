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
import { MapPin, BarChart } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Ripple } from "@/components/magicui/ripple";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { BoxReveal } from "@/components/magicui/box-reveal";

const pollutants = [
  "Ozone",
  "Nitrogen Dioxide",
  "Carbon Monoxide",
  "Sulphur Dioxide",
  "Particulate Matter",
  "Benzene",
];

const Homepage = () => {
  const today = new Date().toISOString().slice(0, 10);
  const [predictions, setPredictions] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [cityList, setCityList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(today);
  const [loading, setLoading] = useState(false);
  // 🚗 T: Traffic | 🏭 I: Industry | 🚧 C: Construction | 🌿 G: Green Cover | 🚌 P: Public Transport
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
      "Carbon Monoxide": [300, 500, 1000, 2000], // converted to µg/m³
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

  return (
    <BlurFade duration={0.6} inView className="relative">
      <Ripple className="absolute inset-0 z-0 opacity-10" />
      <div
        ref={containerRef}
        className="relative z-10 p-6 min-h-screen bg-background text-foreground space-y-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div
            ref={fromRef}
            className="text-3xl font-bold tracking-tight text-foreground"
          >
            <BoxReveal boxColor="#22d3ee" duration={0.5}>
              QuantAir Dashboard
            </BoxReveal>
          </div>
          <div className="flex gap-4">
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-[160px]">
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
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm bg-background text-foreground shadow"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-foreground text-sm mt-6">
            <label>
              🚗 Traffic Volume Reduction (T%) — {T}%
              <input
                type="range"
                min="0"
                max="100"
                value={T}
                onChange={(e) => setT(+e.target.value)}
                className="w-full"
              />
            </label>
            <label>
              🏭 Industrial Emission Control (I%) — {I}%
              <input
                type="range"
                min="0"
                max="100"
                value={I}
                onChange={(e) => setI(+e.target.value)}
                className="w-full"
              />
            </label>
            <label>
              🚧 Construction Activity Cut (C%) — {C}%
              <input
                type="range"
                min="0"
                max="100"
                value={C}
                onChange={(e) => setC(+e.target.value)}
                className="w-full"
              />
            </label>
            <label>
              🌿 Green Cover Increase (G%) — {G}%
              <input
                type="range"
                min="0"
                max="100"
                value={G}
                onChange={(e) => setG(+e.target.value)}
                className="w-full"
              />
            </label>
            <label>
              🚌 Public Transport Uptake (P%) — {P}%
              <input
                type="range"
                min="0"
                max="100"
                value={P}
                onChange={(e) => setP(+e.target.value)}
                className="w-full"
              />
            </label>
          </div>
        </div>

        <div ref={toRef} />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={fromRef}
          toRef={toRef}
          className="my-4"
        />

        {/* Heading for XGBoost */}
        <h3 className="text-xl font-semibold text-foreground mt-4">
          XGBoost Model Pollution Level Predictions
        </h3>
        <MagicCard
          title="XGBoost Model Predictions"
          className="bg-gradient-to-r from-blue-500/10 to-blue-400/10"
        >
          <AnimatedList>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
              {pollutants.map((key) => (
                <div
                  key={`xgb-${key}`}
                  className="flex justify-between items-center p-4 rounded-lg bg-card shadow-md hover:scale-[1.01] transition-all"
                >
                  <div>
                    <div className="text-base text-muted-foreground font-medium">
                      {key}
                    </div>
                    <div className="text-3xl font-bold flex flex-row justify-center items-center gap-3">
                      {loading
                        ? "--"
                        : predictions?.xgboost?.[key]?.toFixed(2) ?? "--"}
                      <div className="text-lg">(ug/m³)</div>
                    </div>
                  </div>
                  {predictions?.xgboost && (
                    <Badge
                      variant={
                        getPollutionStatus(key, predictions.xgboost[key])
                          .variant
                      }
                      style={
                        getPollutionStatus(key, predictions.xgboost[key]).style
                      }
                    >
                      {getPollutionStatus(key, predictions.xgboost[key]).text}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </AnimatedList>
        </MagicCard>

        {/* Heading for QBoost */}
        <h3 className="text-xl font-semibold text-foreground mt-4">
          QBoost Model Pollution Level Predictions
        </h3>
        <MagicCard
          title="QBoost Model Predictions"
          className="bg-gradient-to-r from-purple-500/10 to-indigo-400/10"
        >
          <AnimatedList>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
              {pollutants.map((key) => (
                <div
                  key={`qboost-${key}`}
                  className="flex justify-between items-center p-4 rounded-lg bg-card shadow-md hover:scale-[1.01] transition-all"
                >
                  <div>
                    <div className="text-base text-muted-foreground font-medium">
                      {key}
                    </div>
                    <div className="text-3xl font-bold flex flex-row justify-center items-center gap-3">
                      {loading
                        ? "--"
                        : predictions?.qboost?.[key]?.toFixed(2) ?? "--"}
                      <div className="text-lg">(ug/m³)</div>
                    </div>
                  </div>
                  {predictions?.qboost && (
                    <Badge
                      variant={
                        getPollutionStatus(key, predictions.qboost[key]).variant
                      }
                      style={
                        getPollutionStatus(key, predictions.qboost[key]).style
                      }
                    >
                      {getPollutionStatus(key, predictions.qboost[key]).text}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </AnimatedList>
        </MagicCard>

        {/* Heading for Model Accuracy & Trends */}
        <h3 className="text-xl font-semibold text-foreground mt-4">
          Model Evaluation Metrics and Trends
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <MagicCard
            title="Model Accuracy Comparison"
            icon={<BarChart className="w-5 h-5 text-blue-500" />}
            className="p-4"
          >
            <div className="p-4 space-y-2 text-lg font-medium">
              <p>
                <strong>XGBoost MAE:</strong> {accuracy?.xgboost?.mae ?? "--"}
              </p>
              <p>
                <strong>XGBoost RMSE:</strong> {accuracy?.xgboost?.rmse ?? "--"}
              </p>
              <p>
                <strong>QBoost MAE:</strong> {accuracy?.qboost?.mae ?? "--"}
              </p>
              <p>
                <strong>QBoost RMSE:</strong> {accuracy?.qboost?.rmse ?? "--"}
              </p>
            </div>
          </MagicCard>

          <MagicCard title="QBoost Trends" className="p-4 h-full">
            <iframe
              src={`http://localhost:5001/graphs/qboost_trends?city=${selectedCity}&date=${selectedDate}`}
              className="w-full h-[400px] rounded-md border"
              title="QBoost Trends"
            />
          </MagicCard>

          <MagicCard title="XGBoost Trends" className="p-4 h-full">
            <iframe
              src={`http://localhost:5001/graphs/xgboost_trends?city=${selectedCity}&date=${selectedDate}`}
              className="w-full h-[400px] rounded-md border"
              title="XGBoost Trends"
            />
          </MagicCard>
        </div>

        {/* Heading for Map */}
        <h3 className="text-xl font-semibold text-foreground mt-4">
          Spatial Pollution Map of India
        </h3>

        <div className="relative h-[600px] mt-4">
          <iframe
            src="http://127.0.0.1:5000/map?lat=22.9734&lon=78.6569&zoom=5"
            className="w-full h-full rounded-md border"
            title="Pollution Map"
          />
          <div className="absolute bottom-4 left-4 bg-white dark:bg-zinc-800 text-black dark:text-white p-4 rounded-lg border shadow-lg text-sm space-y-1">
            <h4 className="font-bold">PM10 Levels (µg/m³)</h4>
            <div>
              <span className="w-4 h-4 inline-block bg-green-500 mr-2"></span> ≤
              50 (Good)
            </div>
            <div>
              <span className="w-4 h-4 inline-block bg-yellow-400 mr-2"></span>{" "}
              51–100 (Satisfactory)
            </div>
            <div>
              <span className="w-4 h-4 inline-block bg-orange-500 mr-2"></span>{" "}
              101–250 (Moderate)
            </div>
            <div>
              <span className="w-4 h-4 inline-block bg-red-600 mr-2"></span>{" "}
              251–350 (Poor)
            </div>
            <div>
              <span className="w-4 h-4 inline-block bg-red-900 mr-2"></span> ≥
              351 (Severe)
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

export default Homepage;
