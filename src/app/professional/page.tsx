import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfessionalExperience() {
  const experiences = [
    {
      company: "Tata Consultancy Services",
      role: "Senior Frontend Developer",
      duration: "2021 - Present",
      description: "Leading frontend development for enterprise applications",
      skills: ["React", "Next.js", "TypeScript", "Node.js"],
      achievements: [
        "Led team of 5 developers",
        "Improved application performance by 40%",
        "Implemented CI/CD pipelines",
      ],
    },
    // Add more experiences from your resume
  ];

  return (
    <section className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>
      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{exp.company}</CardTitle>
                  <p className="text-muted-foreground">{exp.role}</p>
                </div>
                <Badge variant="secondary">{exp.duration}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
              <ul className="list-disc list-inside space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
