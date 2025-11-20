import { skills, skillCategories } from "@/lib/data/skills";

export default function SkillList() {
  return (
    <div className="space-y-12">
      {skillCategories.map((category) => (
        <div key={category}>
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
