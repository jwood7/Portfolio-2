import { PortfolioPage } from "@/components/portfolioPage";

export default async function Page({
  params,
}: {
  params: Promise<{ type: string; id: string }>;
}) {
  return <PortfolioPage/>;
}