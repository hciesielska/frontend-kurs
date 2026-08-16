interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  skills: string[];
}

export default function TeamMemberCard({ name, role, bio, skills }: TeamMemberCardProps) {
  return (
    <div className="max-w-md mx-auto bg-rose-50/50 rounded-2xl shadow-lg p-6 border border-rose-200 flex flex-row gap-5 items-start">
  
      <img 
        className="w-24 h-24 rounded-full object-cover border-2 border-rose-400 shadow-sm shrink-0" 
        src="/bella.jpg"
        alt={name} 
      />
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-rose-950">{name}</h2>
        <h3 className="text-rose-600 font-medium text-sm">{role}</h3>
        <p className="mt-2 text-rose-900   text-sm leading-relaxed">{bio}</p>
        
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <li key={index} className="bg-rose-100 px-3 py-1 rounded-full text-xs font-semibold text-rose-800 border border-rose-200">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
