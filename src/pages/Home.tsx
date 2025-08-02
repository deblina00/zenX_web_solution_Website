import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Smartphone,
  Palette,
  Search,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import HeroBg from "@/assets/pattern.png";
import Profile1 from "@/assets/pro1.jpg";
import Profile2 from "@/assets/pro2.jpg";
import Profile3 from "@/assets/pro3.jpg";
import ProjectImg1 from "@/assets/project1.jpg";
import ProjectImg2 from "@/assets/project2.webp";
import ProjectImg3 from "@/assets/project3.jpg";
import ProjectImg4 from "@/assets/project4.jpg";

const Home = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-zenx-pink" />,
      title: "Custom Web Development",
      description:
        "Building scalable, high-performance web applications tailored to your business needs, from concept to deployment.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-zenx-pink" />,
      title: "Responsive Design",
      description:
        "Ensuring your website looks and functions flawlessly across all devices and screen sizes, delivering a consistent user experience",
    },
    {
      icon: <Palette className="w-12 h-12 text-zenx-pink" />,
      title: "Intuitive UX/UI Design",
      description:
        "Crafting engaging and user-friendly interfaces that captivate your audience and streamline their digital journey.",
    },
    {
      icon: <Search className="w-12 h-12 text-zenx-pink" />,
      title: "SEO Optimization",
      description:
        "Enhancing your website's visibility on search engines, driving arganic traffic and boosting your online presence",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-zenx-pink" />,
      title: "Strategic Consulting",
      description:
        "Providing expert advice and guidance to shape your digital strategy, ensuring optimal outcomes and sustainable growth.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-zenx-pink" />,
      title: "Post-Launch Support",
      description:
        "Ongoing maintenance, updates, and dedicated support to keep your web solution running smoothly and efficiently",
    },
  ];

  const whyChooseUs = [
    {
      title: "Innovation at Core",
      description:
        "We embrace cutting-edge technologies and creative solutions to build future-proof digital products that stand out.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "Your vision is our blueprint. We collaborate closely, ensuring every solution perfectly aligns with your goals and expectations.",
    },
    {
      title: "Pixel-Perfect Precision",
      description:
        "Our meticulous attention to detail ensures every design is flawlessly implemented, delivering an exceptional user experience",
    },
  ];

  const projects = [
    {
      title: "E-commerce Redesign for BloomCo",
      category: "Web Project",
      image: ProjectImg1,
    },
    {
      title: "Intuitive SaaS Dashboard for Apex Analytics",
      category: "Web Project",
      image: ProjectImg2,
    },
    {
      title: "Secure Patient Portal for Healthlink",
      category: "Web Project",
      image: ProjectImg3,
    },
    {
      title: "Mobile-First Food Ordering App: DineDirect",
      category: "Web Project",
      image: ProjectImg4,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${HeroBg})` }}
        ></div>

        <div className="container max-w-screen-xl mx-auto relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Elevate Your Digital
              <br />
              Presence with ZenX Web
              <br />
              Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Crafting exceptional web experiences that drive growth and deliver
              results. Bring your ideas to life in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                rounded="full"
                className="bg-[#6633d4] text-white hover:bg-[#6C4EC3] transition-all duration-300 shadow-elegant"
              >
                Start Your Project Today
              </Button>
              <Button
                size="lg"
                rounded="full"
                variant="outline"
                className="border-gray-400 text-[#7F56D9] hover:bg-white hover:text-[#7F56D9] transition-all duration-300"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Expertise, Your Success
            </h2>
            <p className="text-base sm:text-lg text-zenx-text-gray">
              At ZenX Web Solutions, we craft digital experiences that resonate.
              Our core services are designed to bring your vision to life with
              precision and impact
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-card-shadow hover:shadow-elegant transition-all duration-300 bg-gradient-card"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-zenx-text-gray leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    variant="link"
                    className="mt-4 text-zenx-purple p-0 h-auto font-semibold"
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 lg:px-8 bg-zenx-light-gray">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why ZenX Web Solutions?
            </h2>
            <p className="text-zenx-text-gray max-w-2xl mx-auto">
              We combine technical mastery with creative flair to deliver web
              solutions that not only look stunning but also drive tangible
              results for your business.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl text-pink-600 font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-zenx-text-gray">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl text-pink-600 font-semibold mb-3 text-foreground">
                Sustainable Solutions
              </h3>
              <p className="text-zenx-text-gray">
                We build robust, scalable, and maintainable web applications
                designed for long-term success and adaptability.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl text-pink-600 font-semibold mb-3 text-foreground">
                Transparent Communication
              </h3>
              <p className="text-zenx-text-gray">
                From day one, expect clear, honest, and continuous
                communication, keeping you informed every step of the way.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl text-pink-600 font-semibold mb-3 text-foreground">
                Proven Track Record
              </h3>
              <p className="text-zenx-text-gray">
                Our portfolio speaks volumes. We've helped numerous businesses
                achieve their digital ambitions with tangible results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Recent Projects
            </h2>
            <p className="text-base sm:text-lg text-zenx-text-gray">
              Explore a selection of our recent work, showcasing our dedication
              to impactful and user-centric web development.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group cursor-pointer border border-gray-200 hover:shadow-elegant transition-all duration-300 rounded-t-2xl"
              >
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col items-center justify-center text-center">
                    <h3 className="font-semibold text-xl text-gray-800 text-foreground mb-2">
                      {project.title}
                    </h3>
                    <Button
                      variant="outline"
                      className="mt-2 w-full text-base border-zenx-purple text-zenx-purple hover:bg-zenx-purple hover:text-white transition-all"
                    >
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="link" className="text-zenx-purple text-lg">
              View all projects →
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 lg:px-8 bg-zenx-light-gray">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg text-zenx-text-gray">
              Client stories from those who have experienced the transformative
              power of our web development solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[Profile1, Profile2, Profile3].map((profile, index) => (
              <Card
                key={index}
                className="border-0 shadow-card-shadow bg-white h-full flex flex-col"
              >
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <p className="text-zenx-text-gray italic mb-6 min-h-[120px]">
                    {
                      [
                        "ZenX Web Solutions transformed our online presence. Their attention to detail and proactive communication mode the entire process seamless. Highly recommended!",
                        "We needed a complete custom solution, and ZenX delivered beyond our expectations. Their team's expertise in frontend development is unparalleled.",
                        "The UI/UX design from ZenX completely elevated our product. Our users love the intuitive experience, and we've seen a  significant increase in engagement.",
                      ][index]
                    }
                  </p>
                  <div className="flex items-center mt-auto pt-6">
                    <img
                      src={profile}
                      alt="Client"
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">
                        {["Sarah Chen", "John Miller", "Mike Rodriguez"][index]}
                      </p>
                      <p className="text-sm text-zenx-text-gray">
                        {
                          [
                            "CEO, TechStart Solutions",
                            "Creative Director, Innovate",
                            "Business Owner, GrowthCorp",
                          ][index]
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lg:px-8 bg-gradient-cta">
        <div className="container max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Online Vision?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build something extraordinary together. Contact us for a free
            consultation and bring your next big idea to life.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              rounded="full"
              className="bg-[#6633d4] text-white text-base hover:bg-[#6C4EC3] transition-all duration-300 shadow-elegant"
            >
              Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
