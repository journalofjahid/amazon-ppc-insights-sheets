
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Target, MousePointer, Eye, ShoppingCart, Percent } from "lucide-react";

interface MetricsOverviewProps {
  dateRange: string;
}

const MetricsOverview = ({ dateRange }: MetricsOverviewProps) => {
  // Mock data - in real app, this would come from API
  const metrics = [
    {
      title: "Total Sales",
      value: "$45,231",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Ad Spend",
      value: "$8,456",
      change: "+8.2%",
      trend: "up",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "ACoS",
      value: "18.7%",
      change: "-2.1%",
      trend: "down",
      icon: Percent,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "ROAS",
      value: "5.35",
      change: "+15.3%",
      trend: "up",
      icon: TrendingUp,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "TACoS",
      value: "12.4%",
      change: "-1.8%",
      trend: "down",
      icon: ShoppingCart,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "CTR",
      value: "2.34%",
      change: "+0.4%",
      trend: "up",
      icon: MousePointer,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      title: "Impressions",
      value: "1.2M",
      change: "+22.1%",
      trend: "up",
      icon: Eye,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
    {
      title: "Orders",
      value: "342",
      change: "+18.7%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const isPositive = metric.trend === "up";
        
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {metric.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                <Icon className={`h-4 w-4 ${metric.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                {isPositive ? (
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                )}
                <span className={isPositive ? "text-green-600" : "text-red-600"}>
                  {metric.change}
                </span>
                <span className="ml-1">vs last period</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MetricsOverview;
