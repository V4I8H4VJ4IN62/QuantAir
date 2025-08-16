"use client";
import { LogOut, Home, User, Sparkles, Activity } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const AppNavbar = () => {
  return (
    <nav className="relative z-50">
      {/* Quantum Background with Blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/20 to-slate-900/95 backdrop-blur-xl border-b border-white/10" />
      
      {/* Quantum Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      
      {/* Navigation Content */}
      <div className="relative z-10 p-4 flex items-center justify-between">
        
        {/* LEFT - Back to Home Button */}
        <Link href="../" className="group">
          <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 hover:from-emerald-500/20 hover:to-cyan-500/20 backdrop-blur-sm border border-white/20 hover:border-emerald-400/40 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-emerald-500/50 transition-all duration-300">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-semibold text-sm group-hover:text-emerald-300 transition-colors duration-300">
              Back to Home
            </span>
            <div className="w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
        </Link>

        {/* CENTER - Optional Brand Element */}
        <div className="hidden md:flex gap-2">
          <div className="flex gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-400/20 rounded-2xl">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
              QuantAir Dashboard
            </span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
        </div>

        {/* RIGHT - User Menu */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="group outline-none">
              <div className="relative p-1 bg-gradient-to-r from-white/10 to-white/5 hover:from-emerald-500/20 hover:to-cyan-500/20 backdrop-blur-sm border border-white/20 hover:border-emerald-400/40 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                {/* Quantum Ring Animation */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 animate-pulse transition-all duration-500" />
                
                <Avatar className="w-10 h-10 relative z-10 border-2 border-transparent group-hover:border-emerald-400/30 transition-all duration-300">
                  <AvatarImage src="" className="object-cover" />
                  <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-sm shadow-inner">
                    DV
                  </AvatarFallback>
                </Avatar>
                
                {/* Active Status Indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full border-2 border-slate-900 shadow-lg animate-pulse" />
              </div>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent 
              sideOffset={15} 
              className="w-64 bg-slate-900/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="relative p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5" />
                <DropdownMenuLabel className="relative z-10 text-white font-bold text-base mb-2">
                  My Account
                </DropdownMenuLabel>
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-300">Dashboard User</p>
                    <p className="text-xs text-white/70">Active Session</p>
                  </div>
                </div>
              </div>

              <DropdownMenuSeparator className="border-white/10" />

              {/* Menu Items */}
              <div className="p-2">
                <DropdownMenuItem 
                  asChild
                  className="group relative overflow-hidden rounded-xl p-3 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-red-400/10 transition-all duration-300 cursor-pointer border-0 focus:bg-gradient-to-r focus:from-red-500/10 focus:to-red-400/10"
                >
                  <Link href="../" className="flex items-center gap-3 w-full text-white">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500/20 to-red-400/20 group-hover:from-red-500/30 group-hover:to-red-400/30 rounded-xl flex items-center justify-center transition-all duration-300 border border-red-500/20 group-hover:border-red-400/40">
                      <LogOut className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm group-hover:text-red-300 transition-colors duration-300">
                        Back to Homepage
                      </div>
                      <div className="text-xs text-white/60 group-hover:text-red-200/60 transition-colors duration-300">
                        Exit dashboard
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </DropdownMenuItem>
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-white/10 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
                <div className="flex items-center justify-center gap-2 text-xs text-white/50">
                  <Sparkles className="w-3 h-3" />
                  <span>Powered by Quantum AI</span>
                  <Activity className="w-3 h-3" />
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
      
      {/* Custom Styles */}
      <style jsx>{`
        /* Smooth animations for quantum effects */
        @keyframes quantum-pulse {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
        }

        .animate-pulse {
          animation: quantum-pulse 3s ease-in-out infinite;
        }

        /* Hover glow effects */
        @keyframes quantum-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(6, 182, 212, 0.3);
          }
        }

        .group:hover .shadow-emerald-500\\/25 {
          animation: quantum-glow 2s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
};

export default AppNavbar;