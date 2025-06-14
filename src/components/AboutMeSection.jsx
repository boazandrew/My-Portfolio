import { Monitor } from "lucide-react";
import { Server } from "lucide-react";
import { ClipboardList } from "lucide-react";

export const AboutMeSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer & Experience-Focused Engineer
            </h3>

            <p className="text-muted-foreground">
              I'm a passionate full-stack developer who loves crafting clean,
              responsive, and user-centered web applications. With a strong
              foundation in both frontend and backend technologies, I aim to
              build experiences that are intuitive and efficient.
            </p>
            <p className="text-muted-foreground">
              Driven by curiosity and creativity, I continuously explore new
              tools and best practices to turn ideas into meaningful digital
              products. Every line of code is a step toward solving real-world
              problems with thoughtful design and solid engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#content" className="cosmic-button">
                {" "}
                Get in Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Designing interactive and user-friendly interfaces using
                    modern JavaScript frameworks and responsive design
                    principles.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Building robust server-side logic, RESTful APIs, and
                    database-driven applications for scalable and secure
                    performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Coordinating workflows, timelines, and collaboration to
                    ensure successful delivery of web projects from start to
                    finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
