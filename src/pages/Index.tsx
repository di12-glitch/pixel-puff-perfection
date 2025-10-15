import { useState, useEffect } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { VideoFeed } from "@/components/VideoFeed";
import { StatusPanel } from "@/components/StatusPanel";
import { AlertsPanel } from "@/components/AlertsPanel";
import { StatsGrid } from "@/components/StatsGrid";
import { DriverProfile } from "@/components/DriverProfile";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader currentTime={currentTime} />
      
      <main className="container mx-auto p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Main video feed and driver profile */}
          <div className="lg:col-span-2 space-y-6">
            <VideoFeed />
            <StatsGrid />
          </div>

          {/* Right column - Status and alerts */}
          <div className="space-y-6">
            <DriverProfile />
            <StatusPanel />
            <AlertsPanel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
