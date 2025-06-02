import PricingCard from "./PricingCard";

const pricingPlans = [
    {
        title: "Free",
        price: "$0",
        description: "month",
        features: [
            "5 voice notes per month",
            "Up to 5 minutes per recording",
            "Basic task extraction",
            "Email export",
        ],
        highlight: false,
    },
    {
        title: "Pro",
        price: "$12",
        description: "month",
        features: [
            "50 voice notes per month",
            "Up to 30 minutes per recording",
            "Advanced task categorization",
            "Notion & Email export",
            "Priority processing",
        ],
        highlight: true,
    },
    {
        title: "Team",
        price: "$29",
        description: "month",
        features: [
            "Unlimited voice notes",
            "Up to 2 hours per recording",
            "Custom task tags & templates",
            "All integrations (Notion, Slack, Email)",
            "Team sharing & collaboration",
            "API access",
        ],
        highlight: false,
    },
];

export default function PricingPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">Simple, Transparent Pricing</h2>
                <p className="text-gray-600">
                    Choose the plan that fits your needs. All plans include our core voice-to-text features.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {pricingPlans.map((plan, index) => (
                    <PricingCard key={index} plan={plan} />
                ))}
            </div>
        </div>
    );
}
