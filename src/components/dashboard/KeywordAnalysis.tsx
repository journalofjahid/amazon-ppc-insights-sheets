
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, TrendingDown } from "lucide-react";
import { useState } from "react";

const KeywordAnalysis = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const keywords = [
    {
      keyword: "stainless steel kitchen utensils",
      matchType: "Broad",
      impressions: 8920,
      clicks: 178,
      ctr: 2.00,
      cpc: 0.85,
      spend: 151.30,
      sales: 567.80,
      acos: 26.6,
      orders: 23,
      trend: "up"
    },
    {
      keyword: "premium knife set",
      matchType: "Exact",
      impressions: 5430,
      clicks: 145,
      ctr: 2.67,
      cpc: 1.20,
      spend: 174.00,
      sales: 780.50,
      acos: 22.3,
      orders: 31,
      trend: "up"
    },
    {
      keyword: "non stick cookware",
      matchType: "Phrase",
      impressions: 12340,
      clicks: 234,
      ctr: 1.90,
      cpc: 0.95,
      spend: 222.30,
      sales: 889.20,
      acos: 25.0,
      orders: 36,
      trend: "up"
    },
    {
      keyword: "kitchen gadgets set",
      matchType: "Broad",
      impressions: 6780,
      clicks: 98,
      ctr: 1.45,
      cpc: 1.15,
      spend: 112.70,
      sales: 334.50,
      acos: 33.7,
      orders: 14,
      trend: "down"
    },
    {
      keyword: "silicone cooking tools",
      matchType: "Exact",
      impressions: 4560,
      clicks: 132,
      ctr: 2.89,
      cpc: 0.78,
      spend: 102.96,
      sales: 445.60,
      acos: 23.1,
      orders: 19,
      trend: "up"
    }
  ];

  const getMatchTypeBadge = (matchType: string) => {
    const colors = {
      Exact: "bg-blue-100 text-blue-800",
      Phrase: "bg-green-100 text-green-800",
      Broad: "bg-yellow-100 text-yellow-800"
    };
    return <Badge className={colors[matchType as keyof typeof colors]}>{matchType}</Badge>;
  };

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (trend === "down") return <TrendingDown className="h-4 w-4 text-red-500" />;
    return null;
  };

  const filteredKeywords = keywords.filter(keyword =>
    keyword.keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Keyword Performance Analysis</CardTitle>
          <CardDescription>
            Track your keyword performance and identify optimization opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Search className="h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Keyword</TableHead>
                  <TableHead>Match Type</TableHead>
                  <TableHead>Impressions</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>CTR</TableHead>
                  <TableHead>CPC</TableHead>
                  <TableHead>Spend</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead>ACoS</TableHead>
                  <TableHead>Orders</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredKeywords.map((keyword, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {keyword.keyword}
                        {getTrendIcon(keyword.trend)}
                      </div>
                    </TableCell>
                    <TableCell>{getMatchTypeBadge(keyword.matchType)}</TableCell>
                    <TableCell>{keyword.impressions.toLocaleString()}</TableCell>
                    <TableCell>{keyword.clicks}</TableCell>
                    <TableCell>{keyword.ctr.toFixed(2)}%</TableCell>
                    <TableCell>${keyword.cpc.toFixed(2)}</TableCell>
                    <TableCell>${keyword.spend.toFixed(2)}</TableCell>
                    <TableCell className="font-semibold text-green-600">
                      ${keyword.sales.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <span className={keyword.acos > 30 ? "text-red-600" : "text-green-600"}>
                        {keyword.acos.toFixed(1)}%
                      </span>
                    </TableCell>
                    <TableCell>{keyword.orders}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top Performing Keywords</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {keywords.slice(0, 3).map((keyword, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm font-medium">{keyword.keyword}</span>
                  <span className="text-sm text-green-600">${keyword.sales.toFixed(0)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">High ACoS Keywords</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {keywords.filter(k => k.acos > 30).map((keyword, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span className="text-sm font-medium">{keyword.keyword}</span>
                  <span className="text-sm text-red-600">{keyword.acos.toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Optimization Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded">
                <p className="text-sm font-medium text-blue-800">Increase Bids</p>
                <p className="text-xs text-blue-600">3 keywords with high ROAS but low impression share</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded">
                <p className="text-sm font-medium text-yellow-800">Review & Pause</p>
                <p className="text-xs text-yellow-600">1 keyword with ACoS > 35%</p>
              </div>
              <div className="p-3 bg-green-50 rounded">
                <p className="text-sm font-medium text-green-800">Add Negatives</p>
                <p className="text-xs text-green-600">Found 5 irrelevant search terms</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KeywordAnalysis;
