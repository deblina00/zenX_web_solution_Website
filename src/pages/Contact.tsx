
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Mail,
  Twitter,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";
import skyline from "@/assets/images-1.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen pt-16 bg-background text-foreground">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="border-none shadow-none">
              <CardContent className="p-6 sm:p-8 border border-border rounded-2xl shadow-card-shadow bg-white">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
                  Get in Touch
                </h1>
                <p className="text-zenx-text-gray mb-6 sm:mb-8">
                  We'd love to hear from you! Fill out the form and we’ll get
                  back to you soon.
                </p>

                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      className="w-full bg-gray-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-gray-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject of your inquiry"
                      className="w-full bg-gray-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your project or inquiry..."
                      className="w-full h-32 resize-none bg-gray-100"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#6940da] hover:opacity-90 transition duration-300 shadow-md"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border border-border shadow-card-shadow bg-white">
              <CardContent className="p-6 sm:p-8 space-y-8">
                {/* Location */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                  <div className="w-full h-64 rounded-lg overflow-hidden relative">
                    <img
                      src={skyline}
                      alt="Our location"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-start space-x-3 mt-4">
                    <MapPin className="w-5 h-5 text-zenx-purple mt-1" />
                    <p className="text-zenx-text-gray">
                      123 Web Solutions Ave, Suite 400, Innovate City, CA 90210,
                      USA
                    </p>
                  </div>
                </div>

                {/* Direct Contact */}
                <div className="pt-6">
                  <h3 className="text-xl font-semibold border-b border-border pb-2 mb-4">
                    Direct Contact
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-zenx-purple" />
                      <span className="text-gray-700">
                        zemx2205@gmail.com / ronadipsil26@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-zenx-purple" />
                      <span className="text-zenx-text-gray">
                        Kolkata, West Bengal, India
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-10">
                  <h3 className="text-xl font-semibold border-b border-border pb-2 mb-4">
                    Connect with Us
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="icon"
                      variant="outline"
                      className="hover:bg-zenx-purple hover:text-white transition"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="hover:bg-zenx-purple hover:text-white transition"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="hover:bg-zenx-purple hover:text-white transition"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="hover:bg-zenx-purple hover:text-white transition"
                    >
                      <Instagram className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Button className="w-full bg-gradient-cta hover:opacity-90 transition duration-300 mt-4">
                  Schedule a Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
