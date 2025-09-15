// Database types for Guidewell App
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: 'user' | 'admin' | 'designer'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'user' | 'admin' | 'designer'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'user' | 'admin' | 'designer'
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string | null
          status: 'draft' | 'in_progress' | 'completed' | 'archived'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description?: string | null
          status?: 'draft' | 'in_progress' | 'completed' | 'archived'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string | null
          status?: 'draft' | 'in_progress' | 'completed' | 'archived'
          created_at?: string
          updated_at?: string
        }
      }
      design_steps: {
        Row: {
          id: string
          project_id: string
          step_number: number
          title: string
          description: string | null
          content: any | null // JSONB
          completed: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_id: string
          step_number: number
          title: string
          description?: string | null
          content?: any | null
          completed?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          step_number?: number
          title?: string
          description?: string | null
          content?: any | null
          completed?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      resources: {
        Row: {
          id: string
          title: string
          description: string | null
          type: 'template' | 'example' | 'guide' | 'tool'
          category: string | null
          content: any | null // JSONB
          file_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          type: 'template' | 'example' | 'guide' | 'tool'
          category?: string | null
          content?: any | null
          file_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          type?: 'template' | 'example' | 'guide' | 'tool'
          category?: string | null
          content?: any | null
          file_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          project_id: string
          step_id: string
          completed_at: string
          notes: string | null
        }
        Insert: {
          id?: string
          user_id: string
          project_id: string
          step_id: string
          completed_at?: string
          notes?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          project_id?: string
          step_id?: string
          completed_at?: string
          notes?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
