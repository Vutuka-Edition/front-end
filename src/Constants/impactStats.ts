interface ImpactStat {
  id: number;
  title: string;
  value: number;
  curentValue?: string;
  description: string;
  bgColor: string;
}

export const impactStats: ImpactStat[] = [
  {
    id: 1,
    title: 'Livres publiés',
    value: 120,
    curentValue: '+',
    description: 'Nombre total de livres publiés par Vutuka Edition depuis notre lancement.',
    bgColor: 'bg-success-50',
  },
  {
    id: 2,
    title: 'Auteurs partenaires',
    value: 45,
    curentValue: '+',
    description: 'Auteurs ayant collaboré avec nous pour éditer et distribuer leurs ouvrages.',
    bgColor: 'bg-primary-50',
  },
  {
    id: 3,
    title: 'Lecteurs fidèles',
    value: 5000,
    curentValue: '+',
    description: 'Membres de notre communauté de lecteurs à travers le monde.',
    bgColor: 'bg-accent-50',
  },
];
