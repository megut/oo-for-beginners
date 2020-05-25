export class Datatype {
  value: any;
  type: string;

  static initValues(): Array<Datatype> {
    return [
      {
        value: true,
        type: 'boolean'
      },
      {
        value: false,
        type: 'boolean'
      },
      {
        value: 5000,
        type: 'int'
      },
      {
        value: 42,
        type: 'int'
      },
      {
        value: 99999,
        type: 'int'
      },
      {
        value: 'Test',
        type: 'String'
      },
      {
        value: 'Hallo Welt!',
        type: 'String'
      },
      {
        value: 4.3,
        type: 'double'
      },
      {
        value: 53678.54879,
        type: 'double'
      }
    ];
  }
}
