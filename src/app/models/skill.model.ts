export interface Skill {
  // charID: number;
  // treeName: string;

  // uid: number;
  index?: number;
  name: string;
  image: string;
  description: string;
  type: 'action-skill' | 'augment' | 'skill' | 'element';

  skillCount?: number;
  skillLimit: number;
  status?: 'locked' | 'active' | 'full';
  position: number[];
  getEffect(rank: number): string;

  getDescription(rank: number): string;
}
