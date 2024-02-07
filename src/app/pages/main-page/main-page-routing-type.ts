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
    '1',
    'Issue'
  );
  static readonly CALENDAR = new MainPageRoutingType(
    MainPageRoutingTypeEnum.CALENDAR,
    'calendar',
    'main/calendar',
    '2',
    'Calendar'
  );
  static readonly ISSUE_HISTORY = new MainPageRoutingType(
    MainPageRoutingTypeEnum.ISSUE,
    'issue-history',
    'main/issue-history',
    '3',
    'Issue History'
  );
  static readonly MEMO = new MainPageRoutingType(
    MainPageRoutingTypeEnum.MEMO,
    'memo',
    'main/memo',
    '4',
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

  get imageUrl() {
    return this._imageUrl;
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
    private _imageUrl: string,
    private _name: string
  ) {
    MainPageRoutingType.instances.push(this);
  }
}
