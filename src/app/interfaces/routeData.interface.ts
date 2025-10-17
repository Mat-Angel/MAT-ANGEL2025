interface MenuItem {
  type: 'menuRoute' | 'menuUrl' | 'menuTrigger';
  id: string;
  name:string;
  link: string;
  child?: ChildMenuItem[];
  icon?: string;
}

interface ChildMenuItem {
  type: 'menuRoute' | 'menuUrl' | 'menuTrigger';
  id: string;
  name:string;
  subtitle?:string|null;
  link: string;
  icon?: string;
}
