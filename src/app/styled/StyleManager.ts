import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, scan } from 'rxjs/operators';

import { Theme } from '../theme';

export class StyleManager {
  // Used in template to apply the correct css class to DOM.
  public classes$: Observable<string>;

  // Observable of component properties.
  // The caveat is that all @Input() set methods must call `.next({ [inputKey]: inputValue })` on this to update styles correctly.
  public props$: BehaviorSubject<object> = new BehaviorSubject({});

  constructor(theme$: BehaviorSubject<Theme>, styles: (props: object) => string) {
    this.bind(theme$, styles);
  }

  /** Binds the `theme` and `props$` to a new object that's passed as `props` to the `styles` function. */
  private bind(theme$: BehaviorSubject<Theme>, styles: (props: object) => string) {
    this.classes$ = combineLatest(this.props$.pipe(scan((prev, next) => ({ ...prev, ...next }))), theme$)
      .pipe(map(result => ({ theme: result[1], ...result[0] })))
      .pipe(map(styles));
  }
}
