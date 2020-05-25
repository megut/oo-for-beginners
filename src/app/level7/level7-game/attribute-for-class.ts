export class AttributeForClass {

  name: string;
  type: string;
  value: string;

  public static initAttributes(): Array<AttributeForClass> {
    return [
      {
        name: 'vorname',
        type: 'String',
        value: 'Max'
      },
      {
        name: 'nachname',
        type: 'String',
        value: 'Müller'
      },
      {
        name: 'position',
        type: 'String',
        value: 'Software Engineer'
      },
      {
        name: 'fahrzeitenProWoche',
        type: 'Array von double',
        value: '[3.0, 2.0, 1.5, 2.0, 1.0]'
      },
      {
        name: 'bonus',
        type: 'boolean',
        value: 'false'
      },
    ];
  }

}
