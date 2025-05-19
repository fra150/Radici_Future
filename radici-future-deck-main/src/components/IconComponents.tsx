import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export function RootIcon({ className }: IconProps) {
  return (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L12 9M12 9L9 6M12 9L15 6M12 9L12 12M12 12L7 17M12 12L17 17M7 17C7 19.2091 8.79086 21 11 21H13C15.2091 21 17 19.2091 17 17" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function CityIcon({ className }: IconProps) {
  return (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 22H22M2 22V9L9 2L16 9V22M2 22H16M16 22H22M6 22V17H12V22M18 22V13H20V22" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function EducationIcon({ className }: IconProps) {
  return (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 10V17M22 10L12 5L2 10L12 15L22 10Z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 12V17C9 20 15 20 18 17V12" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function JailIcon({ className }: IconProps) {
  return (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 21V6C18 4.34315 16.6569 3 15 3H9C7.34315 3 6 4.34315 6 6V21M4 21H20M10 8H14M10 12H14M10.0001 16H14.0001" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function GovIcon({ className }: IconProps) {
  return (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 22H22M12 2L22 7H2L12 2ZM3 7H21V22H3V7ZM7 11.5V17.5M12 11.5V17.5M17 11.5V17.5" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function RobotIcon({ className }: IconProps) {
  return (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8.5V10.5M7 15.5H17M15.5 7.5C15.5 8.05228 15.0523 8.5 14.5 8.5C13.9477 8.5 13.5 8.05228 13.5 7.5C13.5 6.94772 13.9477 6.5 14.5 6.5C15.0523 6.5 15.5 6.94772 15.5 7.5ZM10.5 7.5C10.5 8.05228 10.0523 8.5 9.5 8.5C8.94772 8.5 8.5 8.05228 8.5 7.5C8.5 6.94772 8.94772 6.5 9.5 6.5C10.0523 6.5 10.5 6.94772 10.5 7.5ZM18 14V17.5C18 19.9853 15.3137 22 12 22C8.68629 22 6 19.9853 6 17.5V14M18 14C18 11.5147 15.3137 9.5 12 9.5C8.68629 9.5 6 11.5147 6 14M18 14H6M12 2C13.3807 2 14.5 3.11929 14.5 4.5V6.5H9.5V4.5C9.5 3.11929 10.6193 2 12 2Z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.0156 2C16.8093 2 19.8751 5.0658 19.8751 8.85949C19.8751 12.6532 16.8093 15.719 13.0156 15.719C16.8093 15.719 19.8751 18.7848 19.8751 22.5784M13.0156 15.719C9.22195 15.719 6.15615 12.6532 6.15615 8.85949C6.15615 5.0658 9.22195 2 13.0156 2M13.0156 15.719C9.22195 15.719 6.15615 18.7848 6.15615 22.5784" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function DatabaseIcon({ className }: IconProps) {
  return (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12V18C5 19.6569 8.13401 21 12 21C15.866 21 19 19.6569 19 18V12M5 12C5 13.6569 8.13401 15 12 15C15.866 15 19 13.6569 19 12M5 12C5 10.3431 8.13401 9 12 9C15.866 9 19 10.3431 19 12M5 6C5 4.34315 8.13401 3 12 3C15.866 3 19 4.34315 19 6C19 7.65685 15.866 9 12 9C8.13401 9 5 7.65685 5 6Z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function BrainIcon({ className }: IconProps) {
  return (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.9834 2C14.0867 2 14.9834 2.89543 14.9834 4C14.9834 4.74028 14.5765 5.38663 13.9834 5.73244C15.7055 6.29199 16.9834 7.96222 16.9834 10C16.9834 10.3453 16.9395 10.6804 16.8567 11C17.5009 11.1686 18.0852 11.5183 18.5417 12C19.3855 12.8439 19.3855 14.1561 18.5417 15C18.0852 15.4817 17.5009 15.8314 16.8567 16C16.9395 16.3196 16.9834 16.6547 16.9834 17C16.9834 19.2091 15.1925 21 12.9834 21H10.9834C9.87885 21 8.98342 20.1046 8.98342 19V14.937C8.41548 14.6792 7.98342 14.1158 7.98342 13.5C7.98342 13.0691 8.14779 12.6743 8.41795 12.372C7.51894 11.8553 6.98342 10.8929 6.98342 9.83333C6.98342 9.49904 7.04019 9.17847 7.14512 8.88089C6.80881 8.55231 6.59895 8.10321 6.59895 7.625C6.59895 6.72754 7.32649 6 8.22395 6C8.4596 6 8.681 6.0487 8.87949 6.13486C9.68464 5.42529 10.7883 5 11.9834 5C12.3266 5 12.6596 5.03745 12.9834 5.10887C12.9834 4.60278 12.9834 4 12.9834 4C12.9834 2.89543 12.0879 2 10.9834 2" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function MonitorIcon({ className }: IconProps) {
  return (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 21H16M12 17V21M6.8 17H17.2C18.8802 17 19.7202 17 20.362 16.673C20.9265 16.3854 21.3854 15.9265 21.673 15.362C22 14.7202 22 13.8802 22 12.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V12.2C2 13.8802 2 14.7202 2.32698 15.362C2.6146 15.9265 3.07354 16.3854 3.63803 16.673C4.27976 17 5.11984 17 6.8 17Z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3.46776C17.4817 4.20411 18.5 5.73314 18.5 7.5C18.5 9.26686 17.4817 10.7959 16 11.5322M18 16.7664C19.5115 17.4503 20.8725 18.565 22 20M2 20C3.94649 17.5226 6.58918 16 9.5 16C12.4108 16 15.0535 17.5226 17 20M14 7.5C14 9.98528 11.9853 12 9.5 12C7.01472 12 5 9.98528 5 7.5C5 5.01472 7.01472 3 9.5 3C11.9853 3 14 5.01472 14 7.5Z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function TokenIcon({ className }: IconProps) {
  return (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 14.5L5.5 17.5M8.5 9.5L5.5 6.5M15.5 14.5L18.5 17.5M15.5 9.5L18.5 6.5M12 4V20M21 12L3 12" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function MapIcon({ className }: IconProps) {
  return (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 20L3.55279 17.7764C3.214 17.6081 3 17.2627 3 16.8889V5.11111C3 4.49396 3.59695 4.04801 4.17678 4.22836L9 5.5M9 20L15 17M9 20V5.5M15 17L19.8232 18.7716C20.403 18.952 21 18.506 21 17.8889V6.11111C21 5.73731 20.786 5.39191 20.4472 5.22361L15 3M15 17V3" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function WebIcon({ className }: IconProps) {
  return (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H21M12 3V21M3.5 7.5L7 7M4 17H8M17 16.5L15.5 19L17.5 20.5M16.5 7L14.5 4.5L17 3M7.5 14.5L6 13L7.5 11.5" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
