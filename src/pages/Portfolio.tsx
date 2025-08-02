import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import projects1 from "@/assets/projects1.jpg";
import projects2 from "@/assets/projects2.webp";
import projects3 from "@/assets/projects3.jpg";
import projects4 from "@/assets/projects4.webp";
import projects5 from "@/assets/projects5.jpg";
import projects6 from "@/assets/projects6.jpg";
import projects7 from "@/assets/projects7.webp";
import projects8 from "@/assets/projects8.jpg";
import projects9 from "@/assets/projects9.jpg";

const Portfolio = () => {
  const categories = [
    "All",
    "Web Development",
    "UI/UX Design",
    "Mobile Apps",
    "E-commerce",
    "Branding",
  ];

  const projects = [
    {
      id: 1,
      title: "RetailConnect E-commerce",
      description:
        "A robust and scalable e-commerce platform built with modern web technologies, focusing on intuitive. user experience and high performance for online",
      image: projects1,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-commerce",
      type: "Web Development",
    },
    {
      id: 2,
      title: "InsightFlow SaaS Dashboard",
      description:
        "An intuitive Saas dashboard providing real-time analytics and data visualization, designed for businesses to monitor key performance indicators",
      image: projects2,
      tags: ["Design System", "React", "D3.js", "Analytics"],
      category: "SaaS",
      type: "UI/UX Design",
    },
    {
      id: 3,
      title: "TaskFlow Mobile App",
      description:
        "A cross-platform mobile application for seamless task management and team collaboration, built with a focus on user-friendly design and robust backend.",
      image: projects3,
      tags: ["Mobile App", "React Native", "Firebase", "UX/UI"],
      category: "Mobile App",
      type: "Mobile Apps",
    },
    {
      id: 4,
      title: "NexusCorp Company Site",
      description:
        "A modern and responsive corporate website designed to showcase company services, values, and team, enhancing brand presence and client.",
      image: projects4,
      tags: ["Corporate", "CMS", "SEO", "Responsive Design"],
      category: "Corporate",
      type: "Web Development",
    },
    {
      id: 5,
      title: "FinWise UI/UX Redesign",
      description:
        "Comprehensive UI/UX redesign for a banking application, focusing on improving user journey. accessibility, and visual appeal through a",
      image: projects5,
      tags: ["UI/UX", "Figma", "User Research", "Prototyping"],
      category: "Fintech",
      type: "UI/UX Design",
    },
    {
      id: 6,
      title: "Aroma Cafe Branding",
      description:
        "Developed a complete brand identity package including logo design, color palette, typography, and marketing collaterals for a new local coffee shop.",
      image: projects6,
      tags: ["Branding", "Logo Design", "Graphic Design", "Marketing"],
      category: "Branding",
      type: "Branding",
    },
    {
      id: 7,
      title: "MediCare Patient Portal",
      description:
        "Designed and developed a secure and user-friendly patient portal for a healthcare provider, streamlining appointment booking and access to medical records.",
      image: projects7,
      tags: ["Healthcare", "Security", "Web App"],
      category: "Healthcare",
      type: "Web Development",
    },
    {
      id: 8,
      title: "EduLearn Online Academy",
      description:
        "Built an engaging online learning platform with interactive course content, progress tracking, and secure payment integration for educational.",
      image: projects8,
      tags: ["Education", "E-learning", "React", "Stripe"],
      category: "Education",
      type: "Web Development",
    },
    {
      id: 9,
      title: "Wanderlust Travel Planner",
      description:
        "A comprehensive travel booking website offering destination discovery, flight and hotel reservations, and personalized itinerary planning for users.",
      image: projects9,
      tags: ["Travel", "Booking", "API Integration", "Responsive"],
      category: "Travel",
      type: "Web Development",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#bba5f4] via-[#d0b9d4] to-[#f0d3f8]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Our Creative Journey Through <br className="hidden sm:block" />
            Code
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Showcasing Excellence in Web Solutions
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            Explore a selection of our most impactful projects, each a testament
            to our commitment to cutting-edge web development, user-centric
            design, and measurable results. From innovative web applications to
            stunning e-commerce platforms, discover how ZenX Web Solutions
            brings visions to life.
          </p>
          <Button className="bg-[#6940da] text-white hover:bg-white hover:text-[#6940da] transition-all duration-300 shadow-md px-6 py-3 text-base sm:text-lg">
            Start Your Project Today →
          </Button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`rounded-full px-5 py-2 text-sm sm:text-base ${
                  index === 0
                    ? "bg-[#6940da] text-white"
                    : "text-black border-gray-300 hover:bg-[#6940da] hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group border-0 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-2xl border-b border-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-zenx-purple/10 text-zenx-purple"
                      >
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-zenx-purple transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full text-sm border-zenx-purple text-zenx-purple hover:bg-zenx-purple/10 hover:text-black transition-all duration-300"
                    >
                      View Details →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 mt-10 px-4 sm:px-6 lg:px-8 bg-gradient-cta">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Ready to Transform Your Digital <br className="hidden sm:block" />
            Presence?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build something extraordinary together. Contact us for a free
            consultation and bring your next big idea to life.
          </p>
          <Button className="bg-white text-gray-800 font-medium text-base px-6 py-3 hover:bg-white/90 transition-all duration-300 shadow-md">
            Schedule a Free Consultation →
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
