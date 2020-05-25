import { LevelTopic } from './level-topic';

export class Level {
  name: string;
  topics: Array<LevelTopic>;

  public static initLevels(): Array<Level> {
    return [{
      name: 'Datentypen', topics: [{
        name: 'Datentypen',
        description: 'int, String, boolean, double',
        link: '../../assets/img/level1.PNG',
        url: '/level1/introduction',
        level: 1
      }]
    },
      {
        name: 'Arrays', topics: [{
          name: 'Arrays',
          description: 'Was sind Arrays?',
          link: '../../assets/img/level2.PNG',
          url: '/level2/introduction',
          level: 2
        }],
      },
      {
        name: 'Kontrollstrukturen',
        topics: [
          {
            name: 'Schleifen',
            description: 'Verwendung von Schleifen lernen',
            link: '../../assets/img/level3.PNG',
            url: '/level3/introduction',
            level: 3
          },
          {
            name: 'Bedingungen',
            description: 'Verwendung von Bedingungen lernern',
            link: '../../assets/img/level4.PNG',
            url: '/level4/introduction',
            level: 4
          }],
      },
      {
        name: 'Klassen & Objekte',
        topics: [
          {
            name: 'Attribute',
            description: 'Bedeutung von Attributen',
            link: '../../assets/img/level5.PNG',
            url: '/level5/introduction',
            level: 5
          },
          {
            name: 'Instanzen',
            description: 'Erzeugung von Objekten',
            link: '../../assets/img/level6.PNG',
            url: '/level6/introduction',
            level: 6
          },
          {
            name: 'Methoden',
            description: 'Berechnungen in der Klasse',
            link: '../../assets/img/level7.PNG',
            url: '/level7/introduction',
            level: 7
          }
        ],
      }
    ];
  }

}
