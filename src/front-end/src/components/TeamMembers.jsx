import cuongImg from '../assets/1_DoanNgocCuong.jpg';
import anImg from '../assets/2_TờÂn.jpg';
import linhImg from '../assets/3_LýLinh.jpg';
import trangImg from '../assets/4_PhanTrang.jpg';
import longImg from '../assets/5_NguyễnLong.jpg';

function TeamMembers({ isDarkMode }) {
  const teamMembers = [
    {
      img: cuongImg,
      name: "Đoàn Cường",
      fb: "https://www.facebook.com/doanngoccuong.nhathuong",
      linkedin: "https://www.linkedin.com/in/doan-ngoc-cuong/",
      github: "https://github.com/DoanNgocCuong"
    },
    {
      img: anImg,
      name: "Tờ Ân",
      fb: "https://www.facebook.com/kaituo.01",
      linkedin: null,
      github: null
    },
    {
      img: linhImg,
      name: "Lý Linh",
      fb: "https://www.facebook.com/profile.php?id=100004107859002",
      linkedin: "https://www.linkedin.com/in/linh-ly-60371625a/",
      github: "https://github.com/Ly-Lynn"
    },
    {
      img: trangImg,
      name: "Phan Trang",
      fb: "https://www.facebook.com/profile.php?id=100030710033954",
      linkedin: "https://www.linkedin.com/in/phantrang10102003/",
      github: "https://github.com/trangphan10"
    },
    {
      img: longImg,
      name: "Nguyễn Long",
      fb: "https://www.facebook.com/nguyensongthienlong",
      linkedin: "https://www.linkedin.com/in/nguyensongthienlong",
      github: "https://github.com/IAmSkyDra"
    }
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Team Members</h2>
      <div className="flex flex-wrap items-center gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group">
            <img 
              src={member.img} 
              alt={member.name}
              className="w-16 h-16 rounded-full ring-2 ring-white group-hover:scale-105 transition-all"
              title={member.name}
            />
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full p-1 shadow-lg">
              <a 
                href={member.fb}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110"
                title={`${member.name}'s Facebook`}
              >
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {member.linkedin && (
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all hover:scale-110"
                  title={`${member.name}'s LinkedIn`}
                >
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {member.github && (
                <a 
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-all hover:scale-110"
                  title={`${member.name}'s GitHub`}
                >
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <span className="text-sm font-medium bg-white/90 dark:bg-gray-800/90 px-2 py-0.5 rounded-full shadow-sm">
                {member.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers; 