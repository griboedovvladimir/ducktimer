export interface IStoreInterface {
  addTimer: () => {};
  authorization: {};
  history: {};
  location: [];
  match: {};
  presetTime: {};
  removeAllTimers: () => {};
  removeTimer: () => {};
  setTime: () => {};
  switchTheme: () => {};
  authorize: ({}) => {};
  currentTheme: { theme: string };
  timer: { timers: [] };
}
