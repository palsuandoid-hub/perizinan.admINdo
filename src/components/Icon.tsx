import {
  Building2,
  Calculator,
  Handshake,
  Sparkles,
  Check,
  Phone,
  Mail,
  MapPin,
  Clock,
  FileText,
  ShieldCheck,
  Users,
  Zap,
  HeartHandshake,
  MessageCircle,
  Lock,
  ChevronDown,
  ArrowRight,
  Star,
  Quote,
  type LucideIcon,
} from 'lucide-react';
import type { IconName } from '@/data/content';

type IconComponent = LucideIcon | React.FC<{ size?: number; strokeWidth?: number; className?: string }>;

function InstagramIcon({ size = 24, strokeWidth = 2, className }: { size?: number; strokeWidth?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 24, strokeWidth = 2, className }: { size?: number; strokeWidth?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon({ size = 24, strokeWidth = 2, className }: { size?: number; strokeWidth?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const map: Record<IconName, IconComponent> = {
  building: Building2,
  calculator: Calculator,
  handshake: Handshake,
  sparkle: Sparkles,
  check: Check,
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
  clock: Clock,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
  fileText: FileText,
  shieldCheck: ShieldCheck,
  users: Users,
  zap: Zap,
  heartHandshake: HeartHandshake,
  messageCircle: MessageCircle,
  lock: Lock,
  chevronDown: ChevronDown,
  arrowRight: ArrowRight,
  star: Star,
  quote: Quote,
};

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export default function Icon({ name, className = '', size = 24, strokeWidth = 2 }: IconProps) {
  const Cmp = map[name];
  return <Cmp className={className} size={size} strokeWidth={strokeWidth} />;
}
