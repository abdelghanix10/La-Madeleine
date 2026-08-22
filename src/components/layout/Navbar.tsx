"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  MapPin,
  Phone,
  Home,
  UtensilsCrossed,
  ShoppingBag,
  Sparkles,
  MessageSquare,
  HelpCircle,
  X,
  Compass,
  Sparkle,
} from "lucide-react";
import { useTransitionRouter } from "next-transition-router";
import { useLanguage } from "@/providers/LanguageProvider";

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 29.5"
      className="w-8 h-8 fill-current hover:text-primary transition-colors duration-300"
    >
      <g>
        <path d="M8.7,10.1c-0.3,1.2,0.3,2.6-0.3,3.5c-1.1-0.1-3.1,0.3-3.3-1.1c0.3-0.8,0-1.5,0.2-2.3C6,9.9,7.6,10.1,8.7,10.1z M6.2,12c0.2-0.4,0.5-0.6,0.5-1C6.2,11,6,11.7,6.2,12z M6.5,12.3c0.3-0.3,0.7-0.8,0.7-1.2C6.9,11.5,6.6,11.8,6.5,12.3z M6.9,12.7c0.1,0,0.3,0,0.4,0c0.2-0.3,0.5-1.1,0.4-1.4C7.6,11.9,6.9,12,6.9,12.7z" />
        <path d="M21,11.3c0.2,0.2,0,0.6-0.1,0.9c-2.6,0.4-5.5-0.4-8.3-0.1c-0.7,0.1-3,0.7-2.7-0.7c0.4-0.1,0.8,0,1.2,0c1,0,2-0.3,2.9-0.3C16.3,11,18.6,11.5,21,11.3z" />
        <path d="M18,16.4c-0.1,0.2,0,0.6-0.2,0.8c-2.1,0-4.8,0.1-7.2-0.2C10.2,17,9.5,17,9.2,16.6c0.1-0.2,0.1-0.3,0.2-0.5C12.1,16.4,15.4,16.1,18,16.4z" />
        <path d="M7.3,19.8c0.3,0.8,0.1,1.8,0.3,2.5c-0.3,0-0.3,0.2-0.3,0.6c-0.7,0.1-1.5-0.5-2.1-0.5c-0.3,0-0.2,0.4-0.5,0.3c-0.1-0.1-0.3-0.1-0.4-0.2c0.2-1.2,0.1-2.2,0.3-3C5.5,19.7,6.2,19.9,7.3,19.8z M6.4,21.9c0.2,0.1,0.3-0.3,0.1-0.3C6.5,21.7,6.4,21.7,6.4,21.9z" />
        <path d="M25.6,9c0.8-0.5,1.3-1.4,2.1-2.2c0.4-0.4,0.8-0.7,1.2-1c0.4-0.3,0.6-0.9,1.2-0.9c0.7,0.1,0.9,0.9,1.3,1.4c0.2,0.3,0.5,0.4,0.7,0.7c-0.8,1.7-2,2.9-3.1,4.4c-0.3,0.5-0.8,0.9-1,1.5c-1,0.9-1.7,2.1-2.7,3c0,0.3-0.1,0.7-0.3,0.9c0.2,1.7-0.2,3.5-0.4,5.3c-0.3,2.4-0.3,4.8-1.1,6.6c-3.2,0.2-6.4-0.2-9.7-0.7c-3.2-0.5-6.7-0.1-10.5-0.4c-0.9-0.1-1.8-0.5-2.3-0.9c0.1-3,0.3-6.5,0.6-9.5c0.2-2,0.6-4.2,0.9-6.4c0.3-2.4,0.4-4.8,0.8-7.2c0-0.2,0.2-0.4,0.2-0.6c0-0.4-0.4-0.6-0.2-1c3.8,0,8.5-0.5,12.9-0.3c1,0.1,2.1,0,3.2-0.1c1.4-0.1,2.4,0,3.6-0.2c1.3,1,2.1,2.6,3,4C26.3,6.4,25.7,7.7,25.6,9z M4.1,2.6C3.5,8,2.7,13.5,2.2,18.7C2,20.6,1.8,23,2,24.6c-0.2,0.3-0.2,0.9-0.2,1.3c0.5,0.5,1.3,0.6,2.1,0.6c2.4,0.1,5.1-0.2,7.8,0.1c1.2,0.1,2.4,0.2,3.6,0.4c0.6,0.1,1,0.1,1.6,0.1c0.3,0,0.6,0.2,1,0.2c1.7,0.2,3.4,0.2,5,0c0.6-3.4,1-7.2,1.3-10.2c-1,1-2.2,2.4-3.3,3.9c-0.2,0.3-0.4,0.7-0.6,1c-0.2,0.2-0.6,0.3-0.9,0.5c-0.3,0.2-0.6,0.4-0.9,0.5c-0.4,0.2-1.6,0.9-2.1,0.6c-0.3-0.2-0.1-0.6-0.3-0.9c-1.1,0.2-2.1,0.2-3.3,0.2c-0.8,0-1.6,0-2.2-0.1c-0.2,0-0.4-0.2-0.6-0.2c-0.5-0.1-1.5,0.1-1.4-0.5c0.1-0.4,0.6-0.3,1.1-0.3c1.9,0.1,4.2,0.3,6.1,0.2c0.2-0.3,0.5-0.4,0.9-0.5c0.5-1.2,0.7-2.3,1.4-3.3c0.7-0.9,1.5-1.7,2.2-2.5c1.4-1.7,2.7-3.6,4.3-5.2c-0.1-1.3,0.3-2.7,0.5-4c-0.9,0.1-1.6,0.4-2.6,0.5c-0.1,0.4-0.1,1.2-0.5,1.4c-0.3,0.2-0.7,0-1.2-0.1c-1-0.1-2.2,0.1-3.5,0.1c-1.6,0-3.5,0.1-5.1,0.1c-1.1,0-2.3-0.1-3.3-0.2C8,8,7.1,8.2,6.6,8C6.3,7.9,6.1,7.4,5.8,7.3c0-1,0.1-2.4,0.7-2.9C11,5,16.5,4.1,20.7,4.7c0.3-0.9,0.8-1.6,1-2.6C16,2.6,9.5,2,4.1,2.6z M23,2.5c-0.3,0.7-1,1.4-1,2.1c0.4-0.7,1.1-1.4,1.2-2.1C23.1,2.5,23,2.5,23,2.5z M23.4,4c0.2-0.1,0.4-0.2,0.5-0.5C23.6,3.6,23.5,3.8,23.4,4z M24.1,4.1c-0.4,0.6-0.9,1.1-1.3,1.7c0.9-0.2,0.9-1.2,1.6-1.7C24.3,4.1,24.2,4.1,24.1,4.1z M22.1,5.9c0.4-0.1,0.4-0.4,0.6-0.7c0.2-0.2,0.7-0.8,0.6-1C22.9,4.8,22.4,5.2,22.1,5.9z M23.7,5.7c0.7,0,0.7-0.7,1-0.9c0-0.1-0.1-0.1-0.2-0.2C24.3,5,23.8,5.2,23.7,5.7z M21.6,5.7c0.3,0,0.6-0.6,0.4-0.6C21.9,5.3,21.6,5.4,21.6,5.7z M6.8,6.4c0.1-0.3,0.4-0.5,0.4-1C6.7,5,6.6,6.2,6.8,6.4z M14.5,7.4c1-0.1,2.1-0.2,3.2-0.2c1,0,2.1,0.1,3.2,0.2c-0.1-0.1-0.2-0.2-0.3-0.3C19.2,6.2,17.3,6,15.2,6C13,6,11.2,6.2,9.8,7.1C9.7,7.2,9.6,7.3,9.5,7.4C11,7.4,12.8,7.4,14.5,7.4z M9.3,8.2c-0.3,0.1-0.6,0.3-1,0.3c-0.3,0-0.8,0-1.1,0.1C6.9,7.8,5.6,8.1,4.4,8.4C4.2,8.5,4,8.5,3.8,8.6C3.6,8.6,3.3,8.7,3.1,8.8C4.1,8.3,5.3,7.9,6.5,7.9c0.9,0,1.9,0.1,2.8,0.3z M8.9,9c0,0,0.1,0,0.1,0C9.1,8.7,9.3,8.4,9.6,8.1c0.1,0,0.2,0,0.3,0C10.1,8.6,10.6,9.2,11.2,9.7c0,0,0.2,0.1,0.3,0.1c0.3,0,0.6-0.1,0.9-0.1c0.2,0,0.5,0.1,0.7,0.1c0.1,0,0.3,0,0.4,0c-0.2-0.5-0.3-1.1-0.5-1.6c-0.3,0-0.6,0-0.9,0c-1.2,0-2.3-0.1-3.5-0.1c-0.3,0-0.5,0-0.8,0C8.1,8.7,8.5,8.9,8.9,9z" />
        <path d="M8.4,14.8c-0.1,1,0.1,2.3-0.3,3C6.7,18,5.7,18,4.6,17.8C4.2,17,4.8,16,4.7,15C5.6,14.6,7.2,14.7,8.4,14.8z M6.1,16.7c0.1,0,0.2,0.1,0.3,0.1c0.1-0.4,0.5-0.7,0.6-1.2C6.5,15.9,6.2,16.3,6.1,16.7z M6.7,17.1c0.3-0.1,0.5-0.6,0.5-0.9C7.1,16.6,6.7,16.7,6.7,17.1z M7.3,17.1c0.1,0,0.2,0,0.2,0c0-0.1,0.1-0.3-0.1-0.3C7.4,16.9,7.3,16.9,7.3,17.1z" />
      </g>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 28"
      className="w-8 h-8 fill-current hover:text-primary transition-colors duration-300"
    >
      <g>
        <path d="M19.7,11.4c1,0,1.3,1.8,1.6,2.6c0.4,1.3,0.7,2.5,0.7,3.7c0,1.3-0.4,2.5-0.9,3.6c-0.3,0.9-0.8,1.5-1.3,2.2 c-0.5,0.6-0.9,1-1.6,1.5c-0.4,0.2-0.6,0.6-0.9,0.8c-0.4,0.3-1,0.5-1.5,0.7c-0.5,0.3-1.1,0.4-1.7,0.5c-0.2,0.1-0.5,0.3-0.7,0.3 c-0.9,0.2-1.9,0.1-2.8,0.1c-1.5,0-2.9,0.1-4.2-0.4c-0.3-0.1-0.7-0.3-1-0.5c-2-1-3.6-2.8-4.6-5c-0.1-0.3-0.3-0.5-0.4-0.7 C0,19.7-0.1,17.7,0.1,16c0.1-1.2,0.4-2.6,0.8-3.6c0.4-1,0.7-1.6,1.4-2.5c0.5-0.7,1-1.1,1.6-1.7c0.5-0.5,1-0.8,1.8-1.3 C6,6.6,6.6,6.2,7,6.1C7.8,5.9,8.4,6,9.3,5.8c0.3-1.2,0.6-2.3,1.3-3.1c0.5-0.6,1.7-1.6,2.6-1.9c0.6-0.2,1.4-0.3,2.1-0.4 c3-0.4,5.3,2,5.5,4.6c0,0.8,0.1,1.8,0,2.6C20.7,9.1,20.2,10.3,19.7,11.4z M16.8,1.4c-1.1,0.5-2.2,1.4-3.4,1.8 c-0.1,0.1,0,0.3-0.1,0.4C12.2,4.4,11,5.1,10,6c0,0.1,0,0.2,0,0.3c1.1-0.8,2.1-1.7,3.2-2.4c1.3-0.8,2.8-1.4,3.9-2.4 C17,1.4,16.8,1.4,16.8,1.4z M14.8,1.5c-0.1,0.1-0.2,0.2-0.3,0.2c-0.3,0.2-0.8,0.4-1.2,0.6c-0.3,0.2-0.9,0.4-0.8,0.8 c0.7-0.2,1.4-0.9,2-1.3C14.6,1.8,15.1,1.6,14.8,1.5C14.9,1.5,14.9,1.5,14.8,1.5z M11.7,3.1c0.7-0.4,1.5-0.8,2.1-1.4 C13,1.9,12.3,2.5,11.7,3.1z M18.1,1.9c-0.5,0.6-1.4,0.8-1.9,1.5c0.1,0,0.3,0,0.4,0c0.6-0.4,1.3-0.7,1.8-1.3 C18.3,2,18.2,1.9,18.1,1.9z M15.1,3.2c0.1,0.1,0.3,0,0.5,0c0.3-0.3,1-0.5,1.3-0.8c0,0,0.2-0.3,0.1-0.3C16.3,2.5,15.7,2.8,15.1,3.2z M18.7,2.4c-0.5,0.4-1.2,0.7-1.7,1c0.2,0.9,1.7-0.6,1.9-0.9C18.9,2.5,18.9,2.4,18.7,2.4z M19.2,3C18.8,3.4,18,3.5,17.6,4 c0.1,0.2,0.2,0.3,0.4,0.3c0.5-0.4,1.1-0.6,1.5-1.1C19.5,3.1,19.4,3,19.2,3z M11.4,4.6c0.4-0.3,1.4-0.9,0.8-1.2 c-0.7,0.6-1.9,0.9-1.9,2C10.5,5.2,10.9,4.9,11.4,4.6z M11,3.7c0.1,0,0.2-0.1,0.2-0.2C11.1,3.4,11.1,3.6,11,3.7z M18.1,4.6 c0,0.2,0,0.2,0,0.3c0.7-0.2,1.3-0.6,1.6-1.1C19.2,3.8,18.7,4.4,18.1,4.6z M17.8,5.9c-0.4-1.8-3-2.5-4.3-1c-1,1.4-0.3,3.9,1.4,4.2 C15,9.1,15,9.3,15.1,9.4C16.8,9.2,18.3,7.7,17.8,5.9z M18.6,5.7c0.6-0.3,1.6-0.5,1.4-1.3C19.4,4.8,18.1,4.9,18.6,5.7z M12.5,4.9 c-0.6,0.6-1.8,1.1-2.4,1.8C10,6.7,10,7,10,7.1c0.7-0.4,1.5-1.2,2.1-1.7c0.2-0.2,0.5-0.3,0.5-0.6C12.6,4.9,12.5,4.9,12.5,4.9z M18.6,6.1c-0.1,0.3-0.1,0.5,0,0.8c0.3-0.1,0.6-0.4,0.9-0.6c0.2-0.2,0.7-0.4,0.6-0.8C19.5,5.6,19.1,5.8,18.6,6.1z M10.1,7.6 c-0.1,0.1,0,0.4,0,0.5c0.5-0.4,1.1-0.9,1.6-1.3C12,6.6,12.5,6.5,12.3,6C11.4,6.4,10.8,7,10.1,7.6z M20,6.7c-0.6,0.7-1.9,0.9-2,1.9 c0.8-0.5,1.5-1.1,2.1-1.8C20.2,6.7,20.1,6.6,20,6.7z M18.4,7.3C18.8,7.3,19,7,19.2,6.8C18.9,6.9,18.5,6.9,18.4,7.3z M6.8,7.4 C6.5,7.7,6.4,8.5,6.2,8.9c0,0-0.1,0.1,0,0c-0.2,0.8-0.3,1.7-0.4,2.4c1.2-0.2,2.5-0.2,3.7-0.4C9.4,9.5,9.5,8.3,9.3,6.9 C8.4,6.8,7.2,6.8,6.8,7.4z M12.2,7c-0.4,0.1-1.9,1.1-1.9,1.4c-0.1,0.4,0.2,0.8,0.4,1.1c0.3-0.3,0.7-0.6,1.1-0.9 c0.4-0.3,1-0.5,0.8-1c-0.8,0.3-1.3,0.9-2,1.3C10.9,8,11.9,7.8,12.4,7C12.3,7,12.3,7,12.2,7z M17.2,9.7c-0.1,0-0.1-0.1-0.3-0.1 C16.7,9.8,17,9.8,17,10c-0.2,0.2-0.6,0.4-0.6,0.8c-1.3,0.9-2.7,1.6-3.7,2.7c0.1,0.2,0.2,0.4,0.4,0.4c1.2-1.1,2.4-2.2,3.8-3.2 c0-0.1,0-0.2,0-0.2c0.8-0.9,1.9-1.5,2.8-2.3c0.1-0.1,0.3-0.3,0.3-0.6C19,8.2,18.1,8.9,17.2,9.7z M5.5,8.2c-1.4,1.2-2.7,2.5-3.4,4.3 c1-0.2,1.8-0.6,2.8-0.9C5,10.4,5.4,9.3,5.5,8.2C5.6,8.2,5.6,8.2,5.5,8.2z M12.7,8.4c-0.1,0-0.2,0.2-0.3,0.3 c-0.6,0.4-1.9,0.9-1.6,1.6c0.2-0.1,0.3-0.3,0.5-0.5c0.5-0.5,1.2-0.8,1.6-1.4C12.8,8.4,12.8,8.4,12.7,8.4z M17.7,10.2 c0.1,0,0.1,0.2,0.3,0.2c0.6-0.4,1-0.9,1.6-1.3C19.7,9,20,9,19.9,8.7c0-0.1-0.1-0.1-0.1-0.1C19.2,9.2,18.2,9.5,17.7,10.2z M13.1,8.9 c-0.7,0.6-1.5,1-2.1,1.7c0,0.2,0.1,0.2,0.1,0.3c0.5-0.2,0.8-0.6,1.1-0.9c0.5-0.2,0.9-0.5,1.2-1C13.3,9,13.3,8.9,13.1,8.9z M12.5,10.3c-0.6,0.4-1.3,0.6-1,1.4c0.7-0.7,1.7-1.3,2.3-2C13.3,9.5,13,10,12.5,10.3z M17.8,11c0.2,0,0.2,0.2,0.4,0.2 c0.3-0.6,1.5-0.8,1.3-1.6C19,10.1,18.3,10.4,17.8,11z M16.2,9.9c-0.4,0-0.6,0.3-0.9,0.5c-0.9,0.6-2,1.2-2.7,1.8 c-0.2,0-0.5,0.1-0.6,0.2c0.1,0.3,0.2,0.5,0.4,0.6C13.6,11.9,15,11,16.2,9.9C16.3,9.9,16.2,9.9,16.2,9.9z M14.4,10 c-0.2,0.3-0.7,0.4-1,0.7c-0.3,0.2-0.6,0.5-0.8,0.7c-0.3,0.2-0.8,0.4-0.7,0.9c0.6-0.1,1-0.8,1.6-1.1c0.8-0.1,1.2-0.6,1.7-1 C14.9,10,14.6,10,14.4,10z M13.4,14.2c0.1,0.1,0.1,0.3,0.3,0.3c1.1-1.2,2.4-2.1,3.7-3.1c-0.2-0.2,0.1-0.4-0.1-0.5 C15.9,11.8,14.5,12.8,13.4,14.2z M14,14.6c0,0.1,0.2,0.2,0.2,0.2c1.3-0.9,2.2-2.2,3.6-3c0,0.1,0.1,0.1,0.1,0.2c-1,1-2.6,1.8-3.4,3 c0.2,0.1,0.3,0.2,0.5,0.2c0.6-0.9,1.5-1.4,2.3-2c0.1,0,0.2,0,0.3,0c0.2-0.3,0.4-0.7,0.7-1.1c0.2-0.4,0.6-0.7,0.5-1.1 C17,12,15.3,13.1,14,14.6z M10.2,11.8c-0.2,1.4,0,3.2,0,4.9c2.1,0.2,3.5,0.2,5.7,0.2c0-0.2,0.1-0.2,0-0.4c-0.2-0.1-0.3,0.2-0.6,0.1 c-0.3-0.2-0.5-0.5-0.7-0.8c-1.8-0.8-2.9-2.4-3.8-4C10.6,11.8,10.4,11.8,10.2,11.8z M5.6,12.4c-0.1,1.4-0.3,3-0.3,4.2 c1.2,0.3,2.6,0.2,4,0.2c0.1-1.7,0.1-3.4,0-4.9C8.2,11.9,6.7,12.1,5.6,12.4z M19,12.6c-0.6,1.1-1.5,2-2.3,2.9c0.1,0.5,0,0.9,0.1,1.3 c1.3,0,2.8,0.3,4,0.1C20.9,15.3,19.9,13.4,19,12.6z M1.6,13.7c-0.4,0.9-0.5,2-0.7,3.1c1.2,0.1,2.4,0.1,3.6,0c0-1.1,0.4-2.8,0.2-4 C3.6,13,2.6,13.4,1.6,13.7z M15.3,15.5c0.7,0.2,1-0.8,1.5-1.2C16.2,14.6,15.6,14.9,15.3,15.5z M0.9,17.7c0,0.9,0.1,1.8,0.3,2.5 c0.9,0.7,2.1,1,3.5,1.3c0.1-1.3-0.1-2.6-0.2-3.8C3,17.7,2.1,17.6,0.9,17.7z M5.2,17.8c0.1,1.2,0.2,2.6,0.3,3.8 C6.7,21.9,8.2,22,9.6,22c-0.1-1.5-0.1-2.8-0.2-4.3c-1.2,0-2.7-0.1-4-0.1C5.3,17.6,5.2,17.7,5.2,17.8z M10.2,17.8 c0,1.5,0,2.8,0.2,4.3c1.5,0.2,3.3,0,4.9-0.2c0.4-1.1,0.6-2.7,0.6-3.9C14.3,17.7,12,17.6,10.2,17.8z M16.7,17.9 c0,1.2-0.3,2.5-0.5,3.6c1.5,0.1,2.7-0.8,4-0.9c0.4-0.7,0.6-1.6,0.6-2.6C19.4,17.8,18.3,17.9,16.7,17.9z M5.5,25.4 c-0.3-1-0.5-2.1-0.7-3.1c-1.2-0.2-2-0.6-3.1-1C2.5,23.2,3.5,24.8,5.5,25.4z M15.9,22.6c-0.3,1.1-0.7,2-1,3c2.2-0.6,3.7-2,4.8-3.8 C18.4,21.9,17.2,22.4,15.9,22.6z M5.7,22.5c0,0.5,0.2,1.2,0.3,1.8c0.1,0.5,0.3,1.3,0.6,1.5c0.3,0.3,1.2,0.3,1.8,0.5 c0.4,0.1,0.8,0.3,1.2,0.1c-0.1-0.8,0.2-2.3,0-3.5C8.2,22.8,7.1,22.7,5.7,22.5z M10.4,23c0,1.1,0.1,2.5,0,3.6c1.3,0,2.3-0.2,3.3-0.5 c0.6-1,1.1-2.1,1.4-3.4C13.6,22.9,11.8,22.9,10.4,23z" />
      </g>
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const transitionRouter = useTransitionRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { language, setLanguage, data, t, dir } = useLanguage();
  const hours = data.siteConfig.hours[0];

  const { scrollY } = useScroll();
  const [mobileHidden, setMobileHidden] = useState(false);
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    lastScrollY.current = latest;

    if (mobileOpen) {
      setMobileHidden(false);
      return;
    }

    if (latest < 40) {
      setMobileHidden(false);
      return;
    }

    const diff = latest - previous;
    if (diff > 8) {
      setMobileHidden(true);
    } else if (diff < -8) {
      setMobileHidden(false);
    }
  });

  const mainNavLinks = [
    { href: "/", label: t("home"), icon: Home },
    { href: "/menu", label: t("menu"), icon: UtensilsCrossed },
    { href: "/shop", label: t("shop"), icon: ShoppingBag },
    { href: "/about", label: t("about"), icon: Sparkles },
  ];

  const infoNavLinks = [
    { href: "/contact", label: t("contact"), icon: MessageSquare },
    { href: "/faq", label: t("faq"), icon: HelpCircle },
  ];

  const dynamicNavLinks = [...mainNavLinks, ...infoNavLinks];

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const handleMenuToggle = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setMobileOpen((prev) => !prev);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating]);

  const handleNavigate = useCallback(
    (href: string) => {
      if (pathname === href) {
        closeMobile();
        return;
      }
      closeMobile();
      // Trigger smooth transition through next-transition-router
      transitionRouter.push(href);
    },
    [pathname, closeMobile, transitionRouter],
  );

  return (
    <>
      {/* Top bar — Desktop */}
      <div className="bg-dark text-cream/80 text-xs tracking-widest uppercase hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${data.siteConfig.phone}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone size={12} />
              {data.siteConfig.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={12} />
              {data.siteConfig.address}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>
              {hours.day}: {hours.time}
            </span>
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-cream/10 border border-cream/20 px-2 py-1 rounded-xs">
              {(["en", "fr", "ar"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-0.5 uppercase tracking-wider text-[10px] transition-colors cursor-pointer rounded-xs font-semibold ${
                    language === lang
                      ? "bg-primary text-dark"
                      : "text-cream/60 hover:text-cream"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logo section — hidden on mobile, visible on desktop */}
      <div className="bg-background hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-14 flex justify-center">
          <Link href="/" className="shrink-0">
            <motion.div
              className="text-center flex gap-2 items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/logo.webp"
                alt={data.siteConfig.name}
                width={120}
                height={120}
                style={{ width: "auto", height: "auto" }}
                className="mx-auto mb-4"
              />
              <div>
                <h1 className="font-serif text-5xl xl:text-6xl tracking-wider leading-none text-dark">
                  {data.siteConfig.name.split(" ").slice(0, 2).join(" ")}
                </h1>
                <p className="text-[10px] tracking-[0.4em] uppercase mt-2 text-primary">
                  {data.siteConfig.tagline}
                </p>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Styled divider (Desktop only) */}
      <hr className="hidden lg:block border-t-2 border-dark/10 dark:border-dark/20 bg-transparent" />

      {/* Fixed on mobile (hides on scroll down), Sticky on desktop nav row (always sticky and visible) */}
      <div
        className={`fixed lg:sticky top-0 left-0 right-0 z-40 transition-transform duration-300 ease-out ${
          mobileHidden && !mobileOpen ? "-translate-y-full lg:translate-y-0" : "translate-y-0"
        }`}
      >
        <nav className="transition-all duration-500 border-b bg-background/95 backdrop-blur-md border-dark/10 shadow-xs">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
            {/* Mobile: logo left */}
            <Link
              href="/"
              onClick={() => {
                if (mobileOpen) closeMobile();
              }}
              className="lg:hidden shrink-0 flex items-center gap-3"
            >
              <Image
                src="/images/logo.webp"
                alt={data.siteConfig.name}
                width={36}
                height={36}
                style={{ width: "auto", height: "auto" }}
              />
              <span className="font-serif text-xl tracking-wider text-dark">
                {data.siteConfig.name.split(" ").slice(0, 2).join(" ")}
              </span>
            </Link>

            {/* Desktop: left icon */}
            <Link
              href="/menu"
              className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-cream/60 text-dark hover:bg-cream transition-colors"
            >
              <MenuIcon />
            </Link>

            {/* Center nav links (desktop only) */}
            <div className="hidden lg:flex items-center gap-10">
              {dynamicNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-primary nav-link active font-medium"
                      : "text-text hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop: right icon */}
            <a
              href="https://maps.app.goo.gl/Z5memQUhJrBtShyx7"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-cream/60 text-dark hover:bg-cream transition-colors"
            >
              <LocationIcon />
            </a>

            {/* Mobile menu trigger */}
            <button
              ref={menuButtonRef}
              className="lg:hidden relative z-50 p-2 flex items-center justify-center w-12 h-12 rounded-full hover:bg-dark/5 active:scale-95 transition-all text-dark cursor-pointer"
              onClick={handleMenuToggle}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-7 h-7 text-dark" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MenuIcon />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      {/* Spacer placeholder for fixed mobile header so content starts below navbar */}
      <div className="h-16 lg:hidden" aria-hidden="true" />

      {/* Redesigned Mobile Menu Modal / Sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-dark/65 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              onClick={closeMobile}
            />

            {/* Floating Card Sheet */}
            <motion.div
              className="relative z-10 w-full max-w-sm max-h-[92dvh] bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col border border-cream-dark/60"
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{
                type: "spring",
                damping: 26,
                stiffness: 300,
                mass: 0.8,
              }}
              dir={dir}
            >
              {/* Top Curved Organic Header */}
              <div className="relative bg-dark text-cream shrink-0 pt-4 px-5 pb-8 overflow-hidden select-none">
                {/* Header top bar */}
                <div className="flex items-center justify-between relative z-10">
                  {/* Brand signature mark on top left */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Sparkle size={14} className="fill-current text-primary" />
                    </div>
                    <span className="font-serif text-lg tracking-wider text-cream font-light">
                      la madeleine
                    </span>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={closeMobile}
                    aria-label="Close menu"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 flex items-center justify-center text-cream transition-all cursor-pointer"
                  >
                    <X size={17} />
                  </button>
                </div>

                {/* Profile / Bakery Identity Hero inside curved top */}
                <div className="mt-3 text-center flex flex-col items-center relative z-10">
                  <div className="relative w-16 h-16 rounded-full ring-2 ring-primary/60 p-1 bg-cream/10 shadow-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/logo.webp"
                      alt={data.siteConfig.name}
                      width={52}
                      height={52}
                      className="object-contain"
                    />
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl tracking-wide text-white mt-2 font-medium">
                    {data.siteConfig.name.split(" ").slice(0, 2).join(" ")}
                  </h2>
                  <p className="text-[11px] text-cream/70 font-sans tracking-wide mt-0.5">
                    {language === "fr"
                      ? "L'art de la pâtisserie artisanale"
                      : language === "ar"
                        ? "فن المخبوزات والحلويات الفرنسية"
                        : "Artisanal Bakery & Salon de Thé"}
                  </p>
                </div>

                {/* Organic Concave Wave Curve at bottom of header */}
                <div className="absolute -bottom-2 -left-1 -right-1 overflow-hidden leading-none z-0 pointer-events-none">
                  <svg
                    viewBox="0 0 375 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[calc(100%+8px)] h-11 text-white fill-white block"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,0 C120,40 255,40 375,0 L375,44 L0,44 Z" fill="#ffffff" />
                  </svg>
                </div>
              </div>

              {/* Menu Scrollable Body */}
              <div className="flex-1 overflow-y-auto px-5 pt-2 pb-4 space-y-4 bg-white relative z-10">
                {/* General Group */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-dark/40 font-semibold px-3 mb-1.5 font-sans">
                    {language === "fr"
                      ? "Général"
                      : language === "ar"
                        ? "الرئيسية"
                        : "General"}
                  </div>
                  <div className="space-y-1">
                    {mainNavLinks.map((link) => {
                      const isActive = pathname === link.href;
                      const Icon = link.icon;
                      return (
                        <button
                          key={link.href}
                          onClick={() => handleNavigate(link.href)}
                          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "bg-dark/[0.06] border border-dark/15 text-dark font-semibold shadow-xs"
                              : "text-dark/80 hover:text-dark hover:bg-dark/[0.03] active:bg-dark/[0.05]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              size={18}
                              className={
                                isActive ? "text-primary stroke-[2.2]" : "text-dark/60 stroke-[1.8]"
                              }
                            />
                            <span className="font-sans text-[13.5px]">
                              {link.label}
                            </span>
                          </div>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Divider */}
                <hr className="border-t border-dark/10" />

                {/* Profile / Information Group */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-dark/40 font-semibold px-3 mb-1.5 font-sans">
                    {language === "fr"
                      ? "Informations"
                      : language === "ar"
                        ? "معلومات"
                        : "Information"}
                  </div>
                  <div className="space-y-1">
                    {infoNavLinks.map((link) => {
                      const isActive = pathname === link.href;
                      const Icon = link.icon;
                      return (
                        <button
                          key={link.href}
                          onClick={() => handleNavigate(link.href)}
                          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "bg-dark/[0.06] border border-dark/15 text-dark font-semibold shadow-xs"
                              : "text-dark/80 hover:text-dark hover:bg-dark/[0.03] active:bg-dark/[0.05]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              size={18}
                              className={
                                isActive ? "text-primary stroke-[2.2]" : "text-dark/60 stroke-[1.8]"
                              }
                            />
                            <span className="font-sans text-[13.5px]">
                              {link.label}
                            </span>
                          </div>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Language Switcher Row */}
                <div className="pt-2">
                  <div className="flex items-center justify-between px-3 py-2 bg-cream/40 rounded-2xl border border-dark/5">
                    <span className="text-xs text-dark/60 font-medium uppercase tracking-wider">
                      {t("language")}
                    </span>
                    <div className="flex items-center gap-1 bg-white/80 p-0.5 rounded-xl border border-dark/10">
                      {(["en", "fr", "ar"] as const).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                            language === lang
                              ? "bg-primary text-dark shadow-xs"
                              : "text-dark/60 hover:text-dark"
                          }`}
                        >
                          {lang.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer Pills */}
              <div className="p-4 bg-cream/20 border-t border-dark/8 flex items-center gap-2.5 shrink-0">
                {/* Primary Action Button */}
                <button
                  onClick={() => handleNavigate("/menu")}
                  className="flex-1 py-2.5 px-3.5 bg-primary text-dark font-medium text-xs rounded-full flex items-center justify-center gap-1.5 shadow-sm hover:brightness-105 active:scale-98 transition-all cursor-pointer"
                >
                  <span>{language === "ar" ? "قائمتنا 🥐" : "Notre Carte 🥐"}</span>
                  <Sparkle size={13} className="fill-current text-dark" />
                </button>

                {/* Secondary Action Button */}
                <a
                  href="https://maps.app.goo.gl/Z5memQUhJrBtShyx7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3.5 bg-dark text-cream text-xs rounded-full flex items-center justify-center gap-1.5 hover:bg-dark-hover active:scale-98 transition-all font-sans cursor-pointer text-center"
                >
                  <Compass size={13} />
                  <span>{language === "ar" ? "موقعنا" : "Visiter"}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
