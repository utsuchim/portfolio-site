import Hero from "@/components/Hero";

import SkillList from "@/components/SkillList";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              こんにちは！私はWeb開発者です。モダンなテクノロジーを使用して、
              ユーザーフレンドリーなWebアプリケーションを構築することに注力しています。
            </p>
            <p>
              常に新しい技術を学び、成長し続けることを心がけています。
              これまでは個人開発プロジェクトを中心に取り組んできましたが、
              今後はチームでの開発にも挑戦していきたいと考えています。
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Skills
          </h2>
          <SkillList />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
