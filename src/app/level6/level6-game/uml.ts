import { AttributeForUml } from './attribute-for-uml';

export class Uml {
  type: string;
  name: string;
  attributes: Array<AttributeForUml>;

  public static initUml(): Array<Uml> {
    return [
      {
        type: 'Instanz',
        name: 'rechteck1: Rechteck',
        attributes: [
          {
            name: 'länge',
            value: 5
          },
          {
            name: 'breite',
            value: 7
          }
        ]
      },
      {
        type: 'Klasse',
        name: 'Rechteck',
        attributes: [
          {
            name: 'Länge',
            value: 'int'
          },
          {
            name: 'Breite',
            value: 'int'
          }
        ]
      },
      {
        type: 'Instanz',
        name: 'Mustermann: Kunde',
        attributes: [
          {
            name: 'vorname',
            value: 'Max'
          },
          {
            name: 'nachname',
            value: 'Mustermann'
          },
          {
            name: 'kundennummer',
            value: '007'
          },
          {
            name: 'TelefonNr',
            value: '0123/456789'
          },
          {
            name: 'bestellung',
            value: 'Auftrag 1'
          }
        ]
      },
      {
        type: 'Klasse',
        name: 'Kunde',
        attributes: [
          {
            name: 'vorname',
            value: 'String'
          },
          {
            name: 'nachname',
            value: 'String'
          },
          {
            name: 'kundennummer',
            value: 'int'
          },
          {
            name: 'TelefonNr',
            value: 'String'
          },
          {
            name: 'bestellung',
            value: 'String'
          }
        ]
      },
      {
        type: 'Instanz',
        name: 'Auftrag1: Auftrag',
        attributes: [
          {
            name: 'nummer',
            value: '1'
          },
          {
            name: 'art',
            value: 'Urlaubspaket 1'
          },
          {
            name: 'datum',
            value: '14.06.2019'
          }
        ]
      },
      {
        type: 'Klasse',
        name: 'Auftrag',
        attributes: [
          {
            name: 'nummer',
            value: 'int'
          },
          {
            name: 'art',
            value: 'String'
          },
          {
            name: 'datum',
            value: 'Datum'
          }
        ]
      },
      {
        type: 'Instanz',
        name: 'Müller: Student',
        attributes: [
          {
            name: 'name',
            value: 'Müller'
          },
          {
            name: 'vorname',
            value: 'Miriam'
          },
          {
            name: 'matrikelNummer',
            value: '123456789'
          }
        ]
      },
      {
        type: 'Klasse',
        name: 'Student',
        attributes: [
          {
            name: 'name',
            value: 'String'
          },
          {
            name: 'vorname',
            value: 'String'
          },
          {
            name: 'matrikelNummer',
            value: 'int'
          }
        ]
      },
      {
        type: 'Instanz',
        name: 'Eragon: Buch',
        attributes: [
          {
            name: 'titel',
            value: 'Eragon'
          },
          {
            name: 'autor',
            value: 'Christopher Paolini'
          },
          {
            name: 'erscheinungsjahr',
            value: '2004'
          },
          {
            name: 'genre',
            value: 'Fantasy'
          }
        ]
      },
      {
        type: 'Klasse',
        name: 'Buch',
        attributes: [
          {
            name: 'titel',
            value: 'String'
          },
          {
            name: 'autor',
            value: 'String'
          },
          {
            name: 'erscheinungsjahr',
            value: 'int'
          },
          {
            name: 'genre',
            value: 'String'
          }
        ]
      },
      {
        type: 'Instanz',
        name: 'Luna: Hund',
        attributes: [
          {
            name: 'name',
            value: 'Luna'
          },
          {
            name: 'gewicht',
            value: '30'
          },
          {
            name: 'geschlecht',
            value: 'weiblich'
          },
          {
            name: 'rasse',
            value: 'Golden Retriever'
          }
        ]
      },
      {
        type: 'Klasse',
        name: 'Hund',
        attributes: [
          {
            name: 'name',
            value: 'String'
          },
          {
            name: 'gewicht',
            value: 'int'
          },
          {
            name: 'geschlecht',
            value: 'String'
          },
          {
            name: 'rasse',
            value: 'String'
          }
        ]
      }
    ];
  }
}
