import { Card } from "@/components/ui/card";
import { Clock, MapPin, TrendingUp, Award } from "lucide-react";

export const StatsGrid = () => {
  const stats = [
    {
      icon: Clock,
      label: "Drive Time",
      value: "3h 24m",
      change: "+12m from last session",
      trend: "neutral",
    },
    {
      icon: MapPin,
      label: "Distance",
      value: "187.5 km",
      change: "+24.3 km from last session",
      trend: "up",
    },
    {
      icon: TrendingUp,
      label: "Safety Score",
      value: "94/100",
      change: "+2 points this week",
      trend: "up",
    },
    {
      icon: Award,
      label: "Incident Free",
      value: "45 days",
      change: "New personal record",
      trend: "up",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.label}
            className="p-6 border-border bg-card hover:border-primary/50 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
