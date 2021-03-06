/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { mount } from 'enzyme';
import SideNavLinkText from '../SideNavLinkText';

describe('SideNavLinkText', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {
      className: 'custom-classname',
      children: 'text',
    };
  });

  it('should render', () => {
    const wrapper = mount(<SideNavLinkText {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
