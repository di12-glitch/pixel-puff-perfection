import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Shield, Calendar } from "lucide-react";

export const DriverProfile = () => {
  return (
    <Card className="p-6 border-border bg-card">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <User className="w-8 h-8 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-semibold text-foreground">John Anderson</h3>
              <p className="text-sm text-muted-foreground">License: DL-2024-45678</p>
            </div>
            <Badge variant="outline" className="bg-success/10 text-success border-success/20">
              Verified
            </Badge>
          </div>

          <div className="space-y-2 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Safety Rating:</span>
              <span className="font-medium text-success">Excellent</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Member Since:</span>
              <span className="font-medium text-foreground">Jan 2024</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
