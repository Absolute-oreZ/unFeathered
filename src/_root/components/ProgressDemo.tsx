import * as React from "react";
import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <Progress value={progress} className="w-[60%] mx-auto" />
      </div>
    </div>
  );
}
