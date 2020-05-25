export class Struct {
  text: string;
  type: string;
  order: number;

  public static initStructs(): Array<Struct> {
    return [
      {
        text: 'Starte bei Position 0',
        type: 'command',
        order: 0
      },
      {
        text: 'Gesamtpreis ist zu Beginn 0€ ',
        type: 'command',
        order: 1
      },
      {
        text: 'Solange Ende des Arrays noch nicht erreicht',
        type: 'loop',
        order: 2
      },
      {
        text: 'Preis der aktuellen Stelle des Arrays zum Gesamtpreis rechnen',
        type: 'command',
        order: 3
      },
      {
        text: ' Eine Stelle im Array weiter gehen',
        type: 'command',
        order: 4
      }
    ];
  }

  public static initStructsLevel4(): Array<Struct> {
    return [
      {
        text: 'Termine durchgehen',
        type: 'command',
        order: 0
      },
      {
        text: 'Gibt es einen freien Termin?',
        type: 'condition',
        order: 1
      },
      {
        text: 'Ja',
        type: 'condition-true',
        order: 2
      },
      {
        text: 'Nein',
        type: 'condition-false',
        order: 3
      },
      {
        text: 'Termin eintragen',
        type: 'condition-true',
        order: 4
      },
      {
        text: 'Termin verschieben',
        type: 'condition-false',
        order: 5
      }
    ];
  }

  public static initStructsLevel7(): Array<Struct> {
    return [
      {
        text: 'berechneDurchschnittlicheFahrzeit',
        type: 'method',
        order: 0
      },
      {
        text: 'beginne bei position 0',
        type: 'command',
        order: 1
      },
      {
        text: 'durchschnittlichenFahrzeit ist erstmal 0',
        type: 'command',
        order: 2
      },
      {
        text: 'solange es noch Fahrzeiten im Array gibt',
        type: 'loop',
        order: 3
      },
      {
        text: 'aktuelle Position zur durchschnittlichenFahrzeit rechnen',
        type: 'command',
        order: 4
      },
      {
        text: 'zur nächsten Stelle im Array gehen',
        type: 'command',
        order: 5
      },
      {
        text: 'durchschnittlicheFahrzeit durch Länge des Arrays teilen',
        type: 'command',
        order: 6
      },
      {
        text: 'ist durchschnittlicheFahrzeit größer oder gleich 2.0?',
        type: 'condition',
        order: 7
      },
      {
        text: 'Ja',
        type: 'condition-true',
        order: 8
      },
      {
        text: 'Nein',
        type: 'condition-false',
        order: 9
      },
      {
        text: 'bonus=true',
        type: 'condition-true',
        order: 10
      },
      {
        text: 'bonus=false',
        type: 'condition-false',
        order: 11
      },
    ];
  }
}
