import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  skills: string[];
}

export default function TeamMemberCard({ name, role, bio, skills }: TeamMemberCardProps) {
  return (
    <div className="max-w-md mx-auto bg-rose-50/50 rounded-2xl shadow-lg p-6 border border-rose-200 flex flex-row gap-5 items-start">
  
      <Image
        className="w-24 h-24 rounded-full object-cover border-2 border-rose-400 shadow-sm shrink-0" 
        src="/bella.jpg"
        alt={name} 
        width={96}
        height={96}
      />
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-rose-950">{name}</h2>

        <h3 className={`${poppins.className} text-rose-600 font-medium text-sm`}>{role}</h3>
        <p className="mt-2 text-rose-900   text-sm leading-relaxed">{bio}</p>
        
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <li key={index} className="bg-rose-100 px-3 py-1 rounded-full text-xs font-semibold text-rose-800 border border-rose-200">
              {skill}
            </li>
          ))}
        </ul>
        <Link 
        href="https://solvro.pl"
        target="_blank"
        className="mt-6 inline-block w-full text-center py-2 px-4 bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-xl transition-colors text-sm"
      >
        Odwiedz strone solvro
      </Link>
      </div>
    </div>
  );
}
