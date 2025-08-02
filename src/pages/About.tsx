import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBackground from "@/assets/hero2.jpg";
import journeyImage from "@/assets/journey.avif";
import { Lightbulb, Palette, Rocket, Users } from "lucide-react";
import ronodipImage from "@/assets/owner logo.png";


const About = () => {
  const journey = [
    {
      year: "2019",
      title:
        "Began self-learning frontend development, mastering HTML, CSS, and JavaScript fundamentals through online courses and personal projects. This initial spark of creation.",
    },
    {
      year: "2020",
      title:
        "Launched first personal projects, including a responsive blog and a small e-commerce site, gaining hands-on experience with user interfaces and basic backend interactions.",
    },
    {
      year: "2021",
      title:
        "Deep dive into the React ecosystem, understanding component-based architecture, state management, and building complex single-page applications with modern tooling.",
    },
    {
      year: "2022",
      title:
        "Founded ZenX Web Solutions, driven by the desire to provide bespoke frontend development services with a focus on quality and client collaboration. The official start of my journey.",
    },
    {
      year: "2023",
      title:
        "Expanded service offerings to include comprehensive UX/UI design, ensuring seamless user experiences, and SEO optimization strategies for improved online visibility.",
    },
    {
      year: "2024",
      title:
        "Establishing a strong reputation for delivering high-quality, user-centric web applications, leading to a growing client base and successful project deliveries.",
    },
  ];

 const whyChoose = [
   {
     icon: <Lightbulb className="w-8 h-8 text-[#c946d5]" />,
     title: "Innovation at Core",
     description:
       "We consistently explore cutting-edge technologies to deliver future-proof solutions that pioneer growth.",
   },
   {
     icon: <Users className="w-8 h-8 text-[#c946d5]" />,
     title: "Client-Centric Approach",
     description:
       "Our clients are always first. We clearly deliver amazing and cost-effective services with your comprehensive experience.",
   },
   {
     icon: <Palette className="w-8 h-8 text-[#c946d5]" />,
     title: "Uncompromising Craftsmanship",
     description:
       "Obsessed with pixel-perfect details, we build results-driven experiences that transform and create.",
   },
   {
     icon: <Rocket className="w-8 h-8 text-[#c946d5]" />,
     title: "Driven by Impact",
     description:
       "We don't just build websites; we build digital solutions that achieve measurable business objectives.",
   },
 ];


  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBackground})`,
          }}
        ></div>

        {/* Purple-Gray Overlay */}
        <div className="absolute inset-0 bg-[#6c4dbf]/30 backdrop-brightness-95"></div>

        {/* Hero Content */}
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Crafting Digital
                <br />
                Excellence from
                <br />
                Passion to Profession
              </h1>
              <p className="text-xl font-semibold text-gray-600 mb-8">
                A self-taught journey fueled by curiosity, creativity, and a
                relentless pursuit of pixel-perfect web solutions. Discover the
                story behind ZenX Web Solutions.
              </p>
              <Button
                size="lg"
                className="bg-[#5335a7] text-white text-base hover:opacity-90 transition-all duration-300 shadow-elegant"
              >
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="container mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5d3bbb] mb-4">
              My Journey: Building ZenX Web Solutions
            </h2>
            <p className="text-zenx-text-gray max-w-3xl mx-auto">
              From late-night coding sessions to leading a dedicated team, every
              line of code has been a step towards mastering a vision of digital
              excellence. What started as curiosity about how websites function
              and work has grown me to continuously learn and adapt to the
              ever-evolving landscape of frontend development.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Timeline */}
            <div className="relative pl-10">
              {/* Vertical line */}
              <div className="absolute top-0 left-4 w-0.5 h-full bg-zenx-purple"></div>

              {/* Timeline Items */}
              <div className="space-y-10">
                {journey.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Dot on the vertical line */}
                    <div className="absolute -left-6 -translate-x-1/2 top-2 w-4 h-4 bg-[#5d3bbb] rounded-full border-2 border-white z-10"></div>

                    {/* Year + Description */}
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold text-zenx-purple mb-1">
                        {item.year}
                      </h3>
                      <p className="text-zenx-text-gray">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center h-full">
              <img
                src={journeyImage}
                alt="Developer at work"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 lg:px-8 bg-zenx-light-gray">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose ZenX Web Solutions?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-card-shadow bg-white text-center hover:shadow-elegant transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-zenx-text-gray text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Visionary Section */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Meet the Visionary
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 shadow-lg">
                <img
                  src={ronodipImage}
                  alt="Ronodip Sil"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                Ronodip Sil
              </h3>
              <p className="text-zenx-purple font-medium mb-6">
                Founder & Lead Frontend Developer
              </p>

              <p className="text-zenx-text-gray leading-relaxed">
                Ronodip is the visionary behind ZenX, a self-taught maestro of
                modern web development dedicated to creating stunning,
                high-performance, and user-centric digital experiences. His
                passion lies in transforming complex ideas into elegant,
                intuitive web applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
