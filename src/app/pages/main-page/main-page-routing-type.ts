import { IconHome2 } from 'angular-tabler-icons/icons';

export enum MainPageRoutingTypeEnum {
  ISSUE,
  CALENDAR,
  ISSUE_HISTORY,
  MEMO,
}

export class MainPageRoutingType {
  private static readonly _instances: Array<MainPageRoutingType> = [];

  static get instances() {
    return this._instances;
  }

  static readonly ISSUE = new MainPageRoutingType(
    MainPageRoutingTypeEnum.ISSUE,
    'issue',
    'main/issue',
    IconHome2,
    'Issue'
  );
  static readonly CALENDAR = new MainPageRoutingType(
    MainPageRoutingTypeEnum.CALENDAR,
    'calendar',
    'main/calendar',
    IconHome2,
    'Calendar'
  );
  static readonly ISSUE_HISTORY = new MainPageRoutingType(
    MainPageRoutingTypeEnum.ISSUE,
    'issue-history',
    'main/issue-history',
    IconHome2,
    'Issue History'
  );
  static readonly MEMO = new MainPageRoutingType(
    MainPageRoutingTypeEnum.MEMO,
    'memo',
    'main/memo',
    IconHome2,
    'Memo'
  );

  get id() {
    return this._id;
  }

  get relativePath() {
    return this._relativePath;
  }

  get absolutePath() {
    return this._absolutePath;
  }

  get image() {
    return this._image;
  }

  get name() {
    return this._name;
  }

  static getInstanceOf(key: number): MainPageRoutingType | undefined {
    return this._instances.find((instance) => instance._id === key);
  }

  static getInstanceOfAbsolutePath = (
    path: string
  ): MainPageRoutingType | undefined => {
    return this._instances.find((instance) => instance._absolutePath === path);
  };

  static getInstanceOfRelativePath = (
    path: string
  ): MainPageRoutingType | undefined => {
    return this._instances.find((instance) => instance._relativePath === path);
  };

  constructor(
    private _id: number,
    private _relativePath: string,
    private _absolutePath: string,
    private _image: string,
    private _name: string
  ) {
    MainPageRoutingType.instances.push(this);
  }
}
