import { LayoutDashboard } from "lucide-react";

import useSites from "../../../context/Sites/useSites";

import OnePaneLayout from "../../../layouts/OnePaneLayout";
import Region from "../../../layouts/components/Region/Region";
import Section from "../../../layouts/components/Section/Section";

import Header from "../../../components/composite/Header";
import Footer from "../../../components/composite/Footer";
import MetricCard from "./components/MetricCard/MetricCard";

import ProductionForecast from "./components/planning/ProductionForecast/ProductionForecast";
import ProductionMetrics from "./components/planning/ProductionMetrics/ProductionMetrics";

import SummaryMetric from "./components/SummaryMetric/SummaryMetric";

import ShippingForecast from "./components/planning/ShippingForecast/ShippingForecast";
import ShippingMetrics from "./components/planning/ShippingMetrics/ShippingMetrics";

const OperationsSummary = () => {
    const {
        sites,
        subsites,
        currentSite,
        currentSubsite,
    } = useSites();

    const activeSite = sites.find(
        (site) => site.id === currentSite
    );

    const activeSubsite = subsites.find(
        (subsite) => subsite.id === currentSubsite
    );

    const siteContext = [activeSite?.name, activeSubsite?.name].filter(Boolean).join(" • ");
    const subtitleText = siteContext 
        ? `${siteContext} — Operational Overview`
        : "Operational Overview";

    return (
        <OnePaneLayout
            top={
                <Header
                    title="Operations Summary"
                    subtitle={subtitleText}
                    icon={LayoutDashboard}
                />
            }
            content={
                <Region>
                    {/* At a Glance */}
                    <Header
                        title="At a Glance"
                        size="medium"
                    />

                    <Section>
                        <div className="grid grid-cols-2 gap-lg p-md lg:grid-cols-3 xl:grid-cols-6">
                            <SummaryMetric
                                label="Late Forecasts"
                                value="4"
                            />
                            <SummaryMetric
                                label="Material Issues"
                                value="6"
                            />
                            <SummaryMetric
                                label="Builds At Risk"
                                value="3"
                            />
                            <SummaryMetric
                                label="Open Work Orders"
                                value="118"
                            />
                            <SummaryMetric
                                label="Past Due"
                                value="2"
                            />
                            <SummaryMetric
                                label="On-Time"
                                value="97%"
                            />
                        </div>
                    </Section>

                    {/* Demand Summary */}
                    <Header
                        title="Demand Summary"
                        size="medium"
                    />

                    <Section>
                        <MetricCard
                            left={<ShippingMetrics />}
                            right={<ShippingForecast />}
                        />
                    </Section>

                    {/* Material Summary */}
                    <Header
                        title="Material Summary"
                        size="medium"
                    />

                    <Section>
                        <MetricCard
                            left={<ProductionMetrics />}
                            right={<ProductionForecast />}
                        />
                    </Section>

                    {/* Production Summary */}
                    <Header
                        title="Production Summary"
                        size="medium"
                    />

                    <Section>
                        <MetricCard
                            left={<ProductionMetrics />}
                            right={<ProductionForecast />}
                        />
                    </Section>

                    {/* Execution Summary */}
                    <Header
                        title="Execution Summary"
                        size="medium"
                    />

                    <Section>
                        <MetricCard
                            left={<ProductionMetrics />}
                            right={<ProductionForecast />}
                        />
                    </Section>

                    <Footer />
                </Region>
            }
        />
    );
};

export default OperationsSummary;