export class Attribute {
  name: string;
  type: Array<string>;
  assigned: boolean;

  public static initAttributes(): Array<Attribute> {
    return [
      {
        name: 'anzahlSchlafzimmer',
        type: ['int'],
        assigned: false
      },
      {
        name: 'anzahlBadezimmer',
        type: ['int'],
        assigned: false
      },
      {
        name: 'farbe',
        type: ['String'],
        assigned: false
      },
      {
        name: 'wohnfläche (in qm)',
        type: ['double', 'int'],
        assigned: false
      },
      {
        name: 'wert (in €)',
        type: ['double', 'int'],
        assigned: false
      },
      {
        name: 'istBewohnt',
        type: ['boolean'],
        assigned: false
      },
      {
        name: 'istKellerVorhanden',
        type: ['boolean'],
        assigned: false
      },
      {
        name: 'anzahlEingangstüren',
        type: ['int'],
        assigned: false
      },
      {
        name: 'namenDerBewohner',
        type: ['Array mit Strings'],
        assigned: false
      }
    ];
  }
}
