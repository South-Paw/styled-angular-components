import { Component, Input, OnInit } from '@angular/core';
import { css } from 'emotion';

import { StyleManager } from '../../styled/StyleManager';
import { ThemeService } from '../../theme/theme.service';
import { Theme } from '../../theme';

type ButtonAppearance = 'primary' | 'secondary';

interface ButtonProps {
  appearance: ButtonAppearance;
  isDisabled: boolean;
}

// Emotion CSS styles for the component.
// Note - the `props` is all correctly typed for both the component props and the `theme`.
const styles = (props: ButtonProps & { theme: Theme }): string => css`
  padding: 0.5rem 1rem;
  background-color: ${props.theme.colors[props.appearance]};
  border: none;
  border-radius: 0.25rem;
  color: ${props.theme.colors.white};
  font-size: ${props.theme.fontSizes.base}px;
  opacity: ${props.isDisabled ? '0.38' : '1'};
`;

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  // `props` privately stores the state of each input for the component.
  private props: ButtonProps = {
    appearance: 'primary',
    isDisabled: false,
  };

  // StyleManager manages the combining of the `props` and `theme` and then calls the `styles` function.
  public component: StyleManager;

  constructor(themeService: ThemeService) {
    this.component = new StyleManager(themeService.theme$, styles);
  }

  ngOnInit(): void {
    // Pushes default `props` to the StyleManager class.
    // Note - we tried to do this internally in the constrcutor of the `StyleManager` but had odd results.
    // Would be able to remove this ngOnInit if that could be resolved.
    this.component.props$.next(this.props);
  }

  @Input()
  public set appearance(appearance: ButtonAppearance) {
    this.props.appearance = appearance;
    this.component.props$.next({ appearance });
  }

  @Input()
  public set isDisabled(isDisabled: boolean) {
    this.props.isDisabled = isDisabled;
    this.component.props$.next({ isDisabled });
  }

  // Note - you don't nessecarily need a `get` on every input as only those that are going to be used in the template need them.
  public get isDisabled(): boolean {
    return this.props.isDisabled;
  }
}
