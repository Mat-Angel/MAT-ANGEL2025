type urlType = 'local' | 'external'
type skillName = 'HTML' | 'CSS' | 'Javascript' | 'Typescript' | 'Angular' | 'Angular Material' | 'Bootstrap' | 'Tailwind' | 'DaisyUI' | 'Firebase' | 'API Rest' | 'Python' | 'Excel'

interface CardData {
  title: string;
  imageUrl: string;
  url: string;
  urlType: urlType;
  description: string;
  completeDescription: string;
  skills: skillName[]
}

interface CertData {
  title: string;
  skill: skillName;
  description: string;
  imageUrl: string;
  fileUrl: string;
  author: string;
}


interface PdfInfo {
  title: string | null;
  fileUrl: string | null;
  showPDF: boolean;
}

interface SkillItem {
  id: number;
  name: skillName;
  icon: string;
  color: string;
}



