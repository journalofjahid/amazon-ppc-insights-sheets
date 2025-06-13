
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, ComposedChart } from "recharts";

interface PerformanceChartProps {
  type: "revenue" | "acos" | "clicks" | "roas";
  title: string;
}

const PerformanceChart = ({ type, title }: PerformanceChartProps) => {
  // Mock data - in real app, this would come from API
  const revenueData = [
    { date: "Jan 1", sales: 1200, spend: 240, acos: 20, roas: 5.0 },
    { date: "Jan 2", sales: 1350, spend: 250, acos: 18.5, roas: 5.4 },
    { date: "Jan 3", sales: 1100, spend: 230, acos: 20.9, roas: 4.8 },
    { date: "Jan 4", sales: 1450, spend: 260, acos: 17.9, roas: 5.6 },
    { date: "Jan 5", sales: 1600, spend: 280, acos: 17.5, roas: 5.7 },
    { date: "Jan 6", sales: 1380, spend: 245, acos: 17.8, roas: 5.6 },
    { date: "Jan 7", sales: 1520, spend: 275, acos: 18.1, roas: 5.5 },
  ];

  const clicksData = [
    { date: "Jan 1", clicks: 1200, impressions: 45000, ctr: 2.67 },
    { date: "Jan 2", clicks: 1350, impressions: 48000, ctr: 2.81 },
    { date: "Jan 3", clicks: 1100, impressions: 42000, ctr: 2.62 },
    { date: "Jan 4", clicks: 1450, impressions: 52000, ctr: 2.79 },
    { date: "Jan 5", clicks: 1600, impressions: 55000, ctr: 2.91 },
    { date: "Jan 6", clicks: 1380, impressions: 49000, ctr: 2.82 },
    { date: "Jan 7", clicks: 1520, impressions: 53000, ctr: 2.87 },
  ];

  const renderChart = () => {
    switch (type) {
      case "revenue":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="sales" fill="#3b82f6" name="Sales ($)" />
              <Line yAxisId="right" type="monotone" dataKey="spend" stroke="#ef4444" strokeWidth={2} name="Spend ($)" />
            </ComposedChart>
          </ResponsiveContainer>
        );
      case "acos":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="acos" stroke="#8b5cf6" strokeWidth={3} name="ACoS (%)" />
            </LineChart>
          </ResponsiveContainer>
        );
      case "clicks":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={clicksData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="clicks" fill="#10b981" name="Clicks" />
              <Bar yAxisId="left" dataKey="impressions" fill="#06b6d4" opacity={0.6} name="Impressions" />
            </ComposedChart>
          </ResponsiveContainer>
        );
      case "roas":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="roas" stroke="#f59e0b" strokeWidth={3} name="ROAS" />
            </LineChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>
          Performance over the last 7 days
        </CardDescription>
      </CardHeader>
      <CardContent>
        {renderChart()}
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
