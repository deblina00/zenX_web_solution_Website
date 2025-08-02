import { Button } from "@/components/ui/button";
import patternImg from "@/assets/pattern.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Smartphone,
  Palette,
  Search,
  Zap,
  Shield,
  ShoppingCart,
  Cpu,
  Lightbulb,
  DraftingCompass,
  PencilRuler,
  ChevronsLeftRight,
  Bug,
  Rocket,
} from "lucide-react";

const Services = () => {
  const coreServices = [
    {
      icon: <Code className="w-12 h-12 text-[#d5469c]" />,
      title: "Custom Frontend Development",
      description:
        "Building lightning-fast, scalable web applications using cutting-edge frameworks. We create exceptional user experiences that are functional and visually stunning.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#d5469c]" />,
      title: "Responsive Web Design",
      description:
        "Crafting pixel-perfect responsive designs that adapt seamlessly across all devices, from mobile phones to large desktop monitors.",
    },
    {
      icon: <Palette className="w-12 h-12 text-[#d5469c]" />,
      title: "UI/UX Design & Prototyping",
      description:
        "Designing beautiful interfaces and high-fidelity prototypes, focusing on usability and visual excellence.",
    },
    {
      icon: <Search className="w-12 h-12 text-[#d5469c]" />,
      title: "SEO Optimization",
      description:
        "Enhancing your website's visibility with advanced SEO strategies that drive organic traffic and improve your online presence.",
    },
    {
      icon: <Zap className="w-12 h-12 text-[#d5469c]" />,
      title: "Performance Optimization",
      description:
        "Delivering lightning-fast websites with streamlined architecture, advanced code splitting, and optimization techniques.",
    },
    {
      icon: <Shield className="w-12 h-12 text-[#d5469c]" />,
      title: "Website Maintenance & Support",
      description:
        "Keeping your website secure, updated, and performant through regular maintenance and ongoing support.",
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-[#d5469c]" />,
      title: "E-commerce Solutions",
      description:
        "Developing scalable e-commerce platforms with seamless UX, secure payment systems, and robust product management.",
    },
    {
      icon: <Cpu className="w-12 h-12 text-[#d5469c]" />,
      title: "API Integration",
      description:
        "Integrating external APIs and databases to enhance your platform’s capabilities and automate processes.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: <Lightbulb className="w-10 h-10 text-[#d5469c]" />,
      title: "Consultation & Discovery",
      description:
        "We start by understanding your vision, goals, and requirements through detailed consultation and research.",
    },
    {
      number: "02",
      icon: <DraftingCompass className="w-10 h-10 text-[#d5469c]" />,
      title: "Strategy & Planning",
      description:
        "Creating a comprehensive roadmap, selecting the right technologies, and developing the blueprint for success.",
    },
    {
      number: "03",
      icon: <PencilRuler className="w-10 h-10 text-[#d5469c]" />,
      title: "Design & Prototyping",
      description:
        "Pixel-perfect designs and wireframes that reflect your brand and resonate with your audience.",
    },
    {
      number: "04",
      icon: <ChevronsLeftRight className="w-10 h-10 text-[#d5469c]" />,
      title: "Development & Implementation",
      description:
        "Clean, scalable code using modern frameworks and best practices to build your web solution.",
    },
    {
      number: "05",
      icon: <Bug className="w-10 h-10 text-[#d5469c]" />,
      title: "Testing & QA",
      description:
        "Rigorous testing across devices and browsers to ensure a bug-free, performant experience.",
    },
    {
      number: "06",
      icon: <Rocket className="w-10 h-10 text-[#d5469c]" />,
      title: "Deployment & Launch",
      description:
        "Seamless deployment to production with continuous support post-launch for long-term success.",
    },
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "GraphQL", icon: "🔺" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Flutter", icon: "📱" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Firebase", icon: "🔥" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#7b4afc] via-[#a154f8] to-[#ff6ec4] overflow-hidden">
        <img
          src={patternImg}
          alt="Pattern"
          className="absolute inset-0 w-full object-cover opacity-20 z-0 pointer-events-none"
        />
        <div className="relative z-10 flex items-center justify-center min-h-[60vh]">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 lg:p-10 max-w-xl w-full text-center shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
              Innovate. Build.
              <br />
              Grow.
            </h1>
            <p className="text-white/90 text-base md:text-lg mb-5">
              Partner with ZenX Web Solutions to transform your digital vision
              into a compelling reality. We craft experiences that engage and
              convert.
            </p>
            <Button
              size="lg"
              className="bg-white text-gray-800 hover:bg-white/90 transition-all duration-300 shadow-elegant"
            >
              Start Your Project Today
            </Button>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5d3bbb] mb-12">
            Our Core Expertise
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreServices.map((service, i) => (
              <Card
                key={i}
                className="group border-0 shadow-card-shadow hover:shadow-elegant bg-gradient-card transition duration-300"
              >
                <CardContent className="p-6 flex flex-col h-full text-center">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-zenx-purple transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zenx-text-gray mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button className="mt-auto bg-zenx-purple text-white hover:bg-zenx-purple/90 transition duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-zenx-light-gray">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5d3bbb] mb-12">
            Our Proven Process
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <Card
                key={i}
                className="border-0 shadow-card-shadow bg-white text-center hover:shadow-elegant transition duration-300"
              >
                <CardContent className="p-8">
                  <div className="text-[#5d3bbb] font-bold text-2xl mb-2">
                    {step.number}
                  </div>
                  <div className="mb-4 flex justify-center">{step.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-zenx-text-gray leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5d3bbb] mb-12">
            Technologies We Master
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {technologies.map((tech, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="text-4xl mb-2 group-hover:shadow-elegant transition duration-300">
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-zenx-text-gray group-hover:text-zenx-purple transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-[#7b4afc] via-[#a154f8] to-[#ff6ec4]">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Online Presence?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let's build something extraordinary together. Contact us for a free
            consultation and bring your vision to life.
          </p>
          <Button
            size="lg"
            className="bg-white text-gray-800 hover:bg-white/90 transition duration-300 shadow-elegant"
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
