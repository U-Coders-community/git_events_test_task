export interface Event {
  actor: {
    id: number;
    avatar_url: string;
    display_login?: string;
    gravatar_id: string;
    login: string;
    url: string;
  };
  org?: {
    avatar_url: string;
    gravatar_id?: string;
    id: number;
    login: string;
    url: string;
  };
  id: string;
  created_at: string;
  payload: {
    description: null | string;
    ref: string;
    master_branch: string;
    pusher_type: string;
    ref_type: string;
  };
  public: boolean;
  repo: {
    id: number;
    name: string;
    url: string;
  };
  type: string;
}
