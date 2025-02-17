import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function FreelanceProjects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Built a full-stack e-commerce platform with advanced features",
      duration: "3 months",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      link: "https://project-url.com",
      github: "https://github.com/project",
      achievements: [
        "Implemented secure payment processing",
        "Built responsive admin dashboard",
        "Integrated inventory management",
      ],
    },
    // Add more projects
  ];

  return (
    <section className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Freelance Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <Badge variant="secondary">{project.duration}</Badge>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="list-disc list-inside space-y-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button variant="outline" asChild>
                <Link href={project.github}>
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={project.link}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
