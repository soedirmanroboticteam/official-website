export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      achievements: {
        Row: {
          description: string;
          icon_url: string;
          id: number;
          subtitle: string;
          title: string;
        };
        Insert: {
          description: string;
          icon_url: string;
          id?: number;
          subtitle: string;
          title: string;
        };
        Update: {
          description?: string;
          icon_url?: string;
          id?: number;
          subtitle?: string;
          title?: string;
        };
        Relationships: [];
      };
      alphabet_codes: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      degrees: {
        Row: {
          code: number;
          id: number;
          name: string;
        };
        Insert: {
          code: number;
          id?: number;
          name: string;
        };
        Update: {
          code?: number;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      divisions: {
        Row: {
          description: string;
          id: number;
          logo_url: string | null;
          name: string;
          team_id: number;
        };
        Insert: {
          description: string;
          id?: number;
          logo_url?: string | null;
          name: string;
          team_id: number;
        };
        Update: {
          description?: string;
          id?: number;
          logo_url?: string | null;
          name?: string;
          team_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "divisions_team_id_fkey";
            columns: ["team_id"];
            isOneToOne: false;
            referencedRelation: "teams";
            referencedColumns: ["id"];
          }
        ];
      };
      dynamics: {
        Row: {
          content: string;
          created_at: string;
          id: number;
          slug: string;
        };
        Insert: {
          content: string;
          created_at?: string;
          id?: number;
          slug: string;
        };
        Update: {
          content?: string;
          created_at?: string;
          id?: number;
          slug?: string;
        };
        Relationships: [];
      };
      events: {
        Row: {
          accepted_url: string;
          announcement: string;
          coming_soon: string;
          end: string;
          extend_end: string;
          extend_start: string;
          id: number;
          name: string;
          screening_url: string;
          start: string;
          warning: string;
        };
        Insert: {
          accepted_url: string;
          announcement: string;
          coming_soon: string;
          end: string;
          extend_end: string;
          extend_start: string;
          id?: number;
          name: string;
          screening_url: string;
          start: string;
          warning?: string;
        };
        Update: {
          accepted_url?: string;
          announcement?: string;
          coming_soon?: string;
          end?: string;
          extend_end?: string;
          extend_start?: string;
          id?: number;
          name?: string;
          screening_url?: string;
          start?: string;
          warning?: string;
        };
        Relationships: [];
      };
      faculties: {
        Row: {
          alphabet_code_id: number | null;
          id: number;
          name: string;
        };
        Insert: {
          alphabet_code_id?: number | null;
          id?: number;
          name: string;
        };
        Update: {
          alphabet_code_id?: number | null;
          id?: number;
          name?: string;
        };
        Relationships: [
          {
            foreignKeyName: "faculties_alphabet_code_id_fkey";
            columns: ["alphabet_code_id"];
            isOneToOne: true;
            referencedRelation: "alphabet_codes";
            referencedColumns: ["id"];
          }
        ];
      };
      frequently_asked_questions: {
        Row: {
          answer: string;
          id: number;
          question: string;
        };
        Insert: {
          answer: string;
          id?: number;
          question: string;
        };
        Update: {
          answer?: string;
          id?: number;
          question?: string;
        };
        Relationships: [];
      };
      hero_images: {
        Row: {
          id: number;
          image_url: string;
          name: string;
        };
        Insert: {
          id?: number;
          image_url: string;
          name: string;
        };
        Update: {
          id?: number;
          image_url?: string;
          name?: string;
        };
        Relationships: [];
      };
      intern_applications: {
        Row: {
          created_at: string;
          cv_url: string;
          first_choice: number;
          first_reason: string;
          hope: string;
          id: string;
          second_choice: number;
          second_reason: string;
          twibbon_url: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          cv_url: string;
          first_choice: number;
          first_reason: string;
          hope: string;
          id: string;
          second_choice: number;
          second_reason: string;
          twibbon_url: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          cv_url?: string;
          first_choice?: number;
          first_reason?: string;
          hope?: string;
          id?: string;
          second_choice?: number;
          second_reason?: string;
          twibbon_url?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "biodatas_first_choice_fkey";
            columns: ["first_choice"];
            isOneToOne: false;
            referencedRelation: "options";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "biodatas_second_choice_fkey";
            columns: ["second_choice"];
            isOneToOne: false;
            referencedRelation: "options";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "intern_applications_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      interns: {
        Row: {
          id: string;
          position_id: number;
        };
        Insert: {
          id: string;
          position_id: number;
        };
        Update: {
          id?: string;
          position_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "interns_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "interns_id_fkey1";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "intern_applications";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "interns_id_fkey2";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "interns_position_id_fkey";
            columns: ["position_id"];
            isOneToOne: false;
            referencedRelation: "positions";
            referencedColumns: ["id"];
          }
        ];
      };
      majors: {
        Row: {
          alphabet_code_id: number;
          degree_id: number;
          faculty_id: number;
          id: number;
          name: string;
        };
        Insert: {
          alphabet_code_id: number;
          degree_id: number;
          faculty_id: number;
          id?: number;
          name: string;
        };
        Update: {
          alphabet_code_id?: number;
          degree_id?: number;
          faculty_id?: number;
          id?: number;
          name?: string;
        };
        Relationships: [
          {
            foreignKeyName: "majors_alphabet_code_id_fkey";
            columns: ["alphabet_code_id"];
            isOneToOne: false;
            referencedRelation: "alphabet_codes";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "majors_degree_id_fkey";
            columns: ["degree_id"];
            isOneToOne: false;
            referencedRelation: "degrees";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "majors_faculty_id_fkey";
            columns: ["faculty_id"];
            isOneToOne: false;
            referencedRelation: "faculties";
            referencedColumns: ["id"];
          }
        ];
      };
      members: {
        Row: {
          id: number;
          image_url: string;
          name: string;
          position_id: number;
        };
        Insert: {
          id?: number;
          image_url: string;
          name: string;
          position_id: number;
        };
        Update: {
          id?: number;
          image_url?: string;
          name?: string;
          position_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "members_position_id_fkey";
            columns: ["position_id"];
            isOneToOne: false;
            referencedRelation: "positions";
            referencedColumns: ["id"];
          }
        ];
      };
      options: {
        Row: {
          available: boolean;
          id: number;
          name: string;
        };
        Insert: {
          available?: boolean;
          id?: number;
          name: string;
        };
        Update: {
          available?: boolean;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      positions: {
        Row: {
          available: boolean;
          division_id: number;
          id: number;
          title_id: number;
        };
        Insert: {
          available?: boolean;
          division_id: number;
          id?: number;
          title_id: number;
        };
        Update: {
          available?: boolean;
          division_id?: number;
          id?: number;
          title_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "positions_division_id_fkey";
            columns: ["division_id"];
            isOneToOne: false;
            referencedRelation: "divisions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "positions_title_id_fkey";
            columns: ["title_id"];
            isOneToOne: false;
            referencedRelation: "titles";
            referencedColumns: ["id"];
          }
        ];
      };
      profiles: {
        Row: {
          avatar: string | null;
          email: string | null;
          id: string;
          major_id: number | null;
          name: string | null;
          student_code_id: number | null;
          whatsapp: string | null;
          year_id: number | null;
        };
        Insert: {
          avatar?: string | null;
          email?: string | null;
          id?: string;
          major_id?: number | null;
          name?: string | null;
          student_code_id?: number | null;
          whatsapp?: string | null;
          year_id?: number | null;
        };
        Update: {
          avatar?: string | null;
          email?: string | null;
          id?: string;
          major_id?: number | null;
          name?: string | null;
          student_code_id?: number | null;
          whatsapp?: string | null;
          year_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "profile_major_id_fkey";
            columns: ["major_id"];
            isOneToOne: false;
            referencedRelation: "majors";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "profiles_id_fkey2";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "profiles_year_id_fkey";
            columns: ["year_id"];
            isOneToOne: false;
            referencedRelation: "years";
            referencedColumns: ["id"];
          }
        ];
      };
      roles: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      sponsors: {
        Row: {
          description: string;
          id: number;
          image_url: string;
          title: string;
        };
        Insert: {
          description: string;
          id?: number;
          image_url: string;
          title: string;
        };
        Update: {
          description?: string;
          id?: number;
          image_url?: string;
          title?: string;
        };
        Relationships: [];
      };
      teams: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      titles: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      users: {
        Row: {
          id: string;
          role_id: number;
        };
        Insert: {
          id: string;
          role_id?: number;
        };
        Update: {
          id?: string;
          role_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "users_role_id_fkey";
            columns: ["role_id"];
            isOneToOne: false;
            referencedRelation: "roles";
            referencedColumns: ["id"];
          }
        ];
      };
      years: {
        Row: {
          id: number;
          name: number;
        };
        Insert: {
          id?: number;
          name: number;
        };
        Update: {
          id?: number;
          name?: number;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_applicants_count: {
        Args: Record<PropertyKey, never>;
        Returns: number;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
