import { render } from '@testing-library/react';

import UiComps from './ui-comps';

describe('UiComps', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiComps />);
    expect(baseElement).toBeTruthy();
  });
});
