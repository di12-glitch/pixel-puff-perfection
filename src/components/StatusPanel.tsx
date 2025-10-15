import { Card } from "@/components/ui/card";
import { Eye, Brain, AlertTriangle, Heart } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const StatusPanel = () => {
  const metrics = [
    {
      icon: Eye,
      label: "Attention Level",
      value: 92,
      status: "success",
      description: "Eyes focused on road",
    },
    {
      icon: Brain,
      label: "Alertness",
      value: 88,
      status: "success",
      description: "Normal cognitive state",
    },
    {
      icon: AlertTriangle,
      label: "Distraction",
      value: 12,
      status: "success",
      description: "Minimal distractions",
    },
    {
      icon: Heart,
      label: "Fatigue Level",
      value: 25,
      status: "warning",
      description: "Slight fatigue detected",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-success";
      case "warning":
        return "text-warning";
      case "danger":
        return "text-danger";
      default:
        return "text-muted-foreground";
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-success";
      case "warning":
        return "bg-warning";
      case "danger":
        return "bg-danger";
      default:
        return "bg-primary";
    }
  };

  return (
    <Card className="p-6 border-border bg-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-foreground">Driver Status</h2>
        <Badge variant="outline" className="bg-success/10 text-success border-success/20">
          Monitoring Active
        </Badge>
      </div>

      <div className="space-y-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${getStatusColor(metric.status)}`} />
                  <span className="text-sm font-medium text-foreground">
                    {metric.label}
                  </span>
                </div>
                <span className={`text-sm font-bold ${getStatusColor(metric.status)}`}>
                  {metric.value}%
                </span>
              </div>
              <Progress value={metric.value} className="h-2" indicatorClassName={getProgressColor(metric.status)} />
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-lg border border-success/20 bg-success/5">
        <p className="text-sm font-medium text-success">Overall Status: Good</p>
        <p className="text-xs text-muted-foreground mt-1">
          Driver is alert and focused. Continue monitoring.
        </p>
      </div>
    </Card>
  );
};
