export abstract class AbstractLevelComponent {

  abstract levelCompleted(): boolean;

  abstract saveAndRedirect(route: string);

  public copyAndDeleteItem(item: any, unsorted: Array<any>, sorted: Array<any>) {
    sorted.push(item);
    unsorted.splice(unsorted.indexOf(item), 1);
  }
}
