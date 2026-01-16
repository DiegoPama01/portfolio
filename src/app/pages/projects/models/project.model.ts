export type ProjectCategory = 'web-apps' | 'mobile' | 'open-source' | 'ui-ux';

export type ProjectActionType = 'live' | 'repo' | 'docs' | 'store' | 'case';

export interface ProjectTech {
  icon: string; 
  title: string;
}

export interface ProjectAction {
  type: ProjectActionType;
  label: string;
  icon: string; 
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;

  category: ProjectCategory;
  categoryLabel: string;

  coverImageUrl: string;
  coverAlt: string;

  tech: ProjectTech[];

  primaryAction: ProjectAction;
  secondaryAction: ProjectAction; 
}
