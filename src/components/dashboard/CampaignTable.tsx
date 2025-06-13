
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown, Edit, Pause, Play } from "lucide-react";

const CampaignTable = () => {
  const campaigns = [
    {
      id: 1,
      name: "Premium Kitchen Gadgets",
      status: "Active",
      budget: 50,
      spend: 42.30,
      sales: 189.50,
      acos: 22.3,
      roas: 4.48,
      orders: 8,
      impressions: 12450,
      clicks: 287,
      ctr: 2.31,
      trend: "up"
    },
    {
      id: 2,
      name: "Smart Home Essentials",
      status: "Active",
      budget: 75,
      spend: 68.90,
      sales: 298.75,
      acos: 23.1,
      roas: 4.34,
      orders: 12,
      impressions: 18290,
      clicks: 394,
      ctr: 2.16,
      trend: "up"
    },
    {
      id: 3,
      name: "Outdoor Adventure Gear",
      status: "Paused",
      budget: 30,
      spend: 0,
      sales: 0,
      acos: 0,
      roas: 0,
      orders: 0,
      impressions: 0,
      clicks: 0,
      ctr: 0,
      trend: "neutral"
    },
    {
      id: 4,
      name: "Fitness Equipment Pro",
      status: "Active",
      budget: 100,
      spend: 89.20,
      sales: 445.60,
      acos: 20.0,
      roas: 4.99,
      orders: 18,
      impressions: 25680,
      clicks: 512,
      ctr: 1.99,
      trend: "up"
    },
    {
      id: 5,
      name: "Beauty & Skincare",
      status: "Active",
      budget: 60,
      spend: 55.80,
      sales: 223.20,
      acos: 25.0,
      roas: 4.00,
      orders: 11,
      impressions: 15340,
      clicks: 318,
      ctr: 2.07,
      trend: "down"
    }
  ];

  const getStatusBadge = (status: string) => {
    return status === "Active" ? (
      <Badge className="bg-green-100 text-green-800">Active</Badge>
    ) : (
      <Badge variant="secondary">Paused</Badge>
    );
  };

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (trend === "down") return <TrendingDown className="h-4 w-4 text-red-500" />;
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Campaign Performance</CardTitle>
        <CardDescription>
          Monitor and manage your advertising campaigns
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Spend</TableHead>
                <TableHead>Sales</TableHead>
                <TableHead>ACoS</TableHead>
                <TableHead>ROAS</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>CTR</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {campaign.name}
                      {getTrendIcon(campaign.trend)}
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                  <TableCell>${campaign.budget}</TableCell>
                  <TableCell>${campaign.spend.toFixed(2)}</TableCell>
                  <TableCell className="font-semibold text-green-600">
                    ${campaign.sales.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <span className={campaign.acos > 25 ? "text-red-600" : "text-green-600"}>
                      {campaign.acos.toFixed(1)}%
                    </span>
                  </TableCell>
                  <TableCell className="font-semibold">
                    {campaign.roas.toFixed(2)}
                  </TableCell>
                  <TableCell>{campaign.orders}</TableCell>
                  <TableCell>{campaign.ctr.toFixed(2)}%</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        {campaign.status === "Active" ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignTable;
