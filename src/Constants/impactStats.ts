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
    title: 'Enfants aidés',
    value: 1500,
    curentValue: '+',
    description: 'Nombre d&apos;enfants ayant bénéficié de notre soutien depuis notre création.',
    bgColor: 'bg-success-50',
  },
  {
    id: 2,
    title: 'Bénévoles actifs',
    value: 30,
    curentValue: '+',
    description: 'Nombre de bénévoles engagés dans nos programmes et activités.',
    bgColor: 'bg-primary-50',
  },
  {
    id: 3,
    title: 'Projets réalisés',
    value: 20,
    curentValue: '+',
    description: 'Nombre de projets mis en place pour améliorer la vie des enfants et des familles.',
    bgColor: 'bg-accent-50',
  },
];