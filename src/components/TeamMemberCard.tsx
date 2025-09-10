interface TeamMemberProps {
    name: string;
    role: string;
    experience: string;
    reg?: string;
    img: string;
    index: number;
}

export const TeamMemberCard = ({ name, role, experience, reg, img, index }: TeamMemberProps) => {
    return (
        <div className={`bg-white rounded-xl shadow-lg overflow-hidden group hover-lift scroll-reveal`}>
            <div className="relative h-64 bg-purple-200 overflow-hidden">
                {img ? (
                    <img 
                        src={img} 
                        alt={`${name} - ${role}`} 
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-purple-900/40 text-white">
                        <p className="text-lg font-bold">{name.split(' ')[0]}'s Photo</p>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                        {reg && (
                            <span className="inline-block px-2 py-1 bg-lime-500 text-purple-900 text-xs font-bold rounded mb-2">
                                {reg}
                            </span>
                        )}
                        <p className="text-white text-sm">Experience: {experience}</p>
                    </div>
                </div>
            </div>
            <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-purple-900">{name}</h3>
                <p className="text-lime-600 font-medium">{role}</p>
            </div>
        </div>
    );
}
