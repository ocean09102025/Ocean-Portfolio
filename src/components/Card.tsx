import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
export default function Card({ children, className = '', onClick }: CardProps) {
  return <div className={`panel ${className}`} onClick={onClick}>{children}</div>
}
