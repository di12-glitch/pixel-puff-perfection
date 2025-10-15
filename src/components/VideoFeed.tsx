import { Card } from "@/components/ui/card";
import { Video, Maximize2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const VideoFeed = () => {
  return (
    <Card className="overflow-hidden border-border bg-card">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Video className="w-5 h-5 text-primary" />
          <h2 className="font-semibold text-foreground">Live Camera Feed</h2>
          <Badge variant="outline" className="bg-danger/10 text-danger border-danger/20 animate-pulse-glow">
            <span className="w-2 h-2 rounded-full bg-danger mr-2" />
            LIVE
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Download className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="relative aspect-video bg-muted">
        {/* Simulated video feed with overlay grid */}
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 rounded-full border-4 border-primary/20 border-t-primary animate-spin mx-auto" />
            <p className="text-muted-foreground">Initializing camera feed...</p>
          </div>
        </div>

        {/* Face detection overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-48 h-64 border-2 border-primary rounded-lg animate-pulse-glow">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary" />
          </div>
        </div>

        {/* Info overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground">Resolution</p>
            <p className="text-sm font-mono font-bold text-foreground">1920x1080</p>
          </div>
          <div className="bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground">FPS</p>
            <p className="text-sm font-mono font-bold text-success">30</p>
          </div>
          <div className="bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground">Latency</p>
            <p className="text-sm font-mono font-bold text-success">45ms</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
