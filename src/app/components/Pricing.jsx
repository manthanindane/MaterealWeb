import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const PricingSection = () => {
  const plans = {
    monthly: [
      {
        title: "Free",
        features: ["Create 2 characters", "Send 10 messages a day", "Basic character customization"],
        price: "$0",
        period: "month",
      },
      {
        title: "Plus",
        features: ["Create 5 characters", "Send 50 messages a day", "Advanced character customization", "Priority support"],
        price: "$9.99",
        period: "month",
      },
      {
        title: "Premium",
        features: ["Unlimited characters", "Unlimited messages", "Full character customization", "Faster responses", "24/7 Premium support", "Early access to new features"],
        price: "$19.99",
        period: "month",
        popular: true,
      },
    ],
    yearly: [
      {
        title: "Free",
        features: ["Create 2 characters", "Send 10 messages a day", "Basic character customization"],
        price: "$0",
        period: "year",
      },
      {
        title: "Plus",
        features: ["Create 5 characters", "Send 50 messages a day", "Advanced character customization", "Priority support"],
        price: "$99.99",
        period: "year",
        savings: "Save $19.89",
      },
      {
        title: "Premium",
        features: ["Unlimited characters", "Unlimited messages", "Full character customization", "Faster responses", "24/7 Premium support", "Early access to new features"],
        price: "$199.99",
        period: "year",
        popular: true,
        savings: "Save $39.89",
      },
    ],
  };

  return (
    <motion.section className="py-12 md:py-20 px-4 md:px-8 lg:px-0" {...fadeIn}>
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-6 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        Choose Your Perfect Plan
      </h2>
      <p className="text-lg md:text-xl text-gray-300 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
        Unlock the full potential of Matereal with our flexible pricing options. Whether you&rsquo;re just starting or looking for unlimited possibilities, we have a plan for you.
      </p>
      <Tabs defaultValue="monthly" className="w-full max-w-6xl mx-auto">
        <TabsList className="grid grid-cols-2 h-auto max-w-xs md:max-w-md mx-auto bg-gray-800 border-2 border-purple-500 rounded-full overflow-hidden mb-8">
          <TabsTrigger 
            value="monthly" 
            className="text-sm md:text-base py-2 md:py-3 px-4 md:px-6 font-semibold transition-all duration-300 rounded-full data-[state=active]:bg-gradient-to-r from-purple-500 to-pink-500 data-[state=active]:text-white"
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger 
            value="yearly" 
            className="text-sm md:text-base py-2 md:py-3 px-4 md:px-6 font-semibold transition-all duration-300 rounded-full data-[state=active]:bg-gradient-to-r from-purple-500 to-pink-500 data-[state=active]:text-white"
          >
            Yearly
          </TabsTrigger>
        </TabsList>
        {["monthly", "yearly"].map((interval) => (
          <TabsContent key={interval} value={interval}>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {plans[interval].map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex ${plan.popular ? 'md:-mt-4 lg:-mt-6' : ''}`}
                >
                  <Card
                    className={`flex flex-col w-full bg-gradient-to-b from-gray-900 to-gray-800 border-2 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 ${
                      plan.popular ? "border-purple-500 scale-105" : "border-gray-700 hover:border-purple-400"
                    }`}
                  >
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center text-xl md:text-2xl text-white mb-2">
                        {plan.title}
                        {plan.popular && (
                          <Badge variant="gradient" className="bg-gradient-to-r from-purple-400 to-pink-500 text-xs">
                            Most Popular
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription>
                        <span className="text-3xl md:text-4xl font-bold text-white">
                          {plan.price}
                        </span>
                        <span className="text-gray-400">/{plan.period}</span>
                        {plan.savings && (
                          <div className="mt-2 text-green-400 font-semibold text-sm">{plan.savings}</div>
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, j) => (
                          <li
                            key={j}
                            className="flex items-center text-gray-300 text-sm md:text-base"
                          >
                            <Check className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <div className="p-4 md:p-6 pt-0 mt-auto">
                      <Button
                        variant={plan.popular ? "gradient" : "outline"}
                        className="w-full text-base md:text-lg py-4 md:py-6 transition-all duration-300 hover:scale-105"
                      >
                        {plan.title === "Free" ? "Get Started" : "Start Free Trial"}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}     
      </Tabs>
      <div className="text-center mt-8 md:mt-12">
        <p className="text-gray-400 text-sm md:text-base">All plans come with a 14-day money-back guarantee</p>
      </div>
    </motion.section>
  );
};

export default PricingSection;