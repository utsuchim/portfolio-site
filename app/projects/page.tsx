import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data/projects";

export const metadata = {
  title: "プロジェクト一覧 | ポートフォリオ",
  description: "これまでに取り組んだプロジェクトの一覧です。",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            All Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            これまでに取り組んだプロジェクトの一覧です
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
