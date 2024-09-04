import { Database } from "@/utils/supabase/supabase";

export type Achievements = Database["public"]["Tables"]["achievements"]["Row"];
export type AlphabetCodes =
  Database["public"]["Tables"]["alphabet_codes"]["Row"];
export type Degrees = Database["public"]["Tables"]["degrees"]["Row"];
export type Divisions = Database["public"]["Tables"]["divisions"]["Row"];
export type Faculties = Database["public"]["Tables"]["faculties"]["Row"];
export type FrequentlyAskedQuestions =
  Database["public"]["Tables"]["frequently_asked_questions"]["Row"];
export type HeroImages = Database["public"]["Tables"]["hero_images"]["Row"];
export type InternApplications =
  Database["public"]["Tables"]["intern_applications"]["Row"];
export type Majors = Database["public"]["Tables"]["majors"]["Row"];
export type Members = Database["public"]["Tables"]["members"]["Row"];
export type Options = Database["public"]["Tables"]["options"]["Row"];
export type Profiles = Database["public"]["Tables"]["profiles"]["Row"];
export type Roles = Database["public"]["Tables"]["roles"]["Row"];
export type Sponsors = Database["public"]["Tables"]["sponsors"]["Row"];
export type Teams = Database["public"]["Tables"]["teams"]["Row"];
export type Titles = Database["public"]["Tables"]["titles"]["Row"];
export type Users = Database["public"]["Tables"]["users"]["Row"];
export type Years = Database["public"]["Tables"]["years"]["Row"];
