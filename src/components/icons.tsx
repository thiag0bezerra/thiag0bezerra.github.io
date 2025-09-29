import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  CloudUpload,
  Code,
  ExternalLink,
  FileText,
  Github,
  Heart,
  Home,
  Lightbulb,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Search,
  Server,
  Sun,
  User,
  Users,
  X,
  Zap,
} from "lucide-react";

interface IconProps {
  className?: string;
}

export const AlertTriangleIcon = ({ className }: IconProps) => (
  <AlertTriangle className={className} />
);

export const ArrowLeftIcon = ({ className }: IconProps) => (
  <ArrowLeft className={className} />
);

export const ArrowRightIcon = ({ className }: IconProps) => (
  <ArrowRight className={className} />
);

export const BookOpenIcon = ({ className }: IconProps) => (
  <BookOpen className={className} />
);

export const CheckIcon = ({ className }: IconProps) => (
  <Check className={className} />
);

export const ChevronDownIcon = ({ className }: IconProps) => (
  <ChevronDown className={className} />
);

export const CloudUploadIcon = ({ className }: IconProps) => (
  <CloudUpload className={className} />
);

export const CodeIcon = ({ className }: IconProps) => (
  <Code className={className} />
);

export const ExternalLinkIcon = ({ className }: IconProps) => (
  <ExternalLink className={className} />
);

export const FileTextIcon = ({ className }: IconProps) => (
  <FileText className={className} />
);

export const GithubIcon = ({ className }: IconProps) => (
  <Github className={className} />
);

export const HeartIcon = ({ className }: IconProps) => (
  <Heart className={className} />
);

export const HomeIcon = ({ className }: IconProps) => (
  <Home className={className} />
);

export const LightbulbIcon = ({ className }: IconProps) => (
  <Lightbulb className={className} />
);

export const LinkedinIcon = ({ className }: IconProps) => (
  <Linkedin className={className} />
);

export const MailIcon = ({ className }: IconProps) => (
  <Mail className={className} />
);

export const MenuIcon = ({ className }: IconProps) => (
  <Menu className={className} />
);

export const SearchIcon = ({ className }: IconProps) => (
  <Search className={className} />
);

export const ServerIcon = ({ className }: IconProps) => (
  <Server className={className} />
);

export const MoonIcon = ({ className }: IconProps) => (
  <Moon className={className} />
);

export const SunIcon = ({ className }: IconProps) => (
  <Sun className={className} />
);

export const UserIcon = ({ className }: IconProps) => (
  <User className={className} />
);

export const UsersIcon = ({ className }: IconProps) => (
  <Users className={className} />
);

export const XIcon = ({ className }: IconProps) => <X className={className} />;

export const ZapIcon = ({ className }: IconProps) => (
  <Zap className={className} />
);
