import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export const AlertsPanel = () => {
  const alerts = [
    {
      id: 1,
      type: "warning",
      icon: AlertTriangle,
      title: "Slight Fatigue Detected",
      time: "2 mins ago",
      description: "Recommended break in 30 minutes",
    },
    {
      id: 2,
      type: "success",
      icon: CheckCircle,
      title: "Break Completed",
      time: "45 mins ago",
      description: "15 minute rest stop recorded",
    },
    {
      id: 3,
      type: "info",
      icon: Info,
      title: "Route Update",
      time: "1 hour ago",
      description: "2 hours remaining to destination",
    },
    {
      id: 4,
      type: "success",
      icon: CheckCircle,
      title: "Attention Level Improved",
      time: "1.5 hours ago",
      description: "Driver alertness restored",
    },
  ];

  const getAlertStyle = (type: string) => {
    switch (type) {
      case "warning":
        return {
          bg: "bg-warning/10",
          border: "border-warning/20",
          icon: "text-warning",
        };
      case "danger":
        return {
          bg: "bg-danger/10",
          border: "border-danger/20",
          icon: "text-danger",
        };
      case "success":
        return {
          bg: "bg-success/10",
          border: "border-success/20",
          icon: "text-success",
        };
      default:
        return {
          bg: "bg-info/10",
          border: "border-info/20",
          icon: "text-info",
        };
    }
  };

  return (
    <Card className="p-6 border-border bg-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-foreground">Recent Alerts</h2>
        <Badge variant="outline" className="bg-muted text-muted-foreground">
          {alerts.length} Total
        </Badge>
      </div>

      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-3">
          {alerts.map((alert, index) => {
            const Icon = alert.icon;
            const styles = getAlertStyle(alert.type);
            return (
              <div
                key={alert.id}
                className={`p-4 rounded-lg border ${styles.border} ${styles.bg} animate-slide-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <Icon className={`w-5 h-5 mt-0.5 ${styles.icon}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-medium text-sm text-foreground">
                        {alert.title}
                      </h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {alert.time}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {alert.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </Card>
  );
};
