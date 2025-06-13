
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, RefreshCw, Download, TrendingUp, DollarSign, Target, MousePointer, Eye, ShoppingCart } from "lucide-react";
import MetricsOverview from "@/components/dashboard/MetricsOverview";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import CampaignTable from "@/components/dashboard/CampaignTable";
import KeywordAnalysis from "@/components/dashboard/KeywordAnalysis";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [dateRange, setDateRange] = useState("30d");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRefreshing(false);
    toast({
      title: "Data Refreshed",
      description: "Dashboard data has been updated with the latest metrics.",
    });
  };

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Your PPC report is being generated and will download shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                Amazon PPC Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Monitor and optimize your advertising performance</p>
            </div>
            <div className="flex items-center gap-3">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="flex items-center gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button
                size="sm"
                onClick={handleExport}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
              >
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics Overview */}
        <MetricsOverview dateRange={dateRange} />

        {/* Dashboard Tabs */}
        <Tabs defaultValue="overview" className="mt-8">
          <TabsList className="grid w-full grid-cols-4 max-w-md">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PerformanceChart type="revenue" title="Revenue Trend" />
              <PerformanceChart type="acos" title="ACoS Trend" />
              <PerformanceChart type="clicks" title="Clicks & Impressions" />
              <PerformanceChart type="roas" title="ROAS Performance" />
            </div>
          </TabsContent>

          <TabsContent value="campaigns" className="mt-6">
            <CampaignTable />
          </TabsContent>

          <TabsContent value="keywords" className="mt-6">
            <KeywordAnalysis />
          </TabsContent>

          <TabsContent value="automation" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5" />
                  Automation Settings
                </CardTitle>
                <CardDescription>
                  Configure automated data pulls and optimization rules
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h3 className="font-semibold mb-2">Data Sync</h3>
                    <p className="text-sm text-gray-600 mb-3">Automatically pull data from Amazon Advertising API</p>
                    <Select defaultValue="daily">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Every Hour</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </Card>
                  <Card className="p-4">
                    <h3 className="font-semibold mb-2">Bid Optimization</h3>
                    <p className="text-sm text-gray-600 mb-3">Auto-adjust bids based on performance</p>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="auto-bid" className="rounded" />
                      <label htmlFor="auto-bid" className="text-sm">Enable auto-bidding</label>
                    </div>
                  </Card>
                </div>
                <Button className="w-full">Save Automation Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
